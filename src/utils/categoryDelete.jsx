import fetchTasksByCategory from "./fetchTasksByCategory";
import responseMessage from "./responseMessage";


const taskDelete = (sendData, setIsLoading, setModal, setHiddenMenu, api, setMessage, setAdd) => {

    setAdd(false)
    const { id } = sendData


    api({
        method: 'post',
        url: 'category.php?fun=delete&id=' + id,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)
            setIsLoading(false);

            if (response.data.uspesno) {
                setModal(false)
                setHiddenMenu(false)
                setAdd(true)
            }
        });
}

export default taskDelete