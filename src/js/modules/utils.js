const fetchConfig = async (url, form) => {
    let response = await fetch(url, {
        method: "POST",
        body: new FormData(form)
    })

    if (response.ok) {
        return await response.json();
    } else {
        const msg = "Ошибка HTTP: " + response.status;
        return {
            error: -1,
            msg
        }
    }
}

export {
    fetchConfig
}