document.getElementById("add-data").addEventListener("click", addToList);
document.getElementById("info-data").addEventListener("click", myFunction);
document.getElementById("ideas-data").addEventListener("click", myFunction);
document.getElementById("tools-data").addEventListener("click", myFunction);


function addToList () {
    console.log("addButton")
}

function myFunction () {
    console.log("voy a " + this.id)
}