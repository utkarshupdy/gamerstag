import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  gtId: text("gt_id"),
  email: text("email").notNull(),
  comment: text("comment").notNull(),
  rating: integer("rating").notNull(),
  features: text("features").array().notNull(),
  selectedFeature: text("selected_feature"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const featureGallery = pgTable("feature_gallery", {
  id: serial("id").primaryKey(),
  featureKey: text("feature_key").notNull(),
  title: text("title").notNull(),
  type: text("type").notNull(), // 'image' or 'video'
  url: text("url").notNull(),
  description: text("description"),
  platform: text("platform"), // 'instagram', 'twitter', 'youtube', etc.
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  featuredImage: text("featured_image").notNull(),
  shortDescription: text("short_description").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array().notNull(),
  sourceName: text("source_name").notNull(),
  sourceUrl: text("source_url").notNull(),
  sourceLogo: text("source_logo"),
  author: text("author"),
  publishedAt: timestamp("published_at").notNull(),
  featured: boolean("featured").default(false),
  readTime: integer("read_time"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
  name: true,
  gtId: true,
  email: true,
  comment: true,
  rating: true,
  features: true,
  selectedFeature: true,
});

export const insertFeatureGallerySchema = createInsertSchema(featureGallery).pick({
  featureKey: true,
  title: true,
  type: true,
  url: true,
  description: true,
  platform: true,
});

export const insertNewsSchema = createInsertSchema(news).pick({
  title: true,
  slug: true,
  featuredImage: true,
  shortDescription: true,
  content: true,
  category: true,
  tags: true,
  sourceName: true,
  sourceUrl: true,
  sourceLogo: true,
  author: true,
  publishedAt: true,
  featured: true,
  readTime: true,
  metaDescription: true,
  metaKeywords: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertFeatureGallery = z.infer<typeof insertFeatureGallerySchema>;
export type FeatureGallery = typeof featureGallery.$inferSelect;
export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;
