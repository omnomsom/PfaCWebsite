# Animal Adoption NGO Website

## Introduction
This ia a MERN [MongoDB, ExpressJS, React, NodeJS] Stack-based website for NGOs and animal shelters to simplify the adoption process of rescued animals.
### Project Structure

## Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm must be installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/omnomsom/PfaCWebsite.git
    cd PfaCWebsite
    ```

2. Install dependencies for the frontend:

    ```bash
    cd client
    npm install
    ```

3. Install dependencies for the backend:

    ```bash
    cd server
    npm install
    ```

### Configuration

Create a `.env` file in the `server` directory and configure the following environment variables:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=<Your MongoDB Connection URI>
JWT_SECRET=<Your JWT Secret Key>
```

Replace `<Your MongoDB Connection URI>` and `<Your JWT Secret Key>` with your MongoDB connection string and a secret key for JWT authentication.

## Running the Application

### Frontend

Navigate to the `client` directory and run the following command:

```bash
npm run dev
```

This command starts the React development server.

### Backend

Navigate to the `server` directory and run the following command:

```bash
npm run server
```

This command starts the Node.js and Express.js server.

## Usage

Once both the frontend and backend are running, you can access the application by opening your browser and navigating to `http://localhost:3000` (or the specified port in your React development server configuration).

## Hosting the public adoption catalog

Deploy the API first. In Railway, connect this repository and use the repository root with `npm start` as the start command. In the Railway service variables, set `NODE_ENV=production`, `PUBLIC_CATALOG_ONLY=true`, and `MONGO_URI` for the existing database. Catalog-only mode exposes the animal GET routes and disables the animal write and user routes. Generate a public service domain after deployment and check that `/api/animals` returns JSON.

In Cloudflare Pages, connect this same repository and set the root directory to `frontend`, the build command to `npm run build`, and the output directory to `dist`. Set the production build variable `VITE_API_ORIGIN` to the Railway service origin, including `https://`. Use the assigned `pages.dev` domain to verify the gallery, a direct link to an animal detail page, and the photos returned by the API.

The original listings and their photo URLs live in MongoDB. If restoring from a backup, restore the original records before checking image delivery.


## Testing account registration locally

Run the API with a separate local MongoDB database and a test JWT secret. From the repository root:

```sh
MONGO_URI=mongodb://127.0.0.1:27017/pfac_accounts_test \
PUBLIC_CATALOG_ONLY=false \
JWT_SECRET="$(node -p 'require("node:crypto").randomBytes(32).toString("hex")')" \
npm start
```

In another terminal, start the frontend with accounts enabled. Vite proxies API requests to the local server on port 5000.

```sh
VITE_ENABLE_ACCOUNTS=true npm run dev --prefix frontend
```

Open the local site, select **Sign in → Register**, and use sample credentials. The account remains in the test database so you can sign out and sign in again.
