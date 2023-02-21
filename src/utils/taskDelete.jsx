import fetchTasksByCategory from "./fetchTasksByCategory";
import responseMessage from "./responseMessage";


const taskDelete = (id, catId, setTasks, setMessage, setIsLoading, api) => {

    api({
        method: 'post',
        url: 'tasks.php?fun=delete&id=' + id,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)

            if (response.data.uspesno) {

                fetchTasksByCategory(catId, setTasks, setIsLoading, api);
            }
        });
}

export default taskDelete