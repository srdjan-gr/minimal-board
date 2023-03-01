import jwt from 'jwt-decode'

const categoriesFetchAll = (setCategories, api) => {

    const mbsession = sessionStorage.getItem("mblog")
    const token = jwt(mbsession);
    const uid = token.data.id;

    
    api({
        method: 'post',
        url: `category.php?fun=read&uid=${uid}`,
    })
        .then((response) => {
            setCategories(response.data);
        });
}

export default categoriesFetchAll