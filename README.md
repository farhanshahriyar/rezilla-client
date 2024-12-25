## Rezilla - Real Estate Platform

"Rezilla" project involves the development of a Real Estate Platform using the MERN stack. The platform serves as an online space where users can add and buy real estate properties.
## Features

## Overview
This repository contains the front-end codebase for a comprehensive **Real Estate Management Web Application**. The platform facilitates interactions between property buyers, agents, and administrators, enabling efficient property transactions and management.

## Features
### General Features
- Browse and view all available properties.
- Secure user authentication and authorization.
- Responsive design using TailwindCSS.

### User Roles
#### General Users (Buyers):
- Explore property listings.
- Add properties to their wishlist.
- Make offers and track purchased properties.
- Submit and view property reviews.

#### Agents:
- Add, update, and manage property listings.
- Track sold properties and manage property requests.

#### Administrators:
- Manage users, properties, and reviews.
- Access analytics through an admin dashboard.

### Additional Features
- Integrated payment system for transactions.
- Dynamic and reusable components (e.g., Header, Footer, Loading Spinner).
- Utilities for date formatting and image uploading.
- Under construction placeholder for ongoing development.

## Project Structure
```plaintext
farhanshahriyar-rezilla-client/
├── index.html
├── public/
│   ├── assets/
│   │   └── images/            # Static assets (e.g., icons, about, login images)
│   └── property.json          # Mock data for properties
├── postcss.config.js          # PostCSS configuration for CSS processing
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── .eslintrc.cjs              # ESLint configuration
├── README.md                  # Project documentation
├── tailwind.config.js         # TailwindCSS configuration
├── src/
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global CSS
│   ├── components/            # Reusable components
│   ├── layouts/               # Application layouts (Dashboard, Main)
│   ├── providers/             # Context providers (e.g., AuthProvider)
│   ├── firebase/              # Firebase configuration
│   ├── hooks/                 # Custom React hooks
│   ├── routes/                # App routes and private route logic
│   ├── pages/                 # All application pages (Home, Login, Dashboard, etc.)
│   ├── App.css                # Application-wide CSS
│   └── utils/                 # Utility functions
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/farhanshahriyar-rezilla-client.git
   ```
2. Navigate to the project directory:
   ```bash
   cd farhanshahriyar-rezilla-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Tech Stack
- **Framework:** React with Vite
- **Styling:** TailwindCSS
- **State Management:** Context API
- **Authentication:** Firebase
- **Tools:** ESLint, PostCSS

## Key Files
- **`src/firebase/firebase.config.js`:** Firebase authentication setup.
- **`src/hooks/`:** Custom hooks for API integration and role-based logic.
- **`src/pages/`:** Page components organized by roles and functionality.

    
## Demo

- [@Rezilla - Find Your Best Real Estate](https://rezillabangladesh.netlify.app/)


## Authors

- [@farhanshahriyar](https://github.com/farhanshahriyar)

