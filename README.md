<!-- README.md -->
# Project Overview

This is a property management application built with [Next.js](https://nextjs.org). It allows users to manage properties, including adding, editing, and viewing property details.

## Features
- User authentication and profile management.
- Property listing and management.
- Ability to add, edit, and delete properties.
- Bookmark properties for easy access.
- Responsive design for mobile and desktop views.
- Error handling and loading states for better user experience.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Creating the .env File

To configure environment variables for your application, create a `.env` file in the root of your project. This file should not be committed to version control.
Use `.env.example` as a reference for the required variables.

### Required Environment Variables
- `DATABASE_URL`: The connection string for your database.
- `NEXTAUTH_URL`: The URL for your Next.js application.
- `NEXTAUTH_SECRET`: A secret used for signing and encrypting session cookies.
- `GOOGLE_CLIENT_ID`: The client ID for your Google OAuth application.
- `GOOGLE_CLIENT_SECRET`: The client secret for your Google OAuth application.
- `MAPBOX_ACCESS_TOKEN`: The access token for your Mapbox API.
- `CLOUDINARY_CLOUD_NAME`: The Cloudinary cloud name for media assets.
- `CLOUDINARY_API_KEY`: The Cloudinary API key for media assets.
- `CLOUDINARY_API_SECRET`: The Cloudinary API secret for media assets.

### Links to Obtain API Tokens and Secrets
- [MongoDB Cloud](https://cloud.mongodb.com/): Create an account and get your database connection string.
- [Cloudinary Console](https://console.cloudinary.com/): Sign up to manage your media assets and obtain API keys.
- [Google Cloud Console](https://console.cloud.google.com): Set up your project and obtain API credentials for Google OAuth, including client ID and secret. And Google Geocoding API key from there too.
- [Mapbox Console](https://console.mapbox.com/): Create an account to access Mapbox APIs and obtain access tokens. Use public tokens only.

Make sure to replace the placeholder values in the `.env` file with your actual credentials.

## Project Structure

- **app/**: Contains core application components and pages.
  - **actions/**: User actions and business logic.
  - **api/**: API routes for authentication and data handling.
  - **components/**: Reusable UI components.
  - **models/**: Data structures for messages, properties, and users.
- **public/**: Static assets like images and icons.
- **utils/**: Utility functions for data manipulation.

## API Endpoints

- **POST /api/auth**: Handles user authentication.


<!-- ## Deployment Instructions

To deploy the application, follow the instructions in the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

For the easiest deployment experience, consider using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). -->
