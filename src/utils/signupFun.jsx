import responseMessage from "./responseMessage";

const signupFun = (api, sendData, setMessage,
    setIsLoading, navigate, setEmail,
    setPassword, setLastName,
    setTerms, setSignup, signup, setFirstName) => {

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
                setSignup(!signup)
                setTerms(false)
            }
        });
}

export default signupFun