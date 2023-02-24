import React from 'react'

const ErrorComponent = ({ error }) => {

    switch (error) {
        case 'notasks':
            return (
                <div className='error__container background-second'>
                    <h3>Ooops!!!</h3>
                    <h3>No tasks to show for selected category.</h3>
                </div>
            )
            break;

        default:
            return (
                <div className='error__container background-second'>
                    <h3>Ohh noooo!!!</h3>
                    <h3>Error!!!</h3>
                </div>
            )
            break;
    }

}

export default ErrorComponent