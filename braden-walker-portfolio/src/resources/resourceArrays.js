import cookbook from './project_images/cookbook.png';
import notes from './project_images/notes.png';
import portfolio from './project_images/portfolio.png';
import starWars from './project_images/starWars.png';
import monaLisa from './project_images/monaLisa.png';

import article from './article_images/article.jpg';
import brain from './article_images/brain.jpg';
import business_computer from './article_images/business-computer.jpg';
import flier from './article_images/flier.jpg';
import web_developer from './article_images/web-developer.jpg';

import github from './contacts/github-logo.svg';
import linkedin from './contacts/linkedin-logo.svg';
import email from './contacts/email.svg';

export const projectsArray = [
    {
        "id": 0,
        "title": "COOKBOOK",
        "description": "A website that allows you to save recipes from anywhere on the web into one place. You can view your recipes, schedule them in a calendar, and create a cohesive grocery list of all necessary ingredients.",
        "image": cookbook,
        "tools": ["React", "LESS", "Apollo Client", "GraphQL", "Prisma DB"],
        "github": "https://github.com/Lambda-School-Labs/Labs8-Cookbook",
        "video": "https://www.youtube.com/watch?v=kwAseuJUqoI&feature=youtu.be",
        "visit": "https://www.your-cookbook.us",
    },

    {
        "id": 1,
        "title": "Note Taker",
        "description": "A note taking app that lets you create, view, edit, and delete notes. Special Features include user accounts, markdown, support, searching, and sorting notes.",
        "image": notes,
        "tools": ["React", "Express", "MongoDB"],
        "github": "https://github.com/Bradiowave/back-end-project-week",
        "visit": "https://note-taker.netlify.com/",
    },

    {
        "id": 2,
        "title": "Graph Mona Lisa",
        "description": "This program creates a graph with random vertices. The position of each vertex determines its color, which match da Vinci's famous painting, the \"Mona Lisa\".",
        "image": monaLisa,
        "tools": ["Python"],
        "github": "https://github.com/Bradiowave/graph-mona-lisa",
        "visit": null,
    },

    {
        "id": 3,
        "title": "Star Wars API Viewer",
        "description": "A fun little website that connects to the star wars API (SWAPI) and displays info in a fitting fashion.",
        "image": starWars,
        "tools": ["JavaScript"],
        "github": "https://github.com/Bradiowave/Sprint-Challenge---React",
        "visit": "https://swapi-viewer.netlify.com/",
    },

    {
        "id": 4,
        "title": "Braden Walker's Portfolio",
        "description": "My personal portfolio site. All of those animations you see are actually static images with slices of keyframes hidden behind bars. Check out my blog post to learn more.",
        "image": portfolio,
        "tools": ["React", "LESS"],
        "github": "https://github.com/Bradiowave/braden-walker-portfolio",
        "visit": "#",
    },
]

export const articlesArray = [
    {
        "id": 0,
        "title": "The latest article",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        "image": article,
        "date": "December 14, 2018",
        "read": "https://braden-blog.netlify.com/posts/lambda-labs-sprint-challenge-5/",
    },

    {
        "id": 1,
        "title": "This Article Has a Really Long Title, and There's Nothing You Can Do To Stop It",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "image": brain,
        "date": "December 13, 2018",
        "read": "https://braden-blog.netlify.com/posts/lambda-labs-sprint-challenge-5/",
    },

    {
        "id": 2,
        "title": "Short Test",
        "description": "This blog post has a short description.",
        "image": business_computer,
        "date": "December 12, 2018",
        "read": "https://braden-blog.netlify.com/posts/lambda-labs-sprint-challenge-5/",
    },

    {
        "id": 3,
        "title": "These are all just placeholders",
        "description": "They aren't real articles",
        "image": flier,
        "date": "December 11, 2018",
        "read": "https://braden-blog.netlify.com/posts/lambda-labs-sprint-challenge-5/",
    },

    {
        "id": 4,
        "title": "Article Title",
        "description": "Article excerpt",
        "image": web_developer,
        "date": "December 10, 2018",
        "read": "https://braden-blog.netlify.com/posts/lambda-labs-sprint-challenge-5/",
    },
]

export const contactsArray = [
    {
        "id": 0,
        "title": "GitHub",
        "description": "github.com/Bradiowave",
        "image": github,
        "link": "https://github.com/Bradiowave",
        "linkText": "view",
    },

    {
        "id": 1,
        "title": "LinkedIn",
        "description": "in/the-braden-walker",
        "image": linkedin,
        "link": "https://www.linkedin.com/in/the-braden-walker",
        "linkText": "connect",
    },

    {
        "id": 2,
        "title": "Email",
        "description": "bradenw37@gmail.com",
        "image": email,
        "link": "#",
        "linkText": "copy to clipboard",
    },
]