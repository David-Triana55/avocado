const url = 'http://platzi-avo.vercel.app/api/avo'

const app = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = new Intl.NumberFormat('en-En', {
        style: 'currency',
        currency: 'USD',
    }).format(price)

    return newPrice
}

async function getData (api){
    const data = await fetch(api)
    const res = await data.json()

    console.log(res);

    res.data.forEach(item => {
        console.log(item.name);

        const image = document.createElement('img')
        image.className = 'h-52 w-52 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-0' 
        image.src = "https://platzi-avo.vercel.app" + item.image
        
        const title = document.createElement('h2')
        title.className = 'text-lg'
        title.textContent = item.name
        
        const price = document.createElement('div')
        price.className = 'text-gray-600'
        price.textContent = formatPrice(item.price)
        
        
        const priceAndTitle = document.createElement('div')
        priceAndTitle.className = 'text-center md:text-left'
        priceAndTitle.appendChild(title)
        priceAndTitle.appendChild(price)

        const card = document.createElement('div')
        card.className ='md:flex w-full rounded-lg p-6 shadow-xl mt-2 lg:w-96'
        card.appendChild(image)
        card.appendChild(priceAndTitle)

        app.appendChild(card)
    })
}

getData(url)