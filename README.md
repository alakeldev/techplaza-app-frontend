<h1 align="center">👩‍💻 TECHPLAZA PLATFORM 🧑‍💻</h1>

Welcome to Techplaza, the premier platform for a seamless and engaging online experience. Our website features a comprehensive array of pages, including Home, About, Services, Contact, and Register, all accessible to both registered and non-registered users.
Upon registration, users gain access to a personalized dashboard, enabling profile management and exploration of our diverse suite of applications. Whether you are checking the weather, managing tasks, playing games, creating community cards, or soon engaging in community chat, Techplaza offers something for everyone.

This project serves as the final portfolio submission for the [Code Institute](https://codeinstitute.net/) Higher National Diploma in Full Stack Software Development with a focus on advanced Frontend development in React.js.

The project is divided into two parts:

- the front-end, developed using [React.js](https://react.dev/)
- the back-end API, powered by [Django REST Framework](https://www.django-rest-framework.org/).

Link to the live site - [Techplaza Live Site](https://frontend-techplaza-d0af91d53972.herokuapp.com/)

Link to the live API - [Techplaza Live API](https://backend-techplaza-1b0c24eaa252.herokuapp.com/)

Link to the back-end repository - [Techplaza Back-End Repo](https://github.com/alakeldev/backend-techplaza-pp5)

More information on the back-end of the site can be found in the back-end [README](https://github.com/alakeldev/backend-techplaza-pp5/blob/main/README.md).

![Techplaza Responsive](src/assets/readme/amiresponsive.png)

# Contents

- [**Project**](<#project>)
  - [Objective](<#objective>)
  - [Site User Goal](<#site-user-goal>)
  - [Site Owner Goal](<#site-owner-goal>)
  - [Target Audience](<#target-audience>)
- [**Agile Methodology**](<#agile-methodology>)
- [**Database Schema**](<#database-schema>)
- [**User Experience UX**](<#user-experience-ux>)
  - [Wireframes](<#wireframes>)
  - [User Stories](<#user-stories>)
  - [Site Structure](<#site-structure>)
  - [Colour Scheme](<#colour-scheme>)
  - [Typography](<#typography>)
- [**Features**](<#features>)
  - [**Existing Features**](<#existing-features>)
    - [Home Page Landing Section Desktop](<#Home-Page-Landing-Section-Desktop>)
    - [Home Page Landing Section Mobile](<#Home-Page-Landing-Section-Mobile>)
    - [About Page Desktop](<#About-Page-Desktop>)
    - [About Page Mobile](<#About-Page-Mobile>)
    - [Services Page Desktop](<#Services-Page-Desktop>)
    - [Services Page Mobile](<#services-page-mobile>)
    - [Contact Page Desktop](<#Contact-Page-Desktop>)
    - [Contact Page Mobile](<#contact-page-mobile>)
    - [Login Page Desktop](<#Login-Page-Desktop>)
    - [Login Page Mobile](<#Login-Page-Mobile>)
    - [Register Page Desktop](<#Register-Page-Desktop>)
    - [Register Page Mobile](<#Register-Page-Mobile>)
    - [Dashboard Page Desktop](<#Dashboard-Page-Desktop>)
    - [Dashboard Page Mobile](<#Dashboard-Page-Mobile>)
    - [Weather App Page Desktop](<#Weather-App-Page-Desktop>)
    - [Weather App Page Mobile](<#Weather-App-Page-Mobile>)
    - [Tasks-Manager App Page Desktop](<#Tasks-Manager-App-Page-Desktop>)
    - [Tasks-Manager App Page Mobile](<#Tasks-Manager-App-Page-Mobile>)
    - [Snake Game App Page Desktop](<#Snake-Game-App-Page-Desktop>)
    - [Snake Game App Page Mobile](<#Snake-Game-App-Page-Mobile>)
    - [Cards App Page Desktop](<#Cards-App-Page-Desktop>)
    - [Cards App Page Mobile](<#Cards-App-Page-Mobile>)
    - [Navigation Bar](<#Navigation-Bar>)
    - [Footer and Social Media Icons](<#Footer-and-Social-Media-Icons>)
    - [Password Reset Page (Forgot Password)](<#Password-Reset-Page-Forgot-Password>)
    - [Verify Email Page](<#Verify-Email-Page>)
    - [Not Found Page](<#Not-Found-Page>)
  - [Additional Features](<#Additional-Features>)
    - [Dashboard CRUD Account Features](<#Dashboard-CRUD-Account-Features>)
    - [Weather App Dispalying Results](<#Weather-App-Dispalying-Results>)
    - [Tasks Manager App CRUD Features](<#Tasks-Manager-App-CRUD-Features>)
    - [Snake Game MVP board Feature](<#Snake-Game-MVP-board-Feature>)
    - [Cards App CRUD Features](<#Cards-App-CRUD-Features>)
  - [**Future Features**](<#future-features>)
- [**Components in React**](<#Components-in-React>)
  - [Components](<#components>)
  - [Pages](<#pages>)
  - [Utils](<#utils>)
  - [Main Application](<#Main-Application>)
* [**Testing**](<#testing>)
  * [**Validator Tests**](<#validator-tests>)
    * [W3C (HTML)](<#w3c-html>)
    * [W3C (CSS)](<#w3c-css>)
    * [ESLint (JavaScript)](<#eslint-javascript>)
  * [**Additional Tests**](<#additional-tests>)
    * [Manual Tests](<#manual-tests>)
    * [Input Validation Tests](<#input-validation-tests>)
    * [Responsive Tests](<#responsive-tests>)
    * [Browser Tests](<#browser-tests>)
    * [Lighthouse Tests](<#lighthouse-tests>)
    - [CRUD Tests](<#CRUD-Tests>)
  * [**Bugs**](<#bugs>)
    * [Resolved](<#resolved>)
    * [Unresolved](<#unresolved>)
* [**Technologies Used**](<#technologies-used>)
  * [Languages](<#languages>)
  * [Software](<#software>)
  * [Libraries](<#libraries>)
* [**Deployment**](<#deployment>)
  * [Project Deployment via Heroku](<#project-deployment-via-heroku>)
  * [Forking](<#forking>)
  * [Cloning the project repositories](<#cloning-the-project-repositories>)
* [**Credits**](<#credits>)
  * [Content](<#content>)
  * [Media](<#media>)
* [**Acknowledgements**](<#acknowledgements>)

# Project

In this section I will detail the purpose and goals of the project, as well as the project management methodologies used throughout the development process.

## Objective

The objective of the Techplaza platform is to provide users with a seamless and engaging online experience through a comprehensive website that includes various pages and applications. The platform aims to offer a user-friendly interface for both registered and non-registered users, enabling them to access essential features and services effortlessly.

## Site User Goal

Users of the Techplaza platform may have various goals. They might want to manage their tasks efficiently, check the weather for different locations, play engaging games, or create and share community cards. Additionally, they may simply wish to interact with the community and explore the diverse features offered by the platform.

## Site Owner Goal

The goal of the Techplaza platform owner is to create a user-friendly and engaging online environment that caters to a wide range of user needs. By offering a variety of applications and features, the platform aims to attract and retain users, fostering a vibrant and interactive community. Additionally, the site owner seeks to continuously improve the platform based on user feedback and technological advancements, ensuring a high-quality experience for all users.

## Target Audience

The Techplaza platform is designed for a diverse audience, including:

- Individuals: Users looking for a comprehensive platform to manage tasks, check weather updates, play games, and create community cards.
- Professionals: Those who want to network, share their professional information, and engage with a community of like-minded individuals.
- Tech Enthusiasts: Users interested in exploring a platform and applications built with advanced technologies like React and Django REST Framework.
- Community Members: Individuals who enjoy interacting with others through chating, sharing feedback, and participating in community activities.

Techplaza aims to provide a seamless and engaging experience for all users, regardless of their specific interests or goals.

# Agile Methodology

Agile methodology is a flexible and iterative approach to software development that emphasizes collaboration, adaptability, and customer feedback. It allows teams to respond to changing requirements and deliver valuable features incrementally. In this project, we follow Agile principles to enhance productivity and ensure successful project delivery.

- User Stories and Github Issues: I utilized Github issues to create detailed user stories for my project. Each user story included essential components such as story points, acceptance criteria, and associated tasks.These user stories were tracked either on the Kanban board or within the issues themselves.
- Kanban Board for Prioritization: The Github Kanban board played a crucial role in managing my project. User stories were assigned to specific issues, allowing me to define clear goals and priorities. Labels were used to further categorize and prioritize user stories within the Kanban board.

Project Sections: my project was organized into the following sections:

- To-do: User stories awaiting implementation.
- In-progress: Ongoing work.
- Done: Completed tasks.
- Won’t-do: Items were defined as future features.

Sprint Planning with totla (9) Milestones:

- I structured the work into sprints using milestones.
- Each sprint had well-defined objectives.

To review the project kanban board please click [HERE](https://github.com/users/alakeldev/projects/7)

# Database Schema

![Techplaza Database Schema](src/assets/readme/db.png)

# User Experience UX

This section will detail the planning and design choices for the Techplaza platform.

## Wireframes

Wireframes for the Techplaza project were created using [figma-wireframe-online](https://www.figma.com/templates/wireframe-kits/). All wireframes were completed pre-development. These wireframes were used as the basis for the Techplaza platform pages and components designs. Some major and important changes were made during the development process.

### Home Page Wireframe

![Techplaza Home](src/assets/readme/homewf.png)

### About Page Wireframe

![Techplaza About](src/assets/readme/aboutwf.png)

### Services Page Wireframe

![Techplaza Services](src/assets/readme/serviceswf.png)

### Contact Page Wireframe

![Techplaza Contact](src/assets/readme/contactwf.png)

### Login Page Wireframe

![Techplaza Login](src/assets/readme/loginwf.png)

### Register Page Wireframe

![Techplaza Register](src/assets/readme/registerwf.png)

### Dashboard Page Wireframe

![Techplaza Dashboard](src/assets/readme/dashboardwf.png)

### Weather App Wireframe

![Techplaza Weather App](src/assets/readme/weatherwf.png)

### Tasks Manager App Wireframe

![Techplaza Tasks Manager App](src/assets/readme/taskswf.png)

### Snake Game App Wireframe

![Techplaza Snake Game App](src/assets/readme/snakewf.png)

### Cards App Wireframe

![Techplaza Cards App](src/assets/readme/cardswf.png)

### 404 Page Wireframe

![Techplaza 404 Page](src/assets/readme/404wf.png)

## User Stories

Not all stories have been implemented. Some have been left for future implementations as the Techplaza platform grows and expands.

- Admin:
  - As an admin, I can an easy-to-navigate panel to manage the registered users and delete the not verified  ones.

![Admin Panel](src/assets/readme/admin.png)

- Visitors and Registered Users:
  - As a website user (Registered / Not Registered), I want to access the home page so that I can understand what the platform offers.
  - As a website user (Registered / Not Registered), I want to access the about page so that I can learn more about the platform.
  - As a website user (Registered / Not Registered), I want to access the services page so that I can see what services are offered.
  - As a website user (Registered / Not Registered), I want to access the contact page so that I can contact the admin of the platform to get support or provide feedback.

- Visitors:
  - As a visitor, I want to register an account so that I can access the platform’s features.
  - As a visitor, I want to verify my email after registration so that I can activate my account and be as Registered User.

- Registered Users:
  - As a registered user, I want to log in to the platform after verified my registration so that I can access my Dashboard.
  - As a registered user, I want to reset my password if I forget it so that I can regain access to my account.
  - As a registered user, I want to be notified if I enter an unregistered email in the password reset process so that I know to correct the email or register with it first.
  - As a registered user, I want to access my dashboard so that I can manage my account and access the applications.
  - As a logged in user, I want to edit my name on the dashboard so that I can update my information.
  - As a registered user, I want to delete my account so that I can leave the community.
  - As a registered user, I want to log out of the platform so that I can secure my account.
  - As a registered user, I want to easy access all community applications, also to navigate back to the dashboard from any application so that I can manage my account.
  - As a registered user, I want to access the weather application from the dashboard so that I can check the weather.
  - As a registered user, I want to enter a city or country name to get weather information so that I can plan my activities.
  - As a registered user, I want to access the tasks manager application from the dashboard so that I can manage my tasks.
  - As a registered user, I want to create a new task with a title and description so that I can manage my to-do list.
  - As a registered user, I want to edit my tasks so that I can update their information.
  - As a registered user, I want to mark tasks as done or undone so that I can track my progress.
  - As a registered user, I want to delete my tasks so that I can remove completed or unnecessary tasks.
  - As a registered user, I want to access the snake game application from the dashboard so that I can play the game.
  - As a registered user, I want to play the snake game and know which keyboard controls must use so that I can have fun.
  - As a registered user, I want to see the MVP and best score players in the community so that I can compete with others.
  - As a registered user accessing the platform on a small or medium screen, I want to be informed about why the game is not displaying and be provided with an option to navigate back to the dashboard.
  - As a registered user, I want to access the card community application from the dashboard so that I can create, display my card and view the other community members cards.
  - As a registered user, I want to create a card with my name, email, number, profession, description, and country so that I can share my information with the community.
  - As a registered user, I want to edit and delete my card so that I can update or remove my information.

## Site Structure

![Techplaza Site Structure](src/assets/readme/structure.png)

The Techplaza platform features a straightforward and user-friendly site structure to minimize confusion. The main navigation bar and footer navigation are consistently present on every page, ensuring easy access to site navigation.

- Non-authenticated users have restricted access to certain pages, applications and functionalities, which is reflected in the dynamic state of the navigation menus. Specifically, non-logged-in users can only access the Home, About, Services, Contact, Log-in, Register, and Forgot Password pages/processes.

- Authenticated users, on the other hand, have full access to all the pages available to non-authenticated users, as well as all application pages. Additionally, they have access to functionalities such as log-out, delete, and update/edit.

## Colour Scheme

The color scheme has been meticulously curated to enhance the user experience. The chosen colors prioritize cleanliness, reliability, readability, stability, and depth, all while avoiding any overwhelming elements.

![Techplaza Colour Scheme](src/assets/readme/techplaza-colour-scheme.png)

## Typography

The website employs the Nunito Sans font, sourced from the Google Fonts library, consistently applied across all components to ensure a cohesive and visually appealing design. Additionally, the sans-serif font is used as a fallback option.

# Features

This section will detail the features and pages/components present in the Techplaza platform application, as well as possible future features.

## Existing Features

### Home Page Landing Section Desktop

![Landing page landing-desktop](src/assets/readme/landing-dt.png)

### Home Page Landing Section Mobile

![Landing page landing-mobile](src/assets/readme/landing-m.png)

### About Page Desktop

![About page About-desktop](src/assets/readme/about-dt.png)

### About Page Mobile

![About page About-mobile](src/assets/readme/about-m.png)

### Services Page Desktop

![Services page Services-desktop](src/assets/readme/services-dt.png)

### Services Page Mobile

![Services page Services-mobile](src/assets/readme/services-m.png)

### Contact Page Desktop

![Contact page Contact-desktop](src/assets/readme/contact-dt.png)

### Contact Page Mobile

![Contact page Contact-mobile](src/assets/readme/contact-m.png)

### Login Page Desktop

![Login page about us-desktop](src/assets/readme/login-dt.png)

### Login Page Mobile

![Login page about us-mobile](src/assets/readme/login-m.png)

### Register Page Desktop

![Register page Register-desktop](src/assets/readme/register-dt.png)

### Register Page Mobile

![Register page Register-mobile](src/assets/readme/register-m.png)

### Dashboard Page Desktop

![Dashboard page Dashboard-desktop](src/assets/readme/dashboard-dt.png)

### Dashboard Page Mobile

![Dashboard Page Dashboard-mobile](src/assets/readme/dashboard-m.png)

### Weather App Page Desktop

![Weather App page Weather App-desktop](src/assets/readme/weather-dt.png)

### Weather App Page Mobile

![Weather App Page Weather App-mobile](src/assets/readme/weather-m.png)

### Tasks-Manager App Page Desktop

![Tasks-Manager Tasks-Manager App-desktop](src/assets/readme/tasks-dt.png)

### Tasks-Manager App Page Mobile

![Tasks-Manager App Page Tasks-Manager App-mobile](src/assets/readme/tasks-m.png)

### Snake Game App Page Desktop

![Snake Game App page Snake1 Game App-desktop](src/assets/readme/snake-top-dt.png)
![Snake Game App page Snake2 Game App-desktop](src/assets/readme/snake-board-dt.png)

### Snake Game App Page Mobile

![Snake Game App Page Snake Game App-mobile](src/assets/readme/snake-m.png)

### Cards App Page Desktop

![Cards App page Cards App-desktop](src/assets/readme/cards-dt.png)

### Cards App Page Mobile

![Cards App Page Cards App-mobile](src/assets/readme/cards-m.png)

### Navigation Bar

#### Desktop

![Navbar desktop](src/assets/readme/navbar-dt.png)

#### Mobile

![Navbar mobile closed](src/assets/readme/navbar-m-c.png)

![Navbar mobile opened](src/assets/readme/navbar-m-o.png)

### Footer and Social Media Icons

![Footer](src/assets/readme/footer.png)

### Password Reset Page (Forgot Password)

### Reset Your Password Page

You can navigate to the ‘Password Reset’ page by forgot password link located within login page.

- After entering your registered email address on this page, you will receive an email containing a secure link. Please follow this link to reset your password.

![Reset Your Password Page ](src/assets/readme/reset-your-password.png)

### Password Reset Confirm Page From The received Secure Link on Email

- On this page, you will enter your new password. After submitting it, you will be redirected to the login page where you can sign in with your new credentials.

![Password reset confirm page](src/assets/readme/reset-your-password-confirm.png)

### Verify Email Page

- On this page, you will be prompted to enter your email address and the One-Time Password (OTP) that you received via email. This verification step ensures the security of your account. Upon successful verification, you will be redirected to the login page, where you can enter your credentials to access your dashboard.

![Verify Page](src/assets/readme/verify.png)

### Not Found Page

![404! page](src/assets/readme/404.png)

## Additional Features

### Dashboard CRUD Account Features

![Update Info Feature](src/assets/readme/update-info.png)

![Delete Account Feature](src/assets/readme/delete-account.png)

### Weather App Dispalying Results

![Weather Feature](src/assets/readme/weather-results.png)

### Tasks Manager App CRUD Features

![Tasks Feature 1](src/assets/readme/create-task.png)

![Tasks Feature 2](src/assets/readme/delete-task.png)

### Snake Game MVP board Feature

- After each game, the MVP board will automatically check and display the highest score for all participating players in the community, without requiring a game refresh.

![Snake Game](src/assets/readme/snake-mvp.png)

### Cards App CRUD Features

![Cards Feature 1](src/assets/readme/create-card.png)

![Cards Feature 2](src/assets/readme/display-card.png)

![Cards Update Feature 3](src/assets/readme/update-card.png)

## Future Features

Techplaza aims to continuously evolve and enhance the user experience. Some of the future features planned for the platform include:

1. Community Chat: Introducing a real-time chat feature to facilitate better communication and interaction among users.
2. Enhanced Task Manager: Adding more functionalities to the task manager, such as setting reminders, deadlines, and priority levels for tasks.
3. Weather Alerts: Implementing weather alerts and notifications to keep users informed about significant weather changes.
4. Advanced User Profiles: Allowing users to add more details to their profiles, such as social media links, profile pictures, and bio descriptions.
5. Gamification Elements: Introducing badges, achievements, and leaderboards to make the platform more engaging and rewarding for users.
6. Mobile App: Developing a mobile application to provide users with access to Techplaza’s features on the go.
7. Integration with Third-Party Services: Enabling integration with popular third-party services and tools to enhance the platform’s functionality.
8. Enhance Security by Storing Tokens in Cookies instead of local storage, This change will significantly enhance the security of the website by mitigating vulnerabilities to cyber attacks, such as Cross-Site Scripting (XSS) attacks.

These future features aim to make Techplaza even more versatile and user-friendly, ensuring it remains a valuable resource for all users.

## Components in React

- In a React project, every JavaScript file typically represents a component.
- Components are the building blocks of a React application, allowing you to break down the UI into reusable, independent pieces. Each component encapsulates its own structure, logic, and styling, making it easier to manage and maintain the codebase.

### Components

- **DeleteAccount.js:** Provides functionality for users to delete their accounts. It includes a confirmation modal and communicates with the backend API to delete the account. The component also handles navigation and displays success or error messages using toast notifications.
- **EditInformation.js:** Allows users to edit their profile information, specifically their full name. It includes form validation, communicates with the backend API to update the information, and displays success or error messages using toast notifications. The component also includes a modal for editing information.
- **Header.js:** Renders the header section of the website, including a title and dynamically typed strings using the ReactTyped library. It provides a visually appealing introduction to the platform.
- **Logout.js:** Manages the user logout process, including a confirmation modal and communication with the backend API to log out the user. It handles navigation and displays success or error messages using toast notifications.
- **Footer.js:** Renders the footer section of the website, including the logo, social media links, and copyright information. It provides a consistent and visually appealing footer across the platform.
- **MemberCard.js:** Renders individual member cards with details such as name, email, phone number, profession, description, and country. It includes options to edit or delete the card if the user is the owner.
- **MembersCardsList.js:** Manages the list of member cards, allowing users to create, edit, and delete their own cards. It includes form validation and communicates with the backend API to fetch and manage member cards.
- **NavBar.js:** Renders the navigation bar with various links based on the user’s authentication status. It includes links to Home, About, Services, Contact, Dashboard, Login, and Register pages. The component also handles the logout functionality through a modal.
- **TabList.js:** Provides a button group to toggle between viewing done and undone tasks in the task manager application.
- **TaskItem.js:** Renders individual task items with options to edit or delete the task. It displays the task title and description and applies styles based on the task’s status (done or undone).
- **TaskList.js:** Manages the list of tasks, filtering them based on their status (done or undone) and rendering each task using the TaskItem component.
- **TaskModal.js:** Provides a modal for creating and editing tasks. It includes form validation and handles the submission of task data.
- **SnakeGameBoard.js:** Manages the Snake game board, including the snake’s movement, food generation, and score tracking. It handles user input for controlling the snake, adjusts the board size based on screen width, and communicates with the backend API to save high scores. The component also includes start and restart game functionality.
- **SnakeGameHighScores.js:** Displays the high scores for the Snake game, highlighting the top players in the community. It renders a list of high scores, showing the user’s name or email and their score.

### Pages

- **Home.js:** Renders the home page of the Techplaza platform, including the navigation bar, header, and footer. It provides a welcoming introduction to the platform’s services and features.
- **About.js:** Displays the “About Us” page, featuring a carousel with information about the community, innovative applications, and IT support services. It includes the navigation bar and footer for consistent site navigation.
- **Services.js:** Renders the “Services” page, showcasing the various services offered by Techplaza, including community applications, IT support, and community chat. It uses an accordion layout to present detailed information and includes the navigation bar and footer.
- **Contact.js:** Provides a contact form for users to reach out to the Techplaza team. It includes form validation, email sending functionality using EmailJS, and displays success or error messages using toast notifications. The page also includes the navigation bar and footer.
- **NotFound.js:** Renders a custom 404 error page when a user navigates to a non-existent page. It includes a message indicating that the page doesn’t exist, along with the navigation bar and footer.
- **Register.js:** Manages the user registration process, including form validation and submission. It handles user input, validates the data, and communicates with the backend API to register new users. The page also includes the navigation bar and footer.
- **EmailVerifyForm.js:** Manages the email verification process, including form submission and validation. It handles user input, validates the data, and communicates with the backend API to verify the user’s email. The page also includes the navigation bar and footer.
- **LoginForm.js:** Manages the user login process, including form validation and submission. It handles user input, validates the data, and communicates with the backend API to authenticate users. The page also includes the navigation bar and footer.
- **ForgetPasswordForm.js:** Manages the password reset request process, including form submission and validation. It handles user input, validates the email, and communicates with the backend API to send a password reset link. The page also includes the navigation bar and footer.
- **ResetPasswordForm.js:** Manages the password reset process, including form submission and validation. It handles user input, validates the new passwords, and communicates with the backend API to reset the user’s password. The page also includes the navigation bar and footer.
- **Dashboard.js:** Manages the user dashboard, displaying a welcome message and providing access to various applications such as the weather app, tasks manager, snake game, and member cards. It includes options to edit user information and delete the account, along with the navigation bar and footer.
- **WeatherApp.js:** Provides a weather application where users can search for weather information by city or country. It includes form validation, error handling, and displays weather details. The page also includes the navigation bar and footer.
- **TasksApp.js:** Manages the task management application, allowing users to create, edit, and delete tasks. It includes form validation, task filtering, and displays tasks in a list format. The page also includes the navigation bar and footer.
- **SnakeGame.js:** Provides the Snake game application, including gameplay instructions, high scores, and the game board. It fetches and displays high scores from the backend and adjusts the layout based on screen size. The page also includes the navigation bar and footer.
- **CardsApp.js:** Manages the community members’ cards application, allowing users to view and manage member cards. It includes navigation to the dashboard and displays a list of member cards. The page also includes the navigation bar and footer.

### Utils

- **axiosInstance.js:** Facilitates communication with the backend API, including token management and automatic token refresh.

### Main Application

- **App.js:** The main application component that sets up the routing for the entire Techplaza platform. It includes routes for all the pages and applications, such as Home, About, Services, Contact, Login, Register, Email Verification, Password Reset, Dashboard, Weather App, Tasks App, Snake Game, and Cards App. It also integrates the ToastContainer for displaying notifications.

# Testing

- In this section, I conduct comprehensive testing of the site and platform using various methods to ensure that all functionalities, elements, and features are working properly.

## Validator Tests

### W3C HTML

| **TEST** | **ACTION** | **EXPECTATION** | **RESULT** |
| ----------------------------- | ----------------------- | --------------------------- | ---------- |
| public/index - html | [W3C - Direct Input](https://validator.w3.org/) | [No issues found](src/assets/readme/index-html.png) | ✅ |

### W3C CSS

| **TEST** | **ACTION** | **EXPECTATION** | **RESULT** |
| ----------------------------- | ----------------------- | --------------------------- | ---------- |
| index.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/index-css.png) | ✅ |
| About.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/About-module.png) | ✅ |
| CardsApp.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/CardsApp-module.png) | ✅ |
| Contact.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/Contact-module.png) | ✅ |
| Dashboard.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/Dashboard-module.png) | ✅ |
| DeleteAccount.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/DeleteAccount-module.png) | ✅ |
| EditInfromation.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/EditInfromation-module.png) | ✅ |
| EmailVerifyForm.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/EmailVerifyForm-module.png) | ✅ |
| Footer.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/Footer-module.png) | ✅ |
| ForgetPassword.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/ForgetPassword-module.png) | ✅ |
| Header.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/Header-module.png) | ✅ |
| Home.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/Home-module.png) | ✅ |
| LoginForm.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/LoginForm-module.png) | ✅ |
| MemberCard.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/MemberCard-module.png) | ✅ |
| MembersCardsList.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/MembersCardsList-module.png) | ✅ |
| NavBarLogout.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/NavBarLogout-module.png) | ✅ |
| NotFound.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/NotFound-module.png) | ✅ |
| Register.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/Register-module.png) | ✅ |
| ResetPasswordForm.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/ResetPasswordForm-module.png) | ✅ |
| Services.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/Services-module.png) | ✅ |
| SnakeGame.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/SnakeGame-module.png) | ✅ |
| SnakeGameBoard.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/SnakeGameBoard-module.png) | ✅ |
| SnakeGameHighScores.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/SnakeGameHighScores-module.png) | ✅ |
| TasksApp.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/TasksApp-module.png) | ✅ |
| WeatherApp.module.css | [W3C - Jigsaw CSS](https://jigsaw.w3.org/css-validator/) | [No issues found](src/assets/readme/WeatherApp-module.png) | ✅ |

### ESLint Javascript

## Additional Tests

### Manual Tests

Here you will find a comprehensive list of all the manual tests that were carried out on the Techplaza front-end interface.

| Status | **Home Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Header Component is displaying correctly|
| &check; | Title in the header is displaying correctly|
| &check; | Typed strings in the header are displaying correctly|
| &check; | Footer is displaying correctly|
| &check; | Page is responsive|

| Status | **Navbar**|
|:-------:|:--------:|
| &check; | Navbar is displaying correctly|
| &check; | Logo is displaying correctly|
| &check; | Home link is working and navigates to the correct page|
| &check; | About link is working and navigates to the correct page|
| &check; | Services link is working and navigates to the correct page|
| &check; | Contact link is working and navigates to the correct page|
| &check; | Dashboard link is displayed correctly for logged-in users|
| &check; | Logout link is displayed correctly for logged-in users|
| &check; | Login link is displayed correctly for logged-out users|
| &check; | Register link is displayed correctly for logged-out users|
| &check; | Navbar is responsive|
| &check; | Navbar toggle button works correctly on small screens|
| &check; | Logout modal is displayed correctly|

| Status | **Footer**|
|:-------:|:--------:|
| &check; | Footer is displaying correctly|
| &check; | Logo is displaying correctly|
| &check; | IT Support & Innovative Applications text is displaying correctly|
| &check; | Social media icons are displaying correctly|
| &check; | Social media icons link to the correct sites|
| &check; | Social media icons change styling on hover|
| &check; | Current year is displaying correctly|
| &check; | Footer is responsive|

| Status | **About Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Carousel is displaying correctly|
| &check; | Carousel items are responsive|
| &check; | Carousel items are sliding correctly|
| &check; | “Welcome to Our Community” section is displaying correctly|
| &check; | “Innovative Applications” section is displaying correctly|
| &check; | “IT Support” section is displaying correctly|
| &check; | Footer is displaying correctly|

| Status | **Services Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Services image is displaying correctly|
| &check; | Services image is responsive|
| &check; | Accordion is displaying correctly|
| &check; | Accordion items are expandable and collapsible|
| &check; | Community Applications section is displaying correctly|
| &check; | IT Support Service section is displaying correctly|
| &check; | Community Chat Service section is displaying correctly|
| &check; | Footer is displaying correctly|

| Status | **Contact Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Contact form is displaying correctly|
| &check; | Form fields (name, email, message) are displaying correctly|
| &check; | Form fields are responsive|
| &check; | Form validation is working correctly (name validation)|
| &check; | Form submission is working correctly|
| &check; | Success message is displayed upon successful form submission|
| &check; | Error message is displayed upon failed form submission|
| &check; | Footer is displaying correctly|

| Status | **Login Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Login form is displaying correctly|
| &check; | Form fields (email, password) are displaying correctly|
| &check; | Form fields are responsive|
| &check; | Form validation is working correctly (email and password validation)|
| &check; | Form submission is working correctly|
| &check; | Success message is displayed upon successful login|
| &check; | Error message is displayed upon failed login|
| &check; | “Forgot Password?” link is working correctly|
| &check; | Footer is displaying correctly|

| Status | **Register Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Register form is displaying correctly|
| &check; | Form fields (full name, email, password1, password2) are displaying correctly|
| &check; | Form fields are responsive|
| &check; | Form validation is working correctly (full name, email, password validation)|
| &check; | Form submission is working correctly|
| &check; | Success message is displayed upon successful registration|
| &check; | Error message is displayed upon failed registration|
| &check; | Footer is displaying correctly|

| Status | **Verify Email (OTP) Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Email verification form is displaying correctly|
| &check; | Form fields (email, OTP) are displaying correctly|
| &check; | Form fields are responsive|
| &check; | Form validation is working correctly (email and OTP validation)|
| &check; | Form submission is working correctly|
| &check; | Success message is displayed upon successful verification|
| &check; | Error message is displayed upon failed verification|
| &check; | Footer is displaying correctly|

| Status | **Forgot Password Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Forget password form is displaying correctly|
| &check; | Form fields (email) are displaying correctly|
| &check; | Form fields are responsive|
| &check; | Form validation is working correctly (email validation)|
| &check; | Form submission is working correctly|
| &check; | Success message is displayed upon successful form submission|
| &check; | Error message is displayed upon failed form submission|
| &check; | Footer is displaying correctly|

| Status | **Reset Password Confirm Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Reset password form is displaying correctly|
| &check; | Form fields (password, confirm password) are displaying correctly|
| &check; | Form fields are responsive|
| &check; | Form validation is working correctly (password validation)|
| &check; | Form submission is working correctly|
| &check; | Success message is displayed upon successful password reset|
| &check; | Error message is displayed upon failed password reset|
| &check; | Footer is displaying correctly|

| Status | **404 Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | “Oops!! This Page Doesn’t Exist!” message is displaying correctly|
| &check; | Message is responsive|
| &check; | Footer is displaying correctly|

| Status | **Dashboard Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Welcome message with username is displaying correctly|
| &check; | Edit Information button is working correctly and opens the modal|
| &check; | Delete Account button is working correctly and opens the modal|
| &check; | World Weather Application card is displaying correctly and navigates to the correct page|
| &check; | Tasks Manager Application card is displaying correctly and navigates to the correct page|
| &check; | Snake Game card is displaying correctly and navigates to the correct page|
| &check; | Member Cards Application card is displaying correctly and navigates to the correct page|
| &check; | Community Chat card is displaying correctly with “Coming in December 2024” message|
| &check; | Edit Information modal is displaying correctly|
| &check; | Edit Information modal form validation is working correctly|
| &check; | Edit Information modal form submission is working correctly|
| &check; | Success message is displayed upon successful information update|
| &check; | Error message is displayed upon failed information update|
| &check; | Delete Account modal is displaying correctly|
| &check; | Delete Account modal confirmation is working correctly|
| &check; | Success message is displayed upon successful account deletion|
| &check; | Error message is displayed upon failed account deletion|
| &check; | Footer is displaying correctly|
| &check; | Page is responsive|

| Status | **World Weather Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Weather app input field is displaying correctly|
| &check; | Weather app input field is responsive|
| &check; | Weather app input field accepts valid city names|
| &check; | Weather app displays error message for invalid city names|
| &check; | Weather app fetches and displays weather data correctly|
| &check; | Weather data (city, temperature, weather condition, wind speed) is displaying correctly|
| &check; | Dashboard button is displaying correctly and navigates to the dashboard page|
| &check; | Footer is displaying correctly|
| &check; | Page is responsive|

| Status | **Tasks Manager Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Task Manager title is displaying correctly|
| &check; | Dashboard button is working correctly and navigates to the dashboard page|
| &check; | Add task button is working correctly and opens the task modal|
| &check; | TabList component is displaying correctly and toggles between Done and Undone tasks|
| &check; | TaskList component is displaying tasks correctly based on the selected tab (Done/Undone)|
| &check; | TaskItem component is displaying task title and description correctly|
| &check; | Edit button in TaskItem component is working correctly and opens the task modal with the selected task details|
| &check; | Delete button in TaskItem component is working correctly and deletes the selected task|
| &check; | TaskModal component is displaying correctly with task details|
| &check; | TaskModal form fields (title, description, completed) are displaying correctly and are responsive|
| &check; | TaskModal form validation is working correctly (title and description validation)|
| &check; | TaskModal form submission is working correctly and updates/creates the task|
| &check; | Success message is displayed upon successful task creation/update|
| &check; | Error message is displayed upon failed task creation/update|
| &check; | Footer is displaying correctly|
| &check; | Page is responsive|

| Status | **Snake Game Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Snake Game title is displaying correctly|
| &check; | Instructions for playing the game are displaying correctly on large screens|
| &check; | High Scores section is displaying correctly with user names and scores|
| &check; | Dashboard button is working correctly and navigates to the dashboard page|
| &check; | SnakeGameBoard component is displaying correctly|
| &check; | SnakeGameBoard component starts the game correctly when the Start button is clicked|
| &check; | SnakeGameBoard component restarts the game correctly when the Restart button is clicked|
| &check; | Snake moves correctly based on user input (W, A, S, D keys) *Please check the unresolved bugs section|
| &check; | Food is generated correctly and snake grows when food is eaten|
| &check; | Score is updated correctly when food is eaten|
| &check; | Game over condition is handled correctly (snake runs into wall or itself)|
| &check; | High score is saved correctly when game is over and score is higher than the lowest high score|
| &check; | Small screen message with dashboard button is displaying correctly on small screens|
| &check; | Footer is displaying correctly|
| &check; | Page is responsive|

| Status | **Community Cards Page**|
|:-------:|:--------:|
| &check; | Page has correct URL|
| &check; | Navbar is displaying/working (its links) correctly|
| &check; | Cards Members title is displaying correctly|
| &check; | Dashboard button is working correctly and navigates to the dashboard page|
| &check; | MembersCardsList component is displaying correctly|
| &check; | MemberCard component is displaying member details correctly (name, email, phone number, profession, description, country)|
| &check; | Edit button in MemberCard component is working correctly and opens the modal with the selected member details|
| &check; | Delete button in MemberCard component is working correctly and deletes the selected member card|
| &check; | Create Card button is working correctly and opens the modal|
| &check; | Modal for creating/editing card is displaying correctly|
| &check; | Modal form fields (email, name, phone number, profession, description, country) are displaying correctly and are responsive|
| &check; | Modal form validation is working correctly (phone number, profession, description, country validation)|
| &check; | Modal form submission is working correctly and updates/creates the member card|
| &check; | Success message is displayed upon successful card creation/update|
| &check; | Error message is displayed upon failed card creation/update|
| &check; | Footer is displaying correctly|
| &check; | Page is responsive|

### Responsive Tests

| **TEST**                      | **ACTION**              | **EXPECTATION**             | **RESULT** |
| ----------------------------- | ----------------------- | --------------------------- | ---------- |
| Home page - responsiveness    | Size site down to 320px | all elements stay on screen | ✅        |
| Home page - responsiveness    | Size site up to 1920px  | all elements stay on screen | ✅         |
| About page - responsiveness   | Size site down to 320px | all elements stay on screen | ✅         |
| About page - responsiveness   | Size site up to 1920px  | all elements stay on screen | ✅         |
| Services page - responsiveness  | Size site down to 320px | all elements stay on screen | ✅         |
| Services page - responsiveness  | Size site up to 1920px  | all elements stay on screen | ✅         |
| Contact page - responsiveness  | Size site down to 320px | all elements stay on screen | ✅         |
| Contact page - responsiveness  | Size site up to 1920px  | all elements stay on screen | ✅         |
| Login page - responsiveness    | Size site down to 320px | all elements stay on screen | ✅         |
| Login page - responsiveness    | Size site up to 1920px  | all elements stay on screen | ✅         |
| Forgot Password page - responsiveness    | Size site down to 320px | all elements stay on screen | ✅         |
| Forgot Password page - responsiveness    | Size site up to 1920px  | all elements stay on screen | ✅         |
| Password Confirm page - responsiveness    | Size site down to 320px | all elements stay on screen | ✅         |
| Password Confirm page - responsiveness    | Size site up to 1920px  | all elements stay on screen | ✅         |
| Register page - responsiveness | Size site down to 320px | all elements stay on screen | ✅         |
| Register page - responsiveness | Size site up to 1920px  | all elements stay on screen | ✅         |
| Verify Email page - responsiveness | Size site down to 320px | all elements stay on screen | ✅         |
| Verify Email page - responsiveness | Size site up to 1920px  | all elements stay on screen | ✅         |
| Dashboard page - responsiveness | Size site down to 320px | all elements stay on screen | ✅         |
| Dashboard page - responsiveness | Size site up to 1920px  | all elements stay on screen | ✅         |
| Weather App page - responsiveness | Size site down to 320px | all elements stay on screen | ✅         |
| Weather App page - responsiveness | Size site up to 1920px  | all elements stay on screen | ✅         |
| Tasks Manager App page - responsiveness | Size site down to 320px | all elements stay on screen | ✅         |
| Tasks Manager App page - responsiveness | Size site up to 1920px  | all elements stay on screen | ✅         |
| Snake Game App page - responsiveness | Size site down to 320px | all elements stay on screen | ✅         |
| Snake Game App page - responsiveness | Size site up to 1920px  | all elements stay on screen | ✅         |
| Members Card page - responsiveness | Size site down to 320px | all elements stay on screen | ✅         |
| Members Card page - responsiveness | Size site up to 1920px  | all elements stay on screen | ✅         |

### Browser Tests

| **TEST** | **ACTION** | **EXPECTATION** | **RESULT** |
| ----------------------------- | ----------------------- | --------------------------- | ---------- |
| Chrome browser | Launch site | The site functions correctly upon opening | ✅ |
| Firefox browser | Launch site | The site functions correctly upon opening | ✅ |
| MS-Edge browser | Launch site | The site functions correctly upon opening, however the Snake Game/App does not operate properly (W,S,A,D) keys until the browser is refreshed. | ✅ |

### Lighthouse Tests

- The Lighthouse test range is situated between the two range photos displayed on all site and platform pages, including applications

![Techplaza lighthouse1](src/assets/readme/lighthouse1.png)
![Techplaza lighthouse2](src/assets/readme/lighthouse2.png)

#### CRUD Tests

| App | Create | Read | Update | Delete |
|---|---|---|---|---|
| Accounts | ✅ | ✅ | ✅ | ✅ |
| Cards | ✅ | ✅ | ✅ | ✅ |
| Tasks | ✅ | ✅ | ✅ | ✅ |
| Snake | ✅ | ✅ | ✅ | --- |
| Weather | --- | ✅ | --- | --- |

## Bugs

A number of bugs presented themselves during the Techplaza platform development process. Most of these bugs were resolved, but unfortunately due to time constraints, some of them weren't. This section will list the resolved and unresolved bugs.

### Resolved

- During the development of the project’s front-end, I encountered numerous bugs and errors. These issues sometimes originated from the front-end and other times from the back-end. Below are some images of the resolved issues:

- ![bug1](src/assets/readme/bug1.png)
- ![bug2](src/assets/readme/bug2.png)
- ![bug3](src/assets/readme/bug3.png)
- ![bug4](src/assets/readme/bug4.png)
- ![bug5](src/assets/readme/bug5.png)
- ![bug6](src/assets/readme/bug6.png)

### Unresolved

- There is an ongoing issue with the Snake Game application on Microsoft Edge. Users are unable to start and play the game directly using the keyboard keys (W, S, A, D). To resolve this, users need to refresh the browser page before pressing the “Start Game” button. Without refreshing, the game does not respond to these keys. This issue has been investigated, but a solution has not yet been found. Notably, this problem does not occur on Google Chrome or Mozilla Firefox, where users can access and play the game without needing to refresh the page. In these browsers, the game responds correctly to the (W, S, A, D) keys.

# Technologies Used

Here you will find a complete list of all the technologies used to help create and develop the Techplaza front-end application.
For more information on the back-end technologies used, please view the [Techplaza API README](https://github.com/alakeldev/backend-techplaza-pp5/blob/main/README.md).

## Languages

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Provided the basic content and structure for the site.
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Provided the styling for the site.
* [JavaScript (ES6)](https://www.javascript.com/) - Provided the interactivity and front-end functionality for the site.

## Software

* [GitHub](https://github.com/) - An internet hosting service used for version control. Used to host the Techplaza repositories and for the project board used for project management and user stories
* [VScode](https://www.gitpod.io/) - IDE to write code, create new files and folders for my project before pushing the project to Github.
- [Git](https://git-scm.com/) - Provided the version control system for the site.
* [Heroku](https://dashboard.heroku.com/) - A cloud platform used to host the Techplaza application
* [Draw.io](https://app.diagrams.net/) - An online diagram software used for the database schemas
* [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - A set of web developer tools built directly into the chrome browser. Used for responsiveness tests and further testing.
* [Google Fonts](https://fonts.google.com/) - A web based font service by Google used to supply the site typography
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - An open source automated testing tool used for site tests
* [Responsive Design Checker](https://responsivedesignchecker.com/) - An online testing tool used for responsive site testing
* [Am I Responsive](https://ui.dev/amiresponsive) - An online testing tool used for responsive site testing
* [Colour Contrast Checker](https://colourcontrast.cc/) - An online tool used to test background and text colour contrast
* [Font Awesome](https://fontawesome.com/) - A font and icon toolkit used for the Techplaza platform icons
* [NPM JS](https://www.npmjs.com/) - The npm registry website used for information on npm libraries
* [Favicon.io](https://favicon.io/) - was used for making the site favicon.
* [figma-wireframe-online](https://www.figma.com/templates/wireframe-kits/): was used to create wireframes.
* [Coloors](https://coolors.co/) - was used to create the color scheme.
* [Miro-online](https://miro.com/) - was used to create the plan of the site navigation.
* [Emailjs](https://www.emailjs.com/) - was configured and utilized to ensure the contact form functionality operates correctly
* [Slack](https://slack.com/intl/en-gb/) - An online instant messaging program used for site feedback and guidance from the [Code Institute](https://codeinstitute.net/) community

## Libraries

- ***React.js*** : A JavaScript library for creating user interfaces. This library / framework improved user experience greatly. The React library renders content faster for improved load times for the user, and because of the reuse of components, more content was developed in a shorter amount of time, which meant more features were available to the site users by the project deadline.
- ***Axios*** : A promise based HTTP client for the browser and node.js
- ***Jwt-decode*** : A small browser library that helps decoding JWTs token which are Base64Url encoded
- ***React-boostrap*** : An open-source css framework components built with React
- ***React-dom*** : An entry point to the DOM and server renderers for React
- ***React-router-dom*** : Contains bindings for using React Router in web applications
- ***react-scripts*** : Scripts and configuration used by Create React App
- ***web-vitals*** : A modular library for measuring all the web vitals metrics on real users
- ***Eslint*** : A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- ***Eslint-plugin-react*** : React specific linting rules for eslint
- ***dayjs*** : A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- ***Helmet & HelmetProvider*** : Components from ‘react-helmet-async’ for managing changes to the document head.
- ***Toast*** : A notification library from ‘react-toastify’ for displaying customizable toast messages.
- ***ReactTyped*** : A React component for creating animated typing effects using ‘react-typed’.

# Deployment

This section is a written guide on how to deploy a front-end React application to Heroku.

## Project Deployment via Heroku

1. Go to [GitHub](https://github.com/)

2. A new repository was created using 'Code-Instutute-Org/ci-full-template'

3. A meaningful name was given to my new repository and I selected 'Create Repository'

4. inside the created repo select the 'Code' button above the file list on the right hand side

5. Ensure HTTPS is selected and click the clipboard on the right of the URL to copy it

6. Open VS-code, creat new project folder, open the terminal, On the terminal type "git clone", then paste the copied url and press 'Enter'

7. One the repo cloned, run the terminal command `npx create-react-app . --use-npm` to install React

8. After it has finished installing run the command `npm start` to check the app is working

9. Add a Procfile in the root directory

10. Add the following code into the Procfile - `web: serve -s build`

11. In the root package.json file in the scripts section, add the following code - `"heroku-prebuild": "npm install -g serve"`

12. Version control was used throughout the project using the following commands in the terminal:

    - git add . OR git add "file name" - to stage the changes and get them ready for being committed to the local repo
    - git commit -m "Description of the update" - to save the change and commit the change to the local repo
    - git push origin main - to push all committed changes to the GitHub repo

13. Log-in or sign-up to [Heroku](https://dashboard.heroku.com/) and open the dashboard

14. Click on the 'New' button to add a new app

15. Name the app (it must be unique) and choose a region closest to your location

16. Click the 'Create app' button to create the app

17. Once the app is created, click the deploy tab on the app menu

18. Scroll down to deployment method and click the GitHub option

19. Make sure your profile is selected and search for the React GitHub repository name

20. Once the correct repository appears below the searchbar - click the 'Connect' button

21. Once the repository is connected, click the 'Deploy branch' button - make sure the master / main branch is selected

22. Optional - view the build logs as the app builds

23. If the build is successful, click the 'Open app' button to view the deployed app on Heroku

## Forking

1. Go to [the Front-end repository](https://github.com/alakeldev/frontend-techplaza-pp5).
2. In the right most top menu, click the "Fork" button.
3. There will now be a copy of the repository in your own GitHub account.
4. Go to [the Back-end repository](https://github.com/alakeldev/backend-techplaza-pp5) and repeat the process.

## Cloning-the-project-repositories

1. Go to the following Front-end repository on GitHub: <https://github.com/alakeldev/frontend-techplaza-pp5>.
2. At the top right of the screen, click the 'Code' button, and then click 'HTTPs'.
3. Copy the link in this field.
4. Open VS-code, creat new project folder, open the terminal.
5. On the terminal type "git clone", then paste the copied url and press 'Enter'.
6. The clone process should now begin.
7. Go to [the Back-end repository](https://github.com/alakeldev/backend-techplaza-pp5) and repeat the process.

# Credits

In this final section, I would like to credit the various sources that were used throughout the development of the Techplaza project.

- [Code-Institute-Curriculum](https://codeinstitute.net/de/) - Full Stack Software Development Curriculum.
- [React-Bootstrap5](https://react-bootstrap.github.io/docs/getting-started/introduction) - Was my main guide while building my frontend project.
- [React-Bootstrap5-CheatSheet](https://dev.to/jsha/cheat-sheet-for-react-bootstrap-installation-and-components-4n43) - Was fast help full source.
- [CSS-CheatSheet](https://htmlcheatsheet.com/css/) - Was a very help full source to know how target elements and set properties.
- [Open-Weather-Map-API](https://openweathermap.org/api) - Was the source to get an API key to serve my application users with the current weather status.
- [CI-Slack-Channels](https://code-institute-room.slack.com/) - I relied on the Code-Institute Slack community channels (PP5 advanced fron-tend channel) to increase my knowledge and to check for previous problems with the Heroku cloud platform and some errors that other students have faced through their PP5.
- [Stackoverflow](https://stackoverflow.com/) - Was used to check and read about any bug and error faced me during my project.
- [Snake-Game-React-Tutorial](https://www.youtube.com/watch?v=5a2mpSUydok) - This tutorial served as the primary reference for developing the Snake game using React components. It provided the foundational concepts, allowing for the generation of ideas without strictly adhering to the tutorial.
- [Axios-Tutorial](https://www.youtube.com/watch?v=ZEKBDXGnD4s) - This tutorial also helped me alot to know how axios worked and fetch the data from the backend.
- [Chatgpt](https://openai.com/chatgpt/) - ChatGPT was instrumental in resolving numerous errors that I couldn’t address through Stack Overflow or various articles.

## Content

- The displayed text used in the Services and About pages was generated with the assistance of ChatGPT.
- My mentor at Code Institute Martina provided much appreciated guidance on application features and content.

## Media

- All images featured on our website, including those on the Home, About, Services, Dashboard, and Applications pages, have been sourced free from [Pexels](https://www.pexels.com/) platform.

# Acknowledgements

This application represents the culmination of my studies in the Code Institute’s Higher National Diploma in Software Development. Over the past year, I have undertaken five significant projects, each contributing to a comprehensive and rigorous learning experience. The journey has been both challenging and immensely rewarding, and I am deeply grateful to the Code Institute for facilitating my return to education. The knowledge and skills I have acquired have far exceeded my expectations, and I have developed a profound passion for my career and the technology sector.

I would like to extend my heartfelt gratitude to everyone who has supported and encouraged me throughout this year. Despite the challenges, I would not change a thing. My sincere thanks go to the Code Institute for their unwavering support.
I am especially grateful to my mentor Martina for her invaluable guidance and advice on my final project.
Additionally, I appreciate the Slack community for their support and for providing a space where I could express my frustrations in a compassionate and understanding environment.

Warm regards and happy coding,

Abdullah Alakel

[Back to top](<#contents>)
