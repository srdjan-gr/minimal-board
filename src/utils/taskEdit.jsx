import fetchTasksByCategory from "./fetchTasksByCategory";

const taskEdit = (
    setIsLoading, setModal, setHiddenMenu,
    setId, setTitle, setDescription, setPriority,
    setCategory, catId, setTasks, sendData, api
) => {
    api({
        method: 'post',
        url: 'tasks.php?fun=update',
        data: sendData,
    })
        .then((response) => {

            console.log(response.data);

            setIsLoading(false);
            setModal(false)
            setHiddenMenu(false)
            setId('')
            setTitle('')
            setDescription('')
            setPriority('')
            setCategory('')

            fetchTasksByCategory(catId, setTasks, setIsLoading, api);
        });
}

export default taskEdit