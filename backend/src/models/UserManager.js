const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [user.title]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }

  findUserByEmail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = userManager;
