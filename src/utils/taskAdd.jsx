import fetchTasksByCategory from "./fetchTasksByCategory";
import responseMessage from "./responseMessage";

const taskAdd = (
    setCategory, setPriority, setDescription,
    setTitle, setHiddenMenu, setModal,
    setIsLoading, catId, setTasks,
    setMessage, sendData, api
) => {

    api({
        method: 'post',
        url: 'tasks.php?fun=add',
        data: sendData,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)
            setIsLoading(false);

            if (response.data.uspesno) {

                setModal(false)
                setHiddenMenu(false)
                setTitle('')
                setDescription('')
                setPriority('')
                setCategory('')
                fetchTasksByCategory(catId, setTasks, setIsLoading, api);
            }
        })
}

export default taskAdd