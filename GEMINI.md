# Project Overview

This is a full-stack TypeScript web application. The frontend is built with React and Vite, and the backend is an Express.js server. It uses Drizzle ORM with a PostgreSQL database. The project is configured for deployment on Railway.

**Key Technologies:**

*   **Frontend:** React, Vite, TypeScript, Tailwind CSS
*   **Backend:** Node.js, Express.js, TypeScript
*   **Database:** PostgreSQL, Drizzle ORM
*   **Deployment:** Railway

# Building and Running

## Development

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the backend server and the Vite development server for the frontend. The application will be available at http://localhost:5000.

## Building for Production

To build the application for production, use the following command:

```bash
npm run build
```

This will create a `dist` directory with the compiled server code and the bundled frontend assets.

## Running in Production

To run the application in production mode, use the following command:

```bash
npm run start
```

This will start the production server.

# Development Conventions

*   **Code Style:** The project uses Prettier for code formatting (inferred from the presence of `.prettierrc`). It's recommended to set up your editor to format on save.
*   **API:** The backend provides a RESTful API. The routes are defined in `server/routes.ts`.
*   **Database:** The database schema is defined in `shared/schema.ts` using Drizzle ORM. To apply schema changes, use `npm run db:push`.
*   **Components:** React components are organized in `client/src/components`. Reusable UI components are located in `client/src/components/ui`.
*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
