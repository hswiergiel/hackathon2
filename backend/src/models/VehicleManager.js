const AbstractManager = require("./AbstractManager");

class vehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `insert into ${this.table} (kilometer, type, price_per_day, model, is_eco,is_available, owner_id) values (?,?,?,?,?,?,?)`,
      [
        vehicle.kilometer,
        vehicle.type,
        vehicle.price_per_day,
        vehicle.model,
        vehicle.is_eco,
        vehicle.is_available,
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
}

module.exports = vehicleManager;
