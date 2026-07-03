import { readMovies, writeMovies } from "./file.service.js"

export async function showMovies() {
    const movies = await readMovies()
    return movies
}

export async function searchMovie(id) {
    const movies = await readMovies()
    const mov = movies.find(m => m.id === id)
    return mov
}

export async function createMovie(title, genre, year, rating) {
    const movies = await readMovies()
    let newId = 1
    if (movies.length > 0) {
        newId = Math.max(...movies.map(m => m.id)) + 1
    }
    const mov = {
        id: newId,
        title: title.trim(),
        genre: genre.trim(),
        year: year,
        rating: rating
    }
    movies.push(mov)
    await writeMovies(movies)
    return mov
}

export async function deleteMovie(id) {
    const movies = await readMovies()
    const mov = movies.find(m => m.id === id)
    if (!mov) {
        return false
    }
    const newList = movies.filter(m => m.id !== id)
    await writeMovies(newList)
    return true
}

export async function updateRating(id, rating) {
    const movies = await readMovies()
    const mov = movies.find(m => m.id === id)
    if (!mov) {
        return null
    }
    mov.rating = rating
    await writeMovies(movies)
    return mov
}

export async function searchByName(name) {
    const movies = await readMovies()
    const checkName = name.toLowerCase().trim()
    const res = movies.filter(m => m.title.toLowerCase().includes(checkName))
    return res
}

export async function showByGenre(genre) {
    const movies = await readMovies()
    const checkGenre = genre.toLowerCase().trim()
    const res = movies.filter(m => m.genre.toLowerCase() === checkGenre)
    return res.sort((a, b) => a.title.localeCompare(b.title))
}

export async function showStatistics() {
    const movies = await readMovies()
    const totalCount = movies.length
    if (totalCount === 0) {
        return {
            totalCount: 0,
            averageRating: 0,
            topMovie: null
        }
    }
    const totalRating = movies.reduce((acc, curr) => acc + curr.rating, 0)
    const averageRating = totalRating / totalCount
    const sorted = [...movies].sort((a, b) => b.rating - a.rating)
    const topMovie = sorted[0]
    return {
        totalCount,
        averageRating,
        topMovie
    }
}
