import React, {Component} from 'react';
import {Button} from 'antd';
import {inject, observer} from 'mobx-react'
import './App.css';

@inject('pageStore')
@observer
class App extends Component {
  render() {
    const {name} = this.props.pageStore
    return (
      <div className="App">
        <h2>{name}</h2>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;