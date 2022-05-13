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
const allSportsURL = "https://api.the-odds-api.com/v4/sports/?apiKey=cfc369a0682e9abfe063c7a2184ab763"
const oddsUrl = "https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=cfc369a0682e9abfe063c7a2184ab763&regions=us&markets=h2h,spreads&oddsFormat=american"
const teams = [];
const $matchups = $('#matchups');
const $content1 = $('#content1');
const $upcomingGames = $('.upcomingGames');
const upcomingOdds = [];
// ^^add betting lines 

// When page loads call function to populate select options
$(document).ready(function () {
    getAllSports()
})

function getAllSports() {
    $.ajax(allSportsURL).then(function (allSports) {
        // console.log('all sports are ready');
        // console.log(allSports);

        for (let i = 0; [i] < allSports.length; i++) {
            const options = [];
            options.push(allSports[i].key);
            $select.append(`<option>${options}</option>`);
        }
    })
}
// does not work properly yet 
$form.on('submit', getTeams())

function getTeams() {
    $.ajax(oddsUrl).then(function (odds) {
        // console.log(odds);

        $.each(odds, function (index, value) {
            const homeAway = value.home_team + " vs " + value.away_team;
            // console.log(home_team);
            // console.log(away_team);

            teams.push(homeAway);
            // console.log(teams);
        })
        for (const team of teams) {
            $matchups.append(`<li id="games">${team}</li>`);
        }
    })
}

// console.log(teams);

// displayTeams = () => {
//     // $('#matchups').empty()
//     const $matchups = $('#matchups');
//     const $teams = ('teams')
//     const $homeAway = $('<li>')

//     for (let i=0; [i] < teams.length; i++){
//         $homeAway.append($teams[i]);

// }}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlist');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();