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
