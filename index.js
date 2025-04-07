import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'
const app = express();
const PORT = 6969

app.use(bodyParser.json()); //JSON data will be used in this application..

app.use('/', userRoutes);

//app.get('/', (req,res) => {res.send("CRUD Application!!")})
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
