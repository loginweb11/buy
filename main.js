let filterList = document.getElementById("filterList")
let filterBtn = document.getElementById("filterBtn")

filterBtn.onclick = function () {
    if (filterList.style.display === "none") {
        filterList.style.display = "block";
        filterBtn.style.borderColor = "black";
    } else {
        filterBtn.style.borderColor = "white";
        filterList.style.display = "none";
    }
}