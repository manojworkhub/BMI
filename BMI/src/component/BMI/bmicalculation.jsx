import { useState } from "react";
import "./bicalculation.css";

function Bmi() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistats] = useState();
  const [error,setError]=useState("")
  function handelkeydown (e){
    if(e.key == 'Enter'){
    sendResult()}
  }
  function takeingHeightvalue(e) {
    setHeight(e.target.value);
  }
  function takeingWeightvalue(e) {
    setWeight(e.target.value);
  }
  const sendResult = () => {
  const validHeight=/^\d+$/.test(height);
  const validWeight=/^\d+$/.test(weight);
    if (validHeight<=700 && validWeight) {
      const heightInMeter = height / 100;
      const bmivalue = weight / (heightInMeter * heightInMeter);
      setBmi(bmivalue.toFixed(2));
      if (bmivalue < 18.5) {
        setBmistats("underWeight");
      } else if (bmivalue >= 18.5 && bmivalue < 24.9) {
        setBmistats("Normal Weight");
      } else if (bmivalue >= 25 && bmivalue < 29.9) {
        setBmistats("overWeight");
      } else {
        setBmistats("obese");
      }
      setError("")
    } else {
      setBmi(null);
      setBmistats("");
      setError(" plz enter valide height and weight")
    }
  };
  function clearAll(){
    setHeight("")
    setWeight("")
    setBmi(null)
    setBmistats("")
    setError("")
  }
 
  return (
    <>
      <div className="continer">
        <div className="box"></div>
        <div className="base">
          <h1>BMI CALCULATOR</h1>
          {error && <p className="error">{error}</p>}
          <div>
            <label htmlFor="height">Enther the height (max:700)</label>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="Enter height here"
              value={height}
              onChange={takeingHeightvalue}  onKeyDown={handelkeydown}
            />
          </div>
          <div>
            <label htmlFor="weight">Enther the height</label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Enter weight here"
              value={weight}
              onChange={takeingWeightvalue} onKeyDown={handelkeydown}
            />
          </div>
          <button onClick={sendResult} >calculate</button>
          <button onClick={clearAll} >clear all</button>

          {bmi !== null && (
            <div className="result">
              <p>your BMI is :{bmi}</p>
              <p>starus : {bmistatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Bmi;
