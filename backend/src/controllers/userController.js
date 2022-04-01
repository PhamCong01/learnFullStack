const users = require("../models/user");
class userController {
  // [GET]/allUser
   allUser = async (req, res) => {
    try {
     const allUsers = await users.find({});
     res.status(200).json({msg : "get users successfully"});
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  // [DELETE]/:id/delete
  deleteUser = async (req, res) => {
    try {
      const userDelete = await users.findOneAndDelete({_id: req.params.id});
      await res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}

module.exports = new userController();
