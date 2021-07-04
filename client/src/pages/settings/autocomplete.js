import React from 'react';
import { AutoComplete } from 'antd';

class Complete extends React.Component {
  state = {
    value: '',
    dataSource: [],
  };

  onSearch = searchText => {
    fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=kOlQWGoAfcMINGKipGzWeMQZ7vRATcYo%20&q=" + searchText)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dataSource: !searchText ? [] : [
                        data[0].LocalizedName,
                        data[1].LocalizedName,
                        data[2].LocalizedName,
                        data[3].LocalizedName,
                        data[4].LocalizedName
                    ],
                  });
            })
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { dataSource, value } = this.state;
    return (
      <div style={{display:"inline-block"}}>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSearch={this.onSearch}
          placeholder="Start typing you location..."
        />
      </div>
    );
  }
}

export default Complete;