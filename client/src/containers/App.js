import React, {Component} from 'react';
import {connect} from "react-redux";
import './App.css';
import { autoFetchData } from "../actions/autos";

class App extends Component {
  componentDidMount(){
    this.props.fetchData("/api/auto")
  }
render() {

  return (
    <div>
      <ul>
        {

            this.props.autos.map((auto, index) => {
                return (<li key={index}> {auto.marka} - {auto.model} </li>)
            })


        }
      </ul>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    autos: state.autos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => {dispatch(autoFetchData(url))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App)
