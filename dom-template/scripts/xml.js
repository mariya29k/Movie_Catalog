function createXMLDocument() {
    let documentImplementation = document.implementation;
    let doc = documentImplementation.createDocument(null, null);

    // movie_catalog
    let movie_catalog = doc.createElement("movie_catalog");
    doc.appendChild(movie_catalog);

    // movie
    let movie = doc.createElement("movie");
    movie_catalog.appendChild(movie);

    let id = doc.createElement("id");
    id.setAttribute("code", "A1");
    movie.appendChild(id);

    let title = doc.createElement("title");
    movie.appendChild(title);

    let genre = doc.createElement("genre");
    movie.appendChild(genre);

    let director = doc.createElement("director");
    director.setAttribute("name", "Име")
    movie.appendChild(director);

    //rate (rating, popularity)
    let rate = doc.createElement("rate");
    movie.appendChild(rate);

    let rating = doc.createElement("rating");
    rate.appendChild(rating);

    let popularity = doc.createElement("popularity");
    rate.appendChild(popularity);

    let length = doc.createElement("length");
    movie.appendChild(length);

    //premiere (day, month, year)
    let premiere = doc.createElement("premiere");
    movie.appendChild(premiere);

    let day = doc.createElement("day");
    day.setAttribute("value", "day");
    premiere.appendChild(day);

    let month = doc.createElement("month");
    month.setAttribute("value", "month");
    premiere.appendChild(month);

    let year = doc.createElement("year");
    year.setAttribute("value", "year");
    premiere.appendChild(year);

    //nationality (country, language, locations)
    let nationality = doc.createElement("nationality");
    movie.appendChild(nationality);

    let country = doc.createElement("country");
    nationality.appendChild(country);

    let language = doc.createElement("language");
    nationality.appendChild(language);

    let locations = doc.createElement("locations");
    nationality.appendChild(locations);

    let studio = doc.createElement("studio");
    studio.setAttribute("name", "Universal Pictures");
    movie.appendChild(studio);

    //plots (plot)
    let plots = doc.createElement("plots");
    movie.appendChild(plots);

    //plot1 (plot_title, plot_author, text)
    let plot = doc.createElement("plot");
    plots.appendChild(plot);

    let plot_title = doc.createElement("title");
    plot.appendChild(plot_title);

    let plot_author = doc.createElement("author");
    plot.appendChild(plot_author);

    let text = doc.createElement("text");
    plot.appendChild(text);



    return doc;
}
