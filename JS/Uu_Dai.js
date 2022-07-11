const Uu_Dai = {
    Name: "Ưu Đãi - Món Mới",
    Food: [
        {
            Id: 1,
            Name: "Combo Chill Hè 1",
            Image: "/images/Uu_Dai_Mon_Moi/Combo_Chill_He_1.png",
            imageName: "Combo_Chill_He_1.png",
            Price: 122000,
            Decription: [
                "3 Miếng Gà Giòn Cay / 3 Miếng Gà Giòn Không Cay / 3 Miếng Gà Truyền Thống",
                "1 Pepsi Lon"]
        },
        {
            Id: 2,
            Name: "Combo Chill Hè 2",
            Image: "/images/Uu_Dai_Mon_Moi/Combo_Chill_He_2.png",
            imageName: "Combo_Chill_He_2.png",
            Price: 215000,
            Decription: [
                "4 Miếng Gà Giòn Cay / 4 Miếng Gà Giòn Không Cay / 4 Miếng Gà Truyền thống",
                "1 Burger Tôm",
                "2 Pepsi Lon"]
        },
        {
            Id: 3,
            Name: "Combo Hash Browns A",
            Image: "/images/Uu_Dai_Mon_Moi/Combo_HashBrowns_A.png",
            imageName: "Combo_HashBrowns_A.png",
            Price: 78000,
            Decription: [
                "2 Bánh Khoai Tây Chiên",
                "1 Cơm Gà Cay / 1 Cơm Gà Không Cay",
                "1 Súp Rau Củ / 1 Súp Rong ",
                "1 Pepsi Lon"]
        },
        {
            Id: 4,
            Name: "Combo Hash Browns B",
            Image: "/images/Uu_Dai_Mon_Moi/Combo_HashBrowns_B.png",
            imageName: "Combo_HashBrowns_B.png",
            Price: 68000,
            Decription: [
                "2 Bánh Khoai Tây Chiên",
                "1 Mì Ý Xốt Cà Gà Viên",
                "1 Pepsi Lon"]
        },
        {
            Id: 5,
            Name: "Gà Que Kem (1 Que)",
            Image: "/images/Uu_Dai_Mon_Moi/Ga_Que_Kem_1Que.png",
            imageName: "Ga_Que_Kem_1Que.png",
            Price: 39000,
            Decription: ["1 Gà Que Kem"]
        },
        {
            Id: 6,
            Name: "Gà Que Kem (2 Que)",
            Image: "/images/Uu_Dai_Mon_Moi/Ga_Que_Kem_2Que.png",
            imageName: "Ga_Que_Kem_2Que.png",
            Price: 73000,
            Decription: ["2 Gà Que Kem"]
        }
    ]
}

let parent = document.getElementById("parent");
for (var i in Uu_Dai.Food) {
    let item = document.createElement('div');
    item.className = 'col-md-6 col-lg-4';
    item.innerHTML = `<div class='card' style="margin-bottom: 2.44444444444444rem;" > 
    <div class="card-title" id='card-title'><img id='img' style="width: 100%;" src="`+ Uu_Dai.Food[i].Image + `"></div>
    <div class="card-body" id='card-body' >
        <h5 style="font-weight: bold;" class="card-text" >`+ Uu_Dai.Food[i].Name + `</h5>
        <input type="nummber" class='d-none' id="price" value="`+ Uu_Dai.Food[i].Price + `">
        <input type="img" class='d-none' id="img" value="`+ Uu_Dai.Food[i].Image + `">
        <h6 style="font-weight: bold;" class="card-price" >`+ Uu_Dai.Food[i].Price + `đ</h6>
        <div class="card-text" >
            `+ list(i) + `
        </div>
  
        <button class="btn btn-danger" style="" onclick="AddToCart(this)" >Đặt Hàng</button>
    </div>
    </div>
 `;
    parent.appendChild(item);

}

function list(i) {
    let ul = document.createElement('ul');
    for (var k in Uu_Dai.Food[i].Decription) {
        let li = document.createElement('li');
        li.innerHTML = Uu_Dai.Food[i].Decription[k];
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

function show() {
    table = `<tr>
    <th scope="col">Name</th>
    <th scope="col">Image</th>
    <th scope="col">Price</th>
    <th scope="col">Decription</th>
    <th scope="col">Button</th>
    </tr>`

    for (var x = 0; x < Uu_Dai.Food.length; x++) {
        table += `<tr>
        <td >${Uu_Dai.Food[x].Name}</td>
        <td><img src="${Uu_Dai.Food[x].Image}"alt="${Uu_Dai.Food[x].Name}"></td>
        <td>${Uu_Dai.Food[x].Price} VND</td>
        <td>${Uu_Dai.Food[x].Decription}</td>
        <td onclick="edit(${Uu_Dai.Food[x].Id})" class="btn btn-hover" data-bs-toggle="modal" data-bs-target="#editModal">
            <i class="bi bi-pencil"></i>
        </td>
        <td class='btn btn-hover' onclick="xoa(this)"><i class="bi bi-x-lg"></i></td>
        
        </tr>`
    }

    document.getElementById("pprint").innerHTML = table

}

show()

function xoa(x) {
    var node = x.parentElement;
    node.remove();
}

function add() {
    var itemName = document.getElementById('itemName').value;
    var itemImage = document.getElementById('itemImage').files[0].name;
    var itemPrice = document.getElementById('itemPrice').value;
    var itemDecription = document.getElementById('itemDecription').value;

    var item = {
        Id: Uu_Dai.Food.length + 1,
        Name: itemName,
        Image: "/images/Uu_Dai_Mon_Moi/Ga_Ran_Quay/" + itemImage,
        imageName: itemImage,
        Price: itemPrice,
        Decription: itemDecription
    }

    Uu_Dai.Food.push(item)
    console.log(Uu_Dai.Food)
    show()
    clear()
}

function clear() {
    document.getElementById('itemName').value = "";
    document.getElementById('itemPrice').value = "";
    document.getElementById('itemDecription').value = "";
}

function edit(x) {
    for (var i = 0; i < Uu_Dai.Food.length; i++) {
        if (Uu_Dai.Food[i].Id == x) {
            document.getElementById('editId').value = Uu_Dai.Food[i].Id;
            document.getElementById('editName').value = Uu_Dai.Food[i].Name;
            document.getElementById('editPrice').value = Uu_Dai.Food[i].Price;
            document.getElementById('editDecription').value = Uu_Dai.Food[i].Decription;
        }
    }
}


function save(){
    var itemId = document.getElementById('editId').value;
    var itemName = document.getElementById('editName').value;
    var itemImage = document.getElementById('editImage').files[0].name;
    var itemPrice = document.getElementById('editPrice').value;
    var itemDecription = document.getElementById('editDecription').value;
    
    for(var i = 0; i < Uu_Dai.Food.length; i++){
        if (Uu_Dai.Food[i].Id == itemId)
        {
            Uu_Dai.Food[i].Name = itemName;
            Uu_Dai.Food[i].imageName = itemImage;
            Uu_Dai.Food[i].Image = "/images/Uu_Dai_Mon_Moi/Ga_Ran_Quay/" + itemImage;
            Uu_Dai.Food[i].Price = itemPrice;
            Uu_Dai.Food[i].Decription = itemDecription;
        }
    }
    show()
}