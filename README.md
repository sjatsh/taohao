# Taohao

## Overview

This project is a modern web application built with a monorepo structure, utilizing TurboRepo for task management and caching. It includes both server and client-side applications, with a focus on scalability and maintainability.

## Project Structure

- **apps/web**: Contains the frontend application, likely built with a framework like React or Next.js.
- **apps/server**: Contains the backend application, possibly using Node.js and Express.
- **packages/prisma**: Contains database schema and migration files, indicating the use of Prisma for database management.

## Prerequisites

- Node.js
- pnpm (as the package manager)
- A PostgreSQL database

## Environment Variables

The project requires several environment variables to be set. These include:

- `LOG_LEVEL`
- `XUNHU_PAY_APP_ID`, `XUNHU_PAY_APP_SECRET`, `XUNHU_PAY_API_URL`, `XUNHU_PAY_WAP_URL`, `XUNHU_PAY_WAP_NAME`
- `POSTGRES_PRISMA_URL`
- `RESEND_API_KEY`
- `BLOB_READ_WRITE_TOKEN`
- `NODE_ENV`
- `ADMIN_EMAIL`
- `API_KEY`
- `NEXT_PUBLIC_ENCRYPTION_KEY`
- `NEXT_PUBLIC_SERVER_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `CRON_SECRET`

## Installation

1. Clone the repository.
2. Install dependencies using pnpm:
```bash
pnpm install
```

## Development

To start the development server, run:

```bash
npx turbo run dev --filter @taohao/web
```

## Build

To build the project, run:

```bash
npx turbo run build --filter @taohao/web
```

## Deployment

Deployment tasks can be configured in the `turbo.json` file under the `deploy` task.

## License

This project is licensed under the terms specified in the `LICENSE` file.

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting a pull request.

## Contact

For any inquiries, please contact the project maintainer at `ADMIN_EMAIL`.

