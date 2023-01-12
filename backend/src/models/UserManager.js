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

  getbyemailandpassword(user) {
    return this.connection.query(
      `select * from ${this.table} where email = ? and password=?`,
      [user.email, user.password]
    );
  }
}

module.exports = userManager;
