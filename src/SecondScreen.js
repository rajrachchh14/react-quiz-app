import React from 'react';

function SecondScreen(props) {
  // console.log(props.questionNo);

  const { questionNo } = props;
  const MoneyPeramid = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 300 },
    { id: 4, amount: 400 },
    { id: 5, amount: 500 },
    { id: 6, amount: 600 },
    { id: 7, amount: 700 },
    { id: 8, amount: 800 },
    { id: 9, amount: 900 },
    { id: 10, amount: 1000 },
  ].reverse();

  return (
    <>
      <div className="col-4 col-lg-4 col-md-4 ">
        <div className="fixed-right">
          {MoneyPeramid.map((item, i) => (
            <div
              className={`alert alert-light border border-primary MoneyList ${
                item.id == questionNo ? 'active' : ''
              }`}
              style={{ padding: '14px' }}
              key={i}
            >
              {item.id} . ${item.amount}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default SecondScreen;
