let Combo_1 = {
    Name: "Combo 1 người",
    Food:[
    {
        Id: 1,
        Name: "Combo Gà Rán",
        Image: "/images/Combo1ng/Combo_Ga_Ran.png",
        imageName: "Combo_Ga_Ran.png",
        Price: 78000,
        Decription: [
           "2 Miếng Gà Giòn Cay / 2 Miếng Gà Giòn Không Cay / 2 Miếng Gà Truyền thống",
            "1 Pepsi Lon"
        ]
    },
    {
        Id: 2,
        Name: "Combo Gà Quay",
        Image: "/images/Combo1ng/Combo_Ga_Quay.png",
        imageName: "Combo_Ga_Quay.png",
        Price: 90000,
        Decription: [
             "1 Miếng Đùi Gà Quay Giấy Bạc / 1 Miếng Đùi Gà Quay Tiêu",
             "1 Cơm Trắng",
            "1 Pepsi Lon"
        ]
    },
    {
        Id: 3,
        Name: "Combo Mì Ý",
        Image: "/images/Combo1ng/Combo_Mi_Y.png",
        imageName: "Combo_Mi_Y.png",
        Price: 83000,
        Decription: [
            "1 Mỳ Ý Xốt Cà Gà Viên",
            "1 Miếng Gà Giòn Cay / 1 Miếng Gà Giòn Không Cay / 1 Miếng Gà Truyền Thống / 2 Xiên Gà Tenderods",
           "1 Pepsi Lon"
        ]
    },
    {
        Id: 4,
        Name: "Combo Burger",
        Image: "/images/Combo1ng/Combo_Burger.png",
        imageName: "Combo_Burger.png",
        Price: 87000,
        Decription: [
            "1 Burger Zinger / 1 Burger Tôm / 1 Burger Gà Quay Flava",
            "1 Miếng Gà Giòn Cay / 1 Miếng Gà Giòn Không Cay / 1 Miếng Gà Truyền Thống",
            "1 Pepsi Lon"
       ] 
    }
    ]
}


let parent = document.getElementById("parent");
for(var i in Combo_1.Food){
    let item = document.createElement('div');
    item.className = 'col-md-6 col-lg-4';
    item.innerHTML = `<div class='card ' style="margin-bottom: 2.44444444444444rem;" > 
    <div class="card-title" id='card-title'><img id='img' style="width: 100%;" src="`+Combo_1.Food[i].Image+`"></div>
    <div class="card-body" id='card-body' >
        <h5 style="font-weight: bold;" class="card-text" >`+Combo_1.Food[i].Name+`</h5>
        <input type="nummber" class='d-none' id="price" value="`+Combo_1.Food[i].Price+`">
        <input type="img" class='d-none' id="img" value="`+Combo_1.Food[i].Image+`">
        <h6 style="font-weight: bold;" class="card-price" >`+Combo_1.Food[i].Price+`Đ</h6>
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
        for(var k in Combo_1.Food[i].Decription){
        let li = document.createElement('li');
        li.innerHTML=Combo_1.Food[i].Decription[k];
        ul.appendChild(li);
        }
     
     return ul.outerHTML;
}

// let pprint = document.getElementById("pprint");
// for (var x = 0; x < Combo_1.Food.length; x++){
//     let item = document.createElement('tr');
//    item.innerHTML=`<th scope="row">${x+1}</th>
//    <td>${Combo_1.Food[x].Name}</td>
//     <td><img src="${Combo_1.Food[x].Image}"alt="${Combo_1.Food[x].Name}"></td>
//     <td>${Combo_1.Food[x].Price} VND</td>
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

    for (var x = 0; x < Combo_1.Food.length; x++){
        table += `<tr>
        <td >${Combo_1.Food[x].Name}</td>
        <td><img src="${Combo_1.Food[x].Image}"alt="${Combo_1.Food[x].Name}"></td>
        <td>${Combo_1.Food[x].Price} VND</td>
        <td>${Combo_1.Food[x].Decription}</td>
        <td onclick=edit(${Combo_1.Food[x].Id}) class="btn btn-hover" data-bs-toggle="modal" data-bs-target="#editModal">
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
        Id: Combo_1.Food.length + 1,
        Name: itemName,
        Image: "/images/Combo1ng/Ga_Ran_Quay/" + itemImage,
        imageName: itemImage,
        Price: itemPrice,
        Decription: itemDecription
    }

    Combo_1.Food.push(item)
    console.log(Combo_1.Food)
    show()
    clear()
}

function clear(){
    document.getElementById('itemName').value = "";
    document.getElementById('itemPrice').value = "";
    document.getElementById('itemDecription').value = "";
}

function edit(x) {
    for (var i = 0; i < Combo_1.Food.length; i++) {
        if (Combo_1.Food[i].Id == x) {
            document.getElementById('editId').value = Combo_1.Food[i].Id;
            document.getElementById('editName').value = Combo_1.Food[i].Name;
            document.getElementById('editPrice').value = Combo_1.Food[i].Price;
            document.getElementById('editDecription').value = Combo_1.Food[i].Decription;
        }
    }
}


function save(){
    var itemId = document.getElementById('editId').value;
    var itemName = document.getElementById('editName').value;
    var itemImage = document.getElementById('editImage').files[0].name;
    var itemPrice = document.getElementById('editPrice').value;
    var itemDecription = document.getElementById('editDecription').value;
    
    for(var i = 0; i < Combo_1.Food.length; i++){
        if (Combo_1.Food[i].Id == itemId)
        {
            Combo_1.Food[i].Name = itemName;
            Combo_1.Food[i].imageName = itemImage;
            Combo_1.Food[i].Image = "/images/Uu_Dai_Mon_Moi/Ga_Ran_Quay/" + itemImage;
            Combo_1.Food[i].Price = itemPrice;
            Combo_1.Food[i].Decription = itemDecription;
        }
    }
    show()
}