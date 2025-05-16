import { Field, Int, ObjectType } from '@nestjs/graphql';

// Defines the shape of data the server sends back to the client
@ObjectType()
export class AuthPayload {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  // This field is nullable because it is marked as `String?` in the Prisma schema.
  // Use `?` in TypeScript to indicate that this field is optional.
  // `nullable: true` must be specified to allow null values.
  @Field({ nullable: true })
  avatar?: string;

  @Field()
  accessToken: string;
}
