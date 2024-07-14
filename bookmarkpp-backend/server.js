const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;
connectDb();

app.use(express.json());
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/book", require("./routes/bookRoutes"));
app.use("/api/bookmark", require("./routes/bookmarkRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});