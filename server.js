const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Stored as plain text (⚠️ Not secure)
  data: { type: String, default: "NA" },
  courses: { type: [String], default: [] }, // Array to store multiple course titles
});

const User = mongoose.model("User", UserSchema, "users");

// 🔹 Register Route (POST /users)
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Save user with plain text password (⚠️ Not secure)
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

// 🔹 Login Route (POST /login) - No bcrypt, No JWT
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, courses } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update profile fields if provided
    if (name) user.name = name;
    if (email) user.email = email;

    // Update courses if provided
    if (courses) {
      // Ensure courses is an array
      const newCourses = Array.isArray(courses) ? courses : [courses];

      // Add new courses that are not already enrolled
      newCourses.forEach((course) => {
        if (!user.courses.includes(course)) {
          user.courses.push(course);
        }
      });
    }

    await user.save();
    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
