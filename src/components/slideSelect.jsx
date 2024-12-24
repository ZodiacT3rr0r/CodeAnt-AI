import "./slideSelect.css";

const SlideSelect = ({ selected, setSelected }) => {
  

  return ( 
    <div className="select">
      <button
        className={`option ${selected === "SAAS" ? "active" : ""}`}
        onClick={() => setSelected("SAAS")}
      >
        <span>SAAS</span>
      </button>

      <button
        className={`option ${selected === "Self Hosted" ? "active" : ""}`}
        onClick={() => setSelected("Self Hosted")}
      >
        <span>Self Hosted</span>
      </button>

      <div
        className="sliding-background"
        style={{
          transform: selected === "SAAS" ? "translateX(0)" : "translateX(100%)",
        }}
      />
    </div>
  );
}
 
export default SlideSelect;