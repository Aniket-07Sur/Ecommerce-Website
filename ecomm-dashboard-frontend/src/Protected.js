import  Header from './Header';
import React,{useEffect} from "react";
import {useHistory} from 'react-router-dom'
function Login(props)
{
    const history = useHistory();
    let Cmp=props.Cmp;
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push('./register')
        }
    }, [])
    return(
        <div>
            <Cmp/>
        </div>
    );
}
export default Login;