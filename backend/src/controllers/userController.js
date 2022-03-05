const user = require("../models/user");

class userController {
  // [GET]/allUser
  allUser = async (req, res) => {
    try {
      const allUser = await user.find({});
      await res.status(200).json(allUser);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  // [DELETE]/:id/delete
  deleteUser = async (req, res) => {
    try {
      const userDelete = await user.findOneAndDelete({_id: req.params.id});
      await res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
}

module.exports = new userController();
