// function getPlayers(currPage = 1){
// 	fetch(`https://v3.football.api-sports.io/teams?league=39&season=2024&page=${currPage}`, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "v3.football.api-sports.io",
// 			"x-rapidapi-key": "1ff0a26a1454cbb7f71bbe8045b916d4"
// 		}
// 	})
// 	.then(res => res.json())
// 	.then(response => {
// 		console.log(response);
// 		let totalPages = response.paging.total
// 		if (currPage < totalPages){
// 			currPage++
// 			getPlayers(currPage)
// 		}
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});
// }

// getPlayers()

// function getPlayers(){
// 	fetch(`https://v3.football.api-sports.io/teams?league=39&season=2024`, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "v3.football.api-sports.io",
// 			"x-rapidapi-key": "1ff0a26a1454cbb7f71bbe8045b916d4"
// 		}
// 	})
// 	.then(res => res.json())
// 	.then(response => {
// 		console.log(response);
// 		// let totalPages = response.paging.total
// 		// if (currPage < totalPages){
// 		// 	currPage++
// 		// 	getPlayers(currPage)
// 		// }
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});
// }

// getPlayers()



// document.querySelector('#date').addEventListener('click', () => {
//     const dateDropBox = document.getElementById('wg-football-dropbtn')

//     if (dateDropBox){
//         const dateCal = document.createElement('input')
//         dateCal.type = 'date'
//         dateCal.id = 'wg-date-select'
//         dateCal.style.backgroundColor = '#01d099'
//         dateCal.style.color = '#222'
//         dateCal.style.padding = '5px 15px'
//         dateCal.style.cursor = 'pointer'
//         console.log('replacing dropdown w/ ', dateCal)
//         dateDropBox.parentElement.replaceChild(dateCal, dateDropBox)
//         document.querySelector('#wg-api-football-games')['data-date'] = document.querySelector('#date').value
//         console.log('replacement done')
//     }
// })

// document.addEventListener('DOMContentLoaded', function () {
//     const widgetDiv = document.createElement('div');
//     widgetDiv.id = 'wg-api-football-games';
//     widgetDiv.dataset.host = 'v3.football.api-sports.io';
//     widgetDiv.dataset.key = '1ff0a26a1454cbb7f71bbe8045b916d4';
//     widgetDiv.dataset.date = '2024-08-17';
//     widgetDiv.dataset.league = '39';
//     widgetDiv.dataset.season = '2024';
//     widgetDiv.dataset.theme = 'dark';
//     widgetDiv.dataset.refresh = '0';
//     widgetDiv.dataset.showToolbar = 'true';
//     widgetDiv.dataset.showErrors = 'false';
//     widgetDiv.dataset.showLogos = 'true';
//     widgetDiv.dataset.modalGame = 'true';
//     widgetDiv.dataset.modalStandings = 'true';
//     widgetDiv.dataset.modalShowLogos = 'true';
//     widgetDiv.style.height = '400px'
//     widgetDiv.style.width = '100%'
//     widgetDiv.style.margin = '0 auto'

//     document.body.appendChild(widgetDiv);

//     const script = document.createElement('script');
//     script.type = 'module';
//     script.src = 'https://widgets.api-sports.io/2.0.3/widgets.js';
//     document.body.appendChild(script);
// });

let league = 'İngiltere Premier Lig Özetler'

let key = '/mac-ozetleri-goller/ingiltere-premier-ligi'

let url = `https://api.collectapi.com/sport/league?data.league=ingiltere-premier-ligi`

// let url = 'https://api.collectapi.com/sport/leaguesList'

fetch(url, {
    method : 'GET',
    headers : {
        "content-type": "application/json",
		"authorization": "apikey 4w2SNXofae9kR2qbQ4nztb:5ELeaTekWJ1om9OC2morSD"
    }
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`the error: ${err} has occurred`)
    })