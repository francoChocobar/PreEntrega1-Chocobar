import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
export const Navbar = () => {
  return (
    <div className="container-navbar">
      <ul style={{ display: "flex", gap: "50px" }}>
        <li>Infusores</li>
        <li>Tazas</li>
        <li>Frascos</li>
        <li>Sobres</li>
      </ul>
      <CartWidget />
    </div>
  );
};
