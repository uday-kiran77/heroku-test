const express = require("express");
const nanoid = require("nanoid");

const server_port = process.env.PORT || 3000;
const app = express();

app.get("/api/get", (req, res) => {
  res.send(`Hey`);
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(server_port, () => {
  console.log("server up on ", server_port);
});
