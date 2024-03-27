 let toastBox = document.getElementById('toastBox');
 let successMsg = '<i class="fa-solid fa-circle-check"></i> successfully Submitted';
 let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix the error';
 let invalidMsg =  '<i class="fa-solid fa-circle-exclamation"></i> invalid Input, Check Again';


 function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast)

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },5000);
 }