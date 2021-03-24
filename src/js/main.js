import {fetchConfig} from "./modules/utils";
import {showToast} from "./modules/toast";

const generate = document.querySelector('#generate-config');
const getConfig = document.querySelector('#get-config');



generate.onsubmit = async (e) => {
    e.preventDefault();
    const res =  await  fetchConfig('/cgi-bin/form.py', generate);
    showToast(res.msg)
};

getConfig.onsubmit = async (e) =>{
    e.preventDefault();
   const res = await  fetchConfig('/cgi-bin/auth.py', getConfig);

}

