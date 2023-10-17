const mongoose = require('mongoose');

const URI=`mongodb+srv://ramkumaravs01:SijuGhTUQTGfwZ1L@cluster0.qugzcs4.mongodb.net/?retryWrites=true&w=majority`


async function connectToMongoose() {
    try {
      await mongoose.connect(URI);
      console.log(`Connected to MongoDB`);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

module.exports =connectToMongoose;

