import React, {useState} from 'react'

function EduSection(props) {

    const {school, date, program, document} = props.Education
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>

                <h3 onClick={() => setIsOpen(!isOpen)} className='font' id='school-name'>{school}</h3>

                {isOpen && (
                    <>
                        <div className='fontInfo' id='edu-info-1'>
                            {date}
                        </div>
                        <div className='fontInfo' id='edu-info-2'>
                            {program}
                        </div>
                        <div className='fontInfo' id='edu-info-3'>
                            {document}
                        </div>
                    </>
                )
                }
            </div>
        </>
    )
}

export default EduSection
