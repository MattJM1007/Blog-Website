# Planning Ideas for this project

## Deliverables
 1. One Node project for the function of the website
 2. One EJS file for the structure of the website (maybe do a header and footer)
 3. Style the website with css

## Features
 1. [Post Creation](Done): user should be able to create new posts
 2. [Post Viewing](Done): the home page should allow the user to view all their posts
 3. [Post Update/delete](Done): user should be able to edit and delete posts
 4. [Styling](): should be well styled and responsive

## Technical Requirements
 1. [Node.js & Express.js](): app will be webserver built with Node.js and Express.js (to handle routing and middleware)
 2. [EJS](): use EJS to generate dynamic HTML based on application's state

## General Timeline:
 - Hour 0 - Plan content and styles
 - Hour 1 - Setup project files and initialize node and install dependencies
 - Hour 2-3 - Implement above features and routing and test to make sure it works
 - Hour 4-5 - style the website and test responsiveness

# Notes / Intial Ideas
 - use javascript objects to handle the different parts of the post (title, short summary, and content all strings)
 - keep style simple, have a header section as a welcome to the website and button to create post and then scroll down to see a list of all the posts
    - Have posts be a simple block with title and preview text
- use body parser middleware to grab user input to create new posts
- pages: home page, submit page with title and content input field, view page with all the posts listed out