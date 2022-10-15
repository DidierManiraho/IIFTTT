import React from 'react';
import {Link} from 'react-router-dom';


const TopNav = () => {
    return (
        <div className="navbar bg-base-100">

            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-3xl font-bold" to="/">IFTTT</Link>
                <a className="btn bg-blue-500 border-0 normal-case rounded-full text-black">Do more with your notes</a>
            </div>

            <div className="flex-none">

                <div className="dropdown dropdown-end space-x-4 mr-3">
                    <Link className="border-0 rounded-full text-black font-bold text-xl"
                          to="/applets">My Applets</Link>
                    <Link className="border-0 rounded-full text-black font-bold text-xl"
                          to="/explore">Explore</Link>
                    <Link className="border-0 rounded-full text-black font-bold text-xl"
                          to="/developers">Developers</Link>
                    <a className="py-2 px-6 border-4 border-gray-800 rounded-full text-black font-bold text-lg">Upgrade</a>
                    <Link to="/new-story"
                          className="py-2 px-6 btn bg-gray-800 border-0 rounded-full text-white">Create</Link>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full border-6 border-black">
                            <img src="https://placeimg.com/80/80/people"/>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TopNav;