import React from 'react';
import '../styleSheet/Contador.css';


class Contador extends React.Component {
    render() {
        return (
            <div className='contador'>
                {this.props.numClick}
            </div>
        )
    }
}


export default Contador