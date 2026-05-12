function movies(arr) {
    let movieData = [];

    for (let command of arr) {
        if (command.includes("addMovie")) {
            let movieInfo = command.split("addMovie ");

            let movieObj = {
                name: movieInfo[1]
            };

            movieData.push(movieObj);

        } else if (command.includes("directedBy")) {

            let [searchedMovie, director] = command.split(" directedBy ");

            let isFound = movieData.find(movie => movie.name === searchedMovie);

            if (isFound) {
                isFound.director = director;
            }

        } else if (command.includes("onDate")) {
            let [searchedMovie, onDate] = command.split(" onDate ");

            let isFound = movieData.find(movie => movie.name === searchedMovie);

            if (isFound) {
                isFound.date = onDate;
            }
        }

    }

    for (let movie of movieData) {

        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }

    }

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);