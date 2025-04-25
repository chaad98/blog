# Fullstack Blog Project

This project is a fullstack blog application built with a modern and powerful technology stack. It is organized as a monorepo using Turborepo, with separate frontend and backend applications.

## Technology Stack

- **Frontend:** Next.js with ShadCN UI for a sleek and responsive user interface.
- **Backend:** NestJS framework providing REST API and GraphQL endpoints.
- **Database:** Prisma ORM managing SQLite for local development and PostgreSQL for production.
- **Authentication:** Google OAuth for secure user authentication and authorization.
- **Monorepo:** Managed with Turborepo for efficient builds and development.
- **Cloud:** AWS for deployment and hosting.

## Features

- User authentication and authorization via Google OAuth.
- CRUD operations for blog posts and comments.
- Support for both REST API and GraphQL API.
- Responsive UI built with ShadCN UI components.
- Database schema managed with Prisma ORM.
- Supports SQLite for local development and PostgreSQL for production.
- Efficient monorepo structure with Turborepo.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker (optional, for PostgreSQL)
- AWS account (for deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd blog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create `.env` files in `apps/frontend` and `apps/backend` with necessary variables such as:

   - `DATABASE_URL` for PostgreSQL connection
   - Google OAuth client ID and secret
   - AWS credentials

4. Run database migrations:

   ```bash
   npx prisma migrate dev --schema=apps/backend/prisma/schema.prisma
   ```

5. Seed the database (optional):

   ```bash
   npm run db:seed --workspace=apps/backend
   ```

### Running the Development Server

- Start the backend server:

  ```bash
  npm run dev --workspace=apps/backend
  ```

- Start the frontend server:

  ```bash
  npm run dev --workspace=apps/frontend
  ```

### Deployment

The project is configured to deploy on AWS. Refer to the deployment documentation for detailed instructions.

## Project Structure

- `apps/frontend`: Next.js frontend application
- `apps/backend`: NestJS backend application with Prisma ORM
- `apps/backend/prisma`: Prisma schema and migrations
- `apps/backend/src`: Backend source code
- `apps/frontend/src`: Frontend source code

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.
