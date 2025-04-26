document.getElementById("mypage").innerHTML = "New Page";
document.getElementById("myBtn").onclick = displayDate;
    function displayDate() {
        document.getElementById("mypage").innerHTML = Date();
    } 
myBtn.addEventListener("click", myfunction)
    function myfunction(){
        alert("Hello world!")
    }
mouse.addEventListener("mouseover", mysecondfunction) 
    function mysecondfunction(){
        alert("Click It")
    } 