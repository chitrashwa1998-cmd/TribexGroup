# Tribex Group - Financial Services Platform

## Overview

Tribex Group is a financial services platform with three specialized divisions: Tribex Alpha (algorithmic trading), Tribex Wealth (wealth management), and Tribex Capital (venture capital). The application is a modern full-stack web platform built with React frontend and Express backend, featuring a company landing page with contact functionality and room for future expansion into comprehensive financial services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching
- **UI Components**: Comprehensive component library including forms, dialogs, navigation, and data visualization components
- **Development**: Hot module replacement and error overlay for development experience

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API structure with centralized route registration
- **Request Handling**: JSON request parsing, CORS support, and comprehensive error handling middleware
- **Development Setup**: Integrated Vite development server with middleware mode for seamless full-stack development
- **Logging**: Custom request logging middleware for API monitoring

### Authentication & Session Management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication ready for implementation
- **Storage Interface**: Abstracted storage interface with both memory and database implementations

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database
- **Schema Management**: Centralized schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database schema migrations and management

### Contact Management System
- **Form Validation**: Zod schema validation for contact form submissions
- **Data Processing**: Server-side validation and error handling for contact inquiries
- **Integration Ready**: Structured for future CRM and email notification integrations

### Styling & Design System
- **CSS Framework**: Tailwind CSS with custom design tokens
- **Theme System**: Dark theme implementation with CSS custom properties
- **Component Variants**: Class Variance Authority for component styling variants
- **Typography**: Multiple font families including Inter, Georgia, and Menlo
- **Responsive Design**: Mobile-first responsive design patterns

### Development & Build Process
- **Build System**: Vite for frontend builds, esbuild for backend compilation
- **Type Safety**: Comprehensive TypeScript configuration across client, server, and shared code
- **Module Resolution**: Path aliases for clean imports and code organization
- **Development Tools**: Replit integration with cartographer and runtime error handling

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection Management**: Database connection pooling and credential management

### UI Component Libraries
- **Radix UI**: Unstyled, accessible UI components for complex interactions
- **shadcn/ui**: Pre-styled component library built on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Replit Platform**: Development environment with integrated tooling
- **Vite Plugins**: Runtime error overlay and cartographer for enhanced development experience

### Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for both client and server-side validation

### Styling Dependencies
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **Class Variance Authority**: Component variant management

### Date & Time
- **date-fns**: Date manipulation and formatting utilities

### Build & Runtime
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development server