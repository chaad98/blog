import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable() // Marks the class as injectable so it can be used by NestJS dependency injection
export class JwtAuthGuard extends AuthGuard('jwt') {
  // Extends Passport's AuthGuard configured with 'jwt' strategy
  getRequest(context: ExecutionContext) {
    // Convert standard ExecutionContext to GraphQL context
    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req; // Return the HTTP request object from GraphQL context
  }
}

/* 

Additional notes:

What: This guard protects routes or resolvers by enforcing JWT authentication using Passport's JWT strategy.
Why: It ensures that only requests with valid JWT tokens can access protected resources, enhancing security.
How: It extends Passport's AuthGuard with the 'jwt' strategy, which validates the token. The getRequest override adapts 
     the guard to work with GraphQL by extracting the HTTP request from the GraphQL context, since GraphQL wraps requests differently than REST.

*/
