let users = [];
axios.get("https://reqres.in/api/users?page=2").then((res) => {
  users = res.data.data;
  getUsers(users);
});
const getUsers = (users, index = 0) => {
  let tableData = "";
  for (let i = 0; i < users.length; i++) {
    tableData += `<tr class="rowData" id="${index++}">
    <td class='tdata'><img id='imgLink' src='${
      users[i].avatar
    }' width='40px' height='40px' /></td>
    <td class='tdata'>${users[i].first_name} </td>
    <td class='tdata'>${users[i].last_name}</td>
    <td class='tdata'>${users[i].email}</td>
    <td class='tdata'><i class="fa fa-trash fa-lg" onclick="handleOnDelete(${
      index - 1
    })"></i>
    <i class="fa fa-pencil-square-o fa-lg" onclick="handleOnEdit(${
      index - 1
    })"></i> 
    </td></tr>`;
    document.getElementById("fromApi").innerHTML = tableData;
  }
};

document.getElementById("btn").addEventListener("click", () => {
  let form = document.getElementById("form-control");
  form.style = "display:flex";
  document.getElementById("updateUser").innerHTML = "Add User";
});
document.getElementById("closebtn").addEventListener("click", () => {
  let form = document.getElementById("form-control");
  form.style = "display:none";
});
document.getElementById("subtn").addEventListener("click", () => {
  let form = document.getElementById("form-control");
  form.style = "display:none";
});

const handleOnSubmit = () => {
  let img = document.getElementById("img-link").value;
  // console.log(img);
  let firstName = document.getElementById("fname").value;
  // console.log(firstName);
  let lastName = document.getElementById("lname").value;
  // console.log(lastName);
  let mail = document.getElementById("email").value;
  // console.log(mail);
  if (firstName == "") {
    alert("please fill firstname");
  }
  if (lastName == "") {
    alert("please fill lastName");
  }
  if (mail == "") {
    alert("please fill email");
  }
  if (img == "") {
    alert("please fill image link");
  } else {
    users.push({
      avatar: img,
      first_name: firstName,
      last_name: lastName,
      email: mail,
    });
  }
  getUsers(users);
};
const handleOnDelete = (index) => {
  let confirmDelete = confirm("Do you really want to delete this user?");
  // console.log(index);
  if (confirmDelete === true) {
    document.getElementById(index).remove();
  }
};
const handleOnEdit = (index) => {
  // console.log(index);
  let form = document.getElementById("form-control");
  form.style = "display:flex";
  document.getElementById("updateUser").innerHTML = "Update User";

  document.getElementById("img-link").value = users[index].avatar;
  document.getElementById("fname").value = users[index].first_name;
  document.getElementById("lname").value = users[index].last_name;
  document.getElementById("email").value = users[index].email;
};
