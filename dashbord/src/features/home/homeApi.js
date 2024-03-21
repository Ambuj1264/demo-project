const url = "https://dummyjson.com"
const weatherapi ="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=53f43a126194a1588d1c8b36aaf5081c"
export const followers = ()=>{
    return new Promise(async (resolve)=>{
        const response = await fetch(`${url}/users?skip=0&limit=10`)
        const data = await response.json()
       
        resolve({data})
    })
}
export const comments = ()=>{
    return new Promise(async (resolve)=>{
        const response = await fetch(`${url}/comments?skip=0&limit=10`)
        const data = await response.json()
      
        resolve({data})
    })
}
export const weather = ()=>{
    return new Promise(async (resolve)=>{
        const response = await fetch(weatherapi)
        const data = await response.json()
        resolve({data})
    })
}