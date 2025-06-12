# GAMERS TAG - Complete Backend Developer Guide

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Quick Start Setup](#quick-start-setup)
4. [Database Architecture](#database-architecture)
5. [API Implementation](#api-implementation)
6. [Authentication System](#authentication-system)
7. [Real-time Features](#real-time-features)
8. [File Upload & Storage](#file-upload--storage)
9. [Email System](#email-system)
10. [Performance & Caching](#performance--caching)
11. [Security Implementation](#security-implementation)
12. [Testing Strategy](#testing-strategy)
13. [Deployment Guide](#deployment-guide)
14. [Monitoring & Logging](#monitoring--logging)
15. [API Documentation](#api-documentation)
16. [Troubleshooting](#troubleshooting)

---

## Project Overview

GAMERS TAG is a comprehensive gaming industry networking platform built with modern full-stack technologies. The backend serves as the foundation for user management, content delivery, real-time communication, and integration with external services.

### Key Features
- **User Authentication & Authorization**: Secure registration, login, and session management
- **Content Management**: Integration with Sanity CMS for dynamic content
- **Real-time Communication**: WebSocket support for live notifications and chat
- **File Management**: Image upload and storage with optimization
- **Search Functionality**: Advanced search across users, teams, and content
- **Notification System**: Real-time HUD-style notifications
- **Email Integration**: Automated email workflows
- **Performance Optimization**: Caching, database optimization, and CDN integration

---

## Technology Stack

### Core Technologies
- **Runtime**: Node.js 20.x
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL 15+ with Drizzle ORM
- **Session Store**: PostgreSQL with connect-pg-simple
- **Real-time**: WebSocket (ws library)
- **Validation**: Zod for type-safe validation
- **Authentication**: bcryptjs for password hashing

### External Services
- **CMS**: Sanity.io for content management
- **Email**: SMTP integration (Gmail, SendGrid, etc.)
- **Storage**: AWS S3 or local file system
- **CDN**: Cloudflare or AWS CloudFront
- **Monitoring**: Custom logging and error tracking

### Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint, Prettier
- **Testing**: Jest with Supertest
- **Database**: Drizzle Kit for migrations
- **API Testing**: Thunder Client or Postman

---

## Quick Start Setup

### Prerequisites
```bash
# Required software versions
Node.js >= 20.0.0
PostgreSQL >= 15.0
Git >= 2.30.0
```

### Environment Setup
```bash
# 1. Clone and setup
git clone <repository-url>
cd gamers-tag-platform
npm install

# 2. Environment configuration
cp .env.example .env
# Edit .env with your configuration

# 3. Database setup
npm run db:generate
npm run db:migrate
npm run db:seed

# 4. Start development server
npm run dev
```

### Environment Variables
```env
# Server Configuration
NODE_ENV=development
PORT=5000
HOST=0.0.0.0

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/gamers_tag
PGHOST=localhost
PGPORT=5432
PGUSER=gamers_tag_user
PGPASSWORD=secure_password
PGDATABASE=gamers_tag

# Security
SESSION_SECRET=generate-a-secure-random-string-here-at-least-32-characters
JWT_SECRET=another-secure-random-string-for-jwt-tokens

# External Services
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token

# Email Service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@gamers-tag.com

# File Storage
UPLOAD_DIR=./uploads
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=us-east-1
S3_BUCKET=gamers-tag-uploads

# Redis (Optional)
REDIS_URL=redis://localhost:6379

# API Keys
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_secret
```

---

## Database Architecture

### Schema Design (`shared/schema.ts`)
```typescript
import { pgTable, text, timestamp, integer, boolean, jsonb, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  avatar: text("avatar_url"),
  bio: text("bio"),
  gamertag: text("gamertag").unique(),
  isVerified: boolean("is_verified").default(false),
  isActive: boolean("is_active").default(true),
  role: text("role").default("user"), // user, admin, moderator
  preferences: jsonb("preferences").default({}),
  lastLoginAt: timestamp("last_login_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Sessions table
export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Teams table
export const teams = pgTable("teams", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  logo: text("logo_url"),
  website: text("website"),
  location: text("location"),
  foundedAt: timestamp("founded_at"),
  isActive: boolean("is_active").default(true),
  memberCount: integer("member_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Team members relationship
export const teamMembers = pgTable("team_members", {
  id: uuid("id").defaultRandom().primaryKey(),
  teamId: uuid("team_id").references(() => teams.id, { onDelete: "cascade" }).notNull(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  role: text("role").default("member"), // owner, admin, member
  joinedAt: timestamp("joined_at").defaultNow(),
  isActive: boolean("is_active").default(true),
});

// News/Blog posts
export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content"),
  excerpt: text("excerpt"),
  featuredImage: text("featured_image"),
  authorId: uuid("author_id").references(() => users.id),
  status: text("status").default("draft"), // draft, published, archived
  publishedAt: timestamp("published_at"),
  viewCount: integer("view_count").default(0),
  likeCount: integer("like_count").default(0),
  tags: jsonb("tags").default([]),
  metadata: jsonb("metadata").default({}),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Notifications
export const notifications = pgTable("notifications", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  title: text("title").notNull(),
  message: text("message").notNull(),
  type: text("type").notNull(), // info, success, warning, error
  isRead: boolean("is_read").default(false),
  data: jsonb("data").default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

// File uploads
export const uploads = pgTable("uploads", {
  id: uuid("id").defaultRandom().primaryKey(),
  filename: text("filename").notNull(),
  originalName: text("original_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  path: text("path").notNull(),
  url: text("url"),
  uploadedBy: uuid("uploaded_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  teamMemberships: many(teamMembers),
  posts: many(posts),
  notifications: many(notifications),
  uploads: many(uploads),
}));

export const teamsRelations = relations(teams, ({ many }) => ({
  members: many(teamMembers),
}));

export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  team: one(teams, {
    fields: [teamMembers.teamId],
    references: [teams.id],
  }),
  user: one(users, {
    fields: [teamMembers.userId],
    references: [users.id],
  }),
}));
```

### Database Utilities (`server/db.ts`)
```typescript
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../shared/schema";

// Connection configuration
const connectionString = process.env.DATABASE_URL!;

// Create postgres client
const client = postgres(connectionString, {
  max: 20,
  idle_timeout: 20,
  connect_timeout: 10,
});

// Initialize Drizzle with schema
export const db = drizzle(client, { schema });

// Health check function
export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    await client`SELECT 1`;
    return true;
  } catch (error) {
    console.error("Database health check failed:", error);
    return false;
  }
}

// Graceful shutdown
export async function closeDatabaseConnection(): Promise<void> {
  await client.end();
}
```

---

## API Implementation

### Server Setup (`server/index.ts`)
```typescript
import express from "express";
import session from "express-session";
import ConnectPgSimple from "connect-pg-simple";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { WebSocketServer } from "ws";
import { createServer } from "http";

import { setupRoutes } from "./routes";
import { errorHandler } from "./middleware/errorHandler";
import { requestLogger } from "./middleware/logger";
import { setupWebSocket } from "./websocket";
import { checkDatabaseHealth } from "./db";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === "production";

// Security middleware
app.use(helmet({
  contentSecurityPolicy: isProduction ? undefined : false,
}));

// CORS configuration
app.use(cors({
  origin: isProduction 
    ? ["https://gamers-tag.com", "https://www.gamers-tag.com"]
    : ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
  optionsSuccessStatus: 200,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP",
});
app.use(limiter);

// Body parsing
app.use(compression());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Logging
app.use(requestLogger);

// Session configuration
const PgSession = ConnectPgSimple(session);
app.use(session({
  store: new PgSession({
    conString: process.env.DATABASE_URL,
    tableName: "session",
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    secure: isProduction,
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    sameSite: isProduction ? "strict" : "lax",
  },
}));

// Setup routes
setupRoutes(app);

// WebSocket setup
setupWebSocket(wss);

// Health check endpoint
app.get("/health", async (req, res) => {
  const dbHealth = await checkDatabaseHealth();
  const status = dbHealth ? "healthy" : "unhealthy";
  
  res.status(dbHealth ? 200 : 503).json({
    status,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  });
});

// Error handling
app.use(errorHandler);

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    console.log("Process terminated");
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔗 WebSocket server ready`);
});
```

### Route Organization (`server/routes/index.ts`)
```typescript
import { Express } from "express";
import authRoutes from "./auth";
import userRoutes from "./users";
import teamRoutes from "./teams";
import newsRoutes from "./news";
import galleryRoutes from "./gallery";
import searchRoutes from "./search";
import uploadRoutes from "./upload";
import notificationRoutes from "./notifications";
import sanityRoutes from "./sanity";

export function setupRoutes(app: Express) {
  const apiPrefix = "/api";

  // Public routes
  app.use(`${apiPrefix}/auth`, authRoutes);
  app.use(`${apiPrefix}/search`, searchRoutes);
  app.use(`${apiPrefix}/news`, newsRoutes);
  app.use(`${apiPrefix}/gallery`, galleryRoutes);
  app.use(`${apiPrefix}/sanity`, sanityRoutes);

  // Protected routes (require authentication)
  app.use(`${apiPrefix}/users`, userRoutes);
  app.use(`${apiPrefix}/teams`, teamRoutes);
  app.use(`${apiPrefix}/upload`, uploadRoutes);
  app.use(`${apiPrefix}/notifications`, notificationRoutes);

  // API documentation
  app.get(`${apiPrefix}`, (req, res) => {
    res.json({
      name: "GAMERS TAG API",
      version: "1.0.0",
      endpoints: {
        auth: `${apiPrefix}/auth`,
        users: `${apiPrefix}/users`,
        teams: `${apiPrefix}/teams`,
        news: `${apiPrefix}/news`,
        gallery: `${apiPrefix}/gallery`,
        search: `${apiPrefix}/search`,
        upload: `${apiPrefix}/upload`,
        notifications: `${apiPrefix}/notifications`,
      },
    });
  });
}
```

---

## Authentication System

### Authentication Middleware (`server/middleware/auth.ts`)
```typescript
import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { sessions, users } from "../../shared/schema";
import { eq, and, gt } from "drizzle-orm";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    username: string;
    role: string;
    isVerified: boolean;
  };
}

export async function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const sessionId = req.session?.id;
    
    if (!sessionId) {
      return res.status(401).json({ 
        error: "Authentication required",
        code: "NO_SESSION"
      });
    }

    // Find active session with user data
    const result = await db
      .select({
        user: {
          id: users.id,
          email: users.email,
          username: users.username,
          role: users.role,
          isVerified: users.isVerified,
          isActive: users.isActive,
        },
        session: {
          expiresAt: sessions.expiresAt,
        },
      })
      .from(sessions)
      .innerJoin(users, eq(sessions.userId, users.id))
      .where(
        and(
          eq(sessions.id, sessionId),
          gt(sessions.expiresAt, new Date()),
          eq(users.isActive, true)
        )
      )
      .limit(1);

    if (result.length === 0) {
      return res.status(401).json({ 
        error: "Session expired or invalid",
        code: "INVALID_SESSION"
      });
    }

    const { user } = result[0];
    req.user = user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ 
      error: "Authentication error",
      code: "AUTH_ERROR"
    });
  }
}

export function requireRole(roles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: "Insufficient permissions",
        required: roles,
        current: req.user.role
      });
    }

    next();
  };
}

export function requireVerified(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.user?.isVerified) {
    return res.status(403).json({ 
      error: "Email verification required",
      code: "NOT_VERIFIED"
    });
  }

  next();
}
```

### Authentication Routes (`server/routes/auth.ts`)
```typescript
import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import crypto from "crypto";
import { db } from "../db";
import { users, sessions } from "../../shared/schema";
import { eq, or } from "drizzle-orm";
import { requireAuth, AuthenticatedRequest } from "../middleware/auth";
import { sendVerificationEmail, sendPasswordResetEmail } from "../services/email";
import { validateRequest } from "../middleware/validation";

const router = Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
  firstName: z.string().min(1, "First name is required").optional(),
  lastName: z.string().min(1, "Last name is required").optional(),
});

const loginSchema = z.object({
  identifier: z.string().min(1, "Email or username is required"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const resetPasswordSchema = z.object({
  token: z.string().min(1, "Reset token is required"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
});

// Register endpoint
router.post("/register", validateRequest(registerSchema), async (req, res) => {
  try {
    const { email, username, password, firstName, lastName } = req.body;

    // Check if user exists
    const existingUser = await db
      .select()
      .from(users)
      .where(or(eq(users.email, email), eq(users.username, username)))
      .limit(1);

    if (existingUser.length > 0) {
      const field = existingUser[0].email === email ? "email" : "username";
      return res.status(400).json({ 
        error: `${field} already exists`,
        field 
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Create user
    const newUser = await db
      .insert(users)
      .values({
        email,
        username,
        passwordHash,
        firstName,
        lastName,
        verificationToken,
      })
      .returning({
        id: users.id,
        email: users.email,
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
      });

    // Send verification email
    if (process.env.NODE_ENV === "production") {
      await sendVerificationEmail(email, verificationToken);
    }

    res.status(201).json({
      message: "User created successfully",
      user: newUser[0],
      requiresVerification: process.env.NODE_ENV === "production",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login endpoint
router.post("/login", validateRequest(loginSchema), async (req, res) => {
  try {
    const { identifier, password, rememberMe } = req.body;

    // Find user by email or username
    const user = await db
      .select()
      .from(users)
      .where(or(eq(users.email, identifier), eq(users.username, identifier)))
      .limit(1);

    if (user.length === 0) {
      return res.status(401).json({ 
        error: "Invalid credentials",
        code: "INVALID_CREDENTIALS"
      });
    }

    const foundUser = user[0];

    // Check if user is active
    if (!foundUser.isActive) {
      return res.status(401).json({ 
        error: "Account is deactivated",
        code: "ACCOUNT_DEACTIVATED"
      });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, foundUser.passwordHash);
    if (!isValid) {
      return res.status(401).json({ 
        error: "Invalid credentials",
        code: "INVALID_CREDENTIALS"
      });
    }

    // Create session
    const sessionId = crypto.randomUUID();
    const expiresAt = new Date(
      Date.now() + (rememberMe ? 30 : 7) * 24 * 60 * 60 * 1000
    );

    await db.insert(sessions).values({
      id: sessionId,
      userId: foundUser.id,
      expiresAt,
      ipAddress: req.ip,
      userAgent: req.get("User-Agent"),
    });

    // Update last login
    await db
      .update(users)
      .set({ lastLoginAt: new Date() })
      .where(eq(users.id, foundUser.id));

    req.session.id = sessionId;

    res.json({
      message: "Login successful",
      user: {
        id: foundUser.id,
        email: foundUser.email,
        username: foundUser.username,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        avatar: foundUser.avatar,
        role: foundUser.role,
        isVerified: foundUser.isVerified,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

// Logout endpoint
router.post("/logout", requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const sessionId = req.session?.id;
    
    if (sessionId) {
      // Delete session from database
      await db.delete(sessions).where(eq(sessions.id, sessionId));
    }

    // Destroy session
    req.session.destroy(() => {
      res.json({ message: "Logout successful" });
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Logout failed" });
  }
});

// Get current user
router.get("/me", requireAuth, (req: AuthenticatedRequest, res) => {
  res.json({ user: req.user });
});

export default router;
```

---

## Real-time Features

### WebSocket Implementation (`server/websocket.ts`)
```typescript
import { WebSocketServer, WebSocket } from "ws";
import { IncomingMessage } from "http";
import url from "url";
import { db } from "./db";
import { sessions, users } from "../shared/schema";
import { eq } from "drizzle-orm";

interface AuthenticatedWebSocket extends WebSocket {
  userId?: string;
  username?: string;
}

interface WebSocketMessage {
  type: string;
  data: any;
  timestamp?: number;
}

class WebSocketManager {
  private clients = new Map<string, AuthenticatedWebSocket>();
  private rooms = new Map<string, Set<string>>();

  constructor(private wss: WebSocketServer) {
    this.setupWebSocketServer();
  }

  private setupWebSocketServer() {
    this.wss.on("connection", async (ws: AuthenticatedWebSocket, req: IncomingMessage) => {
      try {
        // Authenticate WebSocket connection
        const authenticated = await this.authenticateConnection(ws, req);
        if (!authenticated) {
          ws.close(1008, "Authentication required");
          return;
        }

        console.log(`WebSocket connected: ${ws.username} (${ws.userId})`);
        this.clients.set(ws.userId!, ws);

        // Handle messages
        ws.on("message", (data) => {
          try {
            const message: WebSocketMessage = JSON.parse(data.toString());
            this.handleMessage(ws, message);
          } catch (error) {
            console.error("WebSocket message error:", error);
            this.sendError(ws, "Invalid message format");
          }
        });

        // Handle disconnection
        ws.on("close", () => {
          console.log(`WebSocket disconnected: ${ws.username}`);
          this.clients.delete(ws.userId!);
          this.removeFromAllRooms(ws.userId!);
        });

        // Send welcome message
        this.sendMessage(ws, {
          type: "connected",
          data: { message: "WebSocket connection established" },
        });

      } catch (error) {
        console.error("WebSocket connection error:", error);
        ws.close(1011, "Internal server error");
      }
    });
  }

  private async authenticateConnection(ws: AuthenticatedWebSocket, req: IncomingMessage): Promise<boolean> {
    try {
      // Parse session ID from query parameters or headers
      const query = url.parse(req.url!, true).query;
      const sessionId = query.sessionId as string;

      if (!sessionId) {
        return false;
      }

      // Verify session
      const result = await db
        .select({
          userId: users.id,
          username: users.username,
        })
        .from(sessions)
        .innerJoin(users, eq(sessions.userId, users.id))
        .where(eq(sessions.id, sessionId))
        .limit(1);

      if (result.length === 0) {
        return false;
      }

      ws.userId = result[0].userId;
      ws.username = result[0].username;
      return true;
    } catch (error) {
      console.error("WebSocket auth error:", error);
      return false;
    }
  }

  private handleMessage(ws: AuthenticatedWebSocket, message: WebSocketMessage) {
    switch (message.type) {
      case "join_room":
        this.joinRoom(ws.userId!, message.data.room);
        break;
      case "leave_room":
        this.leaveRoom(ws.userId!, message.data.room);
        break;
      case "chat_message":
        this.broadcastToRoom(message.data.room, {
          type: "chat_message",
          data: {
            ...message.data,
            userId: ws.userId,
            username: ws.username,
            timestamp: Date.now(),
          },
        });
        break;
      case "typing":
        this.broadcastToRoom(message.data.room, {
          type: "typing",
          data: {
            userId: ws.userId,
            username: ws.username,
            isTyping: message.data.isTyping,
          },
        }, ws.userId);
        break;
      default:
        this.sendError(ws, "Unknown message type");
    }
  }

  private joinRoom(userId: string, room: string) {
    if (!this.rooms.has(room)) {
      this.rooms.set(room, new Set());
    }
    this.rooms.get(room)!.add(userId);

    this.broadcastToRoom(room, {
      type: "user_joined",
      data: { userId, room },
    }, userId);
  }

  private leaveRoom(userId: string, room: string) {
    const roomUsers = this.rooms.get(room);
    if (roomUsers) {
      roomUsers.delete(userId);
      if (roomUsers.size === 0) {
        this.rooms.delete(room);
      }
    }

    this.broadcastToRoom(room, {
      type: "user_left",
      data: { userId, room },
    }, userId);
  }

  private removeFromAllRooms(userId: string) {
    for (const [room, users] of this.rooms.entries()) {
      if (users.has(userId)) {
        this.leaveRoom(userId, room);
      }
    }
  }

  public broadcastToRoom(room: string, message: WebSocketMessage, excludeUserId?: string) {
    const roomUsers = this.rooms.get(room);
    if (!roomUsers) return;

    roomUsers.forEach(userId => {
      if (userId !== excludeUserId) {
        const ws = this.clients.get(userId);
        if (ws && ws.readyState === WebSocket.OPEN) {
          this.sendMessage(ws, message);
        }
      }
    });
  }

  public sendToUser(userId: string, message: WebSocketMessage) {
    const ws = this.clients.get(userId);
    if (ws && ws.readyState === WebSocket.OPEN) {
      this.sendMessage(ws, message);
    }
  }

  public broadcast(message: WebSocketMessage, excludeUserId?: string) {
    this.clients.forEach((ws, userId) => {
      if (userId !== excludeUserId && ws.readyState === WebSocket.OPEN) {
        this.sendMessage(ws, message);
      }
    });
  }

  private sendMessage(ws: WebSocket, message: WebSocketMessage) {
    try {
      ws.send(JSON.stringify({
        ...message,
        timestamp: message.timestamp || Date.now(),
      }));
    } catch (error) {
      console.error("Error sending WebSocket message:", error);
    }
  }

  private sendError(ws: WebSocket, error: string) {
    this.sendMessage(ws, {
      type: "error",
      data: { error },
    });
  }
}

let wsManager: WebSocketManager;

export function setupWebSocket(wss: WebSocketServer) {
  wsManager = new WebSocketManager(wss);
  return wsManager;
}

export function getWebSocketManager(): WebSocketManager {
  return wsManager;
}
```

---

## File Upload & Storage

### Upload Service (`server/services/upload.ts`)
```typescript
import multer from "multer";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { db } from "../db";
import { uploads } from "../../shared/schema";

// AWS S3 client configuration
const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Multer configuration for memory storage
const storage = multer.memoryStorage();

const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  // Check file type
  const allowedTypes = /jpeg|jpg|png|gif|webp|pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images and documents are allowed."));
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
});

// Image optimization function
async function optimizeImage(buffer: Buffer, mimetype: string): Promise<Buffer> {
  if (!mimetype.startsWith("image/")) {
    return buffer;
  }

  try {
    return await sharp(buffer)
      .resize(1920, 1080, { 
        fit: "inside", 
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality: 85, 
        progressive: true 
      })
      .toBuffer();
  } catch (error) {
    console.error("Image optimization error:", error);
    return buffer;
  }
}

// Upload to S3
async function uploadToS3(buffer: Buffer, filename: string, mimetype: string): Promise<string> {
  const bucketName = process.env.S3_BUCKET!;
  const key = `uploads/${new Date().getFullYear()}/${new Date().getMonth() + 1}/${filename}`;

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: buffer,
    ContentType: mimetype,
    CacheControl: "max-age=31536000", // 1 year
  });

  await s3Client.send(command);
  return `https://${bucketName}.s3.amazonaws.com/${key}`;
}

// Save to local filesystem
function saveToLocal(buffer: Buffer, filename: string): string {
  const uploadDir = process.env.UPLOAD_DIR || "./uploads";
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const dir = path.join(uploadDir, year.toString(), month.toString());
  
  // Ensure directory exists
  require("fs").mkdirSync(dir, { recursive: true });
  
  const filePath = path.join(dir, filename);
  require("fs").writeFileSync(filePath, buffer);
  
  return `/uploads/${year}/${month}/${filename}`;
}

// Main upload handler
export async function handleFileUpload(
  file: Express.Multer.File,
  userId: string
): Promise<{
  id: string;
  filename: string;
  url: string;
  size: number;
}> {
  try {
    // Generate unique filename
    const ext = path.extname(file.originalname);
    const filename = `${crypto.randomUUID()}${ext}`;

    // Optimize image if needed
    let buffer = file.buffer;
    if (file.mimetype.startsWith("image/")) {
      buffer = await optimizeImage(buffer, file.mimetype);
    }

    // Upload to storage
    let url: string;
    if (process.env.AWS_ACCESS_KEY_ID && process.env.NODE_ENV === "production") {
      url = await uploadToS3(buffer, filename, file.mimetype);
    } else {
      url = saveToLocal(buffer, filename);
    }

    // Save to database
    const uploadRecord = await db
      .insert(uploads)
      .values({
        filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: buffer.length,
        path: url,
        url,
        uploadedBy: userId,
      })
      .returning();

    return {
      id: uploadRecord[0].id,
      filename: uploadRecord[0].filename,
      url: uploadRecord[0].url!,
      size: uploadRecord[0].size,
    };
  } catch (error) {
    console.error("File upload error:", error);
    throw new Error("File upload failed");
  }
}

// Generate thumbnail for images
export async function generateThumbnail(imageBuffer: Buffer): Promise<Buffer> {
  return await sharp(imageBuffer)
    .resize(300, 300, { 
      fit: "cover", 
      position: "center" 
    })
    .jpeg({ quality: 80 })
    .toBuffer();
}
```

### Upload Routes (`server/routes/upload.ts`)
```typescript
import { Router } from "express";
import { requireAuth, AuthenticatedRequest } from "../middleware/auth";
import { upload, handleFileUpload } from "../services/upload";
import { z } from "zod";

const router = Router();

// Single file upload
router.post(
  "/single", 
  requireAuth, 
  upload.single("file"), 
  async (req: AuthenticatedRequest, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file provided" });
      }

      const result = await handleFileUpload(req.file, req.user!.id);
      
      res.json({
        message: "File uploaded successfully",
        file: result,
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Upload failed" 
      });
    }
  }
);

// Multiple file upload
router.post(
  "/multiple", 
  requireAuth, 
  upload.array("files", 5), 
  async (req: AuthenticatedRequest, res) => {
    try {
      const files = req.files as Express.Multer.File[];
      
      if (!files || files.length === 0) {
        return res.status(400).json({ error: "No files provided" });
      }

      const results = await Promise.all(
        files.map(file => handleFileUpload(file, req.user!.id))
      );
      
      res.json({
        message: "Files uploaded successfully",
        files: results,
      });
    } catch (error) {
      console.error("Multiple upload error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Upload failed" 
      });
    }
  }
);

// Avatar upload with specific processing
router.post(
  "/avatar", 
  requireAuth, 
  upload.single("avatar"), 
  async (req: AuthenticatedRequest, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No avatar file provided" });
      }

      // Validate image type
      if (!req.file.mimetype.startsWith("image/")) {
        return res.status(400).json({ error: "Avatar must be an image" });
      }

      const result = await handleFileUpload(req.file, req.user!.id);
      
      // Update user avatar in database
      await db
        .update(users)
        .set({ avatar: result.url })
        .where(eq(users.id, req.user!.id));
      
      res.json({
        message: "Avatar uploaded successfully",
        avatar: result,
      });
    } catch (error) {
      console.error("Avatar upload error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Avatar upload failed" 
      });
    }
  }
);

export default router;
```

---

## Performance & Optimization

### Caching Strategy (`server/services/cache.ts`)
```typescript
import Redis from "ioredis";

class CacheService {
  private redis: Redis | null = null;
  private memoryCache = new Map<string, { data: any; expires: number }>();

  constructor() {
    if (process.env.REDIS_URL) {
      this.redis = new Redis(process.env.REDIS_URL);
      this.redis.on("error", (error) => {
        console.error("Redis error:", error);
      });
    }
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      if (this.redis) {
        const data = await this.redis.get(key);
        return data ? JSON.parse(data) : null;
      } else {
        const cached = this.memoryCache.get(key);
        if (cached && cached.expires > Date.now()) {
          return cached.data;
        }
        this.memoryCache.delete(key);
        return null;
      }
    } catch (error) {
      console.error("Cache get error:", error);
      return null;
    }
  }

  async set(key: string, data: any, ttlSeconds: number = 3600): Promise<void> {
    try {
      if (this.redis) {
        await this.redis.setex(key, ttlSeconds, JSON.stringify(data));
      } else {
        this.memoryCache.set(key, {
          data,
          expires: Date.now() + (ttlSeconds * 1000),
        });
      }
    } catch (error) {
      console.error("Cache set error:", error);
    }
  }

  async del(key: string): Promise<void> {
    try {
      if (this.redis) {
        await this.redis.del(key);
      } else {
        this.memoryCache.delete(key);
      }
    } catch (error) {
      console.error("Cache delete error:", error);
    }
  }

  async flush(): Promise<void> {
    try {
      if (this.redis) {
        await this.redis.flushall();
      } else {
        this.memoryCache.clear();
      }
    } catch (error) {
      console.error("Cache flush error:", error);
    }
  }

  // Cache with automatic refresh
  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttlSeconds: number = 3600
  ): Promise<T> {
    let data = await this.get<T>(key);
    
    if (data === null) {
      data = await fetcher();
      await this.set(key, data, ttlSeconds);
    }
    
    return data;
  }
}

export const cache = new CacheService();

// Cache middleware for Express routes
export function cacheMiddleware(ttlSeconds: number = 300) {
  return async (req: any, res: any, next: any) => {
    const key = `route:${req.method}:${req.originalUrl}`;
    
    try {
      const cached = await cache.get(key);
      if (cached) {
        return res.json(cached);
      }

      // Override res.json to cache the response
      const originalJson = res.json;
      res.json = function(data: any) {
        cache.set(key, data, ttlSeconds);
        return originalJson.call(this, data);
      };

      next();
    } catch (error) {
      console.error("Cache middleware error:", error);
      next();
    }
  };
}
```

---

## Testing Strategy

### Test Setup (`tests/setup.ts`)
```typescript
import { beforeAll, afterAll, beforeEach } from "@jest/globals";
import { db } from "../server/db";
import { users, sessions } from "../shared/schema";

// Test database setup
beforeAll(async () => {
  // Ensure test database is clean
  process.env.NODE_ENV = "test";
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
});

beforeEach(async () => {
  // Clean database before each test
  await db.delete(sessions);
  await db.delete(users);
});

afterAll(async () => {
  // Close database connection
  process.exit(0);
});

// Helper functions for tests
export async function createTestUser(overrides = {}) {
  const userData = {
    email: "test@example.com",
    username: "testuser",
    passwordHash: "$2a$12$test_hash",
    isVerified: true,
    ...overrides,
  };

  const [user] = await db.insert(users).values(userData).returning();
  return user;
}

export async function createTestSession(userId: string) {
  const sessionData = {
    id: "test-session-id",
    userId,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  };

  const [session] = await db.insert(sessions).values(sessionData).returning();
  return session;
}
```

### API Tests (`tests/auth.test.ts`)
```typescript
import request from "supertest";
import { app } from "../server/index";
import { createTestUser, createTestSession } from "./setup";

describe("Authentication", () => {
  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const userData = {
        email: "newuser@example.com",
        username: "newuser",
        password: "Password123!",
        firstName: "John",
        lastName: "Doe",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(userData)
        .expect(201);

      expect(response.body.message).toBe("User created successfully");
      expect(response.body.user.email).toBe(userData.email);
      expect(response.body.user.username).toBe(userData.username);
    });

    it("should reject invalid email", async () => {
      const userData = {
        email: "invalid-email",
        username: "testuser",
        password: "Password123!",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(userData)
        .expect(400);

      expect(response.body.error).toContain("Invalid email");
    });

    it("should reject weak password", async () => {
      const userData = {
        email: "test@example.com",
        username: "testuser",
        password: "weak",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(userData)
        .expect(400);

      expect(response.body.error).toContain("Password must");
    });
  });

  describe("POST /api/auth/login", () => {
    beforeEach(async () => {
      await createTestUser({
        email: "test@example.com",
        username: "testuser",
        passwordHash: await bcrypt.hash("Password123!", 12),
      });
    });

    it("should login with valid credentials", async () => {
      const loginData = {
        identifier: "test@example.com",
        password: "Password123!",
      };

      const response = await request(app)
        .post("/api/auth/login")
        .send(loginData)
        .expect(200);

      expect(response.body.message).toBe("Login successful");
      expect(response.body.user.email).toBe("test@example.com");
    });

    it("should reject invalid credentials", async () => {
      const loginData = {
        identifier: "test@example.com",
        password: "wrongpassword",
      };

      const response = await request(app)
        .post("/api/auth/login")
        .send(loginData)
        .expect(401);

      expect(response.body.error).toBe("Invalid credentials");
    });
  });

  describe("GET /api/auth/me", () => {
    it("should return user data for authenticated request", async () => {
      const user = await createTestUser();
      const session = await createTestSession(user.id);

      const response = await request(app)
        .get("/api/auth/me")
        .set("Cookie", [`connect.sid=${session.id}`])
        .expect(200);

      expect(response.body.user.id).toBe(user.id);
      expect(response.body.user.email).toBe(user.email);
    });

    it("should reject unauthenticated request", async () => {
      const response = await request(app)
        .get("/api/auth/me")
        .expect(401);

      expect(response.body.error).toBe("Authentication required");
    });
  });
});
```

---

## Deployment Guide

### Production Configuration

#### Environment Variables (Production)
```env
# Server
NODE_ENV=production
PORT=5000
HOST=0.0.0.0

# Database (Use connection pooling in production)
DATABASE_URL=postgresql://user:pass@prod-db-host:5432/gamers_tag
PGHOST=prod-db-host
PGPORT=5432
PGUSER=gamers_tag_prod
PGPASSWORD=super_secure_production_password
PGDATABASE=gamers_tag

# Security
SESSION_SECRET=ultra-secure-session-secret-minimum-32-characters-long
JWT_SECRET=ultra-secure-jwt-secret-minimum-32-characters-long

# External Services
SANITY_PROJECT_ID=production_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=production_api_token

# Email
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=sendgrid_api_key
FROM_EMAIL=noreply@gamers-tag.com

# AWS S3
AWS_ACCESS_KEY_ID=production_access_key
AWS_SECRET_ACCESS_KEY=production_secret_key
AWS_REGION=us-east-1
S3_BUCKET=gamers-tag-production

# Redis
REDIS_URL=redis://production-redis-host:6379

# Monitoring
SENTRY_DSN=your_sentry_dsn
LOG_LEVEL=info
```

#### Docker Configuration (`Dockerfile`)
```dockerfile
FROM node:20-alpine

# Install dependencies
RUN apk add --no-cache postgresql-client

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build application
RUN npm run build

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership
RUN chown -R nextjs:nodejs /usr/src/app
USER nextjs

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

# Start application
CMD ["npm", "start"]
```

#### Docker Compose (`docker-compose.prod.yml`)
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
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: gamers_tag
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 30s
      timeout: 10s
      retries: 3

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl/certs
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:
```

#### Nginx Configuration (`nginx.conf`)
```nginx
events {
    worker_connections 1024;
}

http {
    upstream app {
        server app:5000;
    }

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;

    server {
        listen 80;
        server_name gamers-tag.com www.gamers-tag.com;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name gamers-tag.com www.gamers-tag.com;

        ssl_certificate /etc/ssl/certs/fullchain.pem;
        ssl_certificate_key /etc/ssl/certs/privkey.pem;

        # Security headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

        # API routes
        location /api/ {
            limit_req zone=api burst=20 nodelay;
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Auth routes with stricter rate limiting
        location /api/auth/login {
            limit_req zone=login burst=5 nodelay;
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # WebSocket upgrade
        location /ws {
            proxy_pass http://app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Static files
        location /uploads/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            proxy_pass http://app;
        }

        # Frontend
        location / {
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

### Deployment Scripts

#### Deploy Script (`scripts/deploy.sh`)
```bash
#!/bin/bash

set -e

echo "🚀 Starting deployment..."

# Pull latest code
git pull origin main

# Install dependencies
npm ci

# Run database migrations
npm run db:migrate

# Build application
npm run build

# Run tests
npm test

# Restart application
pm2 restart gamers-tag || pm2 start ecosystem.config.js

echo "✅ Deployment completed successfully!"
```

#### PM2 Configuration (`ecosystem.config.js`)
```javascript
module.exports = {
  apps: [{
    name: 'gamers-tag',
    script: 'dist/server/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
};
```

---

## API Documentation

### Authentication Endpoints

#### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "Password123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (201):**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username",
    "firstName": "John",
    "lastName": "Doe"
  },
  "requiresVerification": true
}
```

#### POST /api/auth/login
Authenticate user and create session.

**Request Body:**
```json
{
  "identifier": "user@example.com",
  "password": "Password123!",
  "rememberMe": false
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username",
    "firstName": "John",
    "lastName": "Doe",
    "role": "user",
    "isVerified": true
  }
}
```

#### GET /api/auth/me
Get current user information (requires authentication).

**Response (200):**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username",
    "firstName": "John",
    "lastName": "Doe",
    "role": "user",
    "isVerified": true
  }
}
```

### User Endpoints

#### GET /api/users/profile/:username
Get user profile by username.

**Response (200):**
```json
{
  "user": {
    "id": "uuid",
    "username": "username",
    "firstName": "John",
    "lastName": "Doe",
    "bio": "User bio text",
    "avatar": "https://example.com/avatar.jpg",
    "gamertag": "ProGamer123",
    "joinedAt": "2024-01-01T00:00:00Z"
  }
}
```

#### PUT /api/users/profile
Update current user profile (requires authentication).

**Request Body:**
```json
{
  "firstName": "Updated Name",
  "bio": "Updated bio text",
  "gamertag": "NewGamertag"
}
```

### Team Endpoints

#### GET /api/teams
Get list of teams with pagination.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `search` (string): Search query

**Response (200):**
```json
{
  "teams": [
    {
      "id": "uuid",
      "name": "Team Name",
      "slug": "team-name",
      "description": "Team description",
      "logo": "https://example.com/logo.jpg",
      "memberCount": 15,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

#### POST /api/teams
Create a new team (requires authentication).

**Request Body:**
```json
{
  "name": "Team Name",
  "description": "Team description",
  "website": "https://team-website.com"
}
```

---

## Troubleshooting

### Common Issues

#### Database Connection Issues
```bash
# Check database status
npm run db:status

# Reset database (development only)
npm run db:reset

# Check connection manually
psql -h localhost -U username -d database_name
```

#### Session Issues
```bash
# Clear all sessions
npm run db:clear-sessions

# Check session table
SELECT * FROM session;
```

#### Performance Issues
```bash
# Check database performance
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user@example.com';

# Monitor memory usage
node --inspect server/index.js

# Check Redis connection
redis-cli ping
```

#### File Upload Issues
```bash
# Check upload directory permissions
ls -la uploads/

# Test S3 connection
aws s3 ls s3://your-bucket-name

# Check disk space
df -h
```

### Debugging Tools

#### Database Queries
```typescript
// Enable query logging in development
if (process.env.NODE_ENV === "development") {
  const { drizzle } = require("drizzle-orm/postgres-js");
  
  const db = drizzle(client, { 
    schema, 
    logger: {
      logQuery: (query, params) => {
        console.log("🔍 Query:", query);
        console.log("📋 Params:", params);
      }
    }
  });
}
```

#### API Request Logging
```typescript
// Add detailed request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});
```

### Production Monitoring

#### Health Checks
```typescript
// Comprehensive health check
app.get("/health", async (req, res) => {
  const checks = {
    database: await checkDatabaseHealth(),
    redis: await checkRedisHealth(),
    storage: await checkStorageHealth(),
    memory: process.memoryUsage(),
    uptime: process.uptime(),
  };

  const isHealthy = Object.values(checks).every(check => 
    typeof check === "boolean" ? check : true
  );

  res.status(isHealthy ? 200 : 503).json({
    status: isHealthy ? "healthy" : "unhealthy",
    checks,
    timestamp: new Date().toISOString(),
  });
});
```

#### Error Tracking
```typescript
// Centralized error logging
export function logError(error: Error, context?: any) {
  const errorLog = {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    pid: process.pid,
  };

  console.error("🚨 Error:", JSON.stringify(errorLog, null, 2));
  
  // Send to external service in production
  if (process.env.NODE_ENV === "production" && process.env.SENTRY_DSN) {
    // Sentry.captureException(error, { extra: context });
  }
}
```

---

## Summary

This comprehensive backend guide provides everything needed to develop, deploy, and maintain the GAMERS TAG platform backend. Key areas covered:

- **Complete setup and configuration**
- **Robust authentication and security**
- **Scalable database architecture**
- **Real-time WebSocket implementation**
- **File upload and storage management**
- **Performance optimization and caching**
- **Comprehensive testing strategy**
- **Production deployment guide**
- **Monitoring and troubleshooting**

The backend is designed to be production-ready with proper error handling, security measures, and scalability considerations. All code examples are based on modern best practices and can be directly implemented in the project.