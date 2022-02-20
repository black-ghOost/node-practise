const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Yay! server is running sucessfully!!</h1>');
});

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
    console.log(`Listening on port ${PORT}`);
});
