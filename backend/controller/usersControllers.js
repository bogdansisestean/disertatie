const Users = require("../models/Users");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find({});
    res.json(allUsers);
    console.log("users try success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
    console.log("allUsers try error");
  }
};

// const getUserByName = async (req, res) =>{
//   try{
//     const userByName = await Users.find({name: req.name})
//     res.json(userByName)
//   } catch(error){
//     console.error(error);
//     res.status(500).json({message: "Server Error"});
//     console.log("usersByName try error")
//   }
// }
module.exports = {
  getAllUsers,
  // getUserByName
};
