import React, { Component } from 'react'

class MyForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      description: '',
      flavor: '',
      gender: 'male',
      agreement: false
    }

  }
  changeHandler = (event, fieldName, checkbox) => {

    this.setState({
      [fieldName]: checkbox ? event.target.checked : event.target.value
    })
  }

  submitHandler = (event) => {
    if (this.state.agreement)
      console.log(this.state)
    setTimeout(() => {
      this.props.history.push('/')
    }, 5000);

    event.preventDefault();
  }

  render() {
    const { email, password, description, flavor, gender, agreement } = this.state;
    return (

      <React.Fragment>
        <h1>my form</h1>

        <form onSubmit={(event) => this.submitHandler(event)}>
          <label>Email :</label>
          <input type="text" value={email} onChange={event => this.changeHandler(event, "email", false)} /><br />
          <label>Password :</label>
          <input type="password" value={password} onChange={event => this.changeHandler(event, "password", false)} /><br />
          <label>Description : </label>
          <textarea value={description} onChange={event => this.changeHandler(event, "description", false)}></textarea><br />
          <label>
            Pick your favorite flavor:
    <select value={flavor} onChange={event => this.changeHandler(event, "flavor", false)}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label><br />
          <label>Gender : </label>
          <label><input type="radio" value="male" checked={gender === 'male'} onChange={event => this.changeHandler(event, "gender", false)}></input>male</label>
          <label><input type="radio" value="female" checked={gender === 'female'} onChange={event => this.changeHandler(event, "gender", false)}></input>female</label><br />
          <label><input type="checkbox" checked={agreement} onChange={event => this.changeHandler(event, "agreement", true)}></input> I agree with terms and conditions</label><br />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>

    )
  }
}

export default MyForm
