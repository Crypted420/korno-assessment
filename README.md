# Medium Clone - Korna Assessment

A responsive Medium-inspired interface built as part of the Korna Frontend Engineer assessment. This project demonstrates modern React development practices with a focus on design fidelity, component architecture, and responsive design.

## Project Overview

This is a high-fidelity replica of the Medium interface, built according to the assessment specifications:

- **Task**: Build a responsive replica of the provided design references
- **Scope**: Pure visual implementation - no backend functionality required
- **Technologies**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Focus**: Design fidelity, code quality, component architecture, and responsiveness

## Features

- ✅ **Responsive Design**: Seamless adaptation between desktop and mobile layouts
- ✅ **Modern Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- ✅ **Component Architecture**: Modular, reusable components following best practices
- ✅ **Design System**: Consistent styling with Tailwind CSS and shadcn/ui components
- ✅ **Accessibility**: Semantic HTML and accessible component structure
- ✅ **Code Quality**: ESLint configuration with TypeScript-aware rules

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Development**: ESLint + TypeScript ESLint

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd medium-clone-shadcn
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── article-card.tsx
│   ├── header.tsx
│   ├── navigation-tabs.tsx
│   └── sidebar.tsx
├── lib/                # Utilities and interfaces
│   ├── interfaces.tsx  # TypeScript type definitions
│   └── utils.ts        # Utility functions
├── assets/             # Static assets
├── homepage.tsx        # Main homepage component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Responsive Behavior

- **Desktop**: Full-width layout with sidebar navigation
- **Mobile**: Collapsible navigation and optimized content flow
- **Tablet**: Adaptive layout that bridges desktop and mobile experiences

## Component Architecture

The application is built with a modular component structure:

- **Header**: Navigation and branding
- **Sidebar**: User profile and navigation links
- **Article Card**: Reusable component for article previews
- **Navigation Tabs**: Topic-based content filtering
- **UI Components**: Consistent design system components

## Development Notes

This project uses modern development practices:

- **TypeScript**: Full type safety throughout the application
- **Component Composition**: Leveraging React's composition patterns
- **Utility-First CSS**: Tailwind CSS for rapid, consistent styling
- **Performance**: Optimized with Vite's fast build system
- **Code Quality**: ESLint rules ensuring consistent code style
