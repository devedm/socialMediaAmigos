import React from 'react';
import tachyons from 'tachyons';


class SignInCard extends React.Component {
    render() {
        const mystyle = {
            width: "100%",
            border: "0",
            borderBottom: "2px solid white",
            outline: "0",
            fontSize: "1.3rem",
            color: "white",
            padding: "7px 0",
            background: "transparent",
        };

        return (
            <div class=" br4 w6 mw6 bg-blue tc pv4 ph4 avenir">
                
                <form class="w-80 mw6 center">
                    <label class="db b f1 measure white" >Sign Up</label>
                    <label class="db b f4 measure white pv1" >It's Free</label>
                    
                    <div class='db pv2'>
                        <label class='db tl f5 white' >First Name:</label>
                        <input style={mystyle} type="name" name="name"/>
                    </div>
                    <div class='db pv2'>
                        <label class='db tl f5 white' >Last Name:</label>
                        <input style={mystyle} type="name" name="name"/>
                    </div>
                    <div class='db pv2'>
                        <label class='db tl f5 white' >Email Address:</label>
                        <input style={mystyle} type="email" name="email"/>
                    </div>
                    <div class='db pv2'>
                        <label class='db tl f5 white' >Password:</label>
                        <input style={mystyle} type="password" name="password"/>
                    </div>
                    <div class='db pv2'>
                        <label class='db tl f5 white' >Password Verify:</label>
                        <input style={mystyle} type="password" name="password2"/>
                    </div>
                    <div className="pt3">
                        
                    </div>
                    <div className="pt3">
                        <a className="br-pill pv2 ph4 bg-orange pointer white link b">Register</a>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignInCard;