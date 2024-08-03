const form = document.querySelector('.loginForm');

// function to match the password
async function checkUser(email, password){
    try{
        const user = await axios.get(`/api/user/login/${email}`);
        console.log(user);
        if(user.data.length === 0){
            return false;
        }
        if(user.data[0].password === password){
            console.log("here");
            return true;
        }
        else{
            // console.log(user);
            console.log(typeof user);
            console.log(typeof password);
            return false;
        }
    } catch(error){
        console.error(error);
        
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    const userEmail = form.elements['email'].value;
    form.elements['email'].value = '';
    const userPassword = form.elements['password'].value;
    form.elements['password'].value = '';
    const check = await checkUser(userEmail, userPassword);
    console.log(check);
    if(check){
        console.log('Login Successful');
    }
    else{
        console.log('Login Failed');
        
    }


});