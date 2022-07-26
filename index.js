const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'css')));
app.use('/html', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'HTML', 'text.html'));
});
console.log("Server Started");
app.listen(9008);