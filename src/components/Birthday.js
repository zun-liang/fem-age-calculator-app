function Birthday(props) {
  return (
    <div className="birthday--container">
        <div className="birthday--container-small">
        <label 
            htmlFor="day" 
            className={`birthday--label 
                        ${props.isEmpty.day 
                          || !props.regexResult.day
                          || !props.isPast.day
                          || !props.isValid
                            ? "error--label"
                            : ""}`}>
            Day
        </label>
        <input 
            type="text" 
            id="day" 
            name="day"
            placeholder="DD" 
            value={props.birthday.day} 
            onChange={props.handleChange}
            className={`birthday--number 
                        ${props.isEmpty.day 
                            || !props.regexResult.day
                            || !props.isPast.day
                            || !props.isValid
                              ? "error--border"
                              : ""}`}
        />
        <p className={props.isEmpty.day
                          ? "error--state"
                          : "error--state-hidden"}>
            This field is required
        </p>
        <p className={!props.regexResult.day 
                        && !props.isEmpty.day
                        && props.isPast.day
                        && props.isValid
                          ? "error--state"
                          : "error--state-hidden"}>
            Must be a valid day
        </p>
        <p className={!props.isPast.day
                        && props.regexResult.day 
                        && !props.isEmpty.day
                        && props.isValid
                          ? "error--state"
                          : "error--state-hidden"}>
            Must be in the past
        </p>
        <p className={!props.isValid
                        && props.isPast.day
                        && props.regexResult.day 
                        && !props.isEmpty.day
                            ? "error--state"
                            : "error--state-hidden"}>
            Must be a valid date
        </p>
        </div>

        <div className="birthday--container-small">
        <label 
            htmlFor="month" 
            className={`birthday--label 
                        ${props.isEmpty.month 
                        || !props.regexResult.month
                        || !props.isPast.month
                        || !props.isValid
                            ? "error--label"
                            : ""}`}>
            Month
        </label>
        <input 
            type="text" 
            id="month" 
            name="month"
            placeholder="MM" 
            value={props.birthday.month}
            onChange={props.handleChange}
            className={`birthday--number 
                        ${props.isEmpty.month 
                            || !props.regexResult.month
                            || !props.isPast.month
                            || !props.isValid
                                ? "error--border"
                                : ""}`} 
        />
        <p className={props.isEmpty.month
                          ? "error--state"
                          : "error--state-hidden"}>
            This field is required
        </p>
        <p className={!props.regexResult.month 
                        && !props.isEmpty.month
                        && props.isPast.month
                        && props.isValid
                          ? "error--state"
                          : "error--state-hidden"}>
            Must be a valid month
        </p>
        <p className={!props.isPast.month
                        && props.regexResult.month 
                        && !props.isEmpty.month
                        && props.isValid
                          ? "error--state"
                          : "error--state-hidden"}>
            Must be in the past
        </p>
        </div>

        <div className="birthday--container-small">
        <label 
            htmlFor="year" 
            className={`birthday--label 
                        ${props.isEmpty.year 
                        || !props.regexResult.year
                        || !props.isPast.year 
                        || !props.isValid
                            ? "error--label"
                            : ""}`}>
            Year
        </label>
        <input 
            type="text" 
            id="year" 
            name="year" 
            placeholder="YYYY"
            value={props.birthday.year}
            onChange={props.handleChange}
            className={`birthday--number 
                        ${props.isEmpty.year 
                            || !props.regexResult.year
                            || !props.isPast.year 
                            || !props.isValid
                                ? "error--border"
                                : ""}`} 
        />
        <p className={props.isEmpty.year
                          ? "error--state"
                          : "error--state-hidden"}>
            This field is required
        </p>
        <p className={!props.regexResult.year 
                        && !props.isEmpty.year
                        && props.isPast.year
                        && props.isValid
                          ? "error--state"
                          : "error--state-hidden"}>
            Must be a valid year since 1900
        </p>
        <p className={!props.isPast.year
                        && props.regexResult.year 
                        && !props.isEmpty.year
                        && props.isValid
                          ? "error--state"
                          : "error--state-hidden"}>
            Must be in the past
        </p>
        </div>
    </div>
  )
}

export default Birthday;