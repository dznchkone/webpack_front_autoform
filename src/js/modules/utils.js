const fetchConfig = async (url, form) => {
    let response = await fetch(url, {
        method: "POST",
        body: new FormData(form)
    })

    if (response.ok) {
        return await response.json();
    } else {
        const msg = `После запроса на ${url} произошла ошибка HTTP: ${response.status}`;
        return {
            error: -1,
            msg
        }
    }
}

const downloadFile = (res)=>{
    let link = document.createElement('a');
    link.href = `/cfg/${res.msg}`;
    link.href = `${res.msg}`;
    link.download = `config.txt`;
    link.download = `${res.msg}`;
    link.click();
}

export {
    fetchConfig,
    downloadFile
}