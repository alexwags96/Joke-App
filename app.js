// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const API_KEY = process.env.API_KEY;

app.use(cors());

// Route pour récupérer une blague en fonction du type
app.get("/joke/:type", async (req, res) => {
  const jokeType = req.params.type; // Récupérer le type de blague depuis l'URL
  console.log(jokeType);

  try {
    const response = await fetch(
      `https://www.blagues-api.fr/api/type/${jokeType}/random`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`, // Inclure l'API Key si nécessaire
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de la blague");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
