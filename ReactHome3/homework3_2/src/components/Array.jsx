import React from 'react'

class Array extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    spawnItems = () => {
        const arr = [{id: 1, name: 'Vasya', lastName: 'Test1'}, {id: 2, name: 'Vova', lastName: 'Test2'}, {id: 3, name: 'Petya', lastName: 'Test3'}]
        return arr.map(({ id, name, lastName }) => {
            return (
                <table border={1}>
                    <tbody>
                        <tr key={id}>
                            <td>
                                {name}
                            </td>
                            <td>
                                {lastName}
                            </td>
                        </tr>
                        </tbody>
                </table>
            )
        })
    }
    render() {
        return (
            <div>
                {this.spawnItems()}
            </div>
        );
    }
}
export default Array;