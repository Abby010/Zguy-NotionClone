# Notion Clone - Abhishek Mehta

Notion-like app that allows users to create notes and organize them in a tree structure.

## Features

- Authentication
- Create, update and delete notes
- Create, update and delete images
- Reorder notes
- Change page title
- Change page cover image
- Create, update and delete pages

## Tech Stack

The app is generated with Vite and uses the following technologies:

- React
- TypeScript
- DndKit (drag and drop)
- CSS Modules
- Supabase (database, authentication, storage)


## Running the app

To run the app locally, you need to create a Supabase project and add the following environment variables to your `.env` file:

```
VITE_SUPABASE_URL=""
VITE_SUPABASE_API_KEY=""
```

Then run the following commands:

```
npm install
npm run dev
```
