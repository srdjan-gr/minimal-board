import fetchTasksByCategory from "./fetchTasksByCategory";
import responseMessage from "./responseMessage";

const taskEdit = (
    setIsLoading, setModal, setHiddenMenu,
    setId, setTitle, setDescription, setPriority,
    setCategory, catId, setTasks, setMessage, sendData, api
) => {
    api({
        method: 'post',
        url: 'tasks.php?fun=update',
        data: sendData,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)
            setIsLoading(false);

            if (response.data.uspesno) {
                setModal(false)
                setHiddenMenu(false)
                setId('')
                setTitle('')
                setDescription('')
                setPriority('')
                setCategory('')

                fetchTasksByCategory(catId, setTasks, setIsLoading, api);
            }
        });
}

export default taskEdit