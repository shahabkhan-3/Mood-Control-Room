let btn1 = document.querySelector('.btn')
let pass = document.querySelector('.pass')
let msg = document.querySelector('.msg')
let controlPanel = document.querySelector('.control-panel')
let bulb = document.querySelector('.bulb')
let btn2 = document.querySelector('.btn2')
let countt = document.querySelector('.count')
let happy = document.querySelector('.happy')
let sad = document.querySelector('.sad')
let angry = document.querySelector('.angry')
let emoji = document.querySelector('.emoji')
let trafficbtn = document.querySelector('.trafficbtn')
let lightRed = document.querySelector('.lightred')
let lightGreen = document.querySelector('.lightgreen')
let lightYellow = document.querySelector('.lightyellow')
let body = document.querySelector('body')
let count = 0;
let next = 0;
btn1.addEventListener('click',function(){
    if(pass.value === '1234'){
      msg.innerText = 'login succesful'
      msg.innerText=''
      controlPanel.style.display = 'block' 
    }
    else{
        msg.innerText = 'wrong password'
        msg.style.color = 'red'
    }
    pass.value =''
    
})
btn2.addEventListener('click',function(){
    bulb.classList.toggle('on')
    
    
})
happy.addEventListener('click',function(){
emoji.innerText = '😊'
count += 1 ;
countt.innerText = count + ' Mood changes'
body.style.backgroundColor = 'lightgreen'
})
sad.addEventListener('click',function(){
emoji.innerText = '☹️'
count += 1 ;
countt.innerText = count + ' Mood changes'
body.style.backgroundColor = 'grey'
})
angry.addEventListener('click',function(){
emoji.innerText = '😡'
count += 1 ;
countt.innerText = count + ' Mood changes'
body.style.backgroundColor = 'brown'
})
trafficbtn.addEventListener('click',function(){
next += 1 ;
if(next === 1){
    lightRed.classList.add('color-red')
    
}
else if(next === 2){
    lightYellow.classList.add('color-yellow')
     lightRed.classList.remove('color-red')
}
else if(next === 3){
    lightGreen.classList.add('color-green')
    lightYellow.classList.remove('color-yellow')
}
else{
      lightGreen.classList.remove('color-green')
    lightRed.classList.remove('color-red')
    lightYellow.classList.remove('color-yellow')
    next = 0;
}

})


