const add = document.getElementById('addbtn')
const delet = document.querySelectorAll('.delet')
const check = document.querySelectorAll('.check')
const box = document.getElementById('tasks')
const name = document.querySelectorAll('.name')
window.addEventListener('load',function()
{
    var loc = JSON.parse(localStorage.getItem('task'))
    loc.forEach(function(item)
    {

    const divbox1 = document.createElement('div')
    divbox1.innerHTML = item.name
    const divbox2 = document.createElement('div')
    divbox2.className = "d-flex gap-1 p-2"
    const btn1 = document.createElement('button')
    btn1.className = "btn btn-success check";
    btn1.innerHTML = "compelet"
    const btn2 = document.createElement('button')
    btn2.setAttribute('onclick','deleted(event)')
    btn2.className="btn btn-danger delet"
    btn2.innerHTML = "delet"
    console.log(btn2)
    divbox2.append(btn1)
    divbox2.append(btn2)
    btn1.setAttribute('onclick','checked(event)')
    console.log(btn1)
    const divbox3 = document.createElement('div')
    divbox3.className = "border border-3 border-dark bg-light d-flex justify-content-between"
    divbox3.appendChild(divbox1)
    divbox3.appendChild(divbox2)
    const box = document.getElementById('tasks')
    box.appendChild(divbox3)
    })

})
let arr = []

add.addEventListener('click',function() {
    const task = document.getElementById('task-box')
    const taskname = task.value
    const divbox1 = document.createElement('div')
    divbox1.innerHTML = taskname
    const divbox2 = document.createElement('div')
    divbox2.className = "d-flex gap-1 p-2"
    const btn1 = document.createElement('button')
    btn1.className = "btn btn-success check";
    btn1.innerHTML = "compelet"
    const btn2 = document.createElement('button')
    btn2.setAttribute('onclick','deleted(event)')
    btn2.className="btn btn-danger delet"
    btn2.innerHTML = "delet"
    console.log(btn2)
    divbox2.append(btn1)
    divbox2.append(btn2)
    btn1.setAttribute('onclick','checked(event)')
    console.log(btn1)
    const divbox3 = document.createElement('div')
    divbox3.className = "border border-3 border-dark bg-light d-flex justify-content-between"
    divbox3.appendChild(divbox1)
    divbox3.appendChild(divbox2)
    const box = document.getElementById('tasks')
    box.appendChild(divbox3)
    let obj = {name:task.value,state:false}
    arr.push(obj)
    setlocal(arr)
    task.value = ''
})
function setlocal(item)
{
    localStorage.setItem('task',JSON.stringify(item))
}

 function deleted(event)
 {
    event.target.parentNode.parentNode.remove()
    var loc = JSON.parse(localStorage.getItem('task'))
    var task ={}
    console.log(event.target.parentNode.parentNode.childNodes[0].innerHTML)
    var loc = arr.filter(function(item){
    return item.name != event.target.parentNode.parentNode.childNodes[0].innerHTML
 })
   setlocal(loc)
 }
 var tick = true
 function checked(event)
 {
    
    if(tick)
    {
    event.target.innerHTML = 'incompelet'
    console.log(event.target.parentNode.parentNode.childNodes[1])
    event.target.parentNode.parentNode.childNodes[1].style.textDecoration = 'line-through'
    /*var loc = arr.map(function(item)
    {
        if((item.name == event.target.parentNode.parentNode.childNodes[1].innerHTML ))
            item.state = true
        return item
    })
    setlocal(loc)*/
    
    tick = false
}
else{
    event.target.innerHTML ="compelet"
    event.target.parentNode.parentNode.childNodes[1].style.textDecoration = 'none'
    tick = true
}
    
 }
delet.forEach(function(item)
{
   item.addEventListener('click',deleted)
})
check.forEach(function(item)
{
    item.addEventListener('click',checked)
})