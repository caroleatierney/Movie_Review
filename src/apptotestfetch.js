
$('#a').click(function () {
    fetch('https://movie-database-imdb.p.rapidapi.com/movies/?name=Indina', {
        method: 'get',
        headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "movie-database-imdb.p.rapidapi.com"
        }

    }).then(res => res.json())
        .then(function (res) {
            console.log(res);
        });
})


$('#b').click(function () {
    fetch('https://movie-database-imdb.p.rapidapi.com/movies/?name=Indina', {
        method: 'get',
    }).then(res => res.json())
        .then(function (res) {
            console.log(res);
        });
})
