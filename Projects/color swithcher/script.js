const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);

    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);

        switch(e.target.id){
            case 'white':
                body.style.backgroundColor = e.target.id
                
                break;    
            case 'red':
                body.style.backgroundColor = e.target.id
                break;    
            case 'orange':
                body.style.backgroundColor = e.target.id
                break;    
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;    
            case 'black':
                body.style.backgroundColor = '#212121'
                break;    
            default:
                console.log("error 404 !");
                   
        }
    })
})