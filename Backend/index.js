const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

async function getRandomAdvice() {
  try {
    const data = await fs.readFile('advice.json', 'utf8');
    const adviceData = JSON.parse(data);
    const adviceList = adviceData.advice;
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    const adtext = adviceList[randomIndex].advice;
    return { text: adtext, number: randomIndex };
  } catch (err) {
    console.error('Error reading the file:', err);
    return { text: 'Error fetching advice', number: null };
  }
}

app.get('/',async (req, res) => {
    const advice = await getRandomAdvice();
    res.send(advice);
    console.log("sent");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});