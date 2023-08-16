import CountUp from "react-countup"

const Age = ({ testAll, age }) => 
  <div className="age--container">
    <h1 className="age">
        <span className="age--number">
        {testAll === true 
          && age.year !== "- -"
                ? <CountUp end={age.year}/>
                : "- -"}
        </span> years
    </h1>
    <h2 className="age">
        <span className="age--number">
        {testAll === true 
          && age.month !== "- -"
                ? <CountUp end={age.month}/>
                : "- -"}
        </span> months
        </h2>
    <h2 className="age">
        <span className="age--number">
        {testAll === true 
          && age.day !== "- -"
                ? <CountUp end={age.day}/>
                : "- -"}
        </span> days
    </h2>
  </div>

export default Age