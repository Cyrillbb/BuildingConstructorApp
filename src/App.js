import React from 'react';
import InputField from './Components/InputField'
import BuildingBlock from './Components/BuildingBlock/BuildingBlock'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      porchNum: 0,
      floorNum: 0,
    }
  }
  handleSubmit = (event) => {
    if (!isNaN(parseInt(document.getElementById('porchNum').value)) && !isNaN(parseInt(document.getElementById('floorNum').value))) {
      this.setState({
        porchNum: document.getElementById('porchNum').value,
        floorNum: document.getElementById('floorNum').value,
      })
    }
    else alert('pls enter a valid numbers')
    console.log(this.state)
  }
  render() {
    return (
      <div className='constructor'>
        <InputField submit={this.handleSubmit} />
        {/*<BuildingBlock floorNum={parseInt(this.state.floorNum)} />*/}
        <div className='building'>
          {Array.from(Array(parseInt(this.state.porchNum)).keys()).map(item => <div key={item}><BuildingBlock floorNum={parseInt(this.state.floorNum)} /></div>)}
        </div>
      </div>
    )
  }
}

export default App;
