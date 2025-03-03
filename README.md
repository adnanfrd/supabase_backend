# Supabase Backend API

This is a Node.js backend using **Supabase** as a PostgreSQL database. It provides APIs to manage users with CRUD operations.

## 🚀 Features
- Connects to **Supabase PostgreSQL**
- Supports **CRUD operations** for users
- Uses **Express.js** for routing

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a **.env** file and add your **Supabase credentials**:
```env
SUPABASE_URL=https://your-supabase-url.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

### 4️⃣ Run the Server
```sh
npm start  # or node index.js
```

## 📌 API Endpoints

### ✅ Test Connection
```http
GET /test
```
Response:
```json
{
  "message": "Connected to Supabase!",
  "time": "2025-03-03T12:34:56.789Z"
}
```

### ✅ Get All Users
```http
GET /api/users
```

### ✅ Add a User
```http
POST /api/users/add
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

### ✅ Update a User
```http
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Updated Name"
}
```

### ✅ Delete a User
```http
DELETE /api/users/:id
```

## 🛠️ Technologies Used
- **Node.js** + **Express.js**
- **Supabase (PostgreSQL)**
- **Dotenv** for environment variables
- **pg** for PostgreSQL connection

## 📜 License
This project is licensed under the **MIT License**.
