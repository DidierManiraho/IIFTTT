import React,{useState} from 'react';
import AllCard from "./AllCard";
import AppletsCard from "./AppletsCard";
import ServiceCard from "./ServiceCard";
import StoryList from "./components/stories/StoryList";

const MainTabNav = () => {
    const [showAllCard, setShowAllCard] = useState(false);
    const [showAppletsCard, setShowAppletsCard] = useState(false);
    const [showServicesCard, setShowServicesCard] = useState(false);
    const [showStoriesCard, setShowStoriesCard] = useState(true);

    const handleShowAllCard = () => {
        setShowAllCard(true);

        setShowStoriesCard(false);
        setShowServicesCard(false);
        setShowAppletsCard(false);
    };

    const handleShowStories = () => {

        setShowStoriesCard(true);

        setShowAllCard(false);
        setShowServicesCard(false);
        setShowAppletsCard(false);
    };

    const handleShowServicesCard = () => {

        setShowServicesCard(true);

        setShowStoriesCard(false);
        setShowAllCard(false);
        setShowAppletsCard(false);
    };

    const handleShowAppletsCard = () => {

        setShowAppletsCard(true);

        setShowServicesCard(false);
        setShowStoriesCard(false);
        setShowAllCard(false);
    };

    return (
        <div>
            {/* start: The tabbed navigation */}
            <div className="mt-10 w-full text-center">

                {/* Not active: <a class="tab">All</a>*/}
                {/* Active: <a class="tab tab-active">All</a> */}
                <a className={showAllCard ? 'tab tab-active' : 'tab'} onClick={handleShowAllCard}>All</a>
                <a className={showAppletsCard ? 'tab tab-active' : 'tab'} onClick={handleShowAppletsCard}>Applets</a>
                <a className={showServicesCard ? 'tab tab-active' : 'tab'} onClick={handleShowServicesCard}>Services</a>
                <a className={showStoriesCard ? 'tab tab-active' : 'tab'} onClick={handleShowStories}>Stories</a>

            </div>
            {/* start: The tabbed navigation */}

            {/* START: Search form */}
            <div className="form-control m-8">
                <div className="input-group ">
                    <button className="btn bg-gray-300 border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>

                    <input type="text" placeholder="Search Applets or services…"
                           className="input input-bordered w-full bg-gray-300 border-0 focus:outline-none"/>

                </div>
            </div>
            {/* END: search form*/}

            {/* START: Content Cards*/}
            {
                showAllCard && <AllCard/>
            }

            {
                showAppletsCard && <AppletsCard/>
            }
            {
                showServicesCard && <ServiceCard/>
            }
            {
                showStoriesCard && <StoryList/>
            }

            {/*    END: Content Card*/}

        </div>
    );
};

export default MainTabNav;