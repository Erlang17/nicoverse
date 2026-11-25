const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "NicoVerse AI",
    status: "online"
  });
});

app.post("/api/ideas", (req, res) => {
  const topic = req.body.topic || "Fakta menarik";

  res.json({
    topic,
    ideas: [
      `5 fakta menarik tentang ${topic}`,
      `Hal yang jarang diketahui tentang ${topic}`,
      `Mitos dan fakta seputar ${topic}`
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("NicoVerse server berjalan");
});
