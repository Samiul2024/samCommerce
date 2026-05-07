const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Server Running Successfully",
  });
});

module.exports = app;