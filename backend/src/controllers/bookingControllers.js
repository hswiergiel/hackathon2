const models = require("../models");

const browse = (req, res) => {
  models.booking
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
  models.booking
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
  const booking = req.body;

  // TODO validations (length, format...)

  booking.id = parseInt(req.params.id, 10);

  models.booking
    .update(booking)
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
  const booking = req.body;
  booking.vehicle_owner_id = req.params.owner;

  // TODO validations (length, format...)

  models.booking
    .insert(booking)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.booking
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

const updateCovoit = (req, res) => {
  const { id } = parseInt(req.params.id, 10);

  models.booking
    .covoit(req.body.carpooling, id)
    .then(([result]) => {
      res.send(result);
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
  updateCovoit,
};
