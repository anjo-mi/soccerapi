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
            document.querySelector('.resultsTable').classList.add('.hidden')
            document.querySelector('.leagueTable').classList.remove('.hidden')
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
            console.log(data.result)
            document.querySelector('.leagueTable').classList.add('.hidden')
            document.querySelector('.resultsTable').classList.remove('.hidden')
            let games = document.querySelectorAll('.game')
            games.forEach((el,i) => {
                if (i < data.result.length){
                    el.querySelector('.homeTeam').textContent = data.result[i].home
                    el.querySelector('.homeScore').textContent = data.result[i].skor.split('')[0]
                    el.querySelector('.awayTeam').textContent = data.result[i].away
                    el.querySelector('.awayScore').textContent = data.result[i].skor.split('')[2]
                    el.querySelector('.date').textContent = data.result[i].date.slice(0,10)
                }
            })
        })
        .catch(err => {
            console.log(`the error: ${err} has occurred`)
        })
}

getTable()
getResults()