const form = document.getElementById('changeForm')
const newPass = document.getElementById('newPassword')
const confirmedPass = document.getElementById('confirmedPassword')
const btnReset = document.getElementById('btnReset')

if(form){
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        if(!checkPass()){
            alert("Password konfirmasi Salah dan Isi tidak boleh Kosong!")
            return
        }

        alert("Ganti Password Berhasil")
    })
}

function checkPass(){
    const pass = newPass.value
    const confirmed = confirmedPass.value    
    return (pass === confirmed) && (pass !== '' || confirmed !== '' )
}

const toggleNew = document.getElementById('toggleNew')
if(toggleNew && newPass){
    toggleNew.addEventListener('click', ()=>{
        eyeSlash(newPass, toggleNew)
    })
}

const toggleConfirmed = document.getElementById('toggleConfirmed');
if (toggleConfirmed && confirmedPass) {

    toggleConfirmed.addEventListener('click', () => {
        eyeSlash(confirmedPass, toggleConfirmed)
    });
}

function eyeSlash(pass, toggle){
        if (pass.type === 'password') {
            
            pass.type = 'text';

            toggle.innerHTML =
                '<i class="fa-regular fa-eye"></i>';

        } else {

            pass.type = 'password';
            
            toggle.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';
            
        }
}