var input01 = document.getElementById("num1");
var input02 = document.getElementById("num2");
const button = document.getElementById("calc");
var c = [];

button.addEventListener('click', function(){
    let c =[];
    for(let i = 0; i <= Number(input01.value); i++){
        if(Number(input01.value) % i == 0 ){
            c.push(i);
        }
    }
    for(let i = 0; i <= Number(input02.value); i++){
        if(Number(input02.value) % i == 0 ){
            c.push(i);
        }
    }

    var result = c.filter(function(element, i){
        return c.indexOf(element) != i;
    });
    result.sort(function(a, b){
        if(a > b) return 1;
        if( a < b) return -1;
        return 0;
    })
    result.splice(0, (result.length - 1));
    alert(result);
    input01.value = '';
    input02.value = '';
});