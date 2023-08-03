import { v4 as uuidv4 } from 'uuid';


//World
export const world = () => {
  return fetch('https://newsapi.org/v2/everything?q=energy%20And%20clean&domains=washingtonpost.com,bbc.co.uk&apiKey=ec4aaf5184104872884ca453b6fe31b1')
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

