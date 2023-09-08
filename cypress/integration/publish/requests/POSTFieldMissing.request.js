/// <reference types="cypress" />
const payload = require('../payloads/article-publish.json');

function publishArticle() {
return cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/articles/',
        failOnStatusCode: false,
        headers: {
            Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdGUyNjA4QHRlc3RlLmNvbSIsInVzZXJuYW1lIjoiVGVzdGUyNjA4MjMifSwiaWF0IjoxNjk0MTc3OTIzLCJleHAiOjE2OTkzNjE5MjN9.jETj728i9IB7y_U0A65_6JO1opYaYSmACVyoeoSe9sQ"
        
        },
        body: payload
    
    })
}

export { publishArticle };

