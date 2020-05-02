import React from "react";
import {
  GridList,
  Typography
} from "@material-ui/core";
import CalendarElement from "../CalendarElement";
import { createCalendar } from "../../services/calendar";
import * as styles from "./style.css";

const calendar = createCalendar();
const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = () => {
  console.log(calendar);
  return (
    <ul className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map(d => (
          <li key={d}>
            <Typography
              className={styles.day}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement day={c}>{c.format("D")}</CalendarElement>
          </li>
        ))}
      </GridList>
    </ul>
  );
};

export default CalendarBoard;