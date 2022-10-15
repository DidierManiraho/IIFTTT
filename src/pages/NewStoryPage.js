import React from "react";
const NewStoryPage =()=>{
    const newStory = {
        title: 'dededeede',
        content: 'edenednedeedededededed',
        background_image: 'https://picsum.photos/200/200',
        author_id: 9
    };

    const addNewStory = async () => {

        const response = await fetch(' https://lwvndqplxamdaypxwptk.supabase.co/rest/v1/stories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3dm5kcXBseGFtZGF5cHh3cHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDYyODksImV4cCI6MTk4MDEyMjI4OX0.9f9bLvBvmcfCNGLrHFXmY0nB6bAkUZTCPN0KHcaU6-I',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3dm5kcXBseGFtZGF5cHh3cHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDYyODksImV4cCI6MTk4MDEyMjI4OX0.9f9bLvBvmcfCNGLrHFXmY0nB6bAkUZTCPN0KHcaU6-I'
            },

            body: JSON.stringify(newStory)
        });

        const result = await response.text();

        console.log(result);
        console.log('Added new story');
    };

    return (
        <div>
            <h2 className="text-4xl mb-10">Story</h2>

            <button className="bg-green-500 px-4 py-2" onClick={addNewStory}>add a new</button>
        </div>
    );
}
export default NewStoryPage;