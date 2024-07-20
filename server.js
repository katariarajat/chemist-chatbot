const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port



app.get('/items', (req, res) => {
    res.json({ message: 'Get all items' });
})

app.post('/webhook',(req,res) => {
    
})

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})


