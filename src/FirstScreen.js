import React, { useEffect } from 'react';

// export default function FirstScreen({
//   data,
//   questionNo,
//   selectAns,
//   answerClassNameHook,
// })

export default function FirstScreen({
  data,
  questionNo,
  selectAns,
  answerClassNameHook,
}) {
  // let {  } = props;

  // console.log(answerClassNameHook);

  useEffect(() => {
    {
      // console.log('me');
    }
  }, []);

  // const handel = () => {};

  const handel = () => {
    console.log('handel');
    answerClassNameHook();
  };

  return (
    <>
      <div className="col-8 col-lg-8 col-md-8 ">
        <div className="fixed-bottom p-5">
          <div
            className="card border border-primary "
            style={{ width: '56rem' }}
          >
            <div className="card-body ">
              <h5 className="card-title">
                <div className="alert alert-light border border-primary">
                  1 : What is the virtual DOM? How does react use the virtual
                  DOM to render the UI?
                </div>
              </h5>
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6">
                  <div
                    className="alert alert-light border border-primary"
                    onClick={() => handel()}
                  >
                    A . Xyz
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="alert alert-light border-primary ">
                    B . Xyz
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="alert alert-light border-primary">
                    C . Xyz
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="alert alert-light border-primary">
                    D . Xyz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
