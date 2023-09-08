/// <reference types="cypress" />

function deleteArticle(article) {
return cy.request({
        method: 'DELETE',
        url: `https://api.realworld.io/api/articles/${article}-221349`,
        failOnStatusCode: false,
        headers: {
            Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdGUyNjA4QHRlc3RlLmNvbSIsInVzZXJuYW1lIjoiVGVzdGUyNjA4MjMifSwiaWF0IjoxNjk0MTc3OTIzLCJleHAiOjE2OTkzNjE5MjN9.jETj728i9IB7y_U0A65_6JO1opYaYSmACVyoeoSe9sQ"
        
        }
    
    })
}

export { deleteArticle };

