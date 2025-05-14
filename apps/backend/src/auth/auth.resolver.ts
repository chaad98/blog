import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';
import { AuthPayload } from './entities/auth-payload.entity';

// A resolver is a class that handles GraphQL queries and mutations
// It maps incoming GraphQL operations to corresponding handler methods
@Resolver()
export class AuthResolver {
  // Used to access the AuthService provider, which includes all functions defined in the service file
  constructor(private readonly authService: AuthService) {}

  // A mutation allows clients to modify data on the server (e.g., create, update, delete)
  // This mutation returns an object of type AuthPayload based on the login function return data
  @Mutation(() => AuthPayload)

  // signIn is the handler method for the mutation named "signIn"
  // The name in @Args('signInInput') must match the GraphQL variable sent by the client
  async signIn(@Args('signInInput') singInInput: SignInInput) {
    // Validate the user's credentials
    const user = await this.authService.validateLocalUser(singInInput);

    // Generate the JWT token for the user after successful authentication
    return await this.authService.login(user);
  }
}
