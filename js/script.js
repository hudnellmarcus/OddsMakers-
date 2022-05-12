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
const oddsUrl = "https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=5061ae063f678a2de8f8172c41668633&regions=us&markets=h2h,spreads&oddsFormat=american"
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

$form.on('submit', getOdds)
const $upcomingGames = $('.upcomingGames')

function getOdds() {
    $.ajax(oddsUrl).then(function (odds) {
        console.log(odds);

        for (let i = 0; [i] < odds.length; i++) {
            const upcomingOdds = [];
            upcomingOdds.push(odds[i]);
            $upcomingGames.text(`${odds}`);
            console.log(upcomingOdds)
        }
    })
}


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlist');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();