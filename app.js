const express = require('express');
const app = express();
const path = require('path');

const userController = require('./controllers/userController');
const userRoute = require('./routes/userRoute');

// Mengatur mesin templat EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(userRoute)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
