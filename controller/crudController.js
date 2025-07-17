const crudModel = require('../models/crudModel');

exports.create = async (req, res) => {
  const { name, email, age, phone } = req.body;
  const users = new crudModel({ name, email, age, phone });
  await users.save();
  res.redirect('/crud');
}

exports.edit = async (req, res) => {
  const crud1 = await crudModel.findById(req.params.id);
  res.render('crud/edit', { crud1 });
}

exports.update = async (req, res) => {
  const { name, email, age, phone } = req.body;
  await crudModel.findByIdAndUpdate(req.params.id, { name, email, age, phone });
  res.redirect('/crud');
}

exports.delete = async (req, res) => {
  await crudModel.findByIdAndDelete(req.params.id);
  res.redirect('/crud');
}

exports.index = async (req, res) => {
  const show = await crudModel.find();
  res.render('crud/index', { show });
}