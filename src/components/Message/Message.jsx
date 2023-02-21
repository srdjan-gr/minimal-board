import React, { useContext } from 'react'
import { BiX } from "react-icons/bi";

import MessageContext from '../../contexts/MessageContext'

const Message = () => {

    const { message, setMessage } = useContext(MessageContext)


    const closeMessage = () => {
        setMessage({ container: false, response: '', text: '' })
    }


    switch (message.response) {
        case 'danger':
            return (
                <article className={`${message.container ? 'toggleMessage' : ''} message__container message-error`}>
                    <div className="message">
                        <h3>{message.text}</h3>
                    </div>
                    {/* <BiX className='icon-m1 icon-message' onClick={closeMessage} />*/}
                </article>
            )
            break;

        case 'info':
            return (
                <article className={`${message.container ? 'toggleMessage' : ''} message__container message-info`}>
                    <div className="message">
                        <h3>{message.text}</h3>
                    </div>

                </article>
            )
            break;

        case 'success':
            return (
                <article className={`${message.container ? 'toggleMessage' : ''} message__container message-success`}>
                    <div className="message">
                        <h3>{message.text}</h3>
                    </div>

                </article>
            )
            break;

        default:
            break
    }


}

export default Message