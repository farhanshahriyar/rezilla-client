## Rezilla - Real Estate Platform

"Rezilla" project involves the development of a Real Estate Platform using the MERN stack. The platform serves as an online space where users can add and buy real estate properties.
## Features

- **General Features**  
**Unique Design:** The platform features a unique design and concept, distinct from previous assignments or demo projects.

**Responsive Design:** Ensures a seamless user experience across various devices including desktop and mobile. Tablet responsiveness is optional.

- **User Interface**  
**Home Page** : Includes a navbar, banner/slider, advertisement section, latest user review section, and a footer.

**Advertisement Section** : Displays a minimum of four cards, each containing a property image, location, price range, and verification status.

**User Review Section** : Showcases at least three recent user reviews.


- **User Dashboard** 
**My Profile**: Displays user information including name, image, and role.

**Wishlist**: Lists properties the user has wishlisted.

**Property Bought**: Shows properties purchased by the user.

**My Reviews**: Allows users to view and delete their property reviews.


- **User Dashboard** 
**Agent Profile**:  Details about the logged-in agent.

**Add Property**: A form for agents to add new properties.

**My Added Properties**: Displays properties added by the agent.

**My Sold Properties**: Shows properties sold by the agent.

**Requested Properties**: Lists offers made by users for the agent's properties.

- **Admin Dashboard**
**Manage Properties**: Allows admins to verify or reject properties added by agents.

**Manage Users**: Admins can manage user roles and statuses.

**Manage Reviews**: Admins can view and delete user reviews.

- **Authentication**
Email and password-based authentication.

Registration and login functionalities with error handling.


- **Technical Features**
Use of Tanstack query with mutation for data fetching and posting.

Implementation of a 404 (Not Found) page.

Minimum commit requirements for both client-side and server-side repositories.

## Usage


**Header Component:**

This component acts as the main navigation for the website.
Dynamically updates navigation highlights based on current route.
Allows users to log in or log out.

**PricePage Component:**

Tried to use stripe, but lack of knowledge I couldn't added this part in this project.

**Register Component:**

- **Separation of Concerns:** It's always a good practice to keep the event handlers and Firebase related logic separate from the component render method. Consider breaking the handleRegister function out into its own module or custom hook.

- **Error Handling:** You have error messages displayed using the toast component, which is great. However, consider providing a clearer explanation to users about why their chosen password isn't valid.

- **Refactoring:** Instead of using direct e.target.email.value and e.target.password.value, you can utilize React's controlled components pattern. This means that you can have a state for email and password and update them using onChange event. This will also make validations and other manipulations easier.

- **Accessibility:** Ensure your form components have the necessary aria attributes for better accessibility. For example, error messages should have an appropriate role="alert" to notify screen readers.

- **Styling and UX:** Consider giving feedback to the user when the form is being submitted. A simple loading spinner or changing the button text to "Registering..." can give instant feedback.

- **Security:** Storing user information directly in localStorage can be a security concern. If this data isn't necessary for other parts of your app, consider skipping this step. If you need persistent sessions, Firebase manages this for you.

- **Navigation:** For the navigation link at the bottom ("Already a member?"), consider using a component from react-router-dom like <Link> instead of the traditional <a> to prevent full page reloads.

## Technology

**React:** Frontend library to build the UI.

**TailwindCSS:** Design

**Firebase:** For user authentication.

**@headlessui/react:** For creating the dropdowns and other UI components.

**@heroicons/react:** For rendering SVG icons.

**react-router-dom:** To handle routing.

**Sweet-Toast** For toast notifications.

**ExpressJS:** Backend

**MongoDB** : Database manage.



## Installation

```bash
  cd client
  npm i or install
```


    
## Demo

- [@Rezilla - Find Your Best Real Estate](https://rezillabangladesh.netlify.app/)


## Authors

- [@farhanshahriyar](https://github.com/farhanshahriyar)

