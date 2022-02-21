
const  yargs = require("yargs");
const Movie = require("./utils")

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movie.list());
        //add movie to array, console log at the end
    } else {
        console.log("incorrect command");
    }
};

app(yargs.argv)