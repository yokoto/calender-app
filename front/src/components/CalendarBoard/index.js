import React from "react";
import { GridList } from "@material-ui/core";
import CalendarElement from "../CalendarElement";
import { createCalendar } from "../../services/calendar";
import * as styles from "./style.css";

const calendar = createCalendar();

const CalendarBoard = () => {
  console.log(calendar);
  return (
    <ul className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement>{c.format("D")}</CalendarElement>
          </li>
        ))}
      </GridList>
    </ul>
  );
};

export default CalendarBoard;