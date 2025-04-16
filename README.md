# 🚴‍♂️ Bike Servicing

An API-driven backend application for managing bike servicing records, built with modern tools and designed for efficiency and scalability.

---

## 🌐 Live API

🚀 [live link](https://your-railway-url.com)

## 🧰 Tech Stack

- **Backend Framework:** Node.js + Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Validation:** Zod
- **Type Safety:** TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL (local or cloud)
- Yarn or npm

### Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/fayshal-bin-amir-002/bike-servicing-backend.git
cd bike-servicing-backend

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env
# Fill in your DB connection string and other envs in .env

# 4. Generate Prisma client & migrate DB
npx prisma generate
npx prisma migrate dev --name init

# 5. Run the development server
npm run dev
```
