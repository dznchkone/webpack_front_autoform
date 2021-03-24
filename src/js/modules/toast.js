const toast = document.querySelector('.toast'),
        closeToast = document.querySelector('.toast .close');

const showToast = (msg) =>{
    toast.querySelector('.toast-body').innerHTML = msg;
    toast.classList.add('show');
}

closeToast.addEventListener('click',(e)=>{
    toast.classList.remove('show');
})

export {
    showToast
}