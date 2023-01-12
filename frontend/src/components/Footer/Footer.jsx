import "./Footer.scss";

export default function Footer() {
  return (
    <div className="rectangle">
      <div className="under-rectangle">
        <div className="services">
          <ul className="txtFoot">
            <li>Customer service</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Equipe</li>
            <li>Partenaires</li>
            <li>Carrières</li>
          </ul>
        </div>
      </div>
      <div className="mentionsLeg">
        <ul className="utilisation">
          <li>Conditions d'utilisation</li>
          <li>Politique de confidentialité</li>
          <li>Mentions légales</li>
          <li>@ekoko 2023 - tous droits réservés</li>
        </ul>
      </div>
    </div>
  );
}
