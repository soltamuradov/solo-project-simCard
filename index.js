require(process.env).config;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

const connectedServerAndDB = async () => {
  const { PORT, MONGO } = process.env;
  try {
    await mongoose.connect(MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`Успешное подключение к порту ${PORT}`);
    });
  } catch (e) {
    console.log(`Ошибка. Не удалось подключиться ${e.toString()}`);
  }
};

connectedServerAndDB();
