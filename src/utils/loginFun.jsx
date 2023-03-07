import responseMessage from "./responseMessage";

const login = (api, sendData, setMessage, setIsLoading, navigate, jwt, setEmail, setPassword, setUid) => {

    api({
        method: 'post',
        url: 'login.php',
        data: sendData,
    })
        .then((response) => {

            responseMessage(response.data, setMessage)
            setIsLoading(false);

            if (response.data.status == 200) {

                setEmail('')
                setPassword('')

                const odgovor = response.data;
                if (odgovor) {

                    const session = sessionStorage.getItem("mblog");

                    if (session) {
                        setMessage({ container: true, response: 'info', text: 'You are already loged in.' })
                        navigate('/home')

                    } else if (!session) {

                        sessionStorage.setItem("mblog", JSON.stringify({
                            login: true,
                            token: response.data.token,
                        }));

                        // setLogin({ login: true });

                        // const token = jwt(response.data.token);

                        // if (token.data.status == 'Admin' || token.data.status == 'Urednik') {

                        //     notifySuccess(response.data.uspesno);
                        //     navigate('/Dashboard')
                        // } else if (token.data.status == 'Korisnik') {


                        // categoriesFetchAll(setCategories, api, uid)
                        // categoriesFetchAll()
                        navigate('/home')

                        //     notifySuccess(response.data.uspesno);
                        // } else {

                        //     notifySuccess("Greška prilikom logovanja");
                        // }
                    }

                } else {
                    setMessage({ container: true, response: 'danger', text: 'Login Error' })
                }
            }
        });
}

export default login