# Asset Manager

A full-stack application for managing and organizing digital assets with an Express API backend and Next.js frontend.

## Overview

Asset Manager is a TypeScript-based web application that provides a comprehensive solution for uploading, managing, and organizing digital assets. The application features a monorepo structure with separate backend and frontend packages.

## Tech Stack

### Backend (API)
- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose v9.6.2)
- **Authentication**: JSON Web Tokens (JWT)
- **File Upload**: Multer
- **Cloud Storage**: Cloudinary
- **Security**: bcryptjs for password hashing
- **Validation**: Zod

### Frontend (Web)
- **Framework**: Next.js (v16.2.6)
- **UI Library**: React (v19.2.4)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4)
- **State Management**: TanStack React Query (v5.100.10)
- **HTTP Client**: Axios
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner

## Project Structure

```
asset-manager/
├── api/                 # Express backend
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
├── web/                 # Next.js frontend
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rianhz/asset-manager.git
cd asset-manager
```

2. **Setup Backend**
```bash
cd api
npm install
```

3. **Setup Frontend**
```bash
cd ../web
npm install
```

### Configuration

Create `.env.local` files in both `api` and `web` directories:

**api/.env.local**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_jwt_access_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
FRONTEND_URL=http://localhost:3000
CANVA_CLIENT_ID=your_canva_client_id
CANVA_CLIENT_SECRET=your_canva_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**web/.env.local**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Running Locally

### Development Mode

**Start the backend**
```bash
cd api
npm run dev
```
The API will run on `http://localhost:5000`

**Start the frontend** (in a new terminal)
```bash
cd web
npm run dev
```
The web app will run on `http://localhost:3000`

### Production Build

**Build the backend**
```bash
cd api
npm run build
npm start
```

**Build the frontend**
```bash
cd web
npm run build
npm start
```

## Available Scripts

### Backend (api/)
- `npm run dev` - Start development server with hot reload (nodemon)
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application

### Frontend (web/)
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features

- **Asset Upload**: Upload and manage digital assets with Cloudinary integration
- **Authentication**: Secure user authentication with JWT tokens
- **Password Hashing**: Bcrypt-based password encryption
- **Form Validation**: Client and server-side validation with Zod
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Updates**: Efficient data fetching with React Query
- **Error Handling**: Toast notifications with Sonner

## License

ISC

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

## Author

[rianhz](https://github.com/rianhz)
