import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

const PORT =process.env.PORT || 5000;
app.get('/', (req, res)=>{
    res.json("Hello from Supabase Backend!!!")
})

app.get("/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "Connected to Supabase!", time: result.rows[0] });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});



app.get("/api/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json({ success: true, users: result.rows });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ success: false, message: "Database query failed" });
    }
});

app.post('/api/users/add', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, password]
        );
        res.status(201).json({ success: true, user: result.rows[0] });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ success: false, message: "Failed to add user" });
    }
});


app.put('/api/users/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const result = await pool.query(
            "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
            [name, email, password, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, user: result.rows[0] });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ success: false, message: "Failed to update user" });
    }
});

app.delete('/api/users/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ success: false, message: "Failed to delete user" });
    }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
