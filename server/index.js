var express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');


const app = express();
const port=process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
const uri="mongodb+srv://dafah-project:dafah123@cluster0.9lw2y.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(uri,{useNewUrlParser: true ,useUnifiedTopology: true ,useCreateIndex: true});
const connection=mongoose.connection;

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

connection.once('open',() => {
console.log("mongodb connected");
})

const itemRouter = require('./router/items');
 app.use('/item', itemRouter);

 //the rout file is not done yet f
//  const userRouter = require('./router/users');
//  app.use('/user', userRouter);



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

