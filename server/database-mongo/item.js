var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true ,useUnifiedTopology: true });

// var db = mongoose.connection;

// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

 const Schema = mongoose.Schema;

  let itemSchema = new Schema({
    name: {
      type: String,
      required:true
      },
      description: {
          type: String,
          required:true
      },

      img: {
          type: String,
          required:true
      }
  });
//   //Create Model

const itemmodel = mongoose.model("Item", itemSchema);

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };


// function save(data){
//   var itemform=new Item({
//     name:data.name,
//     description:data.description,
//     img:data.img
//   });

//   itemform.save(function(err,doc){
//     if(err) throw err;
//     console.log("connected")
//   })
// }


module.exports = itemmodel;
// module.exports.selectAll = selectAll;
// module.exports.save=save;