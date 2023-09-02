# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

This was a great opportunity for me to practice my react skills, try out css nesting, and also to learn and apply the basics of redux.

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/multi-page-form-using-reactredux-kyuLKQ1BQ7)
- Live Site URL: (https://jade-sfogliatella-a30bb0.netlify.app)

## My process

### Built with

- Vite + React
- Plain CSS (To try out the new nesting feature)
- pain

### Challenges

#### State Management with Redux

Sending and managing state between different form components posed a challenge. To overcome this, I decided to use Redux, a predictable state container. Allowing me to centralize and control the application's state effortlessly.

#### Project Structure

It was challenging to figure out how I should structure the project so to make switching between pages easy. In the end I decided to use a component for each page, simplifying the development process.

```js
{
  step == 1 ? (
    <Page1 />
  ) : step == 2 ? (
    <Page2 />
  ) : step == 3 ? (
    <Page3 />
  ) : step == 4 ? (
    <Page4 />
  ) : (
    <ThankYou />
  );
}
```

### Outcomes

#### Understanding in Redux

By the end of this project, I had gained a basic understanding of Redux, enabling me to efficiently manage application state and facilitate data flow between components.

#### Enhanced React Skills

My familiarity with React deepened as I integrated Redux and utilized React features like the useRef hook.

#### Improved CSS Skills

This project strengthened my CSS skills, and was a great opportunity to try out the newly added CSS nesting, which was very fun to use!
