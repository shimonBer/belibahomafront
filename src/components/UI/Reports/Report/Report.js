import React from "react";
import { Button } from "react-bootstrap";

function chooseType(type) {
  switch (type) {
    case "ordinary":
      return "חברותא";
    case "group":
      return "קבוצתי";
    default:
      return "אחר";
  }
}

const Report = props => {
  return (
    <tr>
      <td colSpan="2">
      {!props.isTrainee ? (
          <Button className="text-center m-1 btn-danger" onClick={props.deleteReport}>
            מחיקה
          </Button>
        ) : null}
        <Button className="text-center m-1 btn-info" onClick={props.details}>
          פרטים
        </Button>
        {!props.isTrainee ? (
          <Button className="text-center m-1" onClick={props.editReport}>
            עריכה
          </Button>
        ) : null}
      </td>
      <td>
        {props.reportYear}
      </td>
      <td>{`${new Date(props.date).getDate()}/${new Date(
        props.date
      ).getMonth() + 1}/${new Date(props.date).getFullYear()}`}</td>
      <td>{props.type === "ordinary" ? props.chavrutaTime : "------"}</td>
      <td>{props.type === "ordinary" ? props.studyTime : props.totalTime}</td>
      <td>
        {props.type === "ordinary"
          ? props.trainee ? `${props.trainee.fname} ${props.trainee.lname}` : "------"
          : "------"}
      </td>
      <td>{ props.tutor ? `${props.tutor.fname} ${props.tutor.lname}` : "------"}</td>
      <td>{chooseType(props.type)}</td>
    </tr>
  );
};

export default Report;
