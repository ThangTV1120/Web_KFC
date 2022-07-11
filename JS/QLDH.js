const Bill = [
    {
        ID: 1,
        userID: 1,
        Product: [
            { Id: "CS1", comboName: "Combo 1 người", Price: 78000, SL: 2, pay: 2 * 78000 },
            { Id: "CN1", comboName: "Combo Nhóm", Price: 162000, SL: 1, pay: 1 * 162000 }
        ]
    },
    {
        ID: 2,
        userID: 2,
        Product: [
            { Id: "CS1", comboName: "Combo 1 người", Price: 78000, SL: 3, pay: 3 * 78000 },
            { Id: "CN1", comboName: "Combo Nhóm", Price: 162000, SL: 5, pay: 5 * 162000 }
        ]
    },
    {
        ID: 3,
        userID: 3,
        Product: [
            { Id: "CS1", comboName: "Combo 1 người", Price: 78000, SL: 6, pay: 6 * 78000 }
        ]
    },
    {
        ID: 4,
        userID: 4,
        Product: [
            { Id: "UD1", comboName: "Ưu Đãi", Price: 122000, SL: 2, pay: 2 * 122000 }
        ]
    }
]

function Tong(i) {
    var sum = 0;
    for (var x = 0; x < Bill[i].Product.length; x++) {
        sum += Bill[i].Product[x].pay;
    }
    return sum;
}

function show() {
    var table = `<tr>
    <th scope="col">ID Bill</th>
    <th scope="col">ID User</th>
    <th scope="col">Total</th>
    <th scope="col">Button</th>
</tr>`
    var idBill = ""
    for (var x = 0; x < Bill.length; x++) {
        idBill = "Bill" + Bill[x].ID;
        table += `<tr>
        <td >${idBill}</td>
        <td>${Bill[x].userID}</td>
        <td>${Tong(x)} VND</td>
        <td onclick="view(${Bill[x].ID})" class="btn btn-hover" data-bs-toggle="modal" data-bs-target="#viewModal">
        <i class="bi bi-view-stacked"></i>
        </td>
        </tr>`
    }

    document.getElementById("2print").innerHTML = table

}

show()

function view(i) {
    for (let index = 0; index < Bill.length; index++) {
        if (i == Bill[index].ID) {
            var table = `<tr>
            <th scope="col">ID Product</th>
            <th scope="col">Combo</th>
            <th scope="col">Price</th>
            <th scope="col">Quality</th>
            </tr>`
            for (var x in Bill[index].Product) {
                table +=  `<tbody><tr>
                <td>${Bill[index].Product[x].Id}</td>
                <td>${Bill[index].Product[x].comboName}</td>
                <td>${Bill[index].Product[x].Price}</td>
                <td>${Bill[index].Product[x].SL}</td>
                </tr></tbody>`;
            }

            document.getElementById('Vieww').innerHTML = table;
        }
    }
}