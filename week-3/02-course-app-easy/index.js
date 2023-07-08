const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const { username, password } = req.body;
  if (username && password) {
    const newAdmin = { username, password, id: Date.now() };
    ADMINS.push(newAdmin);
    res.status(201).json(newAdmin);
  } else {
    res.status(400).json({ message: "Invalid username or password" });
  }
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
  const { username, password } = req.body;

  if (username && password) {
    const foundAdmin = ADMINS.findIndex((admin) => admin.username === username);
    let foundAdminPassword;

    foundAdmin !== -1 ? (foundAdminPassword = foundAdmin.password) : null;
    if (foundAdmin && foundAdminPassword === password)
      res.status(200).json({ message: "Admin Logged In Successfully" });
    else res.status(403).json({ message: "You are not Admin" });
  } else {
    res.status(400).json({ message: "Invalid username or password" });
  }
});

app.post("/admin/courses", (req, res) => {
  // logic to create a course
  const admin = {
    username: req.headers.username,
    password: req.headers.password,
  };
  if (!admin.username || !admin.password)
    res.status(403).json({ message: "Not Authenticated" });

  const isAdminIndex = ADMINS.findIndex(
    (adm) => admin.username === adm.username
  );
  const isAdminPassword = isAdminIndex ? !admin.password : !admin.password;
  // if ()
});

app.put("/admin/courses/:courseId", (req, res) => {
  // logic to edit a course
});

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
});

app.post("/users/login", (req, res) => {
  // logic to log in user
});

app.get("/users/courses", (req, res) => {
  // logic to list all courses
});

app.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
