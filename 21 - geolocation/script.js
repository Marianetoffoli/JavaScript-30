    const arrow = document.querySelector('.arrow')
    const speed = document.querySelector('.speed-value')

   navigator.geolocation.watchPosition((data) => {
    console.log(data)
    speed.textContent = data.coords.apeed
    arrow.atyle.transform = `rotate(${data.coords.heading}deg)`
   }, (err) => {
    console.log(erro)
   }) 