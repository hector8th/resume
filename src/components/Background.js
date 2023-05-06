import React from 'react'
import Education from './Education.js';
import JobWindow from './JobWindow.js';
import SideBar from './SideBar.js';
import SkillWindow from './SkillWindow.js';

function Background() {
    return (
        <div className="App-bg">
            <SideBar />
            <div>
                <h1>MY OBJECTIVE:</h1>
                <p>
                    My name is Uzezi Hector Atto, and this is my Resume Webpage!<br/><br/>

                    As the name suggests, this is a webpage dedicated to my work and educational
                    experiences. I created this webpage using React.JS.<br/><br/>

                    I am a highly motivated and detail-oriented professional who is looking
                    to broaden my skills and master them to the best of my capability.
                    I am confident in my ability to learn, grow, and become a powerful asset along
                    the requirements of any job or task given.<br/><br/>

                    Throughout my career, I've gained valuable Restaurant experience as a Line Cook and as a Server.
                    In my later years as a Line Cook, I became responsible for Closing the restaurant and doing Inventory,
                    and as a Server I've upheld the same level of reliability, being capable of completing my Closing duties
                    in a proper manner.<br/><br/>

                    In recent years, I've hit my ceiling in the Service Industry and have decided I wanted a change of pace and
                    a more technical challenge, so I took a Web Development course and am on my way to becoming a Web Developer with
                    Full-Stack being my end goal. I enjoy learning the inside and outside of the field I work in, and the Tech Industry
                    is field I know I will excel in.<br/><br/>

                    In addition to my professional experience, I possess a strong work ethic, excellent communication skills, and
                    a commitment to delivering high-quality work. I am excited about the opportunities that await me in the future, where
                    I may demonstrate my skills and continue to grow in a work environment, and as a person.<br/><br/><br/>

                    Thank you for taking the time to consider my resume.<br/><br/>

                    Sincerely,<br/><br/>

                    U. Hector Atto
                </p>
                <JobWindow />
                <Education />
                <SkillWindow />
            </div>
        </div>
    )
}

export default Background