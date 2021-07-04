import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';

function Complete() {
  const [value, setValue] = useState('');
  const [dataSource, setDataSource] = useState([]);

  onSearch = searchText => {
    fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=kOlQWGoAfcMINGKipGzWeMQZ7vRATcYo%20&q=" + searchText)
      .then(response => response.json())
      .then(data => {
          let result = [
            data[0].LocalizedName,
            data[1].LocalizedName,
            data[2].LocalizedName,
            data[3].LocalizedName,
            data[4].LocalizedName
          ]
          return result;
      })
      .then(setDataSource)
      .catch(function(err){
        console.log(err)
      });
  };

  function onChange(value) {
    setValue(value)
  };

  return (
    <div style={{ display: "inline-block" }}>
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSearch={onSearch}
        placeholder="Start typing you location..."
      />
    </div>
  );
}

export default Complete;