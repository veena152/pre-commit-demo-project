import React from 'react';

type GetTitleProps = {
    header: number,
}
const App = (props: GetTitleProps) => {
    const { header } = props;

  return (
        <div>
            <h1>{header}</h1>
        </div>
  );
}

export default App;