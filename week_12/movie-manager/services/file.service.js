import fs from "fs"

export function readMoviesCallback(callback) {
    fs.readFile("./data/movies.json", "utf8", (err, data) => {
        if (err) {
            callback(err, null)
            return
        }
        const movies = JSON.parse(data)
        callback(null, movies)
    })
}

export function writeMoviesCallback(movies, callback) {
    const data = JSON.stringify(movies, null, 2)
    fs.writeFile("./data/movies.json", data, "utf8", (err) => {
        if (err) {
            callback(err)
            return
        }
        callback(null)
    })
}

export async function readMovies() {
    const data = await fs.promises.readFile("./data/movies.json", "utf8")
    return JSON.parse(data)
}

export async function writeMovies(movies) {
    const data = JSON.stringify(movies, null, 2)
    await fs.promises.writeFile("./data/movies.json", data, "utf8")
}
