import React from 'react';
import FormUp from '../components/SingUp/FormUp'
import { Link } from 'react-router-dom'

class Registr extends React.Component {
    render() {
        return (
            <div>
                <FormUp/>
                <Link to='/'>About</Link>
            </div>
        )
    }
}


export default Registr;