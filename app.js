const para=document.querySelector('p');

function handleKeyup(event) {
if (event.code == 'KeyI'){
//inflate the symbol
inflate()
}

if (event.code == 'KeyD'){
// deflate the symbol
deflate()
}
}

document.addEventListener('keyup', handleKeyup)

function inflate() {

// get the current font size
// increase by 10px
// if it's too big, display an explosion symbol

let fontSizeStr = window.getComputedStyle(para).getPropertyValue('font-size')
let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
let size = parseInt(numberStr, 10)

if (size > 60) {
// show explosion symbol
alert('💥')
document.removeEventListener('keyup', handleKeyup)
} else {

let newFontSize = (size + 10) + 'px'
para.style.fontSize= newFontSize;
}
}

function deflate(){

    // get the current font size
    // decrease by 10px
    // if it's too small, display DONE in the alert 
    
    let fontSizeStr = window.getComputedStyle(para).getPropertyValue('font-size')
    let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
    let size = parseInt(numberStr, 10)
    
    if (size <= 10) {
    // show DONE alert
    alert('DONE')
    document.removeEventListener('keyup', handleKeyup)
    } else {
    
    let newSmallerFontSize = (size - 10) + 'px'
    para.style.fontSize= newSmallerFontSize;
    }
    }
