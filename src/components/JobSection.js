import React, {useState} from 'react'

function JobSection(props) {

    const {jobCompany, jobTitle, doe, desc1, desc2, desc3, desc4} = props.Jobs
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>

                <h3 onClick={() => setIsOpen(!isOpen)} className='font' id='company-name'>{jobCompany}</h3>

                {isOpen && (
                    <>
                        <div className='fontInfo' id='job-info-1'>
                            {jobTitle}
                        </div>
                        <div className='fontInfo' id='job-info-2'>
                            {doe}
                        </div>
                        <div className='fontInfo' id='job-info-3'>
                            {desc1}
                        </div>
                        <div className='fontInfo' id='job-info-4'>
                            {desc2}
                        </div>
                        <div className='fontInfo' id='job-info-5'>
                            {desc3}
                        </div>
                        <div className='fontInfo' id='job-info-6'>
                            {desc4}
                        </div>
                    </>
                )
                }
            </div>
        </>
    )
}

export default JobSection
