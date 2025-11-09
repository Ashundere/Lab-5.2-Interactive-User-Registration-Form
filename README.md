# Interactive Registration Form

This app takes input from the user to validate their registration.

### Description

This app will take your input and make sure that it is valid. It also saves your username in localStorage for later access.

## Getting Started

### Dependencies

None!

### Authors

Devon Jones
Github: [@Ashundere](https://github.com/Ashundere)

## Version History

0.1
-Initial Release


## Acknowledgments

JS MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript
CANVAS Lesson 5


## Reflections

### How did event.preventDefault() help in handling form submission?
It stopped the page from being reloaded and losing all the data as most of it was not stored in localStorage or sessionStorage.
### What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 validation attributes are useful and quick to implement, but are easliy bypassed. JavaScript is less easily bypassed and therefore more secure. It is best to use both as together they are more secure than individually. Like having two locks on one door, rather than one.
### Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data? 
I stored the username in localStorage by setting a key value pair as 'username', 'usernameInput'. The limitations are that there is no real security in localStorage and anyone can access your stuff with enough effort.
### Describe a challenge you faced in implementing the real-time validation and how you solved it.
It took me a while to figure out that you could account for two psuedo-classes in CSS when implementing styling. I used "input:focus:invalid" to trigger the styling only when you are focused on the input box AND the input is invalid.
### How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
I used JavaScript to trigger a message underneath the box when the submit button was pushed and the input was invalid. 