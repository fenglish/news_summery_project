# News Summary Project

This is one of Makers Academy weekend challenges in week7.

## Project overview

This app grabs all the headlines from the Guardian newspaper API and display them on a page. Clicking on a headline shows a summary of the article.

### Technologies

This is a single page web app.
- JavaScript
- CSS
- HTML

## User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can read a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can read a full news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## API
#### the News Summary API
The basic idea is to send an apiRequestUrl query parameter to the News Summary API. The value of this parameter is the URL of the request you would have made to the Guardian or Aylien API, minus any API credentials.
you can see the code for in this repo: https://github.com/makersacademy/news-summary-api

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
