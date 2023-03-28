import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';


let app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({
    message: "Hello World"
  });
});

app.get('/h', (req, res) => {
  res.send("Hgggggggello World");
});


const port =  3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});