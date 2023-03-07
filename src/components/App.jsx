import React from 'react';
import { useState } from 'react';
import css from './App.module.css';
import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './NotificationMessage/NotificationMessage';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    };
  };

 const countTotalFeedback = () => {    
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {    
    const total = countTotalFeedback(good);
    return Math.round((good * 100) / total);
  };  

 const feedbacks = ['good', 'neutral', 'bad'];

   return (
      <div className={css.container}>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
           options={feedbacks}
           onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
};



