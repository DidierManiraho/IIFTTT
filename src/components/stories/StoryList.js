import React from "react";
import StoryItem from "./StoryItem";

const StoryList =()=>{
    const stories = [{
        id: 1,
        story: 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
        backgroundImage: 'http://dummyimage.com/1200x600.png/dddddd/000000',
        username: 'fhartmann0'
    }, {
        id: 2,
        story: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
        backgroundImage: 'http://dummyimage.com/1200x600.png/cc0000/ffffff',
        username: 'gbottoms1'
    }, {
        id: 3,
        story: 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
        backgroundImage: 'http://dummyimage.com/1200x600.png/ff4444/ffffff',
        username: 'skimbling2'
    }, {
        id: 4,
        story: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
        backgroundImage: 'http://dummyimage.com/1200x600.png/5fa2dd/ffffff',
        username: 'maland3'
    }, {
        id: 5,
        story: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        backgroundImage: 'http://dummyimage.com/1200x600.png/cc0000/ffffff',
        username: 'msilly4'
    }];

    return (
        <div>

            {
                stories.map(story => <StoryItem  {...story} key={story.id}/>)

            }
        </div>
    );
};

export  default  StoryList;