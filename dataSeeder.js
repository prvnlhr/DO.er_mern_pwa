const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./model/userData');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Sample user data
const usersData = [
  { name: 'John Doe', phoneNumber: '1234567890' },
  { name: 'Jane Smith', phoneNumber: '9876543210' },
  // Add more users as needed
];

// Insert sample user data into the "users" collection
const seedData = async () => {
  try {
    await User.insertMany(usersData);
    console.log('Demo data inserted successfully.');
  } catch (error) {
    console.error('Error inserting demo data:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
