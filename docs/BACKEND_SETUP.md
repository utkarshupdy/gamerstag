# GAMERS TAG Backend Developer Setup Guide

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Database Configuration](#database-configuration)
4. [Server Architecture](#server-architecture)
5. [API Implementation](#api-implementation)
6. [Authentication & Security](#authentication--security)
7. [File Structure](#file-structure)
8. [Development Workflow](#development-workflow)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting development, ensure you have the following installed:

### Required Software
- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **PostgreSQL** (v14.0 or higher)
- **Git** (v2.30.0 or higher)
- **VSCode** (recommended) with extensions:
  - TypeScript
  - Prettier
  - ESLint
  - Thunder Client (for API testing)

### System Requirements
- **RAM**: Minimum 8GB (16GB recommended)
- **Storage**: At least 10GB free space
- **OS**: Windows 10/11, macOS 10.15+, or Ubuntu 18.04+

---

## Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-organization/gamers-tag-platform.git
cd gamers-tag-platform
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install

# Or using yarn
yarn install
```

### 3. Environment Variables Configuration

Create a `.env` file in the root directory:

```bash
# Copy from example
cp .env.example .env
```

Configure the following environment variables:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
HOST=0.0.0.0

# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/gamers_tag_dev
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=gamers_tag_dev

# Session Configuration
SESSION_SECRET=your-super-secret-session-key-here-make-it-long-and-random

# API Keys (External Services)
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token

# Email Service (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Cloud Storage (Optional)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=gamers-tag-uploads

# Redis (Optional - for caching)
REDIS_URL=redis://localhost:6379
```

### 4. Setup Git Hooks

```bash
# Install pre-commit hooks
npm run prepare
```

---

## Database Configuration

### 1. PostgreSQL Installation

#### Windows
```bash
# Using chocolatey
choco install postgresql

# Or download from: https://www.postgresql.org/download/windows/
```

#### macOS
```bash
# Using Homebrew
brew install postgresql
brew services start postgresql
```

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 2. Database Setup

```bash
# Connect to PostgreSQL
sudo -u postgres psql

# Create database user
CREATE USER gamers_tag_user WITH PASSWORD 'your_secure_password';

# Create database
CREATE DATABASE gamers_tag_dev OWNER gamers_tag_user;

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE gamers_tag_dev TO gamers_tag_user;

# Exit PostgreSQL
\q
```

### 3. Drizzle ORM Configuration

The project uses Drizzle ORM for database management. Configuration is in `drizzle.config.ts`:

```typescript
import type { Config } from "drizzle-kit";

export default {
  schema: "./shared/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

### 4. Database Schema

Review the schema in `shared/schema.ts`:

```typescript
// Example schema structure
import { pgTable, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  isVerified: boolean("is_verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
```

### 5. Run Migrations

```bash
# Generate migrations
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database (optional)
npm run db:seed
```

---

## Server Architecture

### 1. Express Server Setup

The server is configured in `server/index.ts`:

```typescript
import express from "express";
import session from "express-session";
import ConnectPgSimple from "connect-pg-simple";
import { createViteDevServer } from "./vite";
import { setupRoutes } from "./routes";
import { errorHandler } from "./middleware/errorHandler";
import { corsMiddleware } from "./middleware/cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);

// Session configuration
const PgSession = ConnectPgSimple(session);
app.use(session({
  store: new PgSession({
    conString: process.env.DATABASE_URL,
    tableName: "session",
  }),
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
}));

// Setup API routes
setupRoutes(app);

// Error handling
app.use(errorHandler);

// Development server
if (process.env.NODE_ENV === "development") {
  createViteDevServer(app);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 2. Middleware Structure

Create middleware in `server/middleware/`:

#### Authentication Middleware (`server/middleware/auth.ts`)
```typescript
import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { sessions, users } from "../../shared/schema";
import { eq } from "drizzle-orm";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    username: string;
  };
}

export async function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const sessionId = req.session.id;
  
  if (!sessionId) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    const session = await db
      .select()
      .from(sessions)
      .leftJoin(users, eq(sessions.userId, users.id))
      .where(eq(sessions.id, sessionId))
      .limit(1);

    if (!session[0] || new Date() > session[0].sessions.expiresAt) {
      return res.status(401).json({ error: "Session expired" });
    }

    req.user = {
      id: session[0].users!.id,
      email: session[0].users!.email,
      username: session[0].users!.username,
    };

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
```

#### CORS Middleware (`server/middleware/cors.ts`)
```typescript
import cors from "cors";

export const corsMiddleware = cors({
  origin: process.env.NODE_ENV === "production" 
    ? ["https://your-domain.com"] 
    : ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
  optionsSuccessStatus: 200,
});
```

---

## API Implementation

### 1. Route Structure

Organize routes in `server/routes/`:

```
server/routes/
├── index.ts          # Main routes setup
├── auth.ts           # Authentication routes
├── users.ts          # User management
├── teams.ts          # Team operations
├── news.ts           # News management
├── gallery.ts        # Gallery operations
└── search.ts         # Search functionality
```

### 2. Example Route Implementation

#### Authentication Routes (`server/routes/auth.ts`)
```typescript
import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "../db";
import { users, sessions } from "../../shared/schema";
import { eq } from "drizzle-orm";
import { generateId } from "../utils/id";

const router = Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20),
  password: z.string().min(8),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Register endpoint
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = registerSchema.parse(req.body);

    // Check if user exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user
    const newUser = await db
      .insert(users)
      .values({
        id: generateId(),
        email,
        username,
        passwordHash,
      })
      .returning();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser[0].id,
        email: newUser[0].email,
        username: newUser[0].username,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // Find user
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (user.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user[0].passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create session
    const sessionId = generateId();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

    await db.insert(sessions).values({
      id: sessionId,
      userId: user[0].id,
      expiresAt,
    });

    req.session.id = sessionId;

    res.json({
      message: "Login successful",
      user: {
        id: user[0].id,
        email: user[0].email,
        username: user[0].username,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
```

### 3. API Route Setup (`server/routes/index.ts`)

```typescript
import { Express } from "express";
import authRoutes from "./auth";
import userRoutes from "./users";
import teamRoutes from "./teams";
import newsRoutes from "./news";
import galleryRoutes from "./gallery";
import searchRoutes from "./search";

export function setupRoutes(app: Express) {
  // API prefix
  const apiPrefix = "/api";

  // Mount routes
  app.use(`${apiPrefix}/auth`, authRoutes);
  app.use(`${apiPrefix}/users`, userRoutes);
  app.use(`${apiPrefix}/teams`, teamRoutes);
  app.use(`${apiPrefix}/news`, newsRoutes);
  app.use(`${apiPrefix}/gallery`, galleryRoutes);
  app.use(`${apiPrefix}/search`, searchRoutes);

  // Health check
  app.get(`${apiPrefix}/health`, (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });
}
```

---

## Authentication & Security

### 1. Password Security

Use bcryptjs for password hashing:

```typescript
import bcrypt from "bcryptjs";

// Hash password
const passwordHash = await bcrypt.hash(password, 12);

// Verify password
const isValid = await bcrypt.compare(password, passwordHash);
```

### 2. Session Management

Sessions are stored in PostgreSQL using connect-pg-simple:

```typescript
// Session configuration
app.use(session({
  store: new PgSession({
    conString: process.env.DATABASE_URL,
    tableName: "session",
  }),
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
}));
```

### 3. Input Validation

Use Zod for request validation:

```typescript
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20),
  password: z.string().min(8),
});

// In route handler
try {
  const validatedData = userSchema.parse(req.body);
  // Process validated data
} catch (error) {
  return res.status(400).json({ error: "Invalid input" });
}
```

### 4. Rate Limiting

Install and configure express-rate-limit:

```bash
npm install express-rate-limit
```

```typescript
import rateLimit from "express-rate-limit";

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: "Too many authentication attempts",
});

app.use("/api/auth/login", authLimiter);
```

---

## File Structure

```
project-root/
├── server/
│   ├── index.ts              # Main server file
│   ├── db.ts                 # Database connection
│   ├── vite.ts               # Vite development server
│   ├── middleware/           # Custom middleware
│   │   ├── auth.ts
│   │   ├── cors.ts
│   │   ├── errorHandler.ts
│   │   └── validation.ts
│   ├── routes/               # API routes
│   │   ├── index.ts
│   │   ├── auth.ts
│   │   ├── users.ts
│   │   ├── teams.ts
│   │   ├── news.ts
│   │   ├── gallery.ts
│   │   └── search.ts
│   ├── utils/                # Utility functions
│   │   ├── id.ts
│   │   ├── email.ts
│   │   ├── upload.ts
│   │   └── validation.ts
│   └── services/             # External services
│       ├── sanity.ts
│       ├── email.ts
│       └── storage.ts
├── shared/
│   └── schema.ts             # Shared database schema
├── drizzle/
│   ├── migrations/           # Database migrations
│   └── seed.ts              # Database seeding
├── .env                     # Environment variables
├── .env.example             # Environment template
├── drizzle.config.ts        # Drizzle configuration
├── package.json
└── tsconfig.json
```

---

## Development Workflow

### 1. Daily Development Process

```bash
# Start development server
npm run dev

# Run database migrations
npm run db:migrate

# Generate new migration
npm run db:generate

# Reset database (development only)
npm run db:reset

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

### 2. Git Workflow

```bash
# Create feature branch
git checkout -b feature/user-authentication

# Make changes and commit
git add .
git commit -m "feat: implement user authentication"

# Push to remote
git push origin feature/user-authentication

# Create pull request (via GitHub/GitLab)
```

### 3. Code Quality

#### ESLint Configuration (`.eslintrc.json`)
```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "no-console": "warn"
  }
}
```

#### Prettier Configuration (`.prettierrc`)
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2
}
```

---

## Testing

### 1. Testing Setup

Install testing dependencies:

```bash
npm install --save-dev jest @types/jest supertest @types/supertest
```

### 2. Test Configuration (`jest.config.js`)

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/server", "<rootDir>/tests"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  collectCoverageFrom: [
    "server/**/*.ts",
    "!server/**/*.d.ts",
    "!server/index.ts",
  ],
};
```

### 3. Example Test (`tests/auth.test.ts`)

```typescript
import request from "supertest";
import { app } from "../server/index";
import { db } from "../server/db";

describe("Authentication", () => {
  beforeEach(async () => {
    // Clean database before each test
    await db.delete(users);
  });

  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const userData = {
        email: "test@example.com",
        username: "testuser",
        password: "password123",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(userData)
        .expect(201);

      expect(response.body.user.email).toBe(userData.email);
      expect(response.body.user.username).toBe(userData.username);
    });

    it("should not register user with existing email", async () => {
      const userData = {
        email: "test@example.com",
        username: "testuser",
        password: "password123",
      };

      // Register first user
      await request(app).post("/api/auth/register").send(userData);

      // Try to register with same email
      const response = await request(app)
        .post("/api/auth/register")
        .send(userData)
        .expect(400);

      expect(response.body.error).toBe("User already exists");
    });
  });
});
```

### 4. Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test auth.test.ts
```

---

## Deployment

### 1. Production Environment Setup

#### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://user:password@your-db-host:5432/gamers_tag_prod
SESSION_SECRET=your-super-secure-production-secret
REDIS_URL=redis://your-redis-host:6379
```

### 2. Docker Configuration

#### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 5000

# Start application
CMD ["npm", "start"]
```

#### docker-compose.yml
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/gamers_tag
    depends_on:
      - db
      - redis

  db:
    image: postgres:14
    environment:
      - POSTGRES_DB=gamers_tag
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### 3. Deployment Scripts

#### Build Script (`scripts/build.sh`)
```bash
#!/bin/bash
set -e

echo "Building application..."
npm run build

echo "Running database migrations..."
npm run db:migrate

echo "Build completed successfully!"
```

#### Deploy Script (`scripts/deploy.sh`)
```bash
#!/bin/bash
set -e

echo "Deploying to production..."

# Pull latest code
git pull origin main

# Install dependencies
npm ci --only=production

# Run build
npm run build

# Run migrations
npm run db:migrate

# Restart application
pm2 restart gamers-tag

echo "Deployment completed successfully!"
```

### 4. Production Monitoring

#### PM2 Configuration (`ecosystem.config.js`)
```javascript
module.exports = {
  apps: [{
    name: 'gamers-tag',
    script: 'server/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
```

---

## Troubleshooting

### Common Issues and Solutions

#### 1. Database Connection Issues

**Problem**: Cannot connect to PostgreSQL
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Solution**:
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Start PostgreSQL if not running
sudo systemctl start postgresql

# Check connection string in .env file
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

#### 2. Migration Errors

**Problem**: Migration fails
```
Error: relation "users" already exists
```

**Solution**:
```bash
# Reset database (development only)
npm run db:reset

# Or manually drop tables
psql -d gamers_tag_dev -c "DROP TABLE IF EXISTS users CASCADE;"

# Re-run migrations
npm run db:migrate
```

#### 3. Session Issues

**Problem**: Sessions not persisting
```
Error: Failed to create session store
```

**Solution**:
```bash
# Create session table manually
psql -d gamers_tag_dev -c "
CREATE TABLE IF NOT EXISTS session (
  sid varchar NOT NULL COLLATE \"default\",
  sess json NOT NULL,
  expire timestamp(6) NOT NULL
) WITH (OIDS=FALSE);
"
```

#### 4. Port Already in Use

**Problem**: Port 5000 is already in use
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution**:
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=3001 npm run dev
```

#### 5. TypeScript Compilation Errors

**Problem**: TypeScript errors during build
```
Error: Type 'string | undefined' is not assignable to type 'string'
```

**Solution**:
```typescript
// Use proper type checking
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

// Or use type assertion (less safe)
const databaseUrl = process.env.DATABASE_URL!;
```

### Performance Optimization

#### 1. Database Query Optimization
```typescript
// Use indexes for frequently queried columns
await db.execute(sql`CREATE INDEX idx_users_email ON users(email)`);

// Use LIMIT and pagination
const users = await db
  .select()
  .from(users)
  .limit(20)
  .offset(page * 20);
```

#### 2. Caching Implementation
```typescript
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

// Cache frequently accessed data
async function getCachedUser(userId: string) {
  const cached = await redis.get(`user:${userId}`);
  if (cached) {
    return JSON.parse(cached);
  }

  const user = await db.select().from(users).where(eq(users.id, userId));
  await redis.setex(`user:${userId}`, 3600, JSON.stringify(user[0]));
  
  return user[0];
}
```

#### 3. Request Logging
```typescript
import morgan from "morgan";

// Add request logging
app.use(morgan("combined"));

// Custom error logging
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error: ${err.message}`);
  console.error(`Stack: ${err.stack}`);
  console.error(`URL: ${req.url}`);
  console.error(`Method: ${req.method}`);
  
  res.status(500).json({ error: "Internal server error" });
});
```

---

## Additional Resources

### Documentation Links
- [Express.js Documentation](https://expressjs.com/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Recommended Tools
- **Database Management**: pgAdmin, TablePlus
- **API Testing**: Thunder Client, Postman, Insomnia
- **Monitoring**: PM2, New Relic, DataDog
- **Logging**: Winston, Bunyan

### Security Checklist
- [ ] Environment variables properly configured
- [ ] Database credentials secure
- [ ] Session secret is random and long
- [ ] Rate limiting implemented
- [ ] Input validation on all endpoints
- [ ] CORS properly configured
- [ ] HTTPS enabled in production
- [ ] Database access restricted
- [ ] Regular security updates

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Maintained by**: GAMERS TAG Development Team

For additional support, contact the development team or refer to the project's issue tracker.