import API_KEY from './index.js'

let apiKey = API_KEY


let url = `https://api.collectapi.com/sport/league?data.league=ingiltere-premier-ligi`
let url2 = `https://api.collectapi.com/sport/results?data.league=ingiltere-premier-ligi`

let league = document.querySelector('.leagueTable')
let results = document.querySelector('.resultsTable')



document.querySelector('#showTable').addEventListener('click', getTable)
document.querySelector('#showResults').addEventListener('click', getResults)


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
            if (!results.classList.contains('hidden')){
                results.classList.toggle('hidden')
            }
            if (league.classList.contains('hidden')){
                league.classList.toggle('hidden')
            }
            let teams = document.querySelectorAll('.teamInfo')
            teams.forEach((el,i) => {
                el.querySelector('.rank').textContent = data.result[i].rank
                if (data.result[i].rank < 5){
                    el.querySelector('.rank').style.color = 'green'
                }else if(data.result[i].rank < 7){
                    el.querySelector('.rank').style.color = 'orange'
                }else if(data.result[i].rank > 17){
                    el.querySelector('.rank').style.color = 'red'
                }
                el.querySelector('.team').textContent = data.result[i].team
                el.querySelector('.point').textContent = data.result[i].point
                el.querySelector('.win').textContent = data.result[i].win
                el.querySelector('.draw').textContent = data.result[i].draw
                el.querySelector('.lose').textContent = data.result[i].lose
                el.querySelector('.goalDiff').textContent = data.result[i].goaldistance
                if (data.result[i].goaldistance >= 0){
                    el.querySelector('.goalDiff').style.color = 'green'
                }else{
                    el.querySelector('.goalDiff').style.color = 'red'
                }
                el.querySelector('.goalsFor').textContent = data.result[i].goalfor
                el.querySelector('.goalsAgainst').textContent = data.result[i].goalagainst
                el.querySelector('.gamesPlayed').textContent = data.result[i].play
            })
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
            if (!league.classList.contains('hidden')){
                league.classList.toggle('hidden')
            }
            if (results.classList.contains('hidden')){
                results.classList.toggle('hidden')
            }
            let games = document.querySelectorAll('.game')
            games.forEach((el,i) => {
                if (i < data.result.length){
                    el.querySelector('.homeTeam').textContent = data.result[i].home
                    el.querySelector('.homeScore').textContent = data.result[i].skor.split('')[0]
                    el.querySelector('.awayTeam').textContent = data.result[i].away
                    el.querySelector('.awayScore').textContent = data.result[i].skor.split('')[2]
                    el.querySelector('.date').textContent = data.result[i].date.slice(0,10)
                    if (data.result[i].skor.split('')[0] > data.result[i].skor.split('')[2]){
                        el.querySelector('.homeScore').style.color = 'blue'
                        el.querySelector('.awayScore').style.color = 'red'
                    }else if(data.result[i].skor.split('')[0] < data.result[i].skor.split('')[2]){
                        el.querySelector('.awayScore').style.color = 'blue'
                        el.querySelector('.homeScore').style.color = 'red'
                    }
                }
            })
        })
        .catch(err => {
            console.log(`the error: ${err} has occurred`)
        })
}
