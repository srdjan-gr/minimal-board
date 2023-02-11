import React from 'react'
import { BiDotsHorizontalRounded, BiCheck, BiQuestionMark } from "react-icons/bi";


const SingleItem = ({ task }) => {

    const { id_task, task_title, task_description, task_priority, task_status, task_del } = task


    return (
        <div className="box background-second">


            <div className="box-description">
                <h2 className='text'>{task_title}</h2>
                <p className='text-third'>{task_description}</p>
                {/*<button className='btn'>Test btn</button>*/}
            </div>

            <div className="box-icons">
                <BiDotsHorizontalRounded className='icon-m background' />

                {
                    task_status == 1 ?
                        <BiCheck className='icon-m background bg-success' /> :
                        <BiQuestionMark className='icon-m background bg-info' />
                }
            </div>
        </div>
    )

}

export default SingleItem