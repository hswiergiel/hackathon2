import "./Adminpagex.scss";

export default function Admin() {
  return (
    <div className="totaladmin">
      <h1 className="hadmin">Welcome to the admin page Hervé </h1>

      <h2 className="usus">List of Users</h2>
      <table className="tabtab1">
        <thead>
          <tr>
            <th>Id :</th>
            <input className="inp" />
            <th>Name :</th>
            <input className="inp" />
            <th>Email :</th>
            <input className="inp" />
            <th>Actions :</th>
            <div className="u1">
              <button className="button-12" type="button">
                Add
              </button>
              <button className="button-12" type="button">
                Edit
              </button>
              <button className="button-12" type="button">
                Remove
              </button>
            </div>
          </tr>
        </thead>
      </table>
      <h2 className="usus2">List of Companies</h2>
      <table className="tabtab2">
        <thead>
          <tr>
            <th>Id :</th>
            <input className="inp" />
            <th>Name :</th>
            <input className="inp" />
            <th>Email :</th>
            <input className="inp" />
            <th>Actions :</th>
            <div className="u1">
              <button className="button-12" type="button">
                Add
              </button>
              <button className="button-12" type="button">
                Edit
              </button>
              <button className="button-12" type="button">
                Remove
              </button>
            </div>
          </tr>
        </thead>
      </table>
    </div>
  );
}
