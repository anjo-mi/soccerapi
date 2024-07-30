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