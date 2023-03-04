import responseMessage from "./responseMessage";

const newPassFun = (api, sendData, setMessage,
    setIsLoading, setEmail, setNewPass, setResCode, setCards) => {

    api({
        method: 'post',
        url: 'newPass.php?fun=newPass',
        data: sendData,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)
            setIsLoading(false);

            if (response.data.uspesno) {
                setCards({ login: true, signup: false, reset: false, new: false });
                setEmail('')
                setNewPass('')
                setResCode('')
            }
        });
}

export default newPassFun