const updateDots = (currentdot , targetdot) => {
    currentdot.classList.remove('current-indicator')
    targetdot.classList.add('current-indicator')
}

const showingAndHidingBtns = (targetIndex, slides, prevBtn , nextBtn) => {
    //disabling and enabling left right btns according to specific condition
    if(targetIndex === 0){
        prevBtn.classList.add('hide')
        nextBtn.classList.remove('hide')
    }
    else if(targetIndex === slides.length-1){
        nextBtn.classList.add('hide')
        prevBtn.classList.remove('hide')
    }
    else{
        prevBtn.classList.remove('hide')
        nextBtn.classList.remove('hide')
    }
}

const getSlideNum = (dotNav , dots) => {
    //returns slide Number which is currently showing
    const currentActiveDot = dotNav.querySelector('.current-indicator')
    return dots.findIndex(dot => dot === currentActiveDot)
}

const setSlides = (slides) => {
    const slideWidth = slides[0].getBoundingClientRect().width
    //setting the slides next to eachother
    slides.forEach((slide , index) => {
        slide.style.left = slideWidth * index + 'px';
    })
}

const nextBtnConfiguration = (track ,slides , dotNav , dots , prevBtn , nextBtn) => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    const amountToMove = nextSlide.style.left
    
    track.style.transform = `translatex(-${amountToMove})`
    currentSlide.classList.remove('current-slide')
    nextSlide.classList.add('current-slide')
    
    //updating dots status
    const currentDot = dotNav.querySelector('.current-indicator')
    const targetDot = currentDot.nextElementSibling
    updateDots(currentDot , targetDot)
    showingAndHidingBtns(getSlideNum(dotNav , dots),slides , prevBtn , nextBtn)
}

const prevBtnConfiguration = (track, slides, dotNav , dots , prevBtn , nextBtn) => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
    const amountToMove = prevSlide.style.left
    
    track.style.transform = `translatex(-${amountToMove})`
    currentSlide.classList.remove('current-slide')
    prevSlide.classList.add('current-slide')
    
    //updating dots status
    const currentDot = dotNav.querySelector('.current-indicator')
    const targetDot = currentDot.previousElementSibling
    updateDots(currentDot , targetDot)
    showingAndHidingBtns(getSlideNum(dotNav , dots),slides , prevBtn , nextBtn)
}

const dotNavConfiguration = (e, track, slides, dotNav, dots, prevBtn, nextBtn) => {
    const targetDot = e.target.closest('button')
    if (!targetDot) return
    
    const targetIndex = dots.findIndex(dot => targetDot === dot) 
    const currentSlide = track.querySelector('.current-slide')
    const targetSlide = slides[targetIndex]
    
    //changing currentslide to targetslide
    track.style.transform = `translate(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
    
    //updating dots status
    const currenDot = dotNav.querySelector('.current-indicator')
    updateDots(currenDot , targetDot)
    showingAndHidingBtns(targetIndex ,slides, prevBtn , nextBtn)
}


// select the dom elements for first carousel
const track1 = document.querySelector('#carousel__track1')
const slides1 = Array.from(track1.children)
const nextBtn1 = document.querySelector('#carousel__btn--right1')
const prevBtn1 = document.querySelector('#carousel__btn--left1')
const dotNav1 = document.querySelector('#carousel__nav1')
const dots1 = Array.from(dotNav1.children)

setSlides(slides1)

//next button configuration when click on it next slide will be shown.
nextBtn1.addEventListener('click' , () => nextBtnConfiguration(track1, slides1, dotNav1, dots1, prevBtn1 , nextBtn1))

//prev button configuration when click on it previous slide will be shown
prevBtn1.addEventListener('click' , () => prevBtnConfiguration(track1, slides1, dotNav1, dots1, prevBtn1 , nextBtn1))

//moving slides when click on dotnav
dotNav1.addEventListener('click' , e => dotNavConfiguration(e,track1, slides1, dotNav1, dots1, prevBtn1, nextBtn1))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for second carousel
const track2 = document.querySelector('#carousel__track2')
const slides2 = Array.from(track2.children)
const nextBtn2 = document.querySelector('#carousel__btn--right2')
const prevBtn2 = document.querySelector('#carousel__btn--left2')
const dotNav2 = document.querySelector('#carousel__nav2')
const dots2 = Array.from(dotNav2.children)

setSlides(slides2)

nextBtn2.addEventListener('click' , () => nextBtnConfiguration(track2, slides2, dotNav2, dots2, prevBtn2 , nextBtn2))

prevBtn2.addEventListener('click' , () => prevBtnConfiguration(track2, slides2, dotNav2, dots2, prevBtn2 , nextBtn2))

dotNav2.addEventListener('click' , e => dotNavConfiguration(e, track2, slides2, dotNav2, dots2, prevBtn2 , nextBtn2))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for third carousel
const track3 = document.querySelector('#carousel__track3')
const slides3 = Array.from(track3.children)
const nextBtn3 = document.querySelector('#carousel__btn--right3')
const prevBtn3 = document.querySelector('#carousel__btn--left3')
const dotNav3 = document.querySelector('#carousel__nav3')
const dots3 = Array.from(dotNav3.children)

setSlides(slides3)

nextBtn3.addEventListener('click' , () => nextBtnConfiguration(track3, slides3, dotNav3, dots3, prevBtn3 , nextBtn3))

prevBtn3.addEventListener('click' , () => prevBtnConfiguration(track3, slides3, dotNav3, dots3, prevBtn3 , nextBtn3))

dotNav3.addEventListener('click' , e => dotNavConfiguration(e, track3, slides3, dotNav3, dots3, prevBtn3 , nextBtn3))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for fourth carousel
const track4 = document.querySelector('#carousel__track4')
const slides4 = Array.from(track4.children)
const nextBtn4 = document.querySelector('#carousel__btn--right4')
const prevBtn4 = document.querySelector('#carousel__btn--left4')
const dotNav4 = document.querySelector('#carousel__nav4')
const dots4 = Array.from(dotNav4.children)

setSlides(slides4)

nextBtn4.addEventListener('click' , () => nextBtnConfiguration(track4, slides4, dotNav4, dots4, prevBtn4 , nextBtn4))

prevBtn4.addEventListener('click' , () => prevBtnConfiguration(track4, slides4, dotNav4, dots4, prevBtn4 , nextBtn4))

dotNav4.addEventListener('click' , e => dotNavConfiguration(e, track4, slides4, dotNav4, dots4, prevBtn4 , nextBtn4))

// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for fifth carousel
const track5 = document.querySelector('#carousel__track5')
const slides5 = Array.from(track5.children)
const nextBtn5 = document.querySelector('#carousel__btn--right5')
const prevBtn5 = document.querySelector('#carousel__btn--left5')
const dotNav5 = document.querySelector('#carousel__nav5')
const dots5 = Array.from(dotNav5.children)

setSlides(slides5)

nextBtn5.addEventListener('click' , () => nextBtnConfiguration(track5, slides5, dotNav5, dots5, prevBtn5 , nextBtn5))

prevBtn5.addEventListener('click' , () => prevBtnConfiguration(track5, slides5, dotNav5, dots5, prevBtn5 , nextBtn5))

dotNav5.addEventListener('click' , e => dotNavConfiguration(e, track5, slides5, dotNav5, dots5, prevBtn5 , nextBtn5))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for sixth carousel
const track6 = document.querySelector('#carousel__track6')
const slides6 = Array.from(track6.children)
const nextBtn6 = document.querySelector('#carousel__btn--right6')
const prevBtn6 = document.querySelector('#carousel__btn--left6')
const dotNav6 = document.querySelector('#carousel__nav6')
const dots6 = Array.from(dotNav6.children)

setSlides(slides6)

nextBtn6.addEventListener('click' , () => nextBtnConfiguration(track6, slides6, dotNav6, dots6, prevBtn6 , nextBtn6))

prevBtn6.addEventListener('click' , () => prevBtnConfiguration(track6, slides6, dotNav6, dots6, prevBtn6 , nextBtn6))

dotNav6.addEventListener('click' , e => dotNavConfiguration(e, track6, slides6, dotNav6, dots6, prevBtn6 , nextBtn6))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for seventh carousel
const track7 = document.querySelector('#carousel__track7')
const slides7 = Array.from(track7.children)
const nextBtn7 = document.querySelector('#carousel__btn--right7')
const prevBtn7 = document.querySelector('#carousel__btn--left7')
const dotNav7 = document.querySelector('#carousel__nav7')
const dots7 = Array.from(dotNav7.children)

setSlides(slides7)

nextBtn7.addEventListener('click' , () => nextBtnConfiguration(track7, slides7, dotNav7, dots7, prevBtn7 , nextBtn7))

prevBtn7.addEventListener('click' , () => prevBtnConfiguration(track7, slides7, dotNav7, dots7, prevBtn7 , nextBtn7))

dotNav7.addEventListener('click' , e => dotNavConfiguration(e, track7, slides7, dotNav7, dots7, prevBtn7 , nextBtn7))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for eighth carousel
const track8 = document.querySelector('#carousel__track8')
const slides8 = Array.from(track8.children)
const nextBtn8 = document.querySelector('#carousel__btn--right8')
const prevBtn8 = document.querySelector('#carousel__btn--left8')
const dotNav8 = document.querySelector('#carousel__nav8')
const dots8 = Array.from(dotNav8.children)

setSlides(slides8)

nextBtn8.addEventListener('click' , () => nextBtnConfiguration(track8, slides8, dotNav8, dots8, prevBtn8 , nextBtn8))

prevBtn8.addEventListener('click' , () => prevBtnConfiguration(track8, slides8, dotNav8, dots8, prevBtn8 , nextBtn8))

dotNav8.addEventListener('click' , e => dotNavConfiguration(e, track8, slides8, dotNav8, dots8, prevBtn8 , nextBtn8))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for ninth carousel
const track9 = document.querySelector('#carousel__track9')
const slides9 = Array.from(track9.children)
const nextBtn9 = document.querySelector('#carousel__btn--right9')
const prevBtn9 = document.querySelector('#carousel__btn--left9')
const dotNav9 = document.querySelector('#carousel__nav9')
const dots9 = Array.from(dotNav9.children)

setSlides(slides9)

nextBtn9.addEventListener('click' , () => nextBtnConfiguration(track9, slides9, dotNav9, dots9, prevBtn9 , nextBtn9))

prevBtn9.addEventListener('click' , () => prevBtnConfiguration(track9, slides9, dotNav9, dots9, prevBtn9 , nextBtn9))

dotNav9.addEventListener('click' , e => dotNavConfiguration(e, track9, slides9, dotNav9, dots9, prevBtn9 , nextBtn9))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for ninth carousel
const track10 = document.querySelector('#carousel__track10')
const slides10 = Array.from(track10.children)
const nextBtn10 = document.querySelector('#carousel__btn--right10')
const prevBtn10 = document.querySelector('#carousel__btn--left10')
const dotNav10 = document.querySelector('#carousel__nav10')
const dots10 = Array.from(dotNav10.children)

setSlides(slides10)

nextBtn10.addEventListener('click' , () => nextBtnConfiguration(track10, slides10, dotNav10, dots10, prevBtn10 , nextBtn10))

prevBtn10.addEventListener('click' , () => prevBtnConfiguration(track10, slides10, dotNav10, dots10, prevBtn10 , nextBtn10))

dotNav10.addEventListener('click' , e => dotNavConfiguration(e, track10, slides10, dotNav10, dots10, prevBtn10 , nextBtn10))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for ninth carousel
const track11 = document.querySelector('#carousel__track11')
const slides11 = Array.from(track11.children)
const nextBtn11 = document.querySelector('#carousel__btn--right11')
const prevBtn11 = document.querySelector('#carousel__btn--left11')
const dotNav11 = document.querySelector('#carousel__nav11')
const dots11 = Array.from(dotNav11.children)

setSlides(slides11)

nextBtn11.addEventListener('click' , () => nextBtnConfiguration(track11, slides11, dotNav11, dots11, prevBtn11 , nextBtn11))

prevBtn11.addEventListener('click' , () => prevBtnConfiguration(track11, slides11, dotNav11, dots11, prevBtn11 , nextBtn11))

dotNav11.addEventListener('click' , e => dotNavConfiguration(e, track11, slides11, dotNav11, dots11, prevBtn11 , nextBtn11))


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// select the dom elements for ninth carousel
const track12 = document.querySelector('#carousel__track12')
const slides12 = Array.from(track12.children)
const nextBtn12 = document.querySelector('#carousel__btn--right12')
const prevBtn12 = document.querySelector('#carousel__btn--left12')
const dotNav12 = document.querySelector('#carousel__nav12')
const dots12 = Array.from(dotNav12.children)

setSlides(slides12)

nextBtn12.addEventListener('click' , () => nextBtnConfiguration(track12, slides12, dotNav12, dots12, prevBtn12 , nextBtn12))

prevBtn12.addEventListener('click' , () => prevBtnConfiguration(track12, slides12, dotNav12, dots12, prevBtn12 , nextBtn12))

dotNav12.addEventListener('click' , e => dotNavConfiguration(e, track12, slides12, dotNav12, dots12, prevBtn12 , nextBtn12))