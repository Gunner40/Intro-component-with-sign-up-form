# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

My challenge is to build out this introductory component and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./Screenshot-Intro-component-with-sign-up-form.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Null and an empty string are not the same. It's important to differentiate between the two. For example, you have a form where a user can input their name. If the user doesn't input anything, the input field's value will be an empty string. However, the value will be null if the input field is not even created

Stop the browser from auto-filling the password by setting its autocomplete attribute to "new-password". Text inputs and email can just be set to autocomplete="off";

For mobile screens use I can use min-height: 100svh; This takes into account the GUI element that is normally at the top of a mobile screen where as min-height: 100vh; doesnt. I used both incase browser support wasnt there for svh.

I can set an eventlistener on all form inputs at the same time using a forEach loop.

```html
<input
  type="password"
  id="pword"
  name="pword"
  required
  placeholder="Password"
  autocomplete="new-password"
/>
```

```css
min-height: 100vh;
min-height: 100svh;
```

### Useful resources

https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion

## Author

- Name - Paul Ryan
- Frontend Mentor - https://www.frontendmentor.io/profile/Gunner40
