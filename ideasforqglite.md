# Some Ideas for the Query Generator Lite #

## Introduction ##

Based on the following developer feedback... "better to embed the query generator in an iframe and scrape it's results (or even better, just reuse the code and change its presentation)" I have started working on what I call the portable, Query Generator Lite.

## Here are some suggestions from Jason Grosman (of All Tweets fame) ##

  1. Make it out of a list, like the navigation on all tweets. All the topics, programs, bios, etc. straight down the side. Each entry would have a checkbox so that it could be selected. At the bottom would be the extra query parameters and a submit button. The benefits to this would be that it would be easy to style in CSS and javascript. It could be made to be a menu that opens each set when the mouse hovers, or drops down when you click on it, like I've got. This could be given out without any extra styles or javascript, and it would be very simple to write and maintain. I'm not sure how the unstyled version would look, though.

> 2. Have some input boxes, and an autocomplete. I think it would be pretty slick. Would require quite a bit of JS or a library. And styles. It wouldn't work too well for people who didn't already know what they were looking for, though.

> 3. A guided query generator. A wizard that asked the user questions about what type of query they wanted to generate. It might help people who don't care about the details, and don't want to know what the difference between a series and column is. It would require a lot of javascript, and need to be maintained as things in the API change, but it could be a brand new way of generating a query.

> 4. Maybe a table of choices. When you select one of the options, it lights up, like a square on Jeopardy. That way you can always see what your query is going to be.

I think it's hard to make select boxes look good. They can't be styled very well. And they're not very good for lots of selections.

Is the plan to do everything in javascript? Or will there be serverside code? How is someone going to use it? Will they download the source code? Or include a javascript? Iframe? What's the QGL going to return? I would think that would determine how flexible we can be with the javascript, server side, and CSS.