
const express = require('express');
const path = require('path');
const router = require('../routes')


const app = express();
app.use(express.static(path.join(__dirname, '../../client/public')));
app.use(express.json());


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'))
});


app.use('/api', router);

const PORT = (process.env.PORT || 3000);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
