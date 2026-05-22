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
