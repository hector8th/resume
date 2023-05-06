import React from 'react'
import SkillSection from './SkillSection.js';
import { getSkills } from './JobData.js'

function SkillWindow() {

    const skillList = getSkills();
    
    return (
        <div className='App-skill-info hide' id='skill-window'>
            {
                skillList.map((skill) => <SkillSection Skills = {skill} />)
            }
        </div>
    )
}

export default SkillWindow
