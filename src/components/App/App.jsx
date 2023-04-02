import { useState, useRef } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import NotifyNoFeedback from 'components/Notification/NotifyNoFeedback';
import Statistics from '../Statistics/Statistics';
import { Box } from 'components/Box/Box';


const App =()=> {
  const [feedback, setFeedback] = useState( {
    good: 0,
    neutral: 0,
    bad: 0,
  })
 
  const onLeaveFeedback = event => {
    const feedbackType = event.target.value;
    setFeedback(prevFeedback => {
      return {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
    });
  };

 const  useIsFirstRender =()=> {
    const isFirst = useRef(true)
  
    if (isFirst.current) {
      isFirst.current = false
  
      return true
    }
  
    return isFirst.current
  }

  // useEffect (()=> {
  //   const statValues = Object.values(feedback);
  //       setTotal( statValues.reduce((prevValue, item) => {
  //         return (prevValue += item);
  //       }, 0))

  //       const good = feedback.good;
  //   setPositiveRatio(Math.round((good / total) * 100)) 
  // }, [feedback, total])

//  const countTotalFeedback = () => {
//     const statValues = Object.values(feedback);
//     return statValues.reduce((prevValue, item) => {
//       return (prevValue += item);
//     }, 0);
//   };

//   const countPositiveRatio = () => {
//     const total = countTotalFeedback();
//     const good = feedback.good;
//     return Math.round((good / total) * 100);
//   };

      const buttonNames = Object.keys(feedback);
    return (
      <Box mx="auto" my={0} px="0" py={5} bg="container">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={onLeaveFeedback}
          />
          {useIsFirstRender() && (
            <NotifyNoFeedback message="There is no feedback so far" />
          )}
        </Section>
        {!useIsFirstRender()  && (
          <Section title="Feedback Statistics">
            <Statistics
              statistic={feedback}
                          />
          </Section>
        )}
      </Box>
    );
  }

export default App;
