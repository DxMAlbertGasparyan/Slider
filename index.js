const img = document.querySelectorAll('.slider_img');
const circle = document.querySelectorAll('.circle');
let circleIndex = 0;
let imageIndex = 0;
const intervalTimer = ()=>{
    setInterval(()=>{
        let index = imageIndex+1;
                let circlelength = circle.length+1;
                if(index>=img.length && circlelength>=circle.length-1){
                    index = 0;
                    circlelength=0;
                }
                show(index);
    },3000)
}
function show(index) {
    img[imageIndex].classList.remove('img_active');
    img[index].classList.add('img_active');
    circle[circleIndex].classList.remove('active_circle');
    circle[index].classList.add('active_circle');
    imageIndex = index;
    circleIndex = index;
}
const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.currentTarget.classList.contains('prev')){
            let index = imageIndex-1;
            let circlelength = circleIndex-1;
            if(index<0 && circlelength<0){
                index = img.length-1;
                circlelength = circle.circlelength-1;
            }
            show(index);


        }
       else if(event.currentTarget.classList.contains('next')){
            let index = imageIndex+1;
            let circlelength = circle.length+1;
            if(index>=img.length && circlelength>=circle.length-1){
                index = 0;
                circlelength=0;
            }
            show(index);


        }
        
    })
});
// circle.forEach((button)=>{
//         button.addEventListener('click',(event)=>{
//            event.target
//         })
// })

intervalTimer();