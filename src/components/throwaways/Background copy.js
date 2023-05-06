import React, { Component } from 'react'
import JobWindow from '../JobWindow.js';
import SideBar from '../SideBar.js';

export class Background extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            jobTitle: "...",
            doe: "...",
            description: "..."
        }

        // document.getElementById('job-1').onClick = () => {
        //     this.job1()
        // }
    }

    job1() {
        this.setState({jobTitle: 'Server'})
        this.setState({doe: '08/2019 - Present'})
        this.setState({description: 'Blah'})
    }

    render() {

        return (
            <div className="App-bg">
                {/* USE EVENTBIND.JS TO FIGURE THIS OUT!!!!! */}
                <SideBar />
                <div>
                    <h1>FOREGROUND STUFF</h1>
                    <JobWindow resume = {this.state}/>
                </div>
            </div>
        )
    }
}

export default Background


    // updateInfoJob1 = () => {
    //     this.setState({jobTitle: "..."})
    //     this.setState({doe: "..."})
    //     this.setState({description: "..."})
    // }

// {/* <button onClick = {this.updateInfoJob1}>TEST</button> */}


// const resume = {
//     jobTitle: "1",
//     doe: "2",
//     description: "3"
// }




// class ParentComponent extends Component {

//     constructor(props) {
//         super(props)
        
//         this.state = {
//             parentName: 'Igwe'
//         }

//         this.greetParent = this.greetParent.bind(this)
//     }

//     greetParent(childName) {
//         if (childName == null) {
//             alert(`Hello ${this.state.parentName}`)
//         }
//         else {
//             alert(`Hello ${this.state.parentName} from ${childName}`)
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <ChildComponent greetHandler = {this.greetParent}/>
//             </div>
//         )
//     }
// }

// export default ParentComponent

// function ChildComponent(props) {
//     return (
//         <div>
//             <button onClick = {() => props.greetHandler('My pikin')}>Greet Parent!</button>
//         </div>
//     )
// }