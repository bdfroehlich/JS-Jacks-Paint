// var images = document.getElementsByTagName('img');  

function configureListeners() {
    var images = document.getElementsByTagName('img');    

     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)        
    } 
}

function addOpacity(event) {
    //event is an event object automatically passed to all event handlers
    //You can use event.target.id. event.target represents DOM object and you can access all its property and methods.
    if (!this.classList.contains('dim')){
        //if the current img in the array "this" refers to the current image doesn't contain class = "dim" this function
        //will add the class dim to it. class dim styling is set in the css file
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);  
    //calls the getProductInfo function which is a switch case that is all the part numbers   
}

function removeOpacity(event) {
     if (this.classList.contains('dim')){
         //remove opacity is the function called on mouseout and will remove the dim class and the dim styling defined in the css file
        this.classList.remove('dim');
    }

    let element = document.getElementById('ppg');
        element.textContent = '';
        //this clears the pgg price per gallon text in the floatright text content on hover over without it the previous
        //color and price remains on screen until you mouse over another color
    let color = document.getElementById('color');
        color.textContent = ''; 
        //this clears the color text in the floatright text content on hover over

    event.preventDefault();    
    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
}

function changeImage(elementId) {
    let image = document.getElementById('imgDisplay');
    image.src = elementId.src;
}
// why do we need the changeimage function? the code runs exactly the same without it

function getProductInfo(partNumber) {
    let price;
    let colorName;  
    
    switch (partNumber) {
        case 'pn1':           
            price = '$19.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)           
            break;           
        case 'pn2':
            price = '$12.99'
            colorName = 'Medium Brown' 
            updatePrice(colorName, price)     
            break;            
        case 'pn3':
            price = '$11.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, price)   
            break;   
        case 'pn4':
            price = '$14.99'
            colorName = 'Bright Red'            
            updatePrice(colorName, price)   
            break;   
        case 'pn5':
            price = '$9.99'
            colorName = 'Solid White' 
            updatePrice(colorName, price)              
            break;   
        case 'pn6':
            price = '$15.99'
            colorName = 'Solid Black'   
            updatePrice(colorName, price)            
            break;   
        case 'pn7':
            price = '$8.99'
            colorName = 'Medium Blue'       
            updatePrice(colorName, price)        
            break;   
        case 'pn8':
            price = '$16.99'
            colorName = 'Light Purple'      
            updatePrice(colorName, price)         
            break;   
        case 'pn9':
            price = '$17.99'
            colorName = 'Bright Yellow'                       
            updatePrice(colorName, price)   
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let ppg = document.getElementById('ppg');
        ppg.textContent = price;
        
        let color = document.getElementById('color');
        color.textContent = colorName;
    }
    
}
