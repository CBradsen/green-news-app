import { v4 as uuidv4 } from 'uuid';

const todaysDate = new Date()
const todayQuery = todaysDate.toISOString().split("T")[0];

//World News
export const world = () => {
  return fetch(`https://newsapi.org/v2/everything?q=energy AND (solar OR wind OR clean OR green OR "climate change")&searchIn
=title,content&domains=bbc.co.uk,reuters.com,aljazeera.com,thenextweb.com&from=${todayQuery}&to=2023-07-31&apiKey=1520e94979fc4ab78930a5f2fd259b01`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(data => {
      data.articles.forEach(article => {
        article.type = 'World';
        article.id = uuidv4();
        let date = new Date(article.publishedAt);
        let formattedDate = `${date.toLocaleString( 'default', { month: 'long'})} ${date.getDate()}`;
        article.formattedDate = formattedDate;
      });
      return data;
      });
    }

//USA News
export const usa = () => {
  return fetch(`https://newsapi.org/v2/everything?q=energy AND (solar OR wind OR clean OR green OR "climate change")&domains=washingtonpost.com,denverpost.com,latimes.com,usatoday.com&from=${todayQuery}&to=2023-07-30&apiKey=1520e94979fc4ab78930a5f2fd259b01`)
   .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(data => {
      data.articles.forEach(article => {
        article.type = 'USA';
        article.id = uuidv4();
        let date = new Date(article.publishedAt);
        let formattedDate = `${date.toLocaleString( 'default', { month: 'long'})} ${date.getDate()}`;
        article.formattedDate = formattedDate;
      });
      return data;
      });
    }
    

