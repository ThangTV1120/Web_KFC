const Nhom = {
    Name: "Combo Nhóm",
    Food:[
        {
            Id: 1,
            Name: "Combo Nhóm 1",
            Image: "/images/Combo_Nhom/Nhom_1.png",
            imageName: "Nhom_1.png",
            Price: 162000,
            Decription: [
                "3 Miếng Gà Giòn Cay / 3 Miếng Gà Giòn Không Cay / 3 Miếng Gà Truyền thống",
                "1 Burger Zinger / 1 Burger Tôm / 1 Burger Gà Quay Flava",
                "2 Pepsi Lon"
            ]
        },
        {
            Id: 2,
            Name: "Combo Nhóm 2",
            Image: "/images/Combo_Nhom/Nhom_2.png",
            imageName: "Nhom_2.png",
            Price: 176000,
            Decription: [
                "4 Miếng Gà Giòn Cay / 4 Miếng Gà Giòn Không Cay / 4 Miếng Gà Truyền thống",
                "2 Thanh Bí Phô mai",
                "2 Pepsi Lon"
            ]
        },
        {
            Id: 3,
            Name: "Combo Nhóm 3",
            Image: "/images/Combo_Nhom/Nhom_3.png",
            imageName: "Nhom_3.png",
            Price: 225000,
            Decription: [
                "5 Miếng Gà Giòn Cay / 5 Miếng Gà Giòn Không Cay / 5 Miếng Gà Truyền thống",
                "1 Gà Popcorn (Vừa) / 2 Xiên Gà Tenderods",
                "3 Pepsi Lon"
            ]
        },
        {
            Id: 4,
            Name: "Combo Gia Đình",
            Image: "/images/Combo_Nhom/Gia_Dinh.png",
            imageName: "Gia_Dinh.png",
            Price: 352000,
            Decription: [
                "5 Miếng Gà Giòn Cay / 5 Miếng Gà Giòn Không Cay / 5 Miếng Gà Truyền thống",
                "2 Burger Zinger / 2 Burger Tôm",
                "1 Mì Ý Xốt Cà Gà Viên",
                "3 Thanh Bí Phô mai",
                "4 Pepsi Lon"
            ]
        }
    ]
}

let parent = document.getElementById("parent");
for(var i in Nhom.Food){
    let item = document.createElement('div');
    item.className = 'col-md-6 col-lg-4';
    item.innerHTML = `<div class='card' style="margin-bottom: 2.44444444444444rem;" > 
    <div class="card-title" id='card-title'><img id='img' style="width: 100%;" src="`+Nhom.Food[i].Image+`"></div>
    <div class="card-body" id='card-body' >
        <h5 style="font-weight: bold;" class="card-text" >`+Nhom.Food[i].Name+`</h5>
        <input type="nummber" class='d-none' id="price" value="`+Nhom.Food[i].Price+`">
        <input type="img" class='d-none' id="img" value="`+Nhom.Food[i].Image+`">
        <h6 style="font-weight: bold;" class="card-price" >`+Nhom.Food[i].Price+`đ</h6>
        <div class="card-text" >
            `+list(i)+`
        </div>
    
        <button class="btn btn-danger" style="" onclick="AddToCart(this)" >Đặt Hàng</button>

    </div>
    </div>
 `;
    parent.appendChild(item);

}

function list(i){
      let ul =document.createElement('ul');
        for(var k in Nhom.Food[i].Decription){
        let li = document.createElement('li');
        li.innerHTML=Nhom.Food[i].Decription[k];
        ul.appendChild(li);
        }
     
     return ul.outerHTML;
}

// let pprint = document.getElementById("pprint");
// for (var x = 0; x < Nhom.Food.length; x++){
//     let item = document.createElement('tr');
//     item.innerHTML=`<th scope="row">${x+1}</th>
//     <td>${Nhom.Food[x].Name}</td>
//     <td><img src="${Nhom.Food[x].Image}"alt="${Nhom.Food[x].Name}"></td>
//     <td>${Nhom.Food[x].Price} VND</td>
//     <td>${list(x)}</td>
//     <td class='btn' onclick=xoa(this)><i class="bi bi-x-lg"></i></td>`;

//     pprint.appendChild(item);
// }
function show(){
    table = `<tr>
    <th scope="col">Name</th>
    <th scope="col">Image</th>
    <th scope="col">Price</th>
    <th scope="col">Decription</th>
    <th scope="col">Button</th>
    </tr>`

    for (var x = 0; x < Nhom.Food.length; x++){
        table += `<tr>
        <td >${Nhom.Food[x].Name}</td>
        <td><img src="${Nhom.Food[x].Image}"alt="${Nhom.Food[x].Name}"></td>
        <td>${Nhom.Food[x].Price} VND</td>
        <td>${Nhom.Food[x].Decription}</td>
        <td onclick=edit(${Nhom.Food[x].Id}) class="btn btn-hover" data-bs-toggle="modal" data-bs-target="#editModal">
            <i class="bi bi-pencil"></i>
        </td>
        <td class='btn btn-hover' onclick=xoa(this)><i class="bi bi-x-lg"></i></td>
        </tr>`
    }

    document.getElementById("pprint").innerHTML = table

}

show()

function xoa(x) {
    var node = x.parentElement; 
     node.remove();
}

function add(){
    var itemName = document.getElementById('itemName').value;
    var itemImage = document.getElementById('itemImage').files[0].name;
    var itemPrice = document.getElementById('itemPrice').value;
    var itemDecription = document.getElementById('itemDecription').value;

    var item = {
        Id: Nhom.Food.length + 1,
        Name: itemName,
        Image: "/images/Combo_Nhom/Ga_Ran_Quay/" + itemImage,
        imageName: itemImage,
        Price: itemPrice,
        Decription: itemDecription
    }

    Nhom.Food.push(item)
    console.log(Nhom.Food)
    show()
    clear()
}

function clear(){
    document.getElementById('itemName').value = "";
    document.getElementById('itemPrice').value = "";
    document.getElementById('itemDecription').value = "";
}

function edit(x) {
    for (var i = 0; i < Nhom.Food.length; i++) {
        if (Nhom.Food[i].Id == x) {
            document.getElementById('editId').value = Nhom.Food[i].Id;
            document.getElementById('editName').value = Nhom.Food[i].Name;
            document.getElementById('editPrice').value = Nhom.Food[i].Price;
            document.getElementById('editDecription').value = Nhom.Food[i].Decription;
        }
    }
}


function save(){
    var itemId = document.getElementById('editId').value;
    var itemName = document.getElementById('editName').value;
    var itemImage = document.getElementById('editImage').files[0].name;
    var itemPrice = document.getElementById('editPrice').value;
    var itemDecription = document.getElementById('editDecription').value;
    
    for(var i = 0; i < Nhom.Food.length; i++){
        if (Nhom.Food[i].Id == itemId)
        {
            Nhom.Food[i].Name = itemName;
            Nhom.Food[i].imageName = itemImage;
            Nhom.Food[i].Image = "/images/Uu_Dai_Mon_Moi/Ga_Ran_Quay/" + itemImage;
            Nhom.Food[i].Price = itemPrice;
            Nhom.Food[i].Decription = itemDecription;
        }
    }
    show()
}