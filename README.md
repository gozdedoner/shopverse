🛍️ ShopVerse
Smart Shopping Made Simple

ShopVerse is a modern e-commerce frontend application built with Next.js 15, TypeScript, and Tailwind CSS.
It delivers a smooth, minimal shopping experience with dark/light mode, cart management, and product details — all powered by the FakeStoreAPI
.

🌐 Live Demo: https://shopverse-eta.vercel.app

⚙️ Tech Stack

Next.js 15 – App Router, Server & Client Components

TypeScript – Type safety & clean architecture

Tailwind CSS – Modern responsive UI

Zustand – Lightweight global state management for Cart

Lucide React – Elegant icons

Vercel – Deployment & Hosting

✨ Features

✅ Product listing with dynamic routing
✅ Product detail page (Server Component fetching from API)
✅ Add / remove items from Cart
✅ Local storage persistence with Zustand
✅ Dark & Light mode toggle
✅ Responsive design for all screens
✅ Smooth animations and shadows

📁 Project Structure
shopverse/
├── app/
│   ├── components/      → Navbar, ProductCard, ThemeToggle
│   ├── shop/            → Product listing & detail pages
│   ├── cart/            → Shopping cart page
│   ├── store/           → Zustand global store
│   └── layout.tsx       → Root layout
├── public/              → Static assets
├── styles/              → Global CSS
└── README.md

🚀 Getting Started

Clone the project and install dependencies:

git clone https://github.com/gozdedoner/shopverse.git
cd shopverse
npm install
npm run dev


Visit → http://localhost:3000

🧠 What I Learned

While developing ShopVerse, I improved my understanding of:

State management with Zustand

Dynamic routing & data fetching in Next.js App Router

TypeScript types for React components

Vercel deployment flow

Building clean, reusable UI components

💫 Future Improvements

Add user authentication (NextAuth)

Implement search and filtering

Stripe or PayPal checkout integration

Admin panel for product management

👩‍💻 Author

Gözde Döner
Frontend Developer | Creative Tech Architect

