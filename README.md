# Introduction to JavaScript - JavaScript and DOM Manipulation

![UFO pic](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-1/static/images/ufo.jpg)

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

So we wrote a code that will create a table dynamically based upon the dataset provided. We also allowed our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

## Data

<img align="right" width="200" height="200" src="https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-1/static/images/alien.jfif">
- Found here [data.js](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-1/static/js/data.js)
- Contains list of JavaScript Objects
- Example of one object:
        
        datetime: "1/1/2010",
        city: "benton",
        state: "ar",
        country: "us",
        shape: "circle",
        durationMinutes: "5 mins.",
        comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."

## UFO Level 1: Automatic Table and Date Search

- Used the [index.html](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-1/index.html) file provided.
- Using the UFO dataset provided in the form of an array of JavaScript objects, I wrote code [app.js](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-1/static/js/app.js) that appends a table to the web page and then adds new rows of data for each UFO sighting.
- There is a column for date/time, city, state, country, shape, and comment.
- Used a date form in your HTML document and wrote JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

## UFO Level 2: Multiple Search Categories

- Included all criteria from Level 1
- Added multiple input tags and/or select dropdowns, wrote JavaScript code [app.js](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-2/static/js/app.js) so the user can set multiple filters and search for UFO sightings using the following criteria based on the table columns:

        1. date/time
        2. city
        3. state
        4. country
        5. shape

## Screenshots of web page

### Level 1

No filter added
![no filter](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-1/static/images/screenshot-no_filter.PNG)

With Filter
![filtered](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-1/static/images/screenshot-with_filter.PNG)

### Level 2

No filter added

![no filter](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-2/static/images/screenshot-no_filter.PNG)

With Filter

![filtered](https://github.com/Corters22/javascript-challenge/blob/main/UFO-level-2/static/images/screenshot-with_filter.PNG)

## Finished sites
### Level 1
[UFO finder](https://corters22.github.io/javascript-challenge/UFO-level-1/index.html)

### Level 2
[Bonus UFO finder](https://corters22.github.io/javascript-challenge/UFO-level-2/index.html)
