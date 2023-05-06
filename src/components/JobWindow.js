import React from 'react'
import JobSection from './JobSection.js';
import { getJobs } from './JobData.js'

function JobWindow() {

    const jobList = getJobs();
    
    return (
        <div className='App-job-info hide' id='job-window'>
            {
                jobList.map((job) => <JobSection Jobs = {job} />)
            }
        </div>
    )
}

export default JobWindow
