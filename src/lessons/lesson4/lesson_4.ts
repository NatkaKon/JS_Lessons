//console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const promise01 = new Promise((resolve, reject) => {
    console.log('Promise is created')
})


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const promise02 = new Promise((resolve, reject) => {
    resolve('Promise Data')
}).then((data) => {
    console.log(data)
})

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const promise03 = new Promise((resolve, reject) => {
    reject('Promise Error')
}).catch((data) => {
    console.log(data)
})

const promise031 = Promise.reject('Error').catch((data) => console.log(data))

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const promise04 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Data')
    }, 3000)
}).then((data) => console.log(data))

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: function (paramName: string) {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: function (paramName: string) {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
}
// let createPromise = document.getElementById('btn-create-promise')
// const resolvePromise = document.getElementById('btn-resolve-promise')
// const rejectPromise = document.getElementById('btn-reject-promise')

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const promise06 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('My name is ')
    }, 1000)
}).then((data) => print(onSuccess(data)))

const onSuccess = (data: string) => {
    return data + 'Natalia'
}
const print = (param:string) => {
    console.log(param)
}

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
const promise071 = new Promise<{name:string}>((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Anna" })
    }, 2000)
})
const promise072 = new Promise<{age:number}>((resolve, reject) => {
    setTimeout(() => {
        resolve( {age: 16})
    }, 3000)
})
const promise073 = new Promise<{city:string}>((resolve, reject) => {
    setTimeout(() => {
        resolve({city: ''})
    }, 4000)
})
Promise.all([promise071, promise072, promise073]).then(date=> {
    console.log(date)
})
let name: string
promise071.then((data) => {
    return name = data.name
})
let age: number
promise072.then((data) => {
    return age = data.age
})
let city: string
promise073.then((data) => {
    return city = data.city
})
    .then(() => {
        console.log({name, age, city})
    })

// just a plug
export default () => {
};