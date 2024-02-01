const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
 
const connect = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI);
        const { name, host } = db.connection;
 console.log(
     );
  } catch (error) {
    console.log("No se ha conectado la db❌", error.message);
  }
};

module.exports = { connect };  `Conectada la DB 👌  en el host: ${host} con el nombre: ${name}`