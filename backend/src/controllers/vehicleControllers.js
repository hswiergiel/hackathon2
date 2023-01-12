const models = require("../models");

const browse = (req, res) => {
  models.vehicle
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browsePool = (req, res) => {
  models.vehicle
    .getInfosCars()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.vehicle
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
  const vehicle = req.body;
  vehicle.id = parseInt(req.params.id, 10);
  models.vehicle
    .update(vehicle)
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

const editAvailable = (req, res) => {
  const vehicle = req.body;
  vehicle.id = parseInt(req.params.id, 10);
  models.vehicle
    .updateAvailable(vehicle)
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
  const vehicle = req.body;
  models.vehicle
    .insert(vehicle)
    .then(([result]) => {
      res.location(`/vehicles/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.vehicle
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

const getOwnerId = (req, res) => {
  models.vehicle
    .jenAiBesoin(req.params.id)
    .then(([result]) => {
      const ownerId = result[0];
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(201).send(ownerId);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getOwnerId,
  browsePool,
  editAvailable,
};
