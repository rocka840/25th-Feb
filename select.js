function SelectChanged() {
    console.log("You changed the colour");
    let mySelect = document.getElementById("mySelect");
    let myBox = document.getElementById("box");
    console.log(mySelect.selectedIndex);

    myBox.classList.remove("yellow");
    myBox.classList.remove("blue");
    myBox.classList.remove("red");

    console.log(mySelect.value);
    myBox.classList.add(mySelect.value);

    /* if (mySelect.selectedIndex == 2) {
         myBox.classList.add("red");
     }

     if (mySelect.selectedIndex == 1) {
         myBox.classList.add("yellow");
     }

     if (mySelect.selectedIndex == 3) {
         myBox.classList.add("blue");
     }*/
}