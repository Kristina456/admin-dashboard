# Company dashboard

## Technologies

- Node v22.14.0+
- NPM 10.9.2+
- Nextjs 16.2.6
- Sass 1.99.0
- TypeScript 5

## Development

1. Copy `.env.example` to `.env`
2. `npm install`
3. `npm run dev`

## Scripts

### `dev`

Start the development environment for the project. Usage: `npm run dev`.

### `start`

Start the production environment for the project. Usage: `npm run start`.

### `build`

Create a production build of the project. Usage: `npm run build`.

### `lint`

Run linter to ensure code style. Usage: `npm run lint`.

## Environment

### `NEXT_PUBLIC_CMS_API_URL`

Required. URL of the API the data is retrieved from.

Example value: `NEXT_PUBLIC_API_URL=http://localhost:3000/`

## Development of the project

1. Initial commit
2. Added project settings such as Next.js, SCSS, and Prettier configuration, and updated the README
3. Created the initial app structure, main pages, and global styles
4. Added core components such as Login, Navigation, Sidebar, and Button to build the initial app layout
5. Started working on the login page logic
6. Added user management table functionality, including adding, deleting, and editing users
7. Separated logic into individual components and added initial styling
8. Created the home page and added styling
9. dded a delete user confirmation modal to prevent accidental deletions
10. Added styling for the login page and Loading component
11. Extracted the delete user modal into a separate component and fixed some bugs in the Button component
12. Improved API error handling and added the ErrorWarning modal
13. Added error warnings for tables
14. Added the settings page and simulated API failures
15. Updated sidebar colors and fixed margin issues
16. Added table styling
17. Added styling for the new user modal
18. Made final corrections
19. Update readme

###

## Which parts did you prioritize and why?

At the beginning I just wanted to get the main features working, so I focused on things like login, user management and layout before spending too much time on styling.

The project structure and components were organized in a way that keeps the code cleaner and easier to reuse. Additional attention was given to user experience by adding confirmation modals, loading states, and error handling to prevent accidental actions and improve usability.

The final phase included UI polishing, fixing layout issues, improving styling consistency.

## What challenges did you encounter?

During development, one of the main challenges was organizing the application structure in a way that kept the code clean and reusable as the project grew. Separating logic into smaller components required additional refactoring but improved maintainability.

Another challenge was handling application states and API errors properly.

Managing user interactions was also important, especially preventing accidental actions such as deleting users, which led to adding confirmation modals.

The final challenges were mostly related to styling consistency, layout spacing, and fixing smaller UI bugs across different components and pages.

## What would you add or improve if you had more time?

I would also spend additional time refining the UI and overall user experience.
