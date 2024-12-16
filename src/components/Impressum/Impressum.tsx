import "./Impressum.scss";
const Impressum = () => {
  return (
    <div>
      <div style={{ color: "#FFF", height: "70px" }}>Impressum</div>
      <ul className="impressum">
        <li style={{ color: "#FFF" }}>
          reactjs: https://opensource.fb.com/legal/terms or opensource@meta.com{" "}
        </li>
        <li style={{ color: "#FFF" }}>
          linkedin: https://www.linkedin.com/legal/impressum
        </li>
        <li style={{ color: "#FFF" }}>
          giphy:
          https://support.giphy.com/hc/en-us/sections/360003012792-Privacy-and-Safety
        </li>
      </ul>
    </div>
  );
};
export default Impressum;
