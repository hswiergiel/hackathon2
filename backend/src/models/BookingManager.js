const AbstractManager = require("./AbstractManager");

class bookingManager extends AbstractManager {
  constructor() {
    super({ table: "booking" });
  }

  insert(booking) {
    return this.connection.query(
      `insert into ${this.table} (user_id, vehicle_id, vehicle_owner_id, nb_seats, rent_start_date, rent_end_date, carpooling) values (?,?,?,?,?,?,?)`,
      [
        booking.user_id,
        booking.vehicle_id,
        booking.vehicle_owner_id,
        booking.nb_seats,
        booking.rent_start_date,
        booking.rent_end_date,
        booking.carpooling,
      ]
    );
  }

  update(booking) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [booking.title, booking.id]
    );
  }

  covoit(bool, id) {
    return this.connection.query(
      `update ${this.table} set carpooling = ? where id = ?`,
      [bool, id]
    );
  }
}

module.exports = bookingManager;
