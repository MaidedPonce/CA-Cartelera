module.exports.Movie = class Movie {
    constructor({ id, title, description, originalTitle, clasification, duration }) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.originalTitle = originalTitle,
        this.clasification = clasification,
        this.duration = duration
    }
}