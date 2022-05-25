


const ToggelON = () => {

    let mobilemenu = document.querySelector(".mobile-menu")

    // let isShow = true
    
    
    // if (isShow) {
    //     mobilemenu.style.visibility = "visible"
    //     mobilemenu.style.transform = " scale(1)"
    //     isShow = false
    // }
    // else{
    //     console.log("hit");
    //     mobilemenu.style.visibility = "hidden"
    //     mobilemenu.style.transform = " scale(0.1)"

    //     isShow = true

    // }
    

    if (mobilemenu.style.visibility === "hidden") {
        mobilemenu.style.visibility = "visible"
        mobilemenu.style.transform = " scale(1)"
    }
    else {
        mobilemenu.style.visibility = "hidden"
        mobilemenu.style.transform = " scale(0.1)"


    }



}
