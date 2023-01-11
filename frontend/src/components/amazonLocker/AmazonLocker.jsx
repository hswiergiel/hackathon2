import "./amazonLocker.scss";
import amazonCar from "@assets/amazonCar.png";

export default function AmazonLocker() {
  return (
    <section className="amazonArticles">
      <div className="amazonArticleLeft">
        <img alt="amazonCar" src={amazonCar} />
      </div>
      <div className="amazonArticleRight">
        <h2>Want to use AmazonLocker to get your car ?</h2>
        <p>
          Each rental is eligible for near-removal of an AmazonLocker without
          extra charge for you. Yes, as a member of the Ecocco family, you have
          our support, you deserve it.
        </p>
        <button className="buttonAmazonLocker" type="button">
          <p>Want to use AmazonLocker to get your car </p>
        </button>
      </div>
    </section>
  );
}
