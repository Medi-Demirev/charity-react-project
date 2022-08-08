import { useContext,} from 'react';
import { VolunteerContext } from '../../../contexts/VolunteerContext';
import VolunteerProfile from '../VolunteerProfile/VolunteerProfile';

import './AllVolunteersPage.css';

const AllVolunteersPage = () => {
    const {volunteer} = useContext(VolunteerContext);

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
                    {volunteer.length > 0
                      ? volunteer.map(x => <VolunteerProfile key={x._id} volunteer ={x}/>)
                     :<h3 className='no-vounteer'>NO ACTIVE CASES YET!</h3>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllVolunteersPage;