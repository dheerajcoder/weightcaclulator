document.getElementById('output').style.visibility="hidden";
document.getElementById('kginput').addEventListener('input',function(e){
    let kg=e.target.value;
    document.getElementById('output').style.visibility="visible";
    
   document.getElementById('gram-output').innerHTML=kg*1000+" gram";
   document.getElementById('kg-output').innerHTML=kg/0.45359237+" pounds";
   document.getElementById('oz-output').innerHTML=kg*35.274+" oz"
});