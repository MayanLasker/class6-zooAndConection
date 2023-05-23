
//getElementById=לקשר בין הכפתור שלנו ללט שכתבנו בגבה סקריפט


let love=document.getElementById("love")
love.onclick=()=>alert("love")

let hate=document.getElementById('hate')
hate.onclick=()=>alert('hate')

let peace=document.getElementById('peace')
peace.onclick=()=>alert('peace')

let war=document.getElementById('war')
war.onclick=()=>alert('war')


let names=document.getElementById("name")

let hello=prompt("hello!please right your name")

names.innerHTML="hello "+hello+"! have a good day!"
