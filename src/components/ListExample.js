import React, { Component } from 'react'

 class ListExample extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         students:[

            {
                id:1,
                name:"Mohsin"
            },
            {
                id:2,
                name:"Ali"
            },
            {
                id:3,
                name:"Qamar"
            }
         ]
      }
    }
    
  render() {
      const studentsComponents = this.state.students.map(s => <p key={s.id} className="alert alert-info"> Name is {s.name}</p>);

    return (
      <div>
       {
          studentsComponents
        
       }
       Id from  url is  {this.props.match.params.id}
      </div>
    )
  }
}

export default ListExample
