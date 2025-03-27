window.addEventListener("click", (e)=> 
    /* 
    Deals with the logic of when the buttons are clicked and to what color the 
    background should change to. E.g blue button will change 
    the background color to blue 
    */
    
    {
    switch(e.target)
    // case depending on the target of where the event is happening 
    {
    case btn1: 
        console.log(e)
        document.body.style.backgroundColor = "blue"
    break;
    case btn2:
        console.log(e)
        document.body.style.backgroundColor = "black"
    break;
    case btn3: 
        console.log(e)
        document.body.style.backgroundColor = "purple"
    break;
    case btn4:
        console.log(e)
        document.body.style.backgroundColor = "orange"
    break;
    case btn5:
    /* 
    Deals with the logic of the undo button in which revert the background color to a 
    particular state depending on which color the background is. E.g pressing undo 
    when backrgound is purple will change the backgound color to orange etc. 
    */
        console.log(e)
        switch(document.body.style.backgroundColor){
        case "blue": 
            document.body.style.backgroundColor = "orange"
            break;
        case "black": 
            document.body.style.backgroundColor = "blue"
            break;
        case "purple": 
            document.body.style.backgroundColor = "black"
            break;
        case "orange": 
            document.body.style.backgroundColor = "purple"
            break;
        }
        break;
    default:
        document.body.style.backgroundColor = "white"
}
})


