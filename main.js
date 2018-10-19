const express = require("express");
const axios = require("axios");

const app = express();

const tags = [
    "api", "auth", "node", "nodejs", "scotch", "philosophy", "physics", "science",
    "universe", "aeon", "genetics", "guardian", "nature", "medium", "books"
];

/*
const items = [
    {
        title: "Building and securing a modern backend API",
        url: "https://getpocket.com/a/read/1383957649",
        tags: ["api", "auth", "node", "nodejs", "scotch"],
        subject: "Science",
        rating: 4
    },
    {
        title: "Anthropic arrogance",
        url: "https://getpocket.com/a/read/2326562918",
        tags: ["philosophy", "physics", "science", "universe", "aeon"],
        subject: "Philosophy",
        rating: 5
    },
    {
        title: "So it's nature not nurture after all?",
        url: "https://www.theguardian.com/science/2018/sep/29/so-is-it-nature-not-nurture-after-all-genetics-robert-plomin-polygenic-testing",
        tags: ["genetics", "guardian", "science", "nature"],
        subject: "Science",
        rating: 3
    },
    {
        title: "12 books that made me think",
        url: "https://medium.com/the-mission/12-books-that-made-me-think-b322db3e151a",
        tags: ["medium", "books"],
        subject: "Social Studies",
        rating: 4
    },
    {
        title: "What makes you \"click\" with someone else?",
        url: "https://www.bakadesuyo.com/2012/10/what-makes-you-click-with-someone-else/",
        tags: ["emotional intelligence", "friendship", "social", "vulnerability"],
        subject: "Social Studies",
        rating: 5
    },
    {
        title: "How Einstein learned physics",
        url: "https://www.bakadesuyo.com/2012/10/what-makes-you-click-with-someone-else/",
        tags: ["education", "science", "physics"],
        subject: "Science",
        rating: 5
    }
];
*/

app.set("view engine", "ejs");
app.set("views", `${__dirname}/app/views`);

app.use(express.static(`${__dirname}/public`));

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/items", async (request, response) => {
    const result = await axios.get("http://localhost:8080/api/v1/items");

    response.render("items/index", {items: result.data.items, tags: tags});
});

app.get("/items/:id", (request, response) => {
    response.render("book", {book: books[parseInt(request.params.id)]});
});

app.listen(process.env.PORT || 8081, () => {
    console.log("Serving the edflix-web application");
});
