"use strict";
/* IMPORTS */
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { Kafka } = require("kafkajs");

//-------------------------------------------

/* CONFIGS */
//server.server();
const app = express();
dotenv.config();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3000;
var host = process.env.PORT || '0.0.0.0';
///////////////////////////////////////////////////////////////

var kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});

app.post("/new_sale", (req, res) => {
  console.log("new_sale");
  (async () => {
      const producer = kafka.producer();
      //const admin = kafka.admin();
      await producer.connect();
      const { client, count_sopaipillas, hora, stock, ubicacion } = req.body;
      var time = Math.floor(new Date() / 1000);
      let user = {
        client: client,
        count_sopaipillas: count_sopaipillas,
        hora: hora,
        stock: stock,
        ubicacion: ubicacion,
        tiempo: time.toString()
      }
      await producer.send({
        topic: "new_sale",
        //value: JSON.stringify(user)
        messages: [{ value: JSON.stringify(user) }],
      })
      await producer.disconnect();
      //await admin.disconnect();
      res.json(user);
  })();
});



  ///////////////////////////////////////////////////////////////  


app.get("/", (req, res) => {
  res.send("ola api");
});


/* PORTS */

app.listen(port,host, () => {
  console.log(`API run in: http://localhost:${port}.`);
});
