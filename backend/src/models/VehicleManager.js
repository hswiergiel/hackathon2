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

  //a modifier si besoin
  update(vehicle) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [vehicle.title, vehicle.id]
    );
  }
}

module.exports = vehicleManager;
