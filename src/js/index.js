const generate = document.querySelector('#generate-config');
const getConfig = document.querySelector('#get-config');

const fetchConfig = async (url) => {
    let response = await fetch(url, {
        method: "POST",
        body: new FormData(generate)
    })

    if (response.ok) {
        let {file} = await response.json();
        let link = document.createElement('a');
        link.href = `${file}`;
        link.download = `${file}`;
        link.click();
    } else {
        console.error("Ошибка HTTP: " + response.status);
    }
}

generate.onsubmit = async (e) => {
    e.preventDefault();
    await  fetchConfig('/cgi-bin/form.py');

};

getConfig.onsubmit = async (e) =>{
    e.preventDefault();
    await  fetchConfig('/cgi-bin/auth.py');
}

