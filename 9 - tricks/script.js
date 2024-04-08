const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

console.log('hello')

console.log (`hello I am ${name}`)

console.log('%c i am some great text', 'font-size:50px; background: pink; text-shadow: 10px 10px 0 white')

console.warn("ATENÇÃOO!")

console.error('porra')

console.info('zombies estão a solta!!!')

const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'errouuu')

console.clear()

console.log(p)
console.dir(p)

console.clear()

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} year old`)
    console.log(`${dog.name} is ${dog.age * 7} dog years old`)
    console.groupEnd(`${dog.name}`)
})

console.count('wes')
console.count('ana')
console.count('wes')
console.count('wes')
console.count('ana')
console.count('wes')
console.count('ana')
console.count('wes')

console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
    .then(data = data.json())
    .then(data => {
        console.timeEnd ('fetching data')
        console.log(data)
    })

    console.table(dogs)
