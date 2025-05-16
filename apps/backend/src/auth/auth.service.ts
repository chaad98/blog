import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInInput } from './dto/signin.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import { User } from '@prisma/client';

// Marks this class as a provider that can be injected into other classes (e.g., resolvers, controllers).
// AuthService handles the authentication logic such as signing in users and generating tokens.
@Injectable()
export class AuthService {
  // Injects PrismaService for database access and JwtService for handling JWT token operations.
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateLocalUser({ email, password }: SignInInput): Promise<User> {
    // if you use the findUnique function, then you need to provide
    // only the fields that are unique
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    // If user doesn't exist, throw an exception
    if (!user) {
      throw new UnauthorizedException('User not found!');
    }

    // Verify if the password is correct using argon2 (hashed password verification)
    const passwordMatched = await verify(user.password!, password);

    // If password returns undefined or error, it will throw an exception
    if (!passwordMatched) {
      throw new UnauthorizedException('Invalid credentials!');
    }

    return user;
  }

  // Generate a JWT token for the user after successful authentication
  async generateToken(userId: number) {
    // The payload contains the user ID (sub is the "subject" of the token)
    const payload: AuthJwtPayload = { sub: userId };

    // Generate and sign the token using JwtService
    const accessToken = await this.jwtService.signAsync(payload);

    // Return the token
    return { accessToken };
  }

  // Login method, generates a token and returns the user data along with the token
  async login(user: User) {
    // Generate JWT token for the user
    const { accessToken } = await this.generateToken(user.id);
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      accessToken, // The JWT token will be sent to the client
    };
  }

  async validateJwtUser(userId: number): Promise<{ id: number }> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found!');
    }

    const currentUser = { id: user.id };

    return currentUser;
  }
}
