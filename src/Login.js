
import React from 'react';
import{withRouter} from 'react-router';
class SampleClass extends React.Component{
    state={
    username:"",
    password:"",
    }
    usernameChange=(event)=>{
        this.setState({
            username:event.target.value
    
    })
}
passwordChange=(event)=>{
    this.setState({
        password:event.target.value

})
}
onSubmitClick=(event)=>{
    event.preventDefault();

    if(this.state.username=="user1"&&this.state.password=="123"){
        alert("Success")
     this.props.history.push("/home")

    }
    else{
        alert("Invalid Credentials")
    }
}
  render(){
      return <div className="row">
          <h1>Login</h1>
          <div className="col-md-6">

       <form onSubmit={this.onSubmitClick}>
           <label>Username</label>
          <input className="form-control" type="text" name="username" onChange={this.usernameChange}/>
          <label>Password</label>
            <input className="form-control" type="password" name="password" onChange={this.passwordChange}/>
        <button className="btn btn-primary" type="submit" onClick={this.onSubmitClick}>Login</button> 
          

   

      </form>
      </div>
      </div>
      

  }
}
export default withRouter(SampleClass);