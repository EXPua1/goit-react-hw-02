import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";

import {
  Container,
  Description,
  Feedback,
  Notification,
  Options,
  Section,
} from "./components";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feed-back");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  }); // Инициализация из локал стореджа

  useEffect(() => {
    window.localStorage.setItem("saved-feed-back", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedBack = feedback.good + feedback.neutral + feedback.bad;
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1, // обновление фидбека
    }));
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 }); // обнуление фидбека
  };
  const positiveFeedback =
    totalFeedBack > 0 ? Math.round((feedback.good / totalFeedBack) * 100) : 0;

  return (
    <Section>
      <Container>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          showReset={totalFeedBack > 0}
          resetFeedback={resetFeedback}
        />
        {totalFeedBack > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedBack}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </Container>
    </Section>
  );
};

export default App;
