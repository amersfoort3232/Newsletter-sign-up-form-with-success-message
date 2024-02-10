# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot%202024-02-10%20at%2016-18-07%20Frontend%20Mentor%20Newsletter%20sign-up%20form%20with%20success%20message.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/amersfoort3232/Newsletter-sign-up-form-with-success-message)
- Live Site URL: [Add live site URL here](https://amersfoort3232.github.io/Newsletter-sign-up-form-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This is a very good challenge for me to learn mobile-first workflow. I first styling for the mobile layout first and work on the desktop version. It is much easier than building normal desktop view first.

Also, I have learned some good practices of javascript, such as try to toggle classes but not changing the inline style, and make sure the focus is managed properly. Didn't know that I have to take so much consideration when building front end.

### Continued development

- Work on the focus part as it is totally new for me.
  Here is the comment

  ```
  By focus management I mean when you click on submit eg with keyboard where does focus go. Imagine this component is on a fuller website. If you just change the content within a webpage with JS focus is lost and will move back to the start of the body. You will want it to move to the new thank you content. And same when clicking the button to go back to the form (focus should return there).
  This is more noticeable if you placed this as a form within another Web page as it would likely be in a real project and with keyboard because you would have to tab through all the header and nav links just to get to the content you want.

  ```

### Useful resources

- [Grace on Mobile First Approach](https://fedmentor.dev/posts/responsive-meaning/)
