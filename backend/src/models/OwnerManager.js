const AbstractManager = require("./AbstractManager");

class ownerManager extends AbstractManager {
  constructor() {
    super({ table: "owner" });
  }

  insert(owner) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [owner.title]
    );
  }

  update(owner) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [owner.title, owner.id]
    );
  }

  findOwnerByEmail(email) {
    return this.connection.query(
      `select email, password from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = ownerManager;
