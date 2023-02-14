# Proqio technical interview
## Basic commands
- Run app: <code>yarn vite</code>
- Install deps: <code>yarn install</code>
- Build app: <code>yarn build</code>

## Summary
**The goal of this task is to create a form which a user can fill their email, name, surname and phone number, click on a submit button and a modal will open showing the data filled in the inputs and with the front_default sprites images of this array of Pokemons: [ditto, pikachu, charmander]. The modal has to have a button that close it.**

## Proqio projects are built with:
- React
- typescript
- Axios
- tailwindcss
- storybook
- React hook form
- Cypress testing library

### Minimal tasks to do
1. Create a styled input field component with tailwindcss and its corresponding history with storybook.
2. Create a styled button component with tailwindcss and its corresponding history with storybook. The button, among other properties, can receive an onClick function and a prop that receives a string with the code of the background color. By default, the background color is #FFFFFF. In the history is necessary to be able to change the background color of the button too.
3. Create a modal component and its corresponding history with storybook.
4. Create the form using the previous created components.
5. Do request with Axios to this API to extract the necessary Pokemon data: https://pokeapi.co/

### Validations
- First name and surname must be between 2 and 12 characters long. Only characters from a-z and A-Z are accepted.
- Phone number must contain only numbers and be 9 characters long.
- It should be only accepted emails with a maximum length of 60 characters.

### Notes
- The task may be developed with the technologies used by Proqio. It is necessary to use all of them, install and configure necessary packages.
- All the data should be validated and if the validation isn't correct may show an error message below the input.
- Component libraries like MUI are banned.
- The project is empty, you can structure at your convenience to develop the tasks.

Remember to do it as well as you can, good luck! 🤞😄