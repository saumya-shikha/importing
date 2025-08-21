/*
function  eventFunction(){
    console.log('I Have Clicked On The Document ');
}

document.addEventListener('click',eventFunction
);


document.removeEventListener('click',eventFunction
);
*/

// const content=document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//     console.log(event);
// } );




// let links=document.querySelectorAll('a');

// let thirdLink= links[2];

// thirdLink.addEventListener('click',
//     function(event){
//         event.preventDefault();
//         console.log('maza aaya');
//     }
// );


// let myDiv= document.createElement('div');

// function clickedPara(event){
//         console.log('Para' + event.target.textContent);
//     }
// myDiv.addEventListener('click',clickedPara);


// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent='This is para '+ i;

    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



let element= document.querySelector('#wrapper');
element.addEventListener('click',function(event) {
    if(event.target.nodeName === 'SPAN' ){
console.log('span is clicked'+ event.target.textContent);
    }
    
});