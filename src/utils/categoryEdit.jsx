import categoriesFetchAll from "./categoriesFetchAll";
import responseMessage from "./responseMessage";

const categoryEdit = (sendData, setIsLoading, setModal, setHiddenMenu, api, setMessage, setAdd) => {
    setAdd(false)

    api({
        method: 'post',
        url: 'category.php?fun=update',
        data: sendData,
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

export default categoryEdit