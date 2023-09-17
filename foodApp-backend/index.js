const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');




app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://bajpaibhupesh25:Bhupesh123@cluster0.vpfpqcn.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "foodApp" });

// Define a mongoose model for your data
const foodApp = mongoose.model('fooditems', {
  // Define your data schema here
  // Example:
  id: String,
  entities: String,

});

// Handle GET request to fetch all data
app.get('/restrData', async (req, res) => {
  try {
    // Retrieve all data from the "FoodItem" collection
    const data = await foodApp.find();

    // Send the retrieved data as a JSON response
    res.json(data);
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


