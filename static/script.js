// import {axios} from 'axios';
// import axios from 'axios';



function sendData(data) {
  console.log('Data sent:', data);
}
const user = {
  name: '',
  email: '',
  rating: 0,
}
const form = document.querySelector('.form');
const deleteButton = document.querySelector('.delete');
const deleteOne = document.querySelector('.deleteOne');
const para = document.querySelector('.para');
const showUserButton = document.querySelector('.showAllUsers');
const table = document.querySelector('.table');
const search = document.querySelector('.search');

async function getUserByName(name){
  try{
    const response = await axios.get(`/api/user/name/${name}`);
    console.log(response);
    const data= response.data;
    const table2 = document.querySelector('.table2');
    const size = data.length;
    table2.innerHTML = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Rating</th>
</tr>`
    for (let i = 0; i < size; i++) {
      table2.innerHTML += ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].rating}</td>
                            <td>${data[i]._id}</td>
                          </tr>`
    }
  }
  catch(error){
    console.error(error);
  }
}
async function getUserByEmail(email){
  try{
    const response = await axios.get(`/api/user/email/${email}`);
    console.log(response);
    const data= response.data;
    const table2 = document.querySelector('.table2');
    const size = data.length;
    table2.innerHTML = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Rating</th>
</tr>`
    for (let i = 0; i < size; i++) {
      table2.innerHTML += ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].rating}</td>
                            <td>${data[i]._id}</td>
                          </tr>`
    }
  }
  catch(error){
    console.error(error);
  }
}
async function getUserByRating(rating){
  try{
    const response = await axios.get(`/api/user/rating/${rating}`);
    console.log(response);
    const data= response.data;
    const table2 = document.querySelector('.table2');
    const size = data.length;
    table2.innerHTML = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Rating</th>
</tr>`
    for (let i = 0; i < size; i++) {
      table2.innerHTML += ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].rating}</td>
                            <td>${data[i]._id}</td>
                          </tr>`
    }
  }
  catch(error){
    console.error(error);
  }
}
async function getAllUser() {
  try {
    const response = await axios.get('/api/user');
    console.log(response);
    return response.data;
    // para.innerTEXT = response.data;
  } catch (error) {
    console.error(error);
  }
}
async function deleteUser(id) {
  try {
    const response = await axios.delete(`/api/user/${id}`);
    console.log(response);
    // return response.data;
    // para.innerTEXT = response.data;
  } catch (error) {
    console.error(error);
  }
}
async function createUser(user) {
  // try {
  await axios.post('/api/user', user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // } catch (error) {
  //   console.error(error);
  // }
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted');
  user.name = form.elements['name'].value;
  form.elements['name'].value = '';
  // console.log(user.name);
  user.email = form.elements['email'].value;
  form.elements['email'].value = '';
  user.rating = form.elements['rating'].value;
  form.elements['rating'].value = '';
  // getUser();
  createUser(user);
  alert('User created successfully');
});
async function showAllUsers() {
  try {
    const data = await getAllUser();
    console.log(data);
    const size = data.length;
    table.innerHTML = `<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Rating</th>
</tr>`
    for (let i = 0; i < size; i++) {
      table.innerHTML += ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].rating}</td>
                            <td>${data[i]._id}</td>
                            <td><button onclick=
                            "const table = document.querySelector('.table');
                            async function deleteUser(id) {
                              try {
                                const response = await axios.delete('/api/user/${data[i]._id}');
                                console.log(response);
                                // return response.data;
                                // para.innerTEXT = response.data;
                              } catch (error) {
                                console.error(error);
                              }
                            }
                            deleteUser('${data[i]._id}');
                            table.deleteRow(${i + 1});">Delete</button></td>
                          </tr>`
    }
  } catch (error) {
    console.error(error);
  }
}
//  deleteOne.addEventListener('click', () => {
//  const i = {id: 668677ca93004346b10e0105};
//   deleteUser('66851c3ed3f4643af1c813c2');
//  });
showUserButton.addEventListener('click', () => {
  showAllUsers();
});

search.addEventListener('click', () => {
  const searchBy = document.querySelector('.searchBy');
  const searchValue = searchBy.value;
  console.log(searchValue);
  const searchText = document.querySelector('.searchText');
  if(searchValue == "name"){
    getUserByName(searchText.value);
  }
  else if(searchValue == "rating"){
    console.log(searchText.value);
    getUserByRating(searchText.value);
  }
  else if(searchValue == "email"){
    console.log(searchText.value);
    getUserByEmail(searchText.value);
  }
});