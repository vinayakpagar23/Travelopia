const asyncHandler = require("express-async-handler");
const Details = require("../Models/detailsModel");


const createDetails = asyncHandler(async (req, res) => {
  const { name, email, destination,no_of_travellers,budgetPerPerson,totalBudget} = req.body;

  if (!name || !email || !destination || !no_of_travellers ) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }
  const userExits = await Details.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const details = await Details.create({
    name,
    email,
    destination,
    no_of_travellers,
    budgetPerPerson,
    totalBudget,
  });

  if (details) {
    res.status(201).json({
      _id: details._id,
      name: details.name,
      email: details.email,
      destination: details.destination,
      no_of_travellers:details.no_of_travellers,
      budgetPerPerson:details.budgetPerPerson
      
    });
  } else {
    res.status(400);
    throw new Error("Failed to insert Data");
  }
});

const allData = asyncHandler(async (req, res) => {
  const data = await Details.find();
  res.send(data);
});


module.exports = { createDetails,allData };
