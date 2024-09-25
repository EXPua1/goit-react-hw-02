import css from "./Options.module.css";
import React from "react";

export const Options = ({ updateFeedback, showReset, resetFeedback }) => {
  return (
    <>
      <ul className={css.list_container}>
        <li>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        <li>{showReset && <button onClick={resetFeedback}>Reset</button>}</li>
      </ul>
    </>
  );
};
