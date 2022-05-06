const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://odds.p.rapidapi.com/v4/sports?all=true",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Host": "odds.p.rapidapi.com",
        "X-RapidAPI-Key": "f0a1b48427mshfec022783697cb0p16a91ajsn3f6bcbd50715"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);

});

asdasdas