import "./signinL.css"

const SigninL = () => {
  return ( 
    <div className="left">
      <div className="stats">
        <div className="fs">
          <div className="top">
            <img src="/logo.svg" alt="Logo" />
            AI to detect & Autofix Bad Code
          </div>
          <div className="bottom">
            <p className="lang_supp">
              <span>30+</span>
              Language Support
            </p>
            <p className="developers">
              <span>10K+</span>
              Developers
            </p>
            <p className="hours_saved">
              <span>100K+</span>
              Hours Saved
            </p>
          </div>
        </div>

        <div className="sd">
          <div className="inside">
            <img src="/pie.svg" alt="Pie Chart" />
            <p className="issues">
              Issues Fixed
              <span>500K+</span>
            </p>
            <div className="this_week">
              <img src="/upArr.svg" alt="up arrow" />
              <p className="p14">14%</p>
              <p className="week">This week</p>
            </div>
          </div>
        </div>
      </div>
      <img className="subtract" src="/Subtract.svg" alt="" />
    </div>
  );
}
 
export default SigninL;