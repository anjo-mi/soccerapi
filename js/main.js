import API_KEY from './index.js'

let apiKey = API_KEY


let url = `https://api.collectapi.com/sport/league?data.league=ingiltere-premier-ligi`
let url2 = `https://api.collectapi.com/sport/results?data.league=ingiltere-premier-ligi`


function getTable(){
    fetch(url, {
        method : 'GET',
        headers : {
            "content-type": "application/json",
    		"authorization": apiKey
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`the error: ${err} has occurred`)
        })
}

function getResults(){
    fetch(url2, {
        method : 'GET' ,
        headers : {
            'content-type': 'application/json',
            'authorization': apiKey
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`the error: ${err} has occurred`)
        })
}

getTable()
getResults()