const AbstractManager = require("./AbstractManager");

class vehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `insert into ${this.table} (kilometer, type, price_per_day, model, is_eco,is_available, year,imageurl, owner_id) values (?,?,?,?,?,?,?,?,?)`,
      [
        vehicle.kilometer,
        vehicle.type,
        vehicle.price_per_day,
        vehicle.model,
        vehicle.is_eco,
        vehicle.is_available,
        vehicle.year,
        vehicle.imageurl,
        vehicle.owner_id,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `update ${this.table} set kilometer = ?, type=?, price_per_day=?, model=?, is_eco=?, is_available=?, owner_id=? where id = ?`,
      [
        vehicle.kilometer,
        vehicle.type,
        vehicle.price_per_day,
        vehicle.model,
        vehicle.is_eco,
        vehicle.is_available,
        vehicle.owner_id,
        vehicle.id,
      ]
    );
  }

  jenAiBesoin(id) {
    return this.connection.query(
      `SELECT ${this.table}.owner_id FROM ${this.table} left join owner on owner.id=${this.table}.owner_id where ${this.table}.id= ?`,
      [id]
    );
  }

  getInfosCars() {
    return this.connection.query(
      `select ${this.table}.*, carpooling from ${this.table} left join booking on ${this.table}.id=vehicle_id order by carpooling desc`
    );
  }

  updateAvailable(vehicle) {
    return this.connection.query(
      `update ${this.table} set is_available = ? where id = ?`,
      [vehicle.is_available, vehicle.id]
    );
  }
}

module.exports = vehicleManager;
