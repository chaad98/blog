import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard) // Activates JwtAuthGuard before running the findAll() method
  @Query(() => [Post], { name: 'posts' })
  findAll(@Context() context) {
    const user = context.req.user;
    console.log('This log coming from post.resolver.ts:', { user }); // Accessing the authenticated user from the request context
    return this.postService.findAll();
  }
}
