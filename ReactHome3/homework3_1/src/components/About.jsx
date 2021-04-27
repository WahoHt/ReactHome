import React from 'react';
import FormIn from '../components/SignIn/FormIn'
import { Link } from 'react-router-dom'

class About extends React.Component {
    render() {
        return (
            <div>
                <FormIn/>
                <Link to='/registr'>SingUp</Link>
            </div>
        )
    }
}


export default About;