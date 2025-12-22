# Imaginify

🚀 Introduction

**Imaginify** is an AI-powered image generator that allows users to create, transform, and manage images using various AI-based transformation types. This project is based on a YouTube tutorial from **JavaScript Mastery**. 

It demonstrates a Software as a Service (SaaS) platform with AI-powered features, payment integration, and a credit system. The application includes functionalities such as AI generative fill, image restoration, object recoloring, object removal, and background removal. Users can create, edit, save, delete, and download images. It also features a login system, a home page, a profile page, a details page, and an update page.

Key highlights:

* **AI-powered image generation and transformations** using Cloudinary
* **Secure user authentication** with Clerk
* **Credit system** for managing image transformations
* **Stripe integration** for seamless credit purchases
* **Profile dashboard** displaying user credits and image gallery
* **Complete CRUD operations** for image management
* Fully **responsive UI** built with Next.js, TailwindCSS, and React

![imaginify](https://github.com/user-attachments/assets/5841d98b-ab8a-44d3-b3e8-f5c074f0d848)

---

## 🧩 Features

### 🤖 AI Image Transformations

* Generate and transform images using AI-powered tools
* Multiple transformation types available
* Real-time preview of transformations

### 👤 User Management

* **Clerk authentication** for secure sign-up and sign-in
* User profile with credit balance tracking
* Personal image gallery for each user

### 💳 Credit System & Payments

* Credit-based system for image transformations
* **Stripe integration** for purchasing credits
* Transaction history and management

### 🖼️ Image Management

* Upload and store images via **Cloudinary**
* **CRUD operations**: create, read, update, and delete images
* Search and pagination support for image gallery
* Download transformed images

### 🎨 Modern UI/UX

* Responsive design built with **TailwindCSS**
* Clean and intuitive user interface
* Mobile-friendly navigation with sidebar and mobile menu

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 13, React, TypeScript, TailwindCSS
* **Authentication:** Clerk
* **Image Storage:** Cloudinary (with AI transformations)
* **Payments:** Stripe
* **Database:** MongoDB with Mongoose ODM
* **UI Components:** Custom components with shadcn/ui elements
* **Utilities:** Debouncing, query handling, image downloading

---

## ⚡ Installation

### Prerequisites

* Node.js v18+
* MongoDB database
* Stripe account
* Cloudinary account
* Clerk account

### Steps

1. Clone the repository:

```bash
git clone https://github.com/SALVADORPOETA/Imaginify-sm.git
cd Imaginify-sm
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env.local` file with the following:

```env
MONGODB_URL=your_mongodb_connection_string
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
WEBHOOK_SECRET=your_clerk_webhook_secret
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Usage

* **Sign up / Sign in** with Clerk authentication
* **Purchase credits** via Stripe to enable transformations
* **Generate AI images** using the home page interface
* **Transform existing images** using different AI transformation types
* **View your profile** to check credit balance and browse your image gallery
* **Update or delete images** you've created
* **Download transformed images** for use outside the platform

---

## 📦 Project Structure

```
imaginify/
├─ app/
│  ├─ (auth)/
│  │  ├─ sign-in/page.tsx
│  │  └─ sign-up/page.tsx
│  ├─ (root)/layout.tsx
│  ├─ profile/page.tsx
│  ├─ credits/page.tsx
│  └─ transformations/
│     ├─ [id]/page.tsx
│     └─ add/page.tsx
├─ components/
│  ├─ shared/
│  │  ├─ Collection.tsx
│  │  ├─ Checkout.tsx
│  │  ├─ DeleteConfirmation.tsx
│  │  ├─ Header.tsx
│  │  ├─ MobileNav.tsx
│  │  ├─ Sidebar.tsx
│  │  ├─ TransformedImage.tsx
│  │  └─ TransformationForm.tsx
│  └─ ui/
│     ├─ button.tsx
│     └─ toaster.tsx
├─ lib/
│  ├─ actions/
│  │  ├─ user.actions.ts
│  │  ├─ image.actions.ts
│  │  └─ transaction.action.ts
│  ├─ appwrite/config.ts
│  └─ utils.ts
├─ types/
├─ public/
│  └─ assets/
│     ├─ icons/
│     └─ images/
├─ package.json
└─ tsconfig.json
```

---

## 🔧 Key Features & Implementation

### 📊 Database Models

* **User Model** – Stores Clerk ID, email, username, photo, credit balance, and subscription plan
* **Image Model** – Stores image metadata, author info, transformation type, and Cloudinary details
* **Transaction Model** – Records credit purchases and payment information via Stripe

### ⚡ API & Server Actions

* `image.actions.ts` – Complete CRUD operations for images with Cloudinary search integration
* `user.actions.ts` – User creation, updates, deletion, and credit management system
* `transaction.action.ts` – Stripe checkout sessions and transaction creation
* `utils.ts` – Utility functions including image downloading, query handling, and debouncing

### 🎯 Core Functionality

* Server components and server actions for optimized database operations
* Image gallery with pagination and search capabilities
* Credit-based system requiring balance for transformations
* Real-time credit updates after purchases
* Secure payment processing through Stripe webhooks

---

## 🌐 Links

* **GitHub:** [https://github.com/SALVADORPOETA/Imaginify-sm](https://github.com/SALVADORPOETA/Imaginify-sm)
* **LinkedIn:** [https://www.linkedin.com/in/salvador-martinez-sm/](https://www.linkedin.com/in/salvador-martinez-sm/)

---

## ⚖️ License

This is a personal portfolio project by Salvador Martinez based on a JavaScript Mastery tutorial. No commercial use intended.
