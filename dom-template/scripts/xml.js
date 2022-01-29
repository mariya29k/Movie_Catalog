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
    title.appendChild(doc.createTextNode("Затворници"));

    let genre = doc.createElement("genre");
    movie.appendChild(genre);
    genre.appendChild(doc.createTextNode("Криминален"));

    let director = doc.createElement("director");
    director.setAttribute("name", "Име")
    movie.appendChild(director);
    director.appendChild(doc.createTextNode("Дени Вилньов"));

    //rate (rating, popularity)
    let rate = doc.createElement("rate");
    movie.appendChild(rate);

    let rating = doc.createElement("rating");
    rate.appendChild(rating);
    rating.appendChild(doc.createTextNode("8.1"));

    let popularity = doc.createElement("popularity");
    rate.appendChild(popularity);
    popularity.appendChild(doc.createTextNode("113"));

    let length = doc.createElement("length");
    movie.appendChild(length);
    length.appendChild(doc.createTextNode("153"));

    //premiere (day, month, year)
    let premiere = doc.createElement("premiere");
    movie.appendChild(premiere);

    let day = doc.createElement("day");
    day.setAttribute("value", "day");
    premiere.appendChild(day);
    day.appendChild(doc.createTextNode("20"));

    let month = doc.createElement("month");
    month.setAttribute("value", "month");
    premiere.appendChild(month);
    month.appendChild(doc.createTextNode("9"));

    let year = doc.createElement("year");
    year.setAttribute("value", "year");
    premiere.appendChild(year);
    year.appendChild(doc.createTextNode("2013"));

    //nationality (country, language, locations)
    let nationality = doc.createElement("nationality");
    movie.appendChild(nationality);

    let country = doc.createElement("country");
    nationality.appendChild(country);
    country.appendChild(doc.createTextNode("САЩ"));

    let language = doc.createElement("language");
    nationality.appendChild(language);
    language.appendChild(doc.createTextNode("Английски"));

    let locations = doc.createElement("locations");
    nationality.appendChild(locations);
    locations.appendChild(doc.createTextNode("Джорджия, СAЩ"));

    let studio = doc.createElement("studio");
    studio.setAttribute("name", "Алкън Ентъртейнмънт");
    movie.appendChild(studio);
    //title.appendChild(doc.createTextNode("Затворници"));

    //plots (plot)
    let plots = doc.createElement("plots");
    movie.appendChild(plots);

    //plot1 (plot_title, plot_author, text)
    let plot1 = doc.createElement("plot");
    plots.appendChild(plot1);

    let plot_title1 = doc.createElement("title");
    plot1.appendChild(plot_title1);
    plot_title1.appendChild(doc.createTextNode("Разтърсващ трилър"));

    let plot_author1 = doc.createElement("author");
    plot1.appendChild(plot_author1);
    plot_author1.appendChild(doc.createTextNode(""));

    let text1 = doc.createElement("text");
    plot1.appendChild(text1);
    text1.appendChild(doc.createTextNode("Джейк Джиленхол, Мария Бело и Хю Джакман са звездите в криминалния екшън-трилър “Затворници”,\n" +
        "                    който разказва за обикновения провинциален дърводелец Келър Довър (Джакман),\n" +
        "                    чиито живот се променя след като младата му дъщеря и нейната най-добра приятелка са отвлечени."));



    //plot2 (plot_title, plot_author, text)
    let plot2 = doc.createElement("plot");
    plots.appendChild(plot2);

    let plot_title2 = doc.createElement("title");
    plot2.appendChild(plot_title2);
    plot_title2.appendChild(doc.createTextNode("Препоръчвам!"));

    let plot_author2 = doc.createElement("author");
    plot2.appendChild(plot_author2);
    plot_author2.appendChild(doc.createTextNode("иван1"));

    let text2 = doc.createElement("text");
    plot2.appendChild(text2);
    text2.appendChild(doc.createTextNode("В центъра на сюжета е изчезването на две малки момичета в малко градче, в отговор \n" +
        "                    на което родителите им отвличат младеж с умствени проблеми, когото смятат за виновен, \n" +
        "                    и го подлагат на мъчения, за да научат къде са децата. Главните роли се изпълняват от Хю Джакман, \n" +
        "                    Джейк Джилънхол, Вайола Дейвис, Мария Бело, Терънс Хауърд, Мелиса Лио и Пол Дейно."));
    return doc;
}
