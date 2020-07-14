import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  // const onClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=da7f9812503a4c878a927b196a3e8855',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
