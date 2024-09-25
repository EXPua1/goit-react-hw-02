import css from "./Feedback.module.css";
import React from "react";

export const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.span_info}>
      <span>Good: {feedback.good}</span>
      <span>Neutral: {feedback.neutral}</span>
      <span>Bad: {feedback.bad}</span>
      <span>Total Feedback: {totalFeedback}</span>
      <span>Positive Feedback: {positiveFeedback}%</span>
    </div>
  );
};
