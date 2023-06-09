import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const { Component } = require('react');

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  //-----var 2-----
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;
    // console.log(name);
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
    // console.log(state.neutral);
  };
  //------var2-------
  // const onLeaveFeedback = e => {
  //   const { name } = e.target;
  //   if (name === good) {
  //     setGood(prevState => ({ [name]: prevState[name] + 1 }));
  //   } else if (name === neutral) {
  //     setNeutral(prevState => ({ [name]: prevState[name] + 1 }));
  //   } else if (name === bad) {
  //     setBad(prevState => ({ [name]: prevState[name] + 1 }));
  //   }
  // };

  const { good, neutral, bad } = state;
  const countTotalFeedback = ({ state }) => bad + good + neutral;

  const countPositiveFeedbackPercentage = (total, good) =>
    total ? Math.round((good / total) * 100) : 0;

  const total = countTotalFeedback(state);
  const positivePercentage = countPositiveFeedbackPercentage(total, good);

  return (
    <div
      style={{
        width: '600px',
        display: 'block',
        margin: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
        {!total && <Notification message="There is no feedback"></Notification>}
      </Section>
    </div>
  );
};

export default App;

// ================================================
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Notification from './Notification/Notification';
// import Section from './Section/Section';
// import Statistics from './Statistics/Statistics';

// const { Component } = require('react');

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     const { name } = e.target;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   // const stat = { ...this.state };

//   countTotalFeedback = (good, neutral, bad) => bad + good + neutral;

//   countPositiveFeedbackPercentage = (total, good) =>
//     total ? Math.round((good / total) * 100) : 0;

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback(good, neutral, bad);
//     const positivePercentage = this.countPositiveFeedbackPercentage(
//       total,
//       good
//     );

//     return (
//       <div
//         style={{
//           width: '600px',
//           display: 'block',
//           margin: '30px',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 20,
//           color: '#010101',
//         }}
//       >
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title={'Statistics'}>
//           {total > 0 && (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//           {!total && (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
