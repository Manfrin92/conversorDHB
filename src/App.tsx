import React, { useState, useCallback } from 'react';

function App() {
  const [decimalToBinary, setDecimalToBinary] = useState();
  const [binaryToDecimal, setBinaryToDecimal] = useState();

  const handleSetDecimalToBinary = useCallback(() => {
    console.log('setDecimalToBinary');
  }, []);

  return (
    <div className="App">
      <h1>Convert:</h1>
      <body>
        <div>
          <p>
            Decimal:

            <input type="text" />

            <button type="button" onClick={() => handleSetDecimalToBinary()}>RUN</button>

          </p>
          <p>
            Reponse in binary:

            <text>resposta</text>

          </p>
        </div>

        <div>
          <p>
            Binary:

            <input type="text" />

            <button type="button">RUN</button>

          </p>
          <p>
            Reponse in decimal:

            <text>resposta</text>

          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
