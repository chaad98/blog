// Defines the shape of the JWT payload sent to the client.
// The "sub" field typically represents the "subject" of the token, which is usually the user's unique identifier (ID).
// In this case, it holds the user ID to associate the token with a specific user.
export type AuthJwtPayload = {
  sub: number; // "sub" stands for "subject" and is a common claim used in JWTs to represent the user ID.
};
