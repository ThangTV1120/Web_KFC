function read() {

    let us = localStorage.getItem('User');
    let user = JSON.parse(us);
    id = user.length;
    userForm.id.value = id;
    console.log(user);
    table = ""
    let parent = document.querySelector('.parent')
    for (var i = 1; i < user.length; i++) {
        table += `<div class='row border-bottom' style='margin: 0;'>
            <div class="col-2">${user[i].ID}</div>
            <div class="col-4 ">${user[i].username}</div>
            <div class="col-4 text-center">${user[i].password}</div>
            <div class="col-2"  >
            <button onclick="update(this)">
            <i class="bi bi-pencil-square"></i>
            </button>
            <button onclick='remove(this)'>
            <i class="bi bi-trash"></i>
            </button>
            </div> 
            </div>
            `;
    }
    parent.innerHTML = table
}

function add_user() {
    event.preventDefault();
    var username = userForm.username.value;
    // var id = parseInt(userForm.id.value);
    var password = userForm.password.value;
    myuser = JSON.parse(localStorage.getItem('User'));
    var id = myuser.length
    task = {
        ID: id,
        username: username,
        password: password,
        permission: "customer"
    }
    myuser.push(task);

    let parent = document.querySelector('.parent')
    let children = document.createElement('div')
    children.style = "margin: 0;"
    children.className = 'row border-bottom';
    children.innerHTML = `
        <div class="col-2">${task.ID}</div>
        <div class="col-4 ">${task.username}</div>
        <div class="col-4 text-center">${task.password}</div>
        <div class="col-2"> 
        <button onclick="update(this)">
        <i class="bi bi-pencil-square"></i>
        </button>
        <button onclick='remove(this)'>
        <i class="bi bi-trash"></i>
        </button></div>
    `;
    parent.appendChild(children);
    console.log(myuser)

    up(myuser);
    localStorage.setItem('User', JSON.stringify(myuser))
}
function up(x) {
    id = x.length
    userForm.username.value = null
    userForm.password.value = null
    userForm.id.value = id;
    for (var i = 1; i < x.length; i++) {
        x[i].ID = i;
    }

}
function remove(x) {
    myuser = JSON.parse(localStorage.getItem('User'));
    let node = x.parentElement.parentElement
    let parent = document.querySelector('.parent')
    parent.removeChild(node);
    let id = node.children[0].innerHTML;
    myuser.splice(parseInt(id), 1)
    console.log(myuser);
    up(myuser);
    localStorage.setItem('User', JSON.stringify(myuser))
    read()
}

function update_user() {
    event.preventDefault();
    var username = userForm.username.value;
    var id = parseInt(userForm.id.value);
    var password = userForm.password.value;
    myuser = JSON.parse(localStorage.getItem('User'));
    for (var i = 1; i < myuser.length; i++) {
        if (myuser[i].ID == id) {
            myuser[i].password = password;
            myuser[i].username = username;
        }
    }
    up(myuser)
    localStorage.setItem('User', JSON.stringify(myuser))
    read()
}
function update(x) {
    let node = x.parentElement.parentElement
    userForm.id.value = node.children[0].innerHTML;
    userForm.password.value = node.children[2].innerHTML;
    userForm.username.value = node.children[1].innerHTML;
}