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
app.get('/restrData/:resId', async (req, res) => {
  try {
    // Retrieve data based on the resId parameter from the URL
    const { resId } = req.params;
    const restaurant = await foodApp.findOne({
      'sections.SECTION_SEARCH_RESULT': {
        $elemMatch: {
          'info.resId': resId
        }
      }
    });

    if (!restaurant) {
      // If no restaurant is found, send a 404 Not Found response
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    // Send the retrieved restaurant data as a JSON response
    res.json(restaurant);
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));


