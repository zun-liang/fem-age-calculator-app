const Birthday = ({ birthday, handleChange, isEmpty, regexResult, isPast, isValid }) => 
    <div className="birthday--container">
        <div className="birthday--container-small">
        <label 
            htmlFor="day" 
            className={`birthday--label 
                        ${isEmpty.day 
                        || !regexResult.day
                        || !isPast.day
                        || !isValid
                            ? "error--label"
                            : ""}`}>
            Day
        </label>
        <input 
            type="number"
            min="1"
            max="31"
            step="1"
            id="day" 
            name="day"
            placeholder="DD" 
            value={birthday.day} 
            onChange={handleChange}
            className={`birthday--number 
                        ${isEmpty.day 
                            || !regexResult.day
                            || !isPast.day
                            || !isValid
                            ? "error--border"
                            : ""}`}
        />
        <p className={isEmpty.day
                        ? "error--state"
                        : "error--state-hidden"}>
            This field is required
        </p>
        <p className={!regexResult.day 
                        && !isEmpty.day
                        && isPast.day
                        && isValid
                        ? "error--state"
                        : "error--state-hidden"}>
            Must be a valid day
        </p>
        <p className={!isPast.day
                        && regexResult.day 
                        && !isEmpty.day
                        && isValid
                        ? "error--state"
                        : "error--state-hidden"}>
            Must be in the past
        </p>
        <p className={!isValid
                        && isPast.day
                        && regexResult.day 
                        && !isEmpty.day
                            ? "error--state"
                            : "error--state-hidden"}>
            Must be a valid date
        </p>
        </div>

        <div className="birthday--container-small">
        <label 
            htmlFor="month" 
            className={`birthday--label 
                        ${isEmpty.month 
                        || !regexResult.month
                        || !isPast.month
                        || !isValid
                            ? "error--label"
                            : ""}`}>
            Month
        </label>
        <input 
            type="number"
            min="1"
            max="12"
            step="1" 
            id="month" 
            name="month"
            placeholder="MM" 
            value={birthday.month}
            onChange={handleChange}
            className={`birthday--number 
                        ${isEmpty.month 
                            || !regexResult.month
                            || !isPast.month
                            || !isValid
                                ? "error--border"
                                : ""}`} 
        />
        <p className={isEmpty.month
                        ? "error--state"
                        : "error--state-hidden"}>
            This field is required
        </p>
        <p className={!regexResult.month 
                        && !isEmpty.month
                        && isPast.month
                        && isValid
                        ? "error--state"
                        : "error--state-hidden"}>
            Must be a valid month
        </p>
        <p className={!isPast.month
                        && regexResult.month 
                        && !isEmpty.month
                        && isValid
                        ? "error--state"
                        : "error--state-hidden"}>
            Must be in the past
        </p>
        </div>

        <div className="birthday--container-small">
        <label 
            htmlFor="year" 
            className={`birthday--label 
                        ${isEmpty.year 
                        || !regexResult.year
                        || !isPast.year 
                        || !isValid
                            ? "error--label"
                            : ""}`}>
            Year
        </label>
        <input 
            type="number"
            min="1900"
            max="2030"
            step="1" 
            id="year" 
            name="year" 
            placeholder="YYYY"
            value={birthday.year}
            onChange={handleChange}
            className={`birthday--number 
                        ${isEmpty.year 
                            || !regexResult.year
                            || !isPast.year 
                            || !isValid
                                ? "error--border"
                                : ""}`} 
        />
        <p className={isEmpty.year
                        ? "error--state"
                        : "error--state-hidden"}>
            This field is required
        </p>
        <p className={!regexResult.year 
                        && !isEmpty.year
                        && isPast.year
                        && isValid
                        ? "error--state"
                        : "error--state-hidden"}>
            Must be a valid year since 1900
        </p>
        <p className={!isPast.year
                        && !isEmpty.year
                        && isValid
                        ? "error--state"
                        : "error--state-hidden"}>
            Must be in the past
        </p>
        </div>
    </div>

export default Birthday
