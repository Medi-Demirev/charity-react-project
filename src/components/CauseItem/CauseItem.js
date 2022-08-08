const CauseItem = ({ cause }) => {

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="cause-item">
                <div className="cause-top">
                    <div className="cause-img">
                        <img src={cause.imageUrl} alt="" />
                        <div className="case-btn">
                            <a className="theme-btn" href="/donate">
                                Donate Now
                                <i className="fa fa-angle-double-right" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cause-text">
                    <ul>
                        <li>
                            <a href="/">GOAL: {cause.goal}</a>
                        </li>
                        <li>
                            <a href="/">RISED: {cause.rised}</a>
                        </li>
                    </ul>
                    <h3>
                        <a href="/case-single">{cause.title}</a>
                    </h3>
                    <p>
                        {cause.subtitle}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default CauseItem;