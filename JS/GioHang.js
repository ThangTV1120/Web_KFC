var cart = new Array();
var tong = 0;
var ass=new Array();
// show(); 
function AddToCart(x) {
    var listsp = x.parentElement.children;
    var name = listsp[0].innerHTML;
    var gia = listsp[1].value;
    var img =listsp[2].value;
    var mota = listsp[4].innerText;
    var  count=1;
    let sp = new Array(img,name, gia, mota);
    for(var i =0;i<cart.length;i++){
        if(cart[i][1]==name)
            count+=1;
    }
    cart.push(sp);
    if(count==1){
      let spp=new Array(img,name, gia, mota,count);
      ass.push(spp);
    }
    else{
        for(var i=0;i<ass.length;i++){
            if(ass[i][1]==name){
                ass[i][4]=count;
            }
        }
        
    }
    //  console.log(mota);
     console.log(count);
     console.log(" cart: "+cart);
     console.log("ass: "+ass)
    //    console.log(cart[0][0]==name)  
    showcount();
   
    localStorage.setItem('GioHang', JSON.stringify(ass))
    
}

function showcount() {
    document.getElementById("countSP").innerHTML = cart.length;    
}

function showcard() {
    let parent = document.querySelector('.parent');
    let tien=document.getElementById('tong');
    let gh = localStorage.getItem('GioHang');
    let giohang = JSON.parse(gh);
    var tong=0;
    document.getElementById("countSP").innerHTML = giohang.length; 
    // console.log(giohang);
    for (var i = 0; i<giohang.length;i++) {
        let children = document.createElement('div')
        children.className='row border-bottom';
        // children.className='col'
        children.innerHTML = `
        <div class="col-1" value='${parseInt(i+1)}'> ${parseInt(i+1)}</div>
        <div class="col-2"><img id='img' style="width: 100%;" src="${giohang[i][0]}"></div>
        <div class="col-2 text-center" >${giohang[i][1]}</div>
        <div class="col-1  ">${giohang[i][2]}Đ</div>
        <input type="nummber" class='d-none' id="price" value="`+giohang[i][2]+`">
        <div class="col-1 text-center d-flex" style="margin-right:15px">
        <button onclick='dele(this)'>-</button>
        <input type='number' min=1 max=10 id='number' value="${giohang[i][4]}">
        <button onclick='add(this)'>+</button>
        </div>
        <div class="col-3 " >${giohang[i][3]}</div>
        <div class="col-1 text-center " id="delete" onclick=xoa(this) type="button"><i class="bi bi-x-lg"></i></div>
        `;
        parent.appendChild(children);
        tong+=parseInt(giohang[i][2]*giohang[i][4]);
    }
    tien.value=tong;
    tien.innerHTML=tong+'đ';
}

function thanhtoan(){
var thongbao=document.getElementById('thongbao')
    thongbao.innerHTML="Cảm ơn bạn đã đặt hàng, Đồ ăn sẽ được giao đến sau 15 phút ";
  
}

     


