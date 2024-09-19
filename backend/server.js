const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", bookRoutes);

sequelize.sync().then(() => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });