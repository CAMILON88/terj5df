import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super()

    this.state = {
     
      
     lista: [],
     firstName:'',
     lastName:''


    }

  }
 textNombre(event) {
  

    this.setState({
      firstName: event.target.value
  })
  }

   textApellido(event) {
   
    this.setState({
      lastName: event.target.value
  })
  }

  agregar(event)
  {
     
    event.preventDefault();
     this.setState({
      lista: this.state.lista.concat({firstName:this.state.firstName, lastName:this.state.lastName}),
      firstName:'',
      lastName:''
     

        
    })
   
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.agregar.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.firstName} onChange={this.textNombre.bind(this)} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastName} onChange={this.textApellido.bind(this)}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              
             {this.state.lista.map((list, index) => <tr key={index}><td>{list.firstName}</td><td>{list.lastName}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


