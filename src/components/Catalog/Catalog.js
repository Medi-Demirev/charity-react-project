import { useContext } from 'react';
import { CauseContext } from '../../contexts/CauseContext';
import CauseItem from '../Causes/CauseItem/CauseItem';

import './Catalog.css'

const Catalog = () => {
 const {causes} = useContext(CauseContext)
 
    return(
          
      <div className="case-area section-padding">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title section-title2 text-center">
            <div className="thumb-text">
              <span>CAUSES</span>
            </div>
            <h2>RECENT CAUSES</h2>
            <p>
            Every heart is charitable by nature. Let's do more good deeds for needy children. 
            To be their hope for a better and happy life.
            </p>
          </div>
        </div>
        <div className="row">
       {causes.length > 0
       ? causes.map(x => <CauseItem key={x._id} cause ={x}/>)
      :<h3 className='no-causes'>NO ACTIVE CASES YET!</h3>}
      </div> 
    </div>
    </div>
      
    );
};

export default Catalog;