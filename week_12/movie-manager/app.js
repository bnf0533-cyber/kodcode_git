import rl from "readline-sync"
import { checkTitle, checkYear, checkRating } from "./utils/validator.js"
import {
    showMovies,
    searchMovie,
    createMovie,
    deleteMovie,
    updateRating,
    searchByName,
    showByGenre,
    showStatistics
} from "./services/movie.service.js"

async function main() {
    while (true) {
        console.log(`
            === Movie Collection Manager ===
            1. Show all movies
            2. Show movie by ID
            3. Add new movie
            4. Delete movie by ID
            5. Update movie rating
            6. Search movies by name
            7. Show movies by genre
            8. Show statistics
            9. Exit`)

        const choice = rl.question("Please enter your choice (1-9): ").trim()

        if (choice === "1") {
            const movies = await showMovies()
            if (movies.length === 0) {
                console.log("This list is empty.")
            } else {
                console.log(movies)
            }
        } else if (choice === "2") {
            const id = rl.questionInt("Please enter movie ID: ")
            const mov = await searchMovie(id)
            if (mov) {
                console.log(mov)
            } else {
                console.log("Movie not found.")
            }
        } else if (choice === "3") {
            let title = ""
            while (true) {
                title = rl.question("Please enter movie title: ")
                if (checkTitle(title)) {
                    break
                }
                console.log("Title cannot be empty. Please try again.")
            }

            const genre = rl.question("Please enter genre: ").trim()

            let year = 0
            while (true) {
                year = rl.questionInt("Please enter release year: ")
                if (checkYear(year)) {
                    break
                }
                console.log("Year must be between 1900 and current year. Please try again.")
            }

            let rate = -1
            while (true) {
                rate = Number(rl.question("Please enter rating (0-10): "))
                if (checkRating(rate)) {
                    break
                }
                console.log("Rating must be between 0 and 10. Please try again.")
            }

            const mov = await createMovie(title, genre, year, rate)
            console.log("Movie created successfully")
            console.log(mov)
        } else if (choice === "4") {
            const id = rl.questionInt("Please enter movie ID: ")
            const check = await deleteMovie(id)
            if (check) {
                console.log("Movie deleted successfully.")
            } else {
                console.log("Movie not found.")
            }
        } else if (choice === "5") {
            const id = rl.questionInt("Please enter movie ID: ")
            let rate = -1
            while (true) {
                rate = Number(rl.question("Please enter new rating (0-10): "))
                if (checkRating(rate)) {
                    break
                }
                console.log("Rating must be between 0 and 10. Please try again.")
            }
            const mov = await updateRating(id, rate)
            if (mov) {
                console.log("Rating updated successfully")
                console.log(mov)
            } else {
                console.log("Movie not found.")
            }
        } else if (choice === "6") {
            const name = rl.question("Please enter movie name: ")
            const res = await searchByName(name)
            if (res.length > 0) {
                console.log(res)
            } else {
                console.log("Movie not found.")
            }
        } else if (choice === "7") {
            const genre = rl.question("Please enter genre: ")
            const res = await showByGenre(genre)
            if (res.length > 0) {
                console.log(res)
            } else {
                console.log("This list is empty.")
            }
        } else if (choice === "8") {
            const stats = await showStatistics()
            console.log("=== Movie Statistics ===")
            console.log(`Total Movies: ${stats.totalCount}`)
            console.log(`Average Rating: ${stats.averageRating.toFixed(2)}`)
            if (stats.topMovie) {
                console.log(`Highest Rated Movie: ${stats.topMovie.title} (${stats.topMovie.rating})`)
            }
        } else if (choice === "9") {
            console.log("Goodbye!")
            break
        } else {
            console.log("Invalid option. Please enter a number between 1 and 9.")
        }
    }
}

main()
