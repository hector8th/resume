import React from 'react'
import EduSection from './EduSection.js';
import { getEducation } from './JobData.js'

function Education() {

    const eduList = getEducation();
    
    return (
        <div className='App-education-info hide' id='edu-window'>
            {
                eduList.map((edu) => <EduSection Education = {edu} />)
            }
        </div>
    )
}

export default Education
