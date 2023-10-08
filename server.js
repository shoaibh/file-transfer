const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const fs = require("fs");

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Files will be saved in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename to avoid overwriting
  },
});

const upload = multer({ storage: storage });

// Serve HTML page with upload form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ success: true });
});

// Handle file download
app.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;

  const filePath = path.join(__dirname, "uploads", fileName);
  if (fs.existsSync(filePath)) {
    // Set the appropriate Content-Disposition header for the browser to trigger download
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    res.sendFile(filePath);
  } else {
    res.status(404).send("File not found");
  }
});

app.get("/files", (req, res) => {
  const directoryPath = "uploads";
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send("Error reading directory");
    } else {
      res.json(files);
    }
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
