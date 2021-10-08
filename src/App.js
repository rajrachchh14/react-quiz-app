import React, { useState } from 'react';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
export default function App() {
  const [questionNo, setQuestionNo] = useState(null);
  const [selectAns, setSelectAns] = useState(null);
  const [answerClassName, setAnswerClassName] = useState(false);
  const [stop, setStop] = useState(false);

  const data = [
    {
      id: 1,
      question: 'One One One One',
      answers: [
        {
          text: 'A . AA',
          correct: false,
        },
        {
          text: 'B . BB',
          correct: false,
        },
        {
          text: 'C . CC',
          correct: true,
        },
        {
          text: 'D . DD',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'two two two two two',
      answers: [
        {
          text: 'A . AAAAAAAAAA',
          correct: false,
        },
        {
          text: 'B . BBBBBBBBBB',
          correct: false,
        },
        {
          text: 'C . CCCCCCCCCC',
          correct: false,
        },
        {
          text: 'D . DDDDDDDDDD',
          correct: true,
        },
      ],
    },
  ];

  return (
    <>
      <div className="container ">
        <div className="row ">
          <FirstScreen
            data={data}
            questionNo={questionNo}
            selectAns={selectAns}
            answerClassName={answerClassName}
          />
          <SecondScreen questionNo={questionNo} />
        </div>
      </div>
    </>
  );
}
