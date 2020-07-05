import React, { Component } from 'react';
import { Card, Chart, CountryPicker } from './components'
import {fetchData} from './api'
import style from './App.module.css';
import logo from './images/covid-19.png';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data : {},
      country:''
    }
  }
  async componentDidMount(){
    const data = await fetchData()
    this.setState({
      data:data
    })
  }
  handleCountryChange = async(country) =>{
    const data = await fetchData(country) 
    this.setState({
      data:data,
      country:country
    })
  }
  render(){
    const {data,country} = this.state
    return(
      <div className={style.container}> 
        <img src={logo} alt="COVID-19" className={style.image} />     
        <Card data={data}/>  
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>  
      </div>
    )
  }
}

export default App;
