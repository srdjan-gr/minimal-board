const fetchFilters = (sendData, api, setIsLoading, setTasks) => {
    api({
        method: 'post',
        url: 'tasks.php?fun=read&opt=filters',
        data: sendData,
    })
        .then((response) => {

            setTasks(response.data);

            // setOrder('')
            // setStatus('')
            // setPriority('')
            setIsLoading(false);
        });
}

export default fetchFilters