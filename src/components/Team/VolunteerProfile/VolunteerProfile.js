import { Link } from "react-router-dom";
const VolunteerProfile = ({volunteer}) => {
    return (
        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={volunteer.imageProfile} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link  to={`volunteer/${volunteer._id}`}>{volunteer.firstName} {volunteer.lastName}</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
    );
};
export default VolunteerProfile;