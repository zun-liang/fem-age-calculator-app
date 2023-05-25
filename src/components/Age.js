import CountUp from "react-countup"

const Age = props => 
  <div className="age--container">
    <h1 className="age">
        <span className="age--number">
        {props.testAll === true 
          && props.age.year !== "- -"
                ? <CountUp end={props.age.year}/>
                : "- -"}
        </span> years
    </h1>
    <h2 className="age">
        <span className="age--number">
        {props.testAll === true 
          && props.age.month !== "- -"
                ? <CountUp end={props.age.month}/>
                : "- -"}
        </span> months
        </h2>
    <h2 className="age">
        <span className="age--number">
        {props.testAll === true 
          && props.age.day !== "- -"
                ? <CountUp end={props.age.day}/>
                : "- -"}
        </span> days
    </h2>
  </div>

export default Age