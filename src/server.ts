import dotenv from 'dotenv';
dotenv.config();
const dns = require("dns");

// ISP/router DNS often blocks MongoDB Atlas SRV lookups
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
  console.log('MongoDB connection succeed');
  const PORT = process.env.PORT ?? 3003;
})
.catch(err => console.log('ERROR on conection MongoDB: ', err))
