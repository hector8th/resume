import React from 'react'


function unhideJobWindow() {
    const jobWindow = document.getElementById('job-window');
    const educationWindow = document.getElementById('edu-window');
    const skillWindow = document.getElementById('skill-window');
    jobWindow.classList.toggle('hide');
    educationWindow.classList.add('hide');
    skillWindow.classList.add('hide');
}

function unhideEduWindow() {
    const jobWindow = document.getElementById('job-window');
    const educationWindow = document.getElementById('edu-window');
    const skillWindow = document.getElementById('skill-window');
    jobWindow.classList.add('hide');
    educationWindow.classList.toggle('hide');
    skillWindow.classList.add('hide');
}

function unhideSkillWindow() {
    const jobWindow = document.getElementById('job-window');
    const educationWindow = document.getElementById('edu-window');
    const skillWindow = document.getElementById('skill-window');
    jobWindow.classList.add('hide');
    educationWindow.classList.add('hide');
    skillWindow.classList.toggle('hide');
}

function SideBar() {

    return (
        <div className="App-sidebar">
            <h4 onClick={unhideJobWindow}>
                Work History
            </h4>
            <h4 onClick={unhideEduWindow}>
                Education
            </h4>
            <h4 onClick={unhideSkillWindow}>
                Skills
            </h4>
        </div>
    )
}

export default SideBar