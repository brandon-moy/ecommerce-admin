# eCommerce Admin

An admin dashboard for users to add and edit products as well as see data for their ecommerce store.

## 🤔 Why I built this?

I have some interest in eCommerce and online store so I wanted to try to build one. Instead of creating one where users can post their own items as a marketplace, I wanted this to be more like a singular shop that allows a user to control it via an external hub that also includes analytics. This is the admin side of the shop and the frontend store can be visited <a href="https://github.com/brandon-moy/ecommerce-store">here</a>

## 🔗 Live Demo

Try out the application live <a href="https://ecommerce-admin.brandonmoy.com/">here</a>!

## 💻 Technologies Used

Front=End:

- JavaScript
- JSX
- Lucide React
- Next13
- React
- TailwindCSS
- TypeScript

Back=End:

- Clerk
- Cloudinary
- PlanetScale
- Prisma

Additional Tools:

- Axios
- Date FNS
- Stripe
- Zod
- Zustand

## Features

### Overall Store Features

- Users can create a store
- Users can view specific details of the store
- Users can update store name
- Users can delete a store
- Users can toggle between light, dark, and system preferred mode

### Individual Store Features

- Users can view the dashboard (displays revenue, sales, products in stock, and an overview graph)
- Users can view orders and whether they are paid or not
- Users can view API endpoints for the below CRUD features

#### Create, Read, Update, and Delete Features available on:

- Billboards
- Categories
- Sizes
- Colors
- Products

## Preview

### Users can view the dashboard (dark mode)

![View dashboard](/public/dashboard.png "View dashboard")

### Users can create sizes for their products

![Create size](/public/sizes.gif "Creating a size")

### Users can create a product

![Create product](/public/products.gif "Creating a product")

## Getting Started

Things you will need:

- Clerk account
- Cloudinary account (for image storing)
- PlanetScale account
- Stripe account

1. Clone the repository

```
git clone https://github.com/brandon-moy/ecommerce-admin.git
```

2. Install dependencies with Node Package Manager

```
npm install
```

3. Copy the .env files from the .env.example in the root

```
cp .env.example .env
```

4. Update the TOKEN secrets!

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY from Clerk.

The SIGN_IN_URL through to SIGN_UP_URL can all stay the same.

DATA_URL from PlanetScale.

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME from Cloudinary.

STRIPE_API_KEY from Stripe.

While developing, FRONTEND_STORE_URL can stay the same as you will need to have two applications running. The admin will be the first on localhost:3000 and when you start the second application, it will run on localhost:3001 as :3000 is in use.

5. Start up the development server

```
npm run dev
```

6. Open the project in the browser at localhost:3000!
