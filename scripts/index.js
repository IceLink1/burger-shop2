let data = [
    {
        type: 'burger',
        img: './imges/h1.jpg',
        nomi: 'HOLY CHUCK',
        narxi: '13000'
    },
    {
        type: 'burger',
        img: './imges/h2.jpg',
        nomi: 'BYMARK',
        narxi: '16000'
    },
    {
        type: 'burger',
        img: './imges/h3.jpg',
        nomi: 'GOLDEN STAR',
        narxi: '25000'
    },
    {
        type: 'burger',
        img: './imges/h4.jpg',
        nomi: 'BLUE PLATE',
        narxi: '15000'
    },
    {
        type: 'burger',
        img: './imges/h5.jpg',
        nomi: ' UNION',
        narxi: '22000'
    },
    {
        type: 'burger',
        img: './imges/h6.jpg',
        nomi: 'BESTELLEN',
        narxi: '10000'
    },
    {
        type: 'burger',
        img: './imges/h7.jpg',
        nomi: 'ORIGN',
        narxi: '25000'
    },
    {
        type: 'burger',
        img: './imges/h8.jpg',
        nomi: 'THE BURGER',
        narxi: '23000'
    },
    {
        type: 'burger',
        img: './imges/h9.jpg',
        nomi: 'THE DRAKE',
        narxi: '31000'
    },
]
let data2=[
    {
        type: 'hotdog',
        img: './imges/b1.jpg',
        nomi: 'CHILI CHEESE',
        narxi: '19000'
    },
    {
        type: 'hotdog',
        img: './imges/b2.jpg',
        nomi: 'CHICAGO',
        narxi: '21000'
    },
    {
        type: 'hotdog',
        img: './imges/b3.jpg',
        nomi: 'DOUBLE DOG',
        narxi: '10000'
    },
    {
        type: 'hotdog',
        img: './imges/b4.jpg',
        nomi: 'BLT',
        narxi: '15000'
    },
    {
        type: 'hotdog',
        img: './imges/b5.jpg',
        nomi: 'BACON BLEU',
        narxi: '12000'
    },
    {
        type: 'hotdog',
        img: './imges/b6.jpg',
        nomi: 'MAXWELL',
        narxi: '30000'
    },
    {
        type: 'hotdog',
        img: './imges/b7.jpg',
        nomi: 'SPYCE',
        narxi: '25000'
    },
    {
        type: 'hotdog',
        img: './imges/b8.jpg',
        nomi: 'BBQ',
        narxi: '22000'
    },
    {
        type: 'hotdog',
        img: './imges/b9.jpg',
        nomi: 'SRIRACHA',
        narxi: ' 16000'
    }
]




let dayOrNight = localStorage.getItem("day")
let ul1 = document.querySelector('.ul1')
let ul2 = document.querySelector('.ul2')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let dayNi = document.querySelector(".div_day_night")
let day = document.querySelectorAll(".day")
let night = document.querySelectorAll(".night")
let Main = document.querySelector(".Main")
let card = document.querySelectorAll(".card1")
let navBurgers = document.querySelectorAll(".nav_main_two")



function DayNight(){
    if (dayOrNight == 1) {
        Main.classList.remove("change")
        dayNi.classList.remove("forday")
        inp1.classList.remove('forinp')
        inp2.classList.remove('forinp')
        navBurgers.forEach((e) => {
            e.classList.remove("bordB")
        })
        card.forEach((e)=>{
            e.style="border:2px solid #000;"
        })
       
    }
    if (dayOrNight == 0) {
        Main.classList.add("change")
        dayNi.classList.add("forday")
        inp1.classList.add('forinp')
        inp2.classList.add('forinp')
        navBurgers.forEach((e) => {
            e.classList.add("bordB")
        })
        card.forEach((e)=>{
            e.style="border:2px solid #fff;"
        })
        
    }
}



// _________________________________________________________________//

inp2.addEventListener('keyup', (e) => {
    console.log(e);
    let result = data2.filter((item) => item.nomi.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1)
    mapper(result,ul2,data2)
})

inp1.addEventListener('keyup', (e) => {
    let result = data.filter((item) => item.nomi.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1)
    mapper(result,ul1,data)
})

function mapper(result,ulFn,dataFn) {
    if (result) {
        ulFn.textContent = ''
        result.map((e, i) => {
            let li = document.createElement('li')
            li.innerHTML = `
            <div class="card1" >
            <img src="${e.img}" alt="">
            <div class="caontent_card">
                <h1>${e.nomi}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam, autem fugiat
                    magnam aliquam repellendus ut dolorum? At, veritatis sapiente?</p>
                <p class="narx">${e.narxi}</p>
                <button class="btn1">Buy</button>
            </div>
        </div>
            `
            ulFn.appendChild(li)
        })
    } else {
        dataFn.map((e, i) => {
            let li = document.createElement('li')
            li.innerHTML = `
            <div class="card1" >
                                <img src="${e.img}" alt="">
                                <div class="caontent_card" >
                                    <h1>${e.nomi}</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam, autem fugiat
                                        magnam aliquam repellendus ut dolorum? At, veritatis sapiente?</p>
                                    <p class="narx">${e.narxi}</p>
                                    <button class="btn1">Buy</button>
                                </div>
                            </div>
            `
            ulFn.appendChild(li)

        })
    }

}
mapper(0,ul1,data)
mapper(0,ul2,data2)


function cardReflesh(){
    card = document.querySelectorAll(".card1")
}

// ___________________________________//________________________________//


day.forEach((e) => {
    e.addEventListener('click', () => {
        Main.classList.remove("change")
        dayNi.classList.remove("forday")
        inp1.classList.remove('forinp')
        inp2.classList.remove('forinp')
        navBurgers.forEach((e) => {
            e.classList.remove("bordB")
        })
        card.forEach((e)=>{
            e.style="border:2px solid #000;"
        })
        localStorage.setItem("day", 1)
    })
})

night.forEach((e) => {
    e.addEventListener('click', () => {
        Main.classList.add("change")
        dayNi.classList.add("forday")
        inp1.classList.add('forinp')
        inp2.classList.add('forinp')
        navBurgers.forEach((e) => {
            e.classList.add("bordB")
        })
        card.forEach((e)=>{
            e.style="border:2px solid #fff;"
        })
        localStorage.setItem("day", 0)
    })
})

cardReflesh()
DayNight()