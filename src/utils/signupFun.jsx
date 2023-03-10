import responseMessage from "./responseMessage";

const signupFun = (api, sendData, setMessage,
    setIsLoading, navigate, setEmail,
    setPassword, setLastName,
    setTerms, setFirstName, setCards, cards) => {

    api({
        method: 'post',
        url: 'signup.php',
        data: sendData,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)
            setIsLoading(false);

            if (response.data.uspesno) {
                // navigate('/');
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setTerms(false)
                setCards({ login: true, signup: false, reset: false, new: false })
            }
        });
}

export default signupFun