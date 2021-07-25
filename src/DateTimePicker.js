import "date-fns";
import { createStyles, makeStyles } from "@material-ui/core";

import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import moment from "moment";

const daysSelector = [];
for (let i = 0; i < 31; i++) {
  daysSelector.push(moment().add(i, "days").format("dddd MMM D"));
}

export const loopRange = daysSelector;

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
][new Date().getMonth()];


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "400px",
      background: theme.palette.common.white,
      padding: "0 2rem",
      fontFamily: theme.typography.fontFamily,
      paddingBottom: "1rem",
      minWidth: "25rem",
      maxWidth: "28em",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    overflow: {
      height: "25rem",
      overflowY: "scroll",
    },
    time: {
      paddingLeft: "2rem",
    },
    daySelect: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "1rem 1rem",
      "&:hover": {
        background: theme.palette.grey[200],
      },
    },
    weekDay: {
      marginLeft: "2rem",
    },
    timeSelect: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginLeft: "2rem",
    },
    hours: {
      marginRight: "1rem",
      padding: "8px 7px",
    },
    minutes: {
      marginRight: "1rem",
      padding: "8px 7px",
    },
    period: {
      marginRight: "1rem",
      padding: "8px 7px",
    },
    choose: {},
    "@media (max-width: 834px) and (min-width: 516px)": {
      root: {
        width: "91vw",
        padding: "0 1rem",
      },
    },
    "@media (max-width: 515px) and (min-width: 415px)": {
      root: {
        width: "70vw",
        padding: "0 .5rem",
        minWidth: "84vw",
      },
      choose: {
        fontSize: "1.2rem",
        padding: "0 .6rem",
      },
      timeSelect: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: "2rem",
      },
      hours: {
        padding: "8px 5px",
      },
      minutes: {
        padding: "8px 5px",
      },
      period: {
        padding: "8px 5px",
      },
    },
    "@media (max-width: 414px) and (min-width: 321px)": {
      root: {
        width: "70vw",
        padding: "0 .5rem",
        minWidth: "84vw",
      },
      choose: {
        fontSize: "1.2rem",
        padding: "0 .6rem",
      },
      timeSelect: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: "2rem",
      },
      hours: {
        padding: "8px 5px",
      },
      minutes: {
        padding: "8px 5px",
      },
      period: {
        padding: "8px 5px",
      },
    },
    "@media (max-width: 320px) and (min-width: 0px)": {
      root: {
        width: "70vw",
        padding: "0.5rem",
        minWidth: "270px",
      },
      choose: {
        fontSize: "1.2rem",
        padding: "0 .6rem",
      },
      timeSelect: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: "2rem",
      },
      hours: {
        padding: "4px 0",
      },
      minutes: {
        padding: "4px 0",
      },
      period: {
        padding: "4px 0",
      },
    },
  })
);
/*
 * Returns the responsive drawer component
 *
 * This is the user profile, which also includes the media queries for
 * small screens, large screens and the tablet views. This component returns
 * various props like title, subTitle, image, subText, primaryBtn
 *
 * This component also consists of test cases.
 */
function DateTimePicker() {
  const classes = useStyles();
  const [selectedTime, setselectedTime] = React.useState(0);
  const [period, setPeriod] = React.useState("");
  const [minuteindex, setminuteindex] = React.useState("");
  const [hourIndex, sethourIndex] = React.useState("");
  const hours = [];
  for (let i = 1; i < 13; i++) {
    hours.push(i);
  }
  
  const minutes = [];
  for (let i = 0; i < 61; i += 5) {
    minutes.push(i);
  }
  
  const startTime = moment().startOf('day')
  
  const duration = ["AM", "PM"];
  const handleChange = () => {};
  const choose = "Choose date and time";


  return (
    <div className={classes.root}>
      <div>
        <div className={classes.container}>
          <h2 className={classes.choose}>{choose}</h2>
        </div>
        <div className={classes.overflow}>
          {loopRange.map((val, id) => {
            return (
              <div key={id}>
                <div className={classes.daySelect}>
                  <FormControl component="fieldset">
                    <RadioGroup name={val} value={id}>
                      <span>
                        <FormControlLabel
                          value={id}
                          control={
                            <Radio
                              checked={selectedTime === id ? true : false}
                              value={id}
                              color="primary"
                              onChange={() => {
                                setselectedTime(id);
                                handleChange()
                              }}
                            />
                          }
                          label={val}
                        />
                      </span>
                    </RadioGroup>
                  </FormControl>
                  {selectedTime === id ? (
                    <div className={classes.time}>
                      <select
                        className={classes.hours}
                        value={hourIndex}
                      
                        onChange={(
                          event
                        ) => {
                          sethourIndex(event.target.value);
                        }}
                      >
                        {hours.map((hoursValue, idx) => {
                          return (
                            <option value={hoursValue} key={idx}>
                              {hoursValue}
                            </option>
                          );
                        })}
                      </select>
                      <select
                        className={classes.minutes}
                        value={minuteindex}
                       
                        onChange={(
                          event
                        ) => {
                          setminuteindex(event.target.value);
                        }}
                      >
                        {minutes.map((minutesVal, ind) => {
                          return (
                            <option value={minutesVal} key={ind}>
                              {minutesVal}
                            </option>
                          );
                        })}
                      </select>
                      <select
                        className={classes.period}
                        value={period}
                    
                        onChange={(
                          event
                        ) => {
                          setPeriod(event.target.value);
                        }}
                      >
                        {duration.map((periodVal, index) => {
                          return (
                            <option value={periodVal} key={index}>
                              {periodVal}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DateTimePicker;
