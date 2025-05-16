import { Field, InputType } from '@nestjs/graphql';

// Data Transfer Objects (DTO)
// Defines the shape of data the client sends to the server
// When using @InputType, it's important to explicitly set the return type in the @Field() decorator
@InputType()
export class SignInInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
