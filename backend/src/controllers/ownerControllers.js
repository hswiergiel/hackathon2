const models = require("../models");

const browse = (req, res) => {
  models.owner
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.owner
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const owner = req.body;

  // TODO validations (length, format...)

  owner.id = parseInt(req.params.id, 10);

  models.owner
    .update(owner)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const owner = req.body;

  // TODO validations (length, format...)

  models.owner
    .insert(owner)
    .then(([result]) => {
      res.location(`/owners/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.owner
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res) => {
  models.owner
    .findOwnerByEmail(req.body.email)
    .then(([result]) => {
      if (result.length) {
        const { email, password } = result[0];
        if (password !== req.body.password) {
          res.sendStatus(401);
        } else {
          res.status(201).send(email);
        }
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
};
