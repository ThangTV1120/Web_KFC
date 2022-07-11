var users = [
    {
        ID: 1,
        username: "admin@gmail.com",
        password: "123",
        permission: "admin"
    },
    {
        ID: 1,
        username: "customer01@gmail.com",
        password: "abc",
        permission: "customer"
    },
    {
        ID: 2,
        username: "customer02@gmail.com",
        password: "123",
        permission: "customer"
    },
    ]

function Login(){
    event.preventDefault();
    var email = myForm.loginemail.value;
    var pass = myForm.password.value;
    var customer=document.getElementById('customer')
    var modal=document.getElementById('modal-login')
    var val = check_user(email, pass, users); 
    console.log(val);
    if (val != false) {
       
        if (val.permission == "admin") {
            location.href = "KFC_Admin_QL_NguoiDung.html";
            localStorage.setItem('User', JSON.stringify(users))
        } else if (val.permission == "customer") {
            myForm.loginemail.value='';
            myForm.password.value='';
            customer.innerHTML=val.permission;
            customer.style='padding-top: 15px;';
            // modal.className='d-none';
        }
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu");
        myForm.loginemail.value = ""
        myForm.password.value = ""
    }
}
function check_user(email, pass, users) {
    for (i in users) {
        var user = users[i];
        if (user.username == email && user.password == pass) {
            return user;
        }
    }
    return false;
}
