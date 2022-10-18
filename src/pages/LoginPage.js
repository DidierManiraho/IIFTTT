import React,{useState,useRef} from 'react';
import {useNavigate} from "react-router-dom";
import{createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_API_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY

const supabase = createClient(supabaseUrl,supabaseKey)

const LoginPage = () => {
    //const [email,SetEmail] = useState()
    const emailInput = useRef()
    const passwordInput = useRef()

    // const navigate
    const navigate = useNavigate();

    // useState | useEffect
    const [errorMessage,setErrorMsg] = useState();

    const handleLoginWithPassword = async (e) =>{
        e.preventDefault()

        let { user, error } = await supabase.auth.signInWithPassword({
            email: emailInput,
            password: passwordInput

        })
        console.log(user)

        if(user.user){
            navigate('/dashboard')
        }

        if(error){
            console.log(error)
        }

    }

    const handleLoginWithGoogle = async ()=>{
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        console.log(error)

    }
    const handleLoginWithLinkedIn = async () =>{
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider:'linkedin'
        })
        console.log(data.user)
        console.log(error)

    }



    return (
        <div>
            <form onSubmit={handleLoginWithPassword} className="space-y-4">
                <input type="email" placeholder="Please enter your email" className="border-2" ref={emailInput}/>
                <br/>
                <input type="password" placeholder="Please enter your password" className="border-2" ref={passwordInput}/>
                <br/>
                <input type="submit" value="Sign up" className="btn bg-green-400"/>
            </form>
            <hr/>
            <input type="button" value="LinkedIn" className="btn inline-block m-2"  onClick={handleLoginWithLinkedIn}/>

            <input type="button" value="Google" className="btn inline-block m-2" onClick={handleLoginWithGoogle}/>
        </div>
    );
};

export default LoginPage;