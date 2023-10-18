 /*  let player=[]|| localStorage.setItem("contents", JSON.stringify(player)); */
           
 function uuid(){
    return Math.floor(Math.random() * 987456);
   }
   function showPlayer(){
    let player = JSON.parse(localStorage.getItem("players")) || [];
    let value = document.getElementById("addinfo").value;
        let usserPlayer = {
            name: value,
            count: 0,
            id: uuid()
        }
        player.push(usserPlayer);
        localStorage.setItem("players", JSON.stringify(player));
        document.getElementById("addinfo").value = "";
        showUsser();
        console.log(player);
   } 
   function showUsser(){
    let data = JSON.parse(localStorage.getItem("players")) || [];
    let text = "";
    for( let i = 0; i < data.length;i++){
        text+=
        `
        <li > 
           <div class="ngang">
                <div class="ngang1">
                   <button id="deletethongtin" onclick="deleteUsser(${data[i].id})">Xóa</button>
                 <p> ${data[i].name}</p>
                </div>
                <div class="ngang2">
                    <button onclick="minuspoints(${data[i].id})">-</button>
                    <p class="big">${data[i].count}</p>
                    <button onclick="pluspoints(${data[i].id})">+</button>
                </div>
            </div>
        </li>
        `
    }
    document.getElementsByTagName("ul")[0].innerHTML=text;
    total()
   }
    showUsser ();
    // funcitinon xóa

   function deleteUsser(id){
    let data = JSON.parse(localStorage.getItem("players")) || [];
    for(let i = 0; i <data.length;i++){
        if(data[i].id == id){
            data.splice(i,1)
            localStorage.setItem("players", JSON.stringify(data));
            showUsser();
        }
    }
   }
//     cộng trừ điểm
   function minuspoints(id){
    let up = document.getElementsByClassName("big")[0];
    let data = JSON.parse(localStorage.getItem("players")) || [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data[i].count=--data[i].count;
         localStorage.setItem("players", JSON.stringify(data));
            showUsser();
            }
        }
        total()
   };
   function pluspoints(id){
    let data = JSON.parse(localStorage.getItem("players")) || [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data[i].count=++data[i].count;
         localStorage.setItem("players", JSON.stringify(data));
            showUsser();
            }
        }
        total()
    }
//đồng hô bấm giờ    

    
 function start(){       
     const myInterval = setInterval(() => {
        let result=document.getElementById("time").innerHTML
        result=++document.getElementById("time").innerHTML
    }, 1000);
}
function reset(){
    
    let result=document.getElementById("time").innerHTML;
    result=0;
}  
 
//Tổng điểm người chơi
function total(){
    let data = JSON.parse(localStorage.getItem("players")) || [];
    let totalplayer=data.length;
    let totalpoint = 0;
    for (let i = 0; i < data.length; i++) {
        totalpoint +=data[i].count;
        
    }
    document.getElementById("toltalPlayer").textContent = totalplayer;
    document.getElementById("toltalPoint").textContent = totalpoint;
    
}
total()