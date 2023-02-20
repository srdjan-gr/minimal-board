const categoriesFetchAll = (setCategories, api) => {
    api({
        method: 'post',
        url: 'category.php?fun=read',
    })
        .then((response) => {
            // setCategories({ data: response.data, isLoading: false, catId: null, add: false });
            setCategories(response.data);
        });
}

export default categoriesFetchAll