const users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class AuthController {
  // [POST]/resgister
  resgister = async (req, res) => {
    try {
      // hash password
      const slat = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, slat);

      // create new user
      const newUser = await users({
        name: req.body.name,
        email: req.body.email,
        password: hashed,
      });

      // save new user to database
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  // [POST]/login
  login = async (req, res) => {
    try {
      const user = await users.findOne({ name: req.body.name });
      if (!user) {
        res.status(404).json("wrong name");
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json("wrong password");
      }
      if (user && validPassword) {
        const accessToken = await jwt.sign(
          {
            id: user.id,
            admin: user.admin,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "2h" }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}

module.exports = new AuthController();
