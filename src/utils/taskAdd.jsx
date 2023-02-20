import fetchTasksByCategory from "./fetchTasksByCategory";

const taskAdd = (
    setCategory,
    setPriority,
    setDescription,
    setTitle,
    setHiddenMenu,
    setModal,
    setIsLoading,
    catId,
    setTasks,
    sendData,
    api
) => {

    api({
        method: 'post',
        url: 'tasks.php?fun=add',
        data: sendData,
    })
        .then((response) => {

            console.log(response.data);

            setIsLoading(false);
            setModal(false)
            setHiddenMenu(false)
            setTitle('')
            setDescription('')
            setPriority('')
            setCategory('')


            fetchTasksByCategory(catId, setTasks, setIsLoading, api);
        })


}

export default taskAdd