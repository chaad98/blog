import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field(() => [Post]) // this is how you define the type list of the post in GraphQL
  posts?: Post[]; // this is how you define the type list of the post in TypeScript

  @Field(() => [CommentEntity])
  comments: CommentEntity[];
}
