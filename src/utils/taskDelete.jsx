import fetchTasksByCategory from "./fetchTasksByCategory";

const taskDelete = (id, catId, setTasks, setIsLoading, api) => {
    api({
        method: 'post',
        url: 'tasks.php?fun=delete&id=' + id,
    })
        .then((response) => {
            console.log(response.data);

            fetchTasksByCategory(catId, setTasks, setIsLoading, api);
        });
}

export default taskDelete