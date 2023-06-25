/**Investor Image Slider */
import {InvestorImageSlider} from "/InvestorImageSlider.js"

let slide_image_listEl = document.querySelector(".slide_image_list")

console.log(slide_image_listEl)

let investorImageListHTML = "";

InvestorImageSlider.forEach(el=>{
    investorImageListHTML += `
    <div class="slide_image_item">
        <div class="slide_image_img">
            <img src="${el.img_investor}" alt="">
        </div>
        <div class="content_container">
            <div>
                <div class="big_text">${el.big_text}</div>
                <div class="small_text">${el.small_text}</div>
            </div>
                <button class="btn_investor">${el.year}</button>
        </div>
    </div>     
    `    
})
    
slide_image_listEl.innerHTML = investorImageListHTML

let slide_image_itemEl = document.querySelectorAll(".slide_image_item")
let slideImageLength = slide_image_itemEl.length
//btn_slide
let btnElSlideEl = document.querySelectorAll(".btn_slide_btn")

// console.log(slideImageLength)

let startLeng = 100
let endLeng = (slideImageLength - 1) * 100

function slideIncrement(){
    if(startLeng > -endLeng){
        startLeng -= 100
    }
    else{
        startLeng = 0
    }
    //console.log(startLeng)
    slide_image_itemEl.forEach((el,i) =>{
        el.style.transform = `translateX(${startLeng}%)`
        console.log(i)
    })
    switch(startLeng){
        case 0 :
            btnElSlideEl.forEach(el => el.classList.remove("btn_slide_btn_active"))
            btnElSlideEl[0].classList.add("btn_slide_btn_active");
            break;
        case -100 :
            btnElSlideEl.forEach(el => el.classList.remove("btn_slide_btn_active"))
            btnElSlideEl[1].classList.add("btn_slide_btn_active"); 
            break;
        case -200 :
            btnElSlideEl.forEach(el => el.classList.remove("btn_slide_btn_active"))
            btnElSlideEl[2].classList.add("btn_slide_btn_active"); 
            break;
        case -300 :
            btnElSlideEl.forEach(el => el.classList.remove("btn_slide_btn_active"))
            btnElSlideEl[3].classList.add("btn_slide_btn_active"); 
            break;
        case -400 :
            btnElSlideEl.forEach(el => el.classList.remove("btn_slide_btn_active"))
            btnElSlideEl[4].classList.add("btn_slide_btn_active");
            break;
        default : console.log("null")
    }
}
slideIncrement()
setInterval(slideIncrement,5000)







export const InvestorImageSlider = [
    {
        img_investor:"https://b.zmtcdn.com/data/o2_assets/84fc79475823b0e2d92f0580511bb2dc1655110685.png",
        big_text:"535 million",
        small_text:"Orders delivered*",
        year:"*FY 2022",
    },
    {
        img_investor:"https://b.zmtcdn.com/data/o2_assets/aeb6af45a95c660af52ec7945fb5cc771655110784.png",
        big_text:"₹213 billion",
        small_text:"Gross order value*",
        year:"*FY 2022",
    },
    {
        img_investor:"https://b.zmtcdn.com/data/o2_assets/593d03e48a6ac29b7658cee14f03f4e51655203204.png",
        big_text:"14.7 million",
        small_text:"Average monthly transacting customers*",
        year:"*FY 2022",
    },
    {
        img_investor:"https://b.zmtcdn.com/data/o2_assets/17e9e3e6fcd7a877f55c8e3816ec956c1655203077.png",
        big_text:"180,000",
        small_text:"Average monthly active food delivery restaurant partners*",
        year:"*FY 2022",
    },
    {
        img_investor:"https://b.zmtcdn.com/data/o2_assets/23d2cb3dbe319779cd8b7f630f0290441655110868.png",
        big_text:"285,000",
        small_text:"Average monthly active delivery partners*",
        year:"*FY 2022",
    }
]