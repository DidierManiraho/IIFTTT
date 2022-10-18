import React,{useState,useRef} from 'react';
import{createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_API_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY

const supabase = createClient(supabaseUrl,supabaseKey)

const SignUp = () => {
    //const [email,SetEmail] = useState()
    const emailInput = useRef()
    const passwordInput = useRef()

    const handleEmailSignUp = async (e) =>{
        e.preventDefault()
        console.log(emailInput.current.value);

        let { user, error } = await supabase.auth.signUp({
            email:emailInput.current.value ,
            password: passwordInput.current.value

        })

        console.log(user)
    }



    return (
        <div>
            <form onSubmit={handleEmailSignUp}>
                <input type="email" placeholder="Please enter your email" className="border-2" ref={emailInput}/>
                <input type="password" placeholder="Please enter your password" className="border-2" ref={passwordInput}/>
                <input type="submit" value="Sign up" className=""/>
            </form>
        </div>
    );
};

export default SignUp;