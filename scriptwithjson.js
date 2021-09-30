var mydata = JSON.parse(data);

var count = Object. keys(mydata). length;
for (var i=0;i<count;i++){
    //console.log(mydata[i].Subject)
    var btn = document.createElement("BUTTON");
    btn.id = mydata[i].Subject;
    btn.className = "LinkButton"
    btn.innerHTML = mydata[i].Subject;
    document.getElementById("links").appendChild(btn);   
}

document.querySelectorAll('.LinkButton').forEach(item => {
    item.addEventListener('click', event => {
        for (var i=0;i<count;i++){
            if(mydata[i].Subject==item.innerHTML){
                window.open(mydata[i].Link)
            }
        }
    })
})