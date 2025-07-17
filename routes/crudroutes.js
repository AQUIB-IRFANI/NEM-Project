const express = require("express");
const router = express.Router();
const crudController = require("../controller/crudController");

function isLogged(req, res, next) {
  if (req.session.user) return next();
  res.redirect('/login');
}
router.get('/', isLogged, crudController.index);


router.get('/create', isLogged, (req, res) => {
  res.render('crud/create');
});
router.post('/create', isLogged, crudController.create);

router.get('/:id/edit', isLogged, crudController.edit);
router.post('/:id/update', isLogged, crudController.update);

router.post('/:id/delete', isLogged, crudController.delete);

module.exports = router;