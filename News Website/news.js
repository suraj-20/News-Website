const general = document.getElementById("general");

const business = document.getElementById("business");

const sports = document.getElementById("sports");

const technology = document.getElementById("technology");

const entertainment = document.getElementById("entertainment");

const search = document.getElementById("search");

const newsQuery = document.getElementById("newsQuery");

const newstype = document.getElementById("newsType");

const newsdetails = document.getElementById("newsDetails")

// APIs

const API_KEY = "93954bf08dff4e648b3ef7fbf884bbcc";
const HEADLINE_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=93954bf08dff4e648b3ef7fbf884bbcc';
const GENERAL_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=93954bf08dff4e648b3ef7fbf884bbcc';
const BUSINESS_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=93954bf08dff4e648b3ef7fbf884bbcc';
const SPORT_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=93954bf08dff4e648b3ef7fbf884bbcc';
const TECHNOLOGY_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=93954bf08dff4e648b3ef7fbf884bbcc';
const ENTERTAINMENT_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=93954bf08dff4e648b3ef7fbf884bbcc';

getNews(HEADLINE_NEWS);

// General News.
general.addEventListener('click', ()=> {
    newsType.innerHTML = "<h4>Genral news</h4>";
    getNews(GENERAL_NEWS);
});

// Business News.
business.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>Business news</h4>";
    getNews(BUSINESS_NEWS);
});

// Sports News.
sports.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>Sports news</h4>";
    getNews(SPORT_NEWS);
});

// Technology News.
technology.addEventListener('click', ()=>{
    newsType.innerHTML = "<h4>Technology news</h4>";
    getNews(TECHNOLOGY_NEWS);
});

// Entertainment News.
entertainment.addEventListener('ckick', ()=>{
    newsType.innerHTML = "<h4>Entertainment news</h4>";
    getNews(ENTERTAINMENT_NEWS);
});

// Search Box.
search.addEventListener('click', fetchSearchNews)

function fetchSearchNews(e){
    newsType.innerHTML = "<h4>Search : "+ newsQuery.value + "</h4>";
    e.preventDefault();

    const API_KEY = '93954bf08dff4e648b3ef7fbf884bbcc';

    let topic = newsQuery.value;

    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=93954bf08dff4e648b3ef7fbf884bbcc`;

    if(topic){
        getNews(url);
    }
    console.log(topic);
}

// Call getNews Function.
async function getNews(HEADLINE_NEWS){
    const res = await fetch(HEADLINE_NEWS);
    const response = await res.json();
    showNews(response.articles);
    console.log(response);
}

// Get News Using showNews function.
function showNews(data){
    newsdetails.innerHTML = "";

    data.forEach(article => {
        let div = document.createElement('div');
        div.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        let card = document.createElement('div');
        card.className = "p-2";

        let image = document.createElement('img');
        image.setAttribute('height', 'matchparent');
        image.setAttribute('width', '100%');
        image.src = article.urlToImage;
        div.appendChild(image);

        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = article.title;
        div.appendChild(newsHeading);

        let description = document.createElement('p');
        description.innerHTML = article.description;
        div.appendChild(description);

        var date = article.publishedAt.split("T");
        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primery";
        dateHeading.innerHTML = date[0];
        div.appendChild(dateHeading);


        let a = document.createElement('a');
        a.className = "btn btn-dark";
        a.setAttribute('href', article.url);
        a.setAttribute('target', '_blank');
        a.innerHTML = "Read More";
        div.appendChild(a);

        newsdetails.appendChild(div);
    });
}