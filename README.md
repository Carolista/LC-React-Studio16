# LC-React-Studio16

This studio focuses on forms - specifically on validation and feedback for good user experience (UX). It is recommended to view these instructions from the main repository page on GitHub where the markdown formatting and images are displayed.

You're going to enhance a yoga retreat center's booking form. The form elements are all in place and handlers capture the input. Now you just need to add validation to required fields or those that have special formatting (email, phone).

---

## Getting Started

### A. Fork & clone the repository from GitHub.
 - [ ] Navigate to the [studio 16 project repository](https://github.com/Carolista/LC-React-Studio16) (you are here).
 - [ ] Fork the repository to your own account, then grab the link from the green Code dropdown.
 - [ ] In your terminal, go to the folder where you want your project to be. Use `git clone` to create your local copy.

### B. Get the project ready to code.
 - [ ] Still in your terminal, use `cd LC-React-Studio16/yoga-retreat` to navigate to the actual React project and then use the command `npm install` to download any required dependencies. *Note: You won't be able to install the correct files or start the program unless you are in the `yoga-retreat` directory.*
 - [ ] Now use the command `npm start` to serve the project to your browser. Test it out! The home page is entirely unnecessary and JUST FOR FUN. You'll be spending all your time on the booking form page.

<p align="center"><img width="600" alt="Initial view of page with hover over one stylist's photo" src="https://user-images.githubusercontent.com/55961845/132589073-5ded6cf5-8ce3-4539-a060-4d4d667a7cf0.png"></p>

 - [ ] In VSCode (or the IDE of your choice), open the project so you can view the code. You should already be in the `main` branch, which is where the starter code resides. Now you're ready to go!

<p align="center"><img width="1240" alt="Starter code" src="https://user-images.githubusercontent.com/55961845/132589644-e09856b3-53aa-451e-a1ab-8a79dbee138a.png"></p>

---

## Part 1 - Get Familiar with the Existing Code.

### A. Take a look at the file tree.
 - [ ] In `/src`, take a look at the contents of the `components` and `pages` folders. Notice there is a subfolder in `components` called `forms`. There's a lot here, but this is where React's component-based architecture really starts to come in handy. SO many reuseable bits of code!

### B. Get the big picture.
 - [ ] Open `App.js` and `index.js`. Notice that the `react-router-dom` library is being used for routing components such as `<BrowserRouter>`, `<Switch>`, `<Route>`, and `<Redirect>`
 - [ ] Open `index.css` - this is a quick-start version of Bootstrap which I sadly did not realize until later was not a complete set of the standard classes. That being said, I just made adjustments where needed and overall it's still a good basis for styling for this app. I thought since I used `styled-components` in the last two studios I created, this would be a good alternative for you to see in practice.
 - [ ] Open `app.css` - I added some custom CSS here for use in multiple components.

### C. The nav menu leads to only two places!
 - [ ] Everything in the nav menu (both the home page version and the header version) is just set up to look like a fully functional header, but it's not. Most links just lead back to the home page. **Book Now** is the one that leads you to another page - that's where you're going to be making all your changes.

---

## Part 2 - Get To Know the Book Now Form.

### A. Start on the page in the browser.
 - [ ] There are three sections - clearly marked with large headers.
 - [ ] Each section has a variety of input types - and some are even hidden until they become relevant!
 - [ ] The submit button at the bottom is for the entire form, but the validation you will providing will help the user see errors beforehand.

### B. Test it out!
 - [ ] Fill some fields out, click around on different checkboxes and radio buttons, etc.  
 - [ ] FAIR WARNING: The checkboxes are a little buggy at times. I'll fix it before the solution walk-through next week.

### C. Take a look at the code.
 - [ ] Head over to `src/pages/BookNow.js`. Not surprisingly, it's a long file. But it's organized in the same general way you're used to.
 - [ ] You'll notice there's some data ahead of the actual component function. This is to make it easy to populate groups of information in select inputs (dropdowns), checkbox groups, and radio button groups.
 - [ ] Up first in the component function are the state variables needed to hold current values of all input fields (or arrays in cases where I've grouped together some checkboxes).
 - [ ] Next are the change handlers that are passed down to the children components for the different form inputs and such. And then one last handler for the submit button.
 - [ ] The JSX is a little dense, but it follows the form as viewed on the page. Note the use of Bootstrap classes like `col`, `row`, `mb-4`, `btn-primary`, etc. to facilitate layout and styling.
 - [ ] I did not take the time to make the form responsive, so it needs to be at least 800px wide in a browser.
 - [ ] You will have noticed some `TODOs` in the code, but we'll get to those later. Time to focus on single-input validation.

---

## Part 3 - Implement Validation in Some of the Input Components

### A. First, `TextInput.js`
 - [ ] Important! Read the detailed instructions after each TODO - I will generalize below.
 - [ ] Start with the first `TODO` - create a state variable to track if the user's input is invalid.
 - [ ] The next `TODO` has you add some logic to the change handler function.
 - [ ] Skip the `TODO` for Bonus Mission A for now.
 - [ ] The third `TODO` instructs you to conditionally display a red asterisk after the label if the input is required. 
 - [ ] Test out your validation on the page in the browser - is it working as expected?

### B. Then, `NumberInput.js`
 - [ ] This is similar to `TextInput`. Read the `TODO` instructions carefully. 
 - [ ] Test out your validation on the page in the browser - is it working as expected?

### C. Next, `SelectInput.js`
 - [ ] This is similar to `TextInput`. Read the `TODO` instructions carefully. 
 - [ ] Test out your validation on the page in the browser - is it working as expected?

### D. Finally, `RadioButtons.js`
 - [ ] The asterisk is all that is needed here. Same 'ol, same 'ol. 
 - [ ] Do a reality check and make sure it displays on the page where expected.

For the purposes of this app, we are assuming that a checkbox being checked is never required, though clearly there are use cases for that. (You know, like when you promise that you read allllllll the Terms and Conditions even when you didn't because you just want to use the app already!) So there is no validation being added to `CheckBoxInput` or `CheckboxGroup`.
 
---

## Part 4 - Back to BookNow

Head over to `BookNow.js` and take a look at the submit click handler.

### A. Clear the form.
 - [ ] Don't worry about overall validation yet.
 - [ ] The first `TODO` instructs you to add logic to clear the form once it successfully submits. 

### B. Make sure the user can't submit unless everything is complete and correct.
 - [ ] Rather than having the submit button disabled, we will just alert the user if they're not quite done yet.
 - [ ] The second `TODO` instructs you to provide a preemptive alert that doesn't submit the form if any of the fields are invalid. You also want to make sure the form doesn't clear yet if this is the case.

---

## Part 5 - BONUS MISSIONS

### A. Make it easier for the user to enter a correctly-formatted phone number.
 - [ ] This could be tricky but fun to work out how to make this happen.
 - [ ] Head over to `TextInput.js` and find the `TODO` for Bonus Mission A.
 - [ ] Read the instructions carefully. Think about what order things need to happen in for the smoothest user experience.

### B. Give the user some confidence that the information they are submitting is what they intend to!
 - [ ] In `BookNow.js`, find the `TODO` for Bonus Mission B. So far we haven't actually done anything with the data we've collected. Here's a chance to do away with those pesky warnings in the console about unused state variables!
 - [ ] Create a confirmation modal that displays all the info the user submitted and have them confirm before submitting.
 - [ ] You can adapt the Modal and Backdrop components from [studio 10 project](https://github.com/Carolista/LC-React-Studio10)

---

## That's it! Great job!
