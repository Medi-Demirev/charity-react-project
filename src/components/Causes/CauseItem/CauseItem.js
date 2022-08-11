import {Link} from 'react-router-dom'
const CauseItem = ({ cause }) => {
    console.log(cause._id);

    return (
        
        <div className="col-lg-4 col-md-6 col-12" >
            <div className="cause-item">
                <div className="cause-top">
                    <div className="cause-img">
                        <img   src={cause.imageUrl} alt="" />
                        <div className="case-btn">
                            <Link className="theme-btn" to="/donate">
                                Donate Now
                                <i className="fa fa-angle-double-right" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cause-text">
                    <ul>
                        <li>
                            <Link to="/">GOAL: {cause.goal}</Link>
                        </li >
                        <li>
                            <Link  to="/">RISED:  {cause.raised}</Link>
                        </li>
                    </ul>
                    <h3>
                        <Link  to={`cause/${cause._id}`}>{cause.title}</Link>
                    </h3>
                    <p>
                        {cause.subTitle}
                    </p>
                </div>
            </div>
        </div>
        

    );
};

export default CauseItem;