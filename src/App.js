import React from "react";
import "./App.css";

class App extends React.Component {

  constructor(args) {
    super(args)
    this.state = ({
      vacunas: []
    })
  }
  
  async componentDidMount(){
    const data = {
      method: "GET",
      headers: {
        "Content Type": "application/json"
      }
    }

    try{
      const response = await (await fetch('http://localhost:8080/vacunas', data)).json()
      
      this.setState({
        vacunas: response
      })

    }catch(error){
      console.log(error.message)
    }
  }

  render() {

    const arregloVacunas = this.state.vacunas

    return (
      <div>
        {
          arregloVacunas.map(
            vacuna => <p>{vacuna.nombre}</p>
          )
        }
      </div>
    )
  }
}

export default App;
