const responseMessage = (response, setMessage) => {

    if (response.uspesno) {
        setMessage({
            container: true,
            response: 'success',
            text: response.uspesno
        })

        setTimeout(() => {
            setMessage({ container: false, response: '', text: '' })
        }, 2000);

    } else if (response.info) {
        setMessage({
            container: true,
            response: 'info',
            text: response.info
        })

        setTimeout(() => {
            setMessage({ container: false, response: '', text: '' })
        }, 2000);

    } else {
        setMessage({
            container: true,
            response: 'danger',
            text: response.greska
        })

        setTimeout(() => {
            setMessage({ container: false, response: '', text: '' })
        }, 2000);

    }
}

export default responseMessage