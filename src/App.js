import React, { useState } from 'react';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
export default function App() {
  const [questionNo, setQuestionNo] = useState(1);

  return (
    <>
      <div className="container ">
        <div className="row ">
          <FirstScreen questionNoHook={questionNo} />
          <SecondScreen />
        </div>
      </div>
    </>
  );
}
