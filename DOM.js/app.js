document.getElementById("mypage").innerHTML = "New Page";
document.getElementById("myBtn").onclick = displayDate;
    function displayDate() {
        document.getElementById("mypage").innerHTML = Date();
    }      