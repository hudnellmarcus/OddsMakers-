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

// $.ajax(settings).done(function (response) {
//     console.log(response);

// });

const allSportsURL = "https://api.the-odds-api.com/v4/sports/?apiKey=5061ae063f678a2de8f8172c41668633"

function getAllSports () {
    $.ajax(allSportsURL).then(function(data) {
    console.log('all sports are ready');
    console.log(data);
})}