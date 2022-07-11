let customer=[
    {
        name:'Nguyễn Văn A',
        sdt:'093576578',
        diachi:'Số 3 /131, phường Thịnh Liệt, quận Thanh Xuân ,Hà Nội',
    },
    {
        name:'Nguyễn Văn B',
        sdt:'093572213',
        diachi:'Số 44 /131, phường Hoàng Mai, quận Hoàng Kiếm ,HCM',
    },
    {
        name:'Nguyễn Văn C',
        sdt:'093343423',
        diachi:'Số 44 /131, phường Giáp Bát, Quận Hoàng Mai , Hà Nội',
    }
]
function read(){
    for(i in customer){
    let parent = document.querySelector('.parent')
    let children = document.createElement('div')
    children.style = "margin: 0;"
    children.className = 'row border-bottom';
    children.innerHTML = `
        <div class="col-2">${customer[i].name}</div>
        <div class="col-4 text-center">${customer[i].sdt}</div>
        <div class="col-6 ">${customer[i].diachi}</div>
        
    `;
    parent.appendChild(children);
}
 }