const bcrypt = require("bcrypt");
const registerModel = require("../models/registerModel");

exports.register = async (req, resp) => {
  const { username, email, password } = req.body;
  const hashpwd = await bcrypt.hash(password, 10);
  const user = new registerModel({ username, email, password: hashpwd });
  await user.save();
  resp.redirect('/login');
}

exports.login = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await registerModel.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.user = user;
    res.redirect('/crud');
  } else {
    res.redirect('/login');
  }
};
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
