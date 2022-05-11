const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://odds.p.rapidapi.com/v4/sports?all=true",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Host": "odds.p.rapidapi.com",
        "X-RapidAPI-Key": "5061ae063f678a2de8f8172c41668633"
    }
};
const $form = $('form');
const $option = $('option');
const $select = $('#select');
const allSportsURL = "https://api.the-odds-api.com/v4/sports/?apiKey=5061ae063f678a2de8f8172c41668633"

$(document).ready(function () {
    getAllSports()
})

function getAllSports() {
    $.ajax(allSportsURL).then(function (allSports) {
        console.log('all sports are ready');
        console.log(allSports);

        for (let i = 0; [i] < allSports.length; i++) {
            const options = [];
            options.push(allSports[i].key);
            $select.append(`<option>${options}</option>`);
        }
    })
  getOdds();
}
const oddsUrl = "https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=5061ae063f678a2de8f8172c41668633&regions=us&markets=h2h,spreads&oddsFormat=american"

$form.on('submit', getOdds)

function getOdds() {
    $.ajax(oddsUrl).then(function (odds) {
        console.log(odds);
    oddsUrl.forEach((line) => {
  
    })

    })
}



