import React from 'react'

const ErrorComponent = ({ error }) => {

    switch (error) {
        case 'error404':
            return (
                <div className='error__container background-second'>
                    <h3>404</h3>
                    <h3>Page not found!!!</h3>
                </div>
            )
            break;

        default:
            return (
                <div className='error__container background-second'>
                    <h3>Error!!!</h3>
                </div>
            )
            break;
    }

}

export default ErrorComponent