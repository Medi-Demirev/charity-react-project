import { useContext,} from 'react';
import { VolunteerContext } from '../../contexts/VolunteerContext';
import VolunteerProfile from './VolunteerProfile/VolunteerProfile';

import './TeamPage.css';

const TeamPage = () => {
    const {volunteers} = useContext(VolunteerContext);
   

    return (
        <div  className={`volunteer-area section-padding `}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>Volunteer</span>
                            </div>
                            <h2>Our Great Volunteer</h2>
                            <p>Become part of our volunteer team. Get involved and actively participate in the entire process of organizing and implementing our projects. Be brave, Be part of Us.</p>
                        </div>
                    </div>
                </div>
                <div className="volunteer-wrap">
                    <div className="row">
                    {volunteers.length > 0
                      ? volunteers.slice(0,4).map(x => <VolunteerProfile key={x._id} volunteer ={x}/>)
                     :<h3 className='no-vounteer'>NO ACTIVE VOLUNTEERS YET!</h3>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;