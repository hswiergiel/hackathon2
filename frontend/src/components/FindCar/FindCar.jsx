import "./style.scss";
import FCar from "../../assets/findcar.svg";

export default function FindCar() {
  return (
    <div className="findCarContainer">
      <div className="textFindCarBloc">
        <h1 className="titleFindCarBloc">
          Rent,
          <br />
          Put up for rent,
          <br />
          Simply with
        </h1>
        <div className="container">
          {/* <div class="row">
            <div class="col"> */}
          <h3 className="animate-charcter"> ECOCO</h3>
        </div>
        {/* </div>
        </div> */}
      </div>
      <div className="imgFindCarBloc">
        <img className="imgFindCar" src={FCar} alt="find car" />
      </div>
    </div>
  );
}
