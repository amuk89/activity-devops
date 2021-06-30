import express from 'express';

const app = express();
const port = 8080;
app.get('/', (req, res) => {
  const nodeEnv = process.env.nodeEnv || "team";
  const hostName = process.env.hostName || "host";
  const password = process.env.password || "passwordisthis";
  res.send(`nodeEnv: ${nodeEnv}, hostName: ${hostName}, password: ${password}`);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});