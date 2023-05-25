import { useState } from "react"
import Birthday from "./components/Birthday"
import Age from "./components/Age"
import './App.css'
import ArrowIcon from "../src/images/icon-arrow.svg"

const App = () => {
  const [birthday, setBirthday] = useState({
    day: "",
    month: "",
    year: ""
  })

  const current = new Date()
  const [currentDay, currentMonth, currentYear] = [
    current.getDate(), 
    current.getMonth() + 1, 
    current.getFullYear()
  ]

  const birthDay = Number(birthday.day)
  const birthMonth = Number(birthday.month)
  const birthYear =  Number(birthday.year)

  const isLeapYear = () => 
    birthYear % 400 === 0 
      ? true
      : birthYear % 4 === 0 && birthYear % 100 !== 0
      ? true
      : false
  

  const hasThirtyDays = () => 
    birthMonth === 4 || birthMonth === 6 
      || birthMonth === 9 || birthMonth === 11
      ? true
      : false

  const ageYear = 
    currentMonth > birthMonth 
      ? currentYear - birthYear
      : currentMonth < birthMonth
      ? currentYear - birthYear - 1
      : currentDay >= birthDay
      ? currentYear - birthYear
      : currentYear - birthYear - 1

  const ageMonth = 
    currentMonth > birthMonth && currentDay >= birthDay
      ? currentMonth - birthMonth
      : currentMonth > birthMonth && currentDay < birthDay
      ? currentMonth - birthMonth - 1
      : currentMonth < birthMonth && currentDay >= birthDay
      ? 12 - (birthMonth - currentMonth)
      : currentMonth < birthMonth && currentDay < birthDay
      ? 11 - (birthMonth - currentMonth)
      : currentMonth === birthMonth && currentDay < birthDay
      ? 11
      : 0

  const ageDay = 
    currentDay === birthDay
      ? 0
      : currentDay > birthDay
      ? currentDay - birthDay
      : hasThirtyDays()
      ? 30 - birthDay + currentDay
      : (birthMonth !== 2) && (!hasThirtyDays())
      ? 31 - birthDay + currentDay
      : (birthMonth === 2) && (isLeapYear())
      ? 29 - birthDay + currentDay
      : 28 - birthDay + currentDay


  const [age, setAge] = useState({
    day: "- -",
    month: "- -",
    year: "- -"
  })

  const handleAge = () => {
    setAge({
      day: ageDay,
      month: ageMonth,
      year: ageYear
    })
  }

  const [isEmpty, setIsEmpty] = useState({
    day: false,
    month: false,
    year: false
  })

  const handleIsEmpty = () => {
    for (let property in birthday) {
      if (birthday[property].trim().length === 0) {
        setIsEmpty(prev => {
          return {
            ...prev,
            [property]: true
          }
        })
      }
    }
  }

  const regex = {
    day: /^(0?[1-9]|[1-2][0-9]|3[0-1])$/, 
    /* matches 1 to 31, with an optional leading zero */
    month: /^(0?[1-9]|1[0-2])$/, 
    /* matches 1 to 12, with an optional leading zero */
    year: /^(19\d{2}|20[0-2]\d|2030)$/ 
    /* matches 1900 to 2030 */
  }

  const [regexResult, setRegexResult] = useState({
    day: true,
    month: true,
    year: true
  })

  const handleRegexResult = () => {
    for (let property in birthday) {
      if (!regex[property].test(birthday[property])) {
        setRegexResult(prev => {
          return {
            ...prev,
            [property]: false
          }
        })
      }
    }
  }

  const [isPast, setIsPast] = useState({
    day: true,
    month: true,
    year: true
  })

  const handleIsPast = () => {
    if (birthYear > currentYear) {
      setIsPast(prev => {
        return {
          ...prev,
          year: false
        }
      })
    } else if (birthYear === currentYear) {
      if (birthMonth > currentMonth) {
        setIsPast(prev => {
          return {
            ...prev,
            month: false
          }
        })
      } else if (birthMonth === currentMonth && birthDay > currentDay) {
        setIsPast(prev => {
          return {
            ...prev,
            day: false
          }
        })
      }
    }
  }
  
  const [isValid, setIsValid] = useState(true)

  const handleIsValid = () => {
    if (hasThirtyDays() 
        && birthDay > 30) {
      setIsValid(false)
    } else if (birthMonth === 2 
              && isLeapYear()
              && birthDay > 29
              && birthDay < 32) {
      setIsValid(false)
    } else if (birthMonth === 2 
              && !isLeapYear() 
              && birthDay > 28
              && birthDay < 32) {
      setIsValid(false)
    }
  }

  const handleChange = e => {
    const {name, value} = e.target
    setBirthday(prev => {
      return {
        ...prev,
        [name]: value
      }
    })

    setAge({
      day: "- -",
      month: "- -",
      year: "- -"
    })

    setIsEmpty({
      day: false,
      month: false,
      year: false
    })

    setRegexResult({
      day: true,
      month: true,
      year: true
    })

    setIsPast ({
      day: true,
      month: true,
      year: true
    })

    setIsValid(true)
  }

  const testAll = () => {
    for(let property in isEmpty) {
      if (isEmpty[property]) {
        return false
      } else if (!regexResult[property]) {
        return false
      } else if (!isPast[property]) {
        return false
      } else if (!isValid) {
        return false
      }
    } 
    return true
  }

  const handleClick = () => {
    handleIsEmpty()
    handleRegexResult()
    handleIsPast()
    handleIsValid()
    testAll()
    handleAge()
  }

  return (
    <div className="App">
      <Birthday 
        birthday={birthday} 
        handleChange={handleChange}
        isEmpty={isEmpty}
        regexResult={regexResult}
        isPast={isPast}
        isValid={isValid}
      />

      <div className="divider">
        <hr className="divider--line"/>
        <button className="divider--arrow" onClick={handleClick}>
          <img 
            src={ArrowIcon} 
            alt="arrow icon" 
            className="divider--arrow-icon"
          />
        </button>
      </div>
      
      <Age 
        testAll={testAll()}
        age={age}
      />
    </div>
  )
}

export default App

// HOW TO CLACULATE AGE
  // AD = ageDay, AM = ageMonth, AY = ageYear
  // BD = birthDay, BM = birthMonth, BY = birthYear
  // CD = currentDay, CM = currentMonth, CY = currentYear

  // FOR AY
    // ALWAYS CY >= BY, 
    // (1) CM > BM => AY = CY - BY
    // (2) CM < BM =>  AY = CY - BY - 1
    // (3) CM = BM => CD >= BD ? AY = CY - BY : AY = CY - BY - 1

  // FOR AM
    // ALWAYS CY >= BY, 
    // (1) CM > BM => CD >= BD => AM = CM - BM
    //                CD < BD => AM = CM - BM - 1
    // (2) CM < BM => CD >= BD => AM = 12 - (BM - CM)
    //                CD < BD => AM = 11 - (BM - CM)
    // (3) CM = BM => CD >= BD => AM = 0
    //                CD < BD => AM = 11

  // FOR AD
    // ALWAYS CY >= BY, 
    // (1) CM > BM => CD > BD => AD = CD - BD
    //                CD < BD => (1) if BM = 4/6/9/11, AD = 30 - BD + CD
    //                           (2) if BM = 1/3/5/7/8/10/12, AD = 31 - BD + CD
    //                           (3) if BM = 2 & BY is a leap year, AD = 29 - BD + CD,
    //                                               not a leap year, AD = 28 - BD + CD
    //                CD = BD => AD = 0
    // (2) CM < BM => CD > BD => AD = CD - BD
    //                CD < BD => (1) if BM = 4/6/9/11, AD = 30 - BD + CD
    //                           (2) if BM = 1/3/5/7/8/10/12, AD = 31 - BD + CD
    //                           (3) if BM = 2 & BY is a leap year, AD = 29 - BD + CD,
    //                                                  not a leap year, AD = 28 - BD + CD
    //                CD = BD => AD = 0
    // (3) CM = BM => CD > BD => AD = CD - BD
    //                CD < BD => (1) if BM = 4/6/9/11, AD = 30 - BD + CD
    //                           (2) if BM = 1/3/5/7/8/10/12, AD = 31 - BD + CD
    //                           (3) if BM = 2 & BY is a leap year, AD = 29 - BD + CD,
    //                                               not a leap year, AD = 28 - BD + CD
    //                CD = BD => AD = 0

    //error states
    // 1. "this field is required" using "isEmpty"
    //     test: day/month/year 
    //     show: day/month/year 
    // 2. "must be a valid ___"  using "regexResult"
    //     test: day/month/year
    //     show: day/month/year
    // 3. "must be in the past" using "isPast"
    //     test: day/month/year
    //     show: day/month/year
    // 4. "must be a valid date" using "isValid"
    //     test: day/month/year 
    //     show: day