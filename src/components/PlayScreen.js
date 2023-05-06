import React, { Component } from 'react'

class PlayScreen extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name: true
        }
    }

    render() {
        const gbaPath = "C:/Users/iH3X/Desktop/CODING/gba-site/gba-site-app/src/gba/VBA-M.exe";
        const oShell = new ActiveXObject("Shell.Application");
        oShell.ShellExecute(gbaPath,"","","open","1");
        return (
            <div className="App-play">
                <script type="text/javascript" language="javascript">
                    {oShell.ShellExecute(gbaPath,"","","open","1")}
                </script>                
            </div>
        )
    }
}

export default PlayScreen