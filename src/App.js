import React, { useState } from 'react';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
export default function App() {
  const [questionNo, setQuestionNo] = useState(10);

  return (
    <>
      <div className="container ">
        <div className="row ">
          <FirstScreen />
          <SecondScreen questionNo={questionNo} />
        </div>
      </div>
    </>
  );
}
