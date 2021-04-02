const btn=document.getElementById('id');

btn.addEventListener('click',()=>{
    document.body.background=randomBg()
});
function randomBg(){
    return 'hsl(${Math.floor(Math.random()
        * 360)}, 100%, 50%)';
}