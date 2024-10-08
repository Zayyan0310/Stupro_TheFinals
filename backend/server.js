const express = require("express");
const path = require("path");
const db = require("./config/db-config");
const authRouter = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const checkApiKey = require("./middleware/checkApiKey");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors("*"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/test", checkApiKey, (req, res) => {
  res.status(200).send({
    status: "success",
    message: "API is running",
  });
});

app.use("/", checkApiKey, authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}/`);
});
