
import{useState} from 'react';

import { useHistory } from 'react-router-dom';
import {Formik} from 'formik';
function LoginFunctional(props){
    const history=useHistory();
    const [ username,setUsername ]=useState("");
    const [ password,SetPassword ]=useState("");

    const usernameChange=(event)=>{
        setUsername(event.target.value);
    }

    const passwordChange=(event)=>{
        SetPassword(event.target.value)
    }


    const onSubmitClick=(event)=>{
        event.preventDefault();
    
        if(username=="user1"&&password=="123"){
            alert("Success from Login Functional")
        history.push("/home")
    
        }
        else{
            alert("Invalid Credentials")
        }
    }



    return <div className="row">
    <h1>Login {username}</h1>
    <div className="col-md-6">



<Formik
initialValues={{
    username:"",
    password:""
}}
onSubmit={values=>{
    alert(values.username);
    alert(values.password);
}}
>
{
    (props)=>{
        return <form onSubmit={props.handleSubmit}>
<input type="text" name="username" onChange={props.handleChange} />
<input type="text" name="password" onChange={props.handleChange} />
<button type="submit">Login</button>
        </form>
    }
    }
</Formik>

</div>
</div>

}
export default LoginFunctional;