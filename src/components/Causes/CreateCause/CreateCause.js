import { useContext, useState } from 'react';
import { CauseContext } from '../../../contexts/CauseContext';
import * as causeService from '../../../services/causeService';

import '../../Causes/CreateCause/CreateCause';
import map from '../../../assets/12.png';
import logo from '../../../assets/Logo.png';

const CreateCause = () => {
    const { causeAdd } = useContext(CauseContext);
    const [inputs, setInputs] = useState('');

    const changeHandler = (e) => {
        setInputs(state =>({
            ...state,
        [e.target.name]: e.target.value
        }))
    };
    

    const onSubmit = (e) => {
        e.preventDefault();

        const causeData = {
        title: "",
        subTitle:  "",
        description: "",
        causeMission: "",
        goal: "",
        raised: "",
        donors: "",
        imageUrl: "",
        benefit1: "",
        benefit2: "",
        benefit3: "",
        benefit4: "",
        benefit5: "",
    };
        
        causeService.create(causeData)
            .then(result => {
              causeAdd(result)
            });
    }

    return (
        <section id="createPage">
  <form onSubmit={onSubmit} className="createForms">
  
    <div>
      <h2>Create Cause</h2>
      <div className="title">
        <label htmlFor="title">Title:</label>
        <input
            name="title"
           id="title" type="text" 
           placeholder="Ensure Education for every poor children" 
           value={inputs.title}
           onChange={changeHandler}
        />
      </div>
      <div className="subTitle">
        <label htmlFor="subTitle">Subtitle:</label>
        <input 
            name="subTitle"
            id="subTitle" 
            type="text" 
            placeholder="A cause to raise funds for the poor and needy children of Ethiopia."
            value={inputs.subtitle}
            onChange={changeHandler} 
        />
      </div>
      <div className="description">
        <label htmlFor="description">Cause description:</label>
        <textarea 
            rows="4" cols="50" 
            name="description" 
            id="description" 
            type="text" 
            placeholder="Enter text here..." 
            value={inputs.description}
            onChange={changeHandler}
        />
      </div>
      <div className="causeMission">
        <label htmlFor="causeMission">Cause mission:</label>
        <textarea 
            rows="4" cols="50" 
            name="causeMission" 
            id="causeMission" 
            type="text" 
            placeholder="Enter text here..." 
            value={inputs.causeMission}
            onChange={changeHandler}
        />
      </div>
      <div className="goal">
        <label htmlFor="goal">Necessary funds:</label>
        <input 
            name="goal" 
            id="goal" 
            type="text" 
            placeholder="50000" 
            value={inputs.goal}
            onChange={changeHandler}
        />
      </div>
      <div className="raised">
        <label htmlFor="raised">Current funds raised:</label>
        <input 
            name="raised" 
            id="raised" type="text" 
            placeholder="Please enter a value of 0 here" 
            value={inputs.raised}
            onChange={changeHandler}
        />
      </div>
      <div className="donors">
        <label htmlFor="donors">Current donors:</label>
        <input 
            name="donors"  
            id="donors" 
            type="text" 
            placeholder="Please enter a value of 0 here" 
            value={inputs.donors}
            onChange={changeHandler}
        />
      </div>
      <div className="imageUrl">
        <label htmlFor="imageUrl">Image:</label>
        <input
          name="imageUrl"
          id="imageUrl"
          type="text"
          placeholder="https://s3.us-east-2.amazonaws.com/inspire-kindness/posts/June2020/u6OzQk2udqzeCGUOWIJY.jpg"
          value={inputs.imageUrl}
          onChange={changeHandler}
        />
      </div>
      <label className='benefit'>PLEASE MENTION FIVE EXPECTED BENEFITS FROM IMPLEMENTING THE CAUSE</label>
      <div className="benefit1">
        <label htmlFor="benefit1">First benefit:</label>
        <input 
            name="benefit1" 
            id="benefit1" 
            type="text" 
            placeholder="Improving the lives of the local population." 
            value={inputs.benefit1}
            onChange={changeHandler}
        />
      </div>
      <div className="benefit2">
        <label htmlFor="benefit2">Second benefit:</label>
        <input 
            name="benefit2" 
            id="benefit2" type="text" 
            placeholder="Reducing poverty in the region" 
            value={inputs.benefit2}
            onChange={changeHandler}
        />
      </div>
      <div className="benefit3">
        <label htmlFor="benefit3">Third benefit:</label>
        <input 
            name="benefit3" 
            id="benefit3" 
            type="text" 
            placeholder="Access to a public health facility" 
            value={inputs.benefit3}
            onChange={changeHandler}
        />
      </div>
      <div className="benefit4">
        <label htmlFor="benefit4">Fourth benefit:</label>
        <input 
            name="benefit4" 
            id="benefit4" 
            type="text" 
            placeholder="Reduction of unemployment in the region." 
            value={inputs.benefit4}
            onChange={changeHandler}
        />
      </div>
      <div className="benefi5">
        <label htmlFor="benefit5">Fifth benefit:</label>
        <input 
            name="benefit5" 
            id="benefit5" 
            type="text" 
            placeholder="Creation of youth zones in the city." 
            value={inputs.benefit5}
            onChange={changeHandler}
        />
      </div>
      
      <button className="btn" type="submit">
        Create Cause
      </button>
      <div className='rr'>

      <img className='logo' src={map}/>
      <img className='logo' src={logo}/>
      </div>
    </div>
  </form>
</section>

    );
};
export default CreateCause;