const si = document.getElementById('si');
const no = document.getElementById('no');
const se = document.getElementById('se'); 

const btn = document.getElementById('btn')
const aviso = document.getElementById('aviso')




si.addEventListener('click',function(e){
    e.preventDefault;
    aviso.style.display = 'block';
    se.style.display = 'none';
    no.style.display = 'none';
    si.style.display = 'none';
});

btn.addEventListener('click',()=>{
    window.location = 'index.html'
    aviso.style.display = 'none';
    se.style.display = 'block';
    no.style.display = 'block';
    si.style.display = 'block';
})

no.addEventListener('mousemove',function(){
 
    let x = Math.round( Math.random() * 93)
    let y = Math.round( Math.random() * 93)

    no.style.left = x+"%";
    no.style.top = y+"%";

});






