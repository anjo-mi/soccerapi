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

setTimeout(document.addEventListener('DOMContentLoaded', () => {
    const dateDropBox = document.getElementById('wg-football-dropbtn')

    if (dateDropBox){
        const dateCal = document.createElement('input')
        dateCal.type = 'date'
        dateCal.id = 'wg-date-select'
        dateCal.style.backgroundColor = '#01d099'
        dateCal.style.color = '#222'
        dateCal.style.padding = '5px 15px'
        dateCal.style.cursor = 'pointer'
        console.log('replacing dropdown w/ ', dateCal)
        dateDropBox.parentElement.replaceChild(dateCal, dateDropBox)
        console.log('replacement done')
    }
}), 5000)