# Copilot Instructions for prueba-despliegue

## Project Overview
Angular 21 standalone application using Vitest for testing and Prettier for formatting. Bootstrap pattern uses standalone components with Angular's new standalone APIs (no NgModules).

## Architecture & Structure

### Core Setup
- **Bootstrap**: [src/main.ts](src/main.ts) - Uses `bootstrapApplication()` with config from [src/app/app.config.ts](src/app/app.config.ts)
- **Root Component**: [src/app/app.ts](src/app/app.ts) - Standalone component with `RouterOutlet` for routing
- **Routing**: [src/app/app.routes.ts](src/app/app.routes.ts) - Standalone routes (currently empty, expand here)
- **Styling**: Global [src/styles.css](src/styles.css) + component-scoped CSS (e.g., [src/app/app.css](src/app/app.css))

## Key Conventions

### Component Patterns
- Use **standalone components** (import `{ Component }` from `@angular/core`)
- Include `imports: [...]` array to declare dependencies (no lazy NgModules)
- Use **signals** for reactive state: `signal('initial-value')` with `protected readonly` for template access
- Template files: `*.html` with scoped `*.css`, both co-located in component directory

### Testing
- Test files: `*.spec.ts` (e.g., [src/app/app.spec.ts](src/app/app.spec.ts))
- Framework: **Vitest** (configured via [vitest](https://vitest.dev/) in devDependencies)
- Run: `npm test` (configurable watch mode available)

### Code Quality
- **Prettier** configured for 100-char line width, single quotes, angular parser for HTML
- File naming: kebab-case for files (`app.ts`, `app.config.ts`), PascalCase for classes
- TypeScript strict mode in [tsconfig.json](tsconfig.json)

## Development Workflow

| Task | Command |
|------|---------|
| Start dev server (port 4200) | `npm start` |
| Build for production | `npm build` |
| Watch mode | `npm run watch` |
| Run tests | `npm test` |
| Generate component | `ng generate component name` |

## Critical Integration Points
- **Angular CLI**: All scaffolding and builds via `@angular/cli` v21.1.0
- **Error Handling**: Global error listener configured in `appConfig`
- **Assets**: Static files from [public/](public/) directory served at root
- **Routing**: Empty routes array awaiting feature routes; router provided to config

## Common Tasks for Agents
- **Adding Components**: Generate with `ng generate component`, update route in [app.routes.ts](src/app/app.routes.ts)
- **Adding Services**: Create in `app/services/` as standalone (no decorators needed), inject via DI
- **Styling**: Keep CSS scoped; global overrides in [src/styles.css](src/styles.css)
- **Testing Components**: Use Vitest, access component instance and signals for assertions
