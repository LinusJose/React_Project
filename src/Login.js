import React from 'react';
import{withRouter} from 'react-router';
import {Formik} from 'formik';
class Login extends React.Component{
//     state={
//     username:"",
//     password:"",
//     }
//     usernameChange=(event)=>{
//         this.setState({
//             username:event.target.value
    
//     })
// }
// passwordChange=(event)=>{
//     this.setState({
//         password:event.target.value

// })
// }
onSubmit=(data)=>{

    if(data.username=="user1"&&data.password=="123"){
        alert("Success from Login Functionals")
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
              <Formik 
              initialValues={{

                username:"",
                password:"",
              }}
              validate={values=>{
                  const errors={};
                //   if(!values.username){
                //       errors.username="Username is required"

                //   }

                //   if(!values.password){
                //     errors.password="Password is required"

                // }
                  return errors;
              }}
              onSubmit={(values)=>{
                this.onSubmit(values)
              }}
              >
                  {(props)=>(
                    <form onSubmit={props.handleSubmit}>
                    <label>Username</label>
                   <input className="form-control" type="text" name="username" onChange={props.handleChange}/>
                   <label>{props.errors&&props.errors.username}</label>
                   <label>Password</label>
                    
                <input className="form-control" type="password" name="password" onChange={props.handleChange}/>
                <label>{props.errors&&props.errors.password}</label>

                 <button className="btn btn-primary" type="submit" onClick={this.onSubmitClick}>Login</button> 
                   
         
            
         
               </form>)
               }

     
      </Formik>
      </div>
      </div>
      

  }
}
export default withRouter(Login);