## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ekramul28/E-Commerce-Application-Server
   cd ecommerce-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the required variables:
   ```env
   # Node.js Environment
   NODE_ENV="development"
   PORT=5000
   ```

# Database Configuration

DATABASE_URL="postgresql://e_commers_asgl_user:jqM0SX6LbHrXwnvTmpYXoBl0bg77CWhD@dpg-cterlflds78s73djkpng-a.oregon-postgres.render.com/e_commers_asgl"

# JWT Configuration

JWT_SECRET="64ff771b98a53d68452dac21773d9d31c30f651f050350246e0509c06d940f3f"
EXPIRES_IN="2d"
REFRESH_TOKEN_SECRET="d336de9d257ccbbae9cd735f91d525069e9c5d92723a019f8c5c8e5d3896c5ef"
REFRESH_TOKEN_EXPIRES_IN="30d"
RESET_PASS_SECRET="DKFJNDJKFNVKDJFNVJKDFVKJDdjkbvdJJKjnkjKJNJKnBbkjMbHJbJHJbBbjJKBKJ"
RESET_PASS_TOKEN_EXPIRES_IN="10M"

# Cloudinary Configuration

CLOUDINARY_CLOUD_NAME="dvtdneocc"
CLOUDINARY_API_KEY="625384168839741"
CLOUDINARY_API_SECRET="TK5cNSBfnvosPvnT55g8lehKhD0"

# Email Configuration

SENDER_EMAIL="mdekramulhassan168@gmial.com"
SENDER_APP_PASS="tffp gopv flal wlaj"
RESET_PASS_UI_LINK="https://travel-tips-destination-guides-client-dh516goks.vercel.app/resetPassword"

# Payment Gateway (AamarPay) Configuration

AMRPAYURL="https://sandbox.aamarpay.com/jsonpost.php"
AMRPAYURLVERYFIURL="https://sandbox.aamarpay.com/api/v1/trxcheck/request.php"
AMRPAYID="aamarpaytest"
AMRPAYKey="dbb74894e82415a2f7ff0ec3a97e4183"

# Payment URLs

SUCCESSURL="http://localhost:5000/api/v1/payment/conformation"
CANCELURL="http://localhost:5000/api/v1/payment/fail"
ERRORURL="http://localhost:5000/api/v1/payment/fail"

````

4. Run database migrations:
```bash
npm run migrate
````

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   npm start
   ```

# E-Commerce Application

The E-Commerce Application is designed to provide a comprehensive online shopping experience for users, vendors, and administrators. This platform offers intuitive, responsive, and secure features to ensure a seamless experience for all roles. It is built with modern web development technologies to ensure scalability and high performance.

---

## Table of Contents

- [Features](#features)
- [Roles and Responsibilities](#roles-and-responsibilities)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### General

- Fully responsive and mobile-friendly design.
- Secure authentication with JWT.
- Integration with third-party payment processors (e.g., Aamarpay, Stripe).

### Home Page

- Display all products with infinite scrolling.
- Advanced filtering and search (by price range, category, keywords).
- Show categories and flash sale products with quick navigation options.

### Product Details Page

- Detailed product descriptions, prices, categories, and images.
- Related products section.
- User reviews and ratings.

### Cart

- Products can only be added from one vendor at a time.
- Display total cost with detailed product information.

### Checkout

- Coupon code application for discounts.
- Secure payments using third-party services.

### Vendor Dashboard

- Manage shop information and products.
- View and respond to customer reviews.
- Paginated product and order lists.

### Admin Panel

- Full control over the platform, including monitoring and moderation.
- Manage users and vendors, blacklist shops, and monitor transactions.
- Dynamically manage product categories.

### Additional Functionalities

- Product comparison feature.
- Recent products page for users.
- Order history for both customers and vendors.

---

## Roles and Responsibilities

### Admin

- Monitor and control the platform.
- Manage users (add, edit, suspend, or delete accounts).
- Blacklist vendor shops.
- Dynamically manage product categories.
- Monitor transactions and user activity.

### Vendor

- Manage shop details (name, logo, description).
- Add, edit, duplicate, or delete products.
- View and respond to customer reviews.
- View order history specific to their shop.

### User (Customer)

- Browse, search, and filter products.
- Add products to the cart and make purchases.
- Leave reviews and ratings for purchased products.
- View recent products and order history.
- Compare products within the same category.

---

## Technologies Used

### Frontend

- Next.js

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL

### Third-Party Integrations

- Payment: Aamarpay
- File Storage: Cloudinary

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
