const fetchTasksByCategory = (catId, setTasks, setIsLoading, api) => {

    api({
        method: 'post',
        url: 'tasks.php?fun=read&opt=all&id=' + catId,
    })
        .then((response) => {
            setTasks(response.data);
            setIsLoading(false)
        });
}

export default fetchTasksByCategory