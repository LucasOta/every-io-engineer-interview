# Configuration-Driven Todo List ([every-io engineering challenge](https://github.com/every-io/engineer-interview))

A flexible, scalable todo list application built with React + TypeScript using configuration-driven architecture patterns.

## Demo

https://github.com/user-attachments/assets/06c19a1f-e186-4f6f-929f-bbb03b437cad


## Features

- **Configuration-Driven Workflow**: Easy to add/modify states and transitions through configuration
- **Reusable UI Components**: Button (with size/color variants) and Card components
- **Type-Safe State Management**: Full TypeScript support with proper typing
- **Clean Architecture**: Separation of concerns with custom hooks and declarative configuration

## Current Workflow

**To Do → In Progress → Done**

Items can move forward (Next) or backward (Previous) through the workflow with automatic button state management.

## Architecture

### Key Components

- `ToDoList/` - Main todo list implementation
  - `workflowConfig.ts` - Declarative workflow configuration
  - `useToDoList.tsx` - Generic state management hook
  - `types.ts` - TypeScript definitions
- `ui/` - Reusable UI components
  - `Button.tsx` - Configurable button with variants
  - `Card.tsx` - Container component with hover effects

### Adding New States

Simply update the configuration:

```typescript
// 1. Add to enum
export enum TodoStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  REVIEW = 'review',        // New state
  DONE = 'done'
}

// 2. Update workflow config
export const defaultWorkflowConfig = {
  statuses: [
    { id: TodoStatus.REVIEW, title: 'Review', order: 2 },
    // ... other statuses
  ],
  transitions: [
    { from: TodoStatus.IN_PROGRESS, to: TodoStatus.REVIEW, direction: Direction.NEXT },
    { from: TodoStatus.REVIEW, to: TodoStatus.DONE, direction: Direction.NEXT },
    // ... other transitions
  ],
};
```

The UI automatically renders the new workflow with proper state management.

## Development

### Scripts

```bash
npm start          # Development server
npm run build      # Production build=
npm run lint       # Check code quality
npm run lint:fix   # Fix linting issues
npm run format     # Format code with Prettier
```

### Code Quality

- **ESLint**: Configured with minimal rules for React + TypeScript
- **Prettier**: Consistent code formatting
- **TypeScript**: Full type safety with strict configuration

## Tech Stack

- React 17 + TypeScript
- Custom hooks for state management
- Configuration-driven architecture
- ESLint + Prettier for code quality
