import React, { useContext } from 'react'
import { BiDotsHorizontalRounded, BiCheck, BiQuestionMark, BiStar } from "react-icons/bi";

import SingleItemOptionsContext from '../../contexts/SingleItemOptionsContext';
import SingleItemOptions from './SingleItemOptions/SingleItemOptions';

const SingleItem = ({ task }) => {

    const { id_task, task_title, task_description, task_priority, task_status, task_del } = task
    const { itemsMenu, setItemsMenu } = useContext(SingleItemOptionsContext)


    const stars = () => {
        switch (task_priority) {
            case '1':
                return <span><BiStar /></span>
                break;
            case '2':
                return <span><BiStar /><BiStar /></span>
                break;
            case '3':
                return <span><BiStar /><BiStar /><BiStar /></span>
                break;
            case '4':
                return <span><BiStar /><BiStar /><BiStar /><BiStar /></span>
                break;
            case '5':
                return <span><BiStar /><BiStar /><BiStar /><BiStar /><BiStar /></span>
                break;

            default:
            case '':
                return <span></span>
                break;
        }

        // for (let i = 1; i < task_priority.length; i++) {
        //     return <span><BiStar /></span>;
        // }
    }


    const singleItemMenu = (taskId) => {

        itemsMenu.container == false ?
            setItemsMenu({ container: true, itemId: taskId }) :
            setItemsMenu({ container: false, itemId: '' })
    }

    // OnClick is sending Id to clicked Item.
    // To SinleItemOptioons Component sending Id of Item where Component livs. 
    return (
        <div className="box background-second">
            {/* sending full Single Task object to Single Item Option component. From there to Item Delete or Item Edit components*/}
            <SingleItemOptions task={task} />


            <div className="box-description">
                <h2 className='text'>{task_title}</h2>
                <p className='text-third'>{task_description}</p>
                <p className='text-third'>{stars()}</p>
            </div>

            <div className="box-icons">
                <BiDotsHorizontalRounded
                    className='icon-m  background'
                    onClick={() => singleItemMenu(id_task)} />

                {task_status == 1 ?
                    <BiCheck className='icon-m  background bg-success' /> :
                    <BiQuestionMark className='icon-m  background bg-info' />}
            </div>
        </div>
    )

}

export default SingleItem