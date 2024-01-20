import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
  try{
    const response = await axios.get("https://api.adviceslip.com/advice");
  res.render("index.ejs", { advice: response.data.slip.advice });
  } catch (error) {
    res.render("index.ejs", { advice: error.message })
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});