import React, {useEffect} from "react";
import MainContent from "../MainContent";
import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_API_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY

const supabase = createClient(supabaseUrl, supabaseKey)


const HomePage = () => {


    useEffect(() => {

        const getCurrentUser = async () => {

            const {data} = await supabase.auth.getUser();

            console.log(data.user.id);
            console.log(data.user.email);
            // console.log(user.email);
        }

        getCurrentUser()

    }, [])

    return (
        <div>
            <MainContent/>
        </div>
    );
}
export default HomePage;