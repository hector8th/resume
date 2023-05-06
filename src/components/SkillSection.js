import React, {useState} from 'react'

function SkillSection(props) {

    const {name, skills} = props.Skills
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>

                <h3 onClick={() => setIsOpen(!isOpen)} className='font' id='skill-name'>{name}</h3>

                {isOpen && (
                    <>
                        <div className='fontInfo' id='skill-info'>
                            {skills}
                        </div>
                    </>
                )
                }
            </div>
        </>
    )
}

export default SkillSection
