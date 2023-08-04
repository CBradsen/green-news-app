# Green Energy News

Green Energy News brings you the latest headlines about green energy from around the world and the United States.

![image](https://github.com/CBradsen/green-news-app/assets/117617970/8ae57a02-e3df-42ed-9f3c-a4003c6aa624)

## Query

This site is built by accessing data collected by News API newsapi.org
![image](https://github.com/CBradsen/green-news-app/assets/117617970/1c14582f-977d-48f4-ac23-f08ea6d523b8)

To retreive WORLD green energy news the Everything end point is used.
It also includes a search for energy AND (solar OR wind OR clean OR green OR "climate change").
It limits the scope of publications to bbc.co.uk, reuters.com, aljazeera.com, and thenextweb.com
This allows for a high quality of returns. 

The USA query includes the same search words and focuses on US media publications:
washingtonpost.com, denverpost.com, latimes.com, and usatoday.com

## Accessability
In a Lighthouse review the site recieved an 8/9.
This was not 9/9 due to using smaller headline sizes at the top of the page.
Future iterations could remedy this, so that screen readers could best serve visitors to the site. 
![image](https://github.com/CBradsen/green-news-app/assets/117617970/db6b2158-ed8d-43d2-905e-415c15fed0ac)

The font Lato was chosen from Google Fonts and used exclusively. 
This sans-serif font was chosen for its readability, nod to newspaper fonts, and multiple font weights.

## Process

Experimenting with the api and it's possibilities began my UX Design process. 
I wanted to find a niche that was both interesting to me and had value to potential users.

After settling on Green Energy news, I 
- created a user persona
- researched other online news sites
- drew lofi wireframes
- wrote user stories
- created a list of micro-steps with a github project board 

![image](https://github.com/CBradsen/green-news-app/assets/117617970/f0d09cbb-effd-4cb2-a205-dfdc79e57b55)
![image](https://github.com/CBradsen/green-news-app/assets/117617970/459c758f-e0d5-4e90-8c4b-67dc0e2a3537)

## Technologies
React, 18.2.0
React Router, 6.14.2
UUID 9.0

Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
