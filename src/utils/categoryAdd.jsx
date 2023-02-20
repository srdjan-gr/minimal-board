const categoryAdd = (setAdd, setIsLoading, setModal, setHiddenMenu, setAddCategoryData, api, sendData) => {
    api({
        method: 'post',
        url: 'category.php?fun=add',
        data: sendData,
    })
        .then((response) => {
            setAdd(true)
            setIsLoading(false);
            setModal(false)
            setHiddenMenu(false)
            setAddCategoryData('');
        });
}

export default categoryAdd