document.querySelector('#images').addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){

        let removeIt = e.target.parentNode
        removeIt.remove()
        
    }
    
}, false)

// document.getElementById('image2').onclick = function(){
//     alert('Pic 2 is clicked :-')
// }

// document.getElementById('image3').addEventListener('click', function(){
//     alert('Pic 3 is clicked :-')
// }, false)

// document.getElementById('images').addEventListener('click', function(e){
//     console.log('Pic is clicked :-')
// }, false)

// document.getElementById('image4').addEventListener('click', function(e){
//     console.log('Pic 4 is clicked :-')
//     e.stopPropagation()
// }, false)

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault()
}, false)
