import responseMessage from "./responseMessage";

const categoryAdd = (setAdd, setIsLoading, setModal, setHiddenMenu, setAddCategoryData, setMessage, api, sendData) => {

    setAdd(false)

    api({
        method: 'post',
        url: 'category.php?fun=add',
        data: sendData,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)
            setIsLoading(false);

            if (response.data.uspesno) {

                setAdd(true)
                setModal(false)
                setHiddenMenu(false)
                setAddCategoryData('');
            }
        });
}

export default categoryAdd