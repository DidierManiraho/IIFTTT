import React, {useEffect, useState} from 'react';
import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_API_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const UserApplets = () => {

    const [applets, setApplets] = useState();
    const [currentUser, setCurrentUser] = useState();


    useEffect(() => {

        const getCurrentUser = async () => {
            const {user, error} = await supabase.auth.getUser();

            setCurrentUser(user)
        }

        getCurrentUser()
    }, [])


    useEffect(() => {

        getUserApplets(currentUser.user.id)
            .then(applets => setApplets((applets)))

    }, [currentUser])

    const getUserApplets = async (userId) => {

        const {data: applets, error} = await supabase
            .from('applets')
            .select('name, description')
            .eq('user_id', userId)

        return applets;
    }


    return (
        <div>

            {
                applets.map(applet => <p key={applet.id}>{applet.name}</p>)
            }

        </div>
    );
};

export default UserApplets;