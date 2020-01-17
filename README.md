# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Why would you use class component over function components (removing hooks from the question)?

In a world without hooks, class components store state, while the functional components are stateless. Class components also offer some fine control of the react lifecycle.


- [ ] Name three lifecycle methods and their purposes.

componentDidMount
Gets called immediately after a component is mounted. Good for storing the api call

componentWillUnmount
This is called when a component will be removed from the DOM. Can be used for cleanup

componentDidUpdate
This method is called immediately after any update occurs. It can be used to execute some code that will be triggered when state updates.




- [ ] What is the purpose of a custom hook?

Custom hook
Custom hooks are good for grouping together bits of code that will always be used together so that it becomes an easy to use, reusable block of code. For example, setting something to local storage or capturing input from a form. 



- [ ] Why is it important to test our apps?
To be able to catch any bugs we may have missed, and allow testing for how the user would use the app without needing to actually go through the motions or have a real user. It also serves as a safety net if things change later on.



## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Run `yarn` to download dependencies.
- [ ] Run the server using `yarn start` or `node server.js`.
- [ ] In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- [ ] Still inside the `client` folder run `yarn start` to run the client application.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write a "reasonable" amount of unit tests for your React components. What does "reasonable amount" mean? That is up to you to decide. Be ready to defend your choice to your TL 👍

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API
