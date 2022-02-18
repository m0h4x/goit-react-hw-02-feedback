import React  from "react";
import FeedbackOptions from './FeedbackOptions';
import Section from "./Section/Section";
import Statistics from "./Statistics";
import Notification from "./Notification";


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (key) => { 

   this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }))
  }

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, num) => acc + num, 0);
    return total
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good/this.countTotalFeedback()*100)
      };
  
  render() { 
    const { good, neutral, bad } = this.state;
     
  return (
    <>
        <Section className="options" title="Please leave feedback">
          <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={ this.onLeaveFeedback}
          />
        </Section>
                               
        <Section className="statistics" title='Statistics'>
        {this.countTotalFeedback()
          ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
          />)
          : (<Notification message='There is no feedback'/>)} 
        
        </Section>
    </>
    )
  }
};

export default App