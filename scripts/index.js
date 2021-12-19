


setInterval(()=>{
    const time = new Date()
    let hour = String(formatNumber(time.getHours()))
    let minutes = String(formatNumber(time.getMinutes()))
    let seconds = String(formatNumber(time.getSeconds()))
    
    renderTime([hour,minutes,seconds])
    console.log(`${hour}:${minutes}:${seconds}`)
    
},1000)

function renderTime(elements){
    const items = document.querySelectorAll('.item')

    elements.forEach((element,index)=>{
       console.log(element,items[index]);
        items[index].textContent = element
    })
}
  
function formatNumber(number) {
    if(number < 10){
      number = '0' + number
    }
    return number
}

