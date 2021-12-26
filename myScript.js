const container = document.getElementById("container");
const mainBody = document.querySelector('body')

//makes the grid
function makeRows(number) {
  container.style.setProperty('--grid-rows', number);
  container.style.setProperty('--grid-cols', number);
  for (c = 0; c < (number * number); c++) {
    let cell = document.createElement("div");  
    container.appendChild(cell).className = "grid-item";
    let boxWidth = Math.floor(544/number)
    let boxHeight = Math.floor(544/number)
    cell.style.width = boxWidth + "px" 
   cell.style.height = boxHeight + "px"
  };
};

//starting grid
makeRows(16);

//starts off with black

const boxes = document.querySelectorAll('.grid-item')
boxes.forEach((thing) => {
    thing.addEventListener(('mouseenter'), () => {
        thing.style.backgroundColor = "black" 
    })
})


//function for rainbow
function rainbow() {
    
    
    boxes.forEach((thing) => {
        thing.addEventListener(('mouseenter'), () => {
            
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            thing.style.backgroundColor = "#" + randomColor
            mainBody.style.backgroundColor = "#" + randomColor
            
        })
        
    })
   console.log('rainbow works')
}

//functino for black
function black() {
   
    boxes.forEach((thing) => {
        
        thing.addEventListener(('mouseenter') , () => {
            
            
            
            thing.style.backgroundColor = 'black'
            mainBody.style.backgroundColor = 'black'
        })
    })
    console.log('black works')
}


//function for erasing
function erase() {
    
    
   
    boxes.forEach((thing) => {
        
            
        thing.style.backgroundColor = 'white'
        mainBody.style.backgroundColor = 'white' 
       
    })

    black()
    console.log('erase works')
}
   


function doStuff() {
    function erase() {
    
    
   
        boxes.forEach((thing) => {
            
                
            thing.style.backgroundColor = 'white'
            mainBody.style.backgroundColor = 'white' 
           
        })
    
        black()
        console.log('erase works')
    }

    function black() {
   
        boxes.forEach((thing) => {
            
            thing.addEventListener(('mouseenter') , () => {
                
                
                
                thing.style.backgroundColor = 'black'
                mainBody.style.backgroundColor = 'black'
            })
        })
        console.log('black works')
    }

    function rainbow() {
    
    
        boxes.forEach((thing) => {
            thing.addEventListener(('mouseenter'), () => {
                
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                thing.style.backgroundColor = "#" + randomColor
                mainBody.style.backgroundColor = "#" + randomColor
                
            })
            
        })
       console.log('rainbow works')
    }
    blackButton.addEventListener('click', black)
    eraser.addEventListener('click', erase)
    colorButton.addEventListener('click', rainbow)
}

//function for shader


function reset() {
   
    document.querySelectorAll(".grid-item").forEach((thing) => thing.parentNode.removeChild(thing));
    
   

    const boxes = document.querySelectorAll('.grid-item')
    boxes.forEach((thing) => {
        thing.addEventListener(('mouseenter'), () => {
        thing.style.backgroundColor = "black" 
        })
    })
    
     
   
}
    
function hundredGrid(){
    
    reset()
    makeRows(100)
    const boxes = document.querySelectorAll('.grid-item')
    boxes.forEach((thing) => {
        thing.addEventListener(('mouseenter'), () => {
        thing.style.backgroundColor = "black" 
        })
    })
    function erase() {
    
    
   
        boxes.forEach((thing) => {
            
                
            thing.style.backgroundColor = 'white'
            mainBody.style.backgroundColor = 'white' 
           
        })
    
        black()
        console.log('erase works')
    }

    function black() {
   
        boxes.forEach((thing) => {
            
            thing.addEventListener(('mouseenter') , () => {
                
                
                
                thing.style.backgroundColor = 'black'
                mainBody.style.backgroundColor = 'black'
            })
        })
        console.log('black works')
    }

    function rainbow() {
    
    
        boxes.forEach((thing) => {
            thing.addEventListener(('mouseenter'), () => {
                
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                thing.style.backgroundColor = "#" + randomColor
                mainBody.style.backgroundColor = "#" + randomColor
                
            })
            
        })
       console.log('rainbow works')
    }
    blackButton.addEventListener('click', black)
    eraser.addEventListener('click', erase)
    colorButton.addEventListener('click', rainbow)
}
function sixtyFourGrid(){
    
        
    reset()
    makeRows(64)
    const boxes = document.querySelectorAll('.grid-item')
    boxes.forEach((thing) => {
        thing.addEventListener(('mouseenter'), () => {
        thing.style.backgroundColor = "black" 
        })
    })
    function erase() {
    
    
   
        boxes.forEach((thing) => {
            
                
            thing.style.backgroundColor = 'white'
            mainBody.style.backgroundColor = 'white' 
           
        })
    
        black()
        console.log('erase works')
    }

    function black() {
   
        boxes.forEach((thing) => {
            
            thing.addEventListener(('mouseenter') , () => {
                
                
                
                thing.style.backgroundColor = 'black'
                mainBody.style.backgroundColor = 'black'
            })
        })
        console.log('black works')
    }

    function rainbow() {
    
    
        boxes.forEach((thing) => {
            thing.addEventListener(('mouseenter'), () => {
                
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                thing.style.backgroundColor = "#" + randomColor
                mainBody.style.backgroundColor = "#" + randomColor
                
            })
            
        })
       console.log('rainbow works')
    }
    blackButton.addEventListener('click', black)
    eraser.addEventListener('click', erase)
    colorButton.addEventListener('click', rainbow)
    
       
    
}
function thirtySixGrid(){
    
        
    reset()
    makeRows(36)
    const boxes = document.querySelectorAll('.grid-item')
    boxes.forEach((thing) => {
        thing.addEventListener(('mouseenter'), () => {
        thing.style.backgroundColor = "black" 
        })
    })
    function erase() {
    
    
   
        boxes.forEach((thing) => {
            
                
            thing.style.backgroundColor = 'white'
            mainBody.style.backgroundColor = 'white' 
           
        })
    
        black()
        console.log('erase works')
    }

    function black() {
   
        boxes.forEach((thing) => {
            
            thing.addEventListener(('mouseenter') , () => {
                
                
                
                thing.style.backgroundColor = 'black'
                mainBody.style.backgroundColor = 'black'
            })
        })
        console.log('black works')
    }

    function rainbow() {
    
    
        boxes.forEach((thing) => {
            thing.addEventListener(('mouseenter'), () => {
                
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                thing.style.backgroundColor = "#" + randomColor
                mainBody.style.backgroundColor = "#" + randomColor
                
            })
            
        })
       console.log('rainbow works')
    }
    blackButton.addEventListener('click', black)
    eraser.addEventListener('click', erase)
    colorButton.addEventListener('click', rainbow)
    
       
    
}
function sixteenGrid(){
    
        
    reset()
    makeRows(16)
    const boxes = document.querySelectorAll('.grid-item')
    boxes.forEach((thing) => {
        thing.addEventListener(('mouseenter'), () => {
        thing.style.backgroundColor = "black" 
        })
    })
    function erase() {
    
    
   
        boxes.forEach((thing) => {
            
                
            thing.style.backgroundColor = 'white'
            mainBody.style.backgroundColor = 'white' 
           
        })
    
        black()
        console.log('erase works')
    }

    function black() {
   
        boxes.forEach((thing) => {
            
            thing.addEventListener(('mouseenter') , () => {
                
                
                
                thing.style.backgroundColor = 'black'
                mainBody.style.backgroundColor = 'black'
            })
        })
        console.log('black works')
    }

    function rainbow() {
    
    
        boxes.forEach((thing) => {
            thing.addEventListener(('mouseenter'), () => {
                
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                thing.style.backgroundColor = "#" + randomColor
                mainBody.style.backgroundColor = "#" + randomColor
                
            })
            
        })
       console.log('rainbow works')
    }
    blackButton.addEventListener('click', black)
    eraser.addEventListener('click', erase)
    colorButton.addEventListener('click', rainbow)
    
    
    
}





let hundred = document.getElementById('hundred')
hundred.addEventListener('click', hundredGrid)

let sixtyFour = document.getElementById('sixtyFour')
sixtyFour.addEventListener('click', sixtyFourGrid)

let thirtySix = document.getElementById('thirtySix')
thirtySix.addEventListener('click', thirtySixGrid)

let sixteen = document.getElementById('sixteen')
sixteen.addEventListener('click', sixteenGrid)

let eraser = document.getElementById('clear')
eraser.addEventListener('click', erase)

let blackButton = document.getElementById('black')
blackButton.addEventListener('click', black)
 
let colorButton = document.getElementById('color')
colorButton.addEventListener('click', rainbow)







