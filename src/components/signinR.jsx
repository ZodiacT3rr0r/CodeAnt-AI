import { useEffect, useState } from "react";
import SlideSelect from "./slideSelect";
import options from "../data/signinOpts"
import "./signinR.css"

const SigninR = () => {
  const [selected, setSelected] = useState("SAAS")
  const [option, setOption] = useState(options.SAAS);
  useEffect(() => {
    selected === "SAAS" ? setOption(options.SAAS) : setOption(options["Self Hosted"]);
  }, [selected])

  return ( 
    <div className="right">
      <div className="inner">
        <div className="up">
          <div className="welcome">
            <div className="titl">
              <img src="/logo.svg" alt="Logo" />
              CodeAnt AI
            </div>
            <p>Welcome to CodeAnt AI</p>
          </div>
          <SlideSelect selected={selected} setSelected={setSelected} />
        </div>
        <div className="down">
          {option.map((opt, index) => (
            <div className="opt" key={index}>
              <img src={opt.logo} alt="" />
              <div>{opt.text}</div>
            </div>
          ))}
        </div>
      </div>
      <p>By signing up you agree to the <a href="/policies">Privacy Policy</a></p>
    </div>
  );
}
 
export default SigninR;