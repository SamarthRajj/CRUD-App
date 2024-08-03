const form = document.querySelector('.loginForm');
const user = {
    name: '',
    email: '',
    password: '',
}
// function to match the password
async function createUser(user) {
    try {
        const users = await axios.post('/api/user',user);
        console.log(users);
    } catch (error) {
        console.error(error);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
    user.name = form.elements['name'].value;
    form.elements['name'].value = '';
    // console.log(user.name);
    user.email = form.elements['email'].value;
    form.elements['email'].value = '';
    user.password = form.elements['password'].value;
    form.elements['password'].value = '';
    createUser(user);
    


})