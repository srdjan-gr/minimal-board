import responseMessage from "./responseMessage";

const signupFun = (api, sendData, setMessage,
    setIsLoading, navigate, setEmail,
    cards, setCards) => {

    api({
        method: 'post',
        url: 'reset.php?fun=reset',
        data: sendData,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)
            setIsLoading(false);

            if (response.data.uspesno) {
                setEmail('')
                setCards({ login: false, signup: false, reset: false, new: true })
            }
        });
}

export default signupFun