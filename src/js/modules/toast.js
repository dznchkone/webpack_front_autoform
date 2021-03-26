const toastContainer = document.querySelector('.toast-container');

const showToast = (msg) =>{
    const toast = document.createElement('div');
    toast.classList.add('toast','fade','show','mt-2');
    toast.innerHTML = `
            <div class="toast-header">
                <strong class="mr-auto text-danger">Ошибка!</strong>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
                ${msg}
            </div>
    `;
    toastContainer.appendChild(toast);

    setTimeout(()=>{
        toast.classList.remove('show');
        setTimeout(()=>{
            toastContainer.removeChild(toast)
        }, 500);
    },15000)


    toast.querySelector('.close').addEventListener('click',(e)=>{
        toast.classList.remove('show');
        setTimeout(()=>{
            toastContainer.removeChild(toast)
        }, 500);
    });

}

export {
    showToast
}