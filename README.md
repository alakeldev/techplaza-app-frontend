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
    - [Not Found Page](<#Not-Found-Page>)
  - [Additional Features](<#Additional-Features>)
    - [Dashboard CRUD Account Features](<#Dashboard-CRUD-Account-Features>)
    - [Weather App Dispalying Results](<#Weather-App-Dispalying-Results>)
    - [Tasks Manager App CRUD Features](<#Tasks-Manager-App-CRUD-Features>)
    - [Snake Game MVP board Feature](<#Snake-Game-MVP-board-Feature>)
    - [Cards App CRUD Features](<#Cards-App-CRUD-Features>)
  - [**Future Features**](<#future-features>)
- [**Components**](<#components>)
  * [Footer](<#footer>)
  * [Homepage Hero](<#homepage-hero>)
* [**Testing**](<#testing>)
  * [**Validator Tests**](<#validator-tests>)
    * [W3C (HTML)](<#w3c-html>)
    * [W3C (CSS)](<#w3c-css>)
    * [ESLint (JavaScript)](<#eslint-javascript>)
  * [**Additional Tests**](<#additional-tests>)
    * [Manual Tests](<#manual-tests>)
    * [Input Validation Tests](<#input-validation-tests>)
    * [Automated Tests](<#automated-tests>)
    * [Responsive Tests](<#responsive-tests>)
    * [Browser Tests](<#browser-tests>)
    * [Lighthouse Tests](<#lighthouse-tests>)
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

These future features aim to make Techplaza even more versatile and user-friendly, ensuring it remains a valuable resource for all users.

## Components

# Testing

## Validator Tests

### W3C HTML

### W3C CSS

### ESLint Javascript

## Additional Tests

### Manual Tests

Here you will find a comprehensive list of all the manual tests that were carried out on the Gear Addict front-end interface.

| Status | **Home Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Hottest rigs displays four rigs
| &check; | Hottest rigs displays rigs ordered by most liked
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | All links work correctly and navigate to the correct page

[Back to top](<#contents>)

| Status | **Navbar**
|:-------:|:--------|
| &check; | Content is responsive
| &check; | Current page displays active class
| &check; | Logged-in nav items are displayed correctly to logged-in users
| &check; | Logged-out nav items are displayed correctly to logged-out users
| &check; | Profile image and link is correct to current authenticated user
| &check; | All links work correctly and navigate to the correct page
| &check; | Mobile menu is displayed on small screens
| &check; | Mobile nav menu opens and closes correctly
| &check; | Mobile menu is closed when a user clicks away
| &check; | Mobile menu is closed when a user clicks a nav link
| &check; | Mobile menu nav toggle menu button opens and closes the mobile menu
| &check; | Nav items change styling on hover

[Back to top](<#contents>)

| Status | **Footer**
|:-------:|:--------|
| &check; | Content is responsive
| &check; | Current page displays active class
| &check; | Logged-in nav items are displayed correctly to logged-in users
| &check; | Logged-out nav items are displayed correctly to logged-out users
| &check; | All links work correctly and navigate to the correct page
| &check; | Nav items change styling on hover

[Back to top](<#contents>)

| Status | **Latest Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | All links work correctly and navigate to the correct page
| &check; | Search functionality is working
| &check; | Rigs are ordered from newest to oldest
| &check; | Rigs list infinite scroll functionality is working
| &check; | Correct content is displayed on rig cards
| &check; | Like / unlike functionality is working
| &check; | Save / unsave functionality is working
| &check; | Rig links link to correct rigs
| &check; | Profile links link to correct profiles
| &check; | No results found is displayed when there are no rigs in the list

[Back to top](<#contents>)

| Status | **Feed Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | All links work correctly and navigate to the correct page
| &check; | Search functionality is working
| &check; | Rigs list infinite scroll functionality is working
| &check; | Correct content is displayed on rig cards
| &check; | Like / unlike functionality is working
| &check; | Save / unsave functionality is working
| &check; | Rig links link to correct rigs
| &check; | Profile links link to correct profiles
| &check; | Becoming a fan of a user adds their rigs to the feed page
| &check; | Unfanning a user removes their rigs from the feed page
| &check; | No results found is displayed when there are no rigs in the list

[Back to top](<#contents>)

| Status | **Gear Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Search functionality is working
| &check; | Gear list infinite scroll functionality is working
| &check; | Users can only see gear that is owned by them
| &check; | Correct content is displayed on gear cards
| &check; | Delete functionality is working
| &check; | The edit button redirects the user to the correct edit gear page
| &check; | Dropdown menu functionality is working
| &check; | No results found is displayed when there is no gear in the list
| &check; | Category badge displays correctly
| &check; | Gear status badges display correctly

[Back to top](<#contents>)

| Status | **Rigs Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Search functionality is working
| &check; | Rig list infinite scroll functionality is working
| &check; | Users can only see rigs that are owned by them
| &check; | Correct content is displayed on rig cards
| &check; | Like / Save buttons are not visible
| &check; | No results found is displayed when there are no rigs in the list
| &check; | Rig links link to correct rigs

[Back to top](<#contents>)

| Status | **Saved Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Search functionality is working
| &check; | Rigs list infinite scroll functionality is working
| &check; | Correct content is displayed on rig cards
| &check; | Like / unlike functionality is working
| &check; | Save / unsave functionality is working
| &check; | Saving a rig adds it to the list
| &check; | Unsaving a rig removes it from the list
| &check; | Users can only see their own saved rigs
| &check; | Rig links link to correct rigs
| &check; | Profile links link to correct profiles
| &check; | No results found is displayed when there are no rigs in the list

[Back to top](<#contents>)

| Status | **Profile Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page dropdown menu is only visible to authenticated users who own the profile
| &check; | Profile edit button redirects the user to the profile edit page
| &check; | Username edit button redirects the user to the username edit page
| &check; | Password edit button redirects the user to the password edit page
| &check; | User profile content is displaying correctly
| &check; | Updated profile content is displaying correctly
| &check; | Content is responsive
| &check; | Search functionality is working
| &check; | Rigs list infinite scroll functionality is working
| &check; | Correct content is displayed on rig cards
| &check; | Like / unlike functionality is working
| &check; | Save / unsave functionality is working
| &check; | Rig links link to correct rigs
| &check; | Profile links like to correct profiles
| &check; | Fan count is correct
| &check; | Idol count is correct
| &check; | Rig count is correct
| &check; | Gear count is correct
| &check; | Fan and idol counts increment correctly when becoming a fan and unfanning another user
| &check; | Popular profiles is displaying correctly
| &check; | Fan button is not displayed on the users own profile or on popular profiles
| &check; | Fan button is working correctly
| &check; | Unfan button is working correctly

[Back to top](<#contents>)

| Status | **Sign In Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to non-authenticated users
| &check; | Authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission signs the user in successfully and redirects the user back to their previous page
| &check; | Sign up link redirects the user to the sign up page

[Back to top](<#contents>)

| Status | **Sign Up Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to non-authenticated users
| &check; | Authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission saves the users details and redirects the user to the sign in page
| &check; | Sign in link redirects the user to the sign in page

[Back to top](<#contents>)

| Status | **Sign Out**
|:-------:|:--------|
| &check; | The sign-out button link is displayed on both site navs
| &check; | The sign-out button is only displayed to authenticated users
| &check; | Sign out functionality works correctly
| &check; | On successful sign out the user is redirected to the home page

[Back to top](<#contents>)

| Status | **Add Gear Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission creates a new instance of gear and redirects the user to the gear page
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted
| &check; | Blank fields are handled correctly

[Back to top](<#contents>)

| Status | **Add Rig Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Page is only visible to authenticated users
| &check; | Non-authenticated users are redirected to the home page
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission creates a new instance of rig and redirects the user to the rig details page
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted
| &check; | Blank fields are handled correctly


| Status | **Rig Detail Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Image gallery is working correctly
| &check; | Dropdown menu is only displayed to authenticated users who own the rig
| &check; | Edit rig button redirects user to correct edit rig page
| &check; | Rig delete button deletes the rig and redirects the user to the last page they were on
| &check; | Profile link links to correct profile
| &check; | No comments yet message displays when there are no comments
| &check; | Comment form only displays to authenticated users
| &check; | A list of comments ordered from newest to oldest appears in a list on the correct rig
| &check; | Comment is assigned to correct user
| &check; | Comment form field handles change correctly
| &check; | Comment field input errors are displayed to the user
| &check; | Successful comment submission creates a new comment which appears at the top of the comment list
| &check; | The post button submits the comment
| &check; | The comment dropdown menu is only visible to users who are authenticated and own the comment
| &check; | The comment edit button opens the edit comment form
| &check; | The comment delete button deletes the comment and re-renders the comment list with the comment removed

| Status | **Edit Gear Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the gear
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields are pre-populated with the correct instance of gear
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct instance of gear and returns the user to the gear page
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted
| &check; | Blank fields are handled correctly
| &check; | All fields that aren't changed remain the same
| &check; | Updating the image field changes the image


| Status | **Edit Rig Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the rig
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields are pre-populated with the correct instance of rig
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct instance of rig and returns the user to the rig details page
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted
| &check; | Blank fields are handled correctly
| &check; | All fields that aren't changed remain the same
| &check; | Updating the image fields changes the images

| Status | **Delete Gear**
|:-------:|:--------|
| &check; | The delete button is only visible in the gear dropdown menu to authenticated users who own the gear
| &check; | Clicking the delete button deletes the correct instance of gear and re-renders the gear list with the gear removed

[Back to top](<#contents>)

| Status | **Delete Rig**
|:-------:|:--------|
| &check; | The delete button is only visible in the rig dropdown menu to authenticated users who own the rig
| &check; | Clicking the delete button deletes the correct instance of rig and redirects the user to the last page they were on

[Back to top](<#contents>)

| Status | **Edit Profile Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the profile
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields are pre-populated with the correct user profile
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct user profile and returns the user to the last page they were on
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted
| &check; | Blank fields are handled correctly
| &check; | All fields that aren't changed remain the same
| &check; | Updating the image fields changes the images
| &check; | Updated profile details are immediately reflected on the user profile page

[Back to top](<#contents>)

| Status | **Edit Username Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the profile
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields are pre-populated with the correct user profile username
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct user profile username and returns the user to the last page they were on
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted
| &check; | Blank fields are handled correctly
| &check; | All fields that aren't changed remain the same
| &check; | Updated profile usernames are immediately reflected on the user profile page

[Back to top](<#contents>)

| Status | **Edit Password Page**
|:-------:|:--------|
| &check; | Page has correct URL
| &check; | Content is displaying correctly
| &check; | Content is responsive
| &check; | Page is only visible to authenticated users who own the profile
| &check; | Non-authenticated users are redirected to the home page
| &check; | Form fields handle change correctly
| &check; | Field input errors are displayed to the user
| &check; | Successful submission updates the correct user password and returns the user to the last page they were on
| &check; | The cancel button redirects the user to the last page they were on
| &check; | The submit button submits the form
| &check; | All fields are successfully submitted
| &check; | Blank fields are handled correctly

[Back to top](<#contents>)

| Status | **404 Page**
|:-------:|:--------|
| &check; | The 404 page is triggered by an incorrect site URL
| &check; | Content is displaying correctly
| &check; | Content is responsive

[Back to top](<#contents>)

| Status | **Search Functionality**
|:-------:|:--------|
| &check; | Rigs can be searched for usernames
| &check; | Rigs can be searched for categories
| &check; | Rigs can be searched for attributes
| &check; | Rigs can be searched for genres
| &check; | Rigs can be searched for rig names
| &check; | Gear can be searched for gear names
| &check; | Gear can be searched for categories
| &check; | Gear can be searched for brands
| &check; | Gear can be searched for models
| &check; | Gear can be searched for descriptions

[Back to top](<#contents>)

| Status | **Like / Unlike**
|:-------:|:--------|
| &check; | When a rig is liked the like button is hidden and the unlike button appears
| &check; | When a rig is unliked the unlike button is hidden and the like button appears
| &check; | Liking a rig adds one to the rig like count
| &check; | Unliking a rig subtracts one from the rig like count
| &check; | Like and unlike buttons are only visible to authenticated users
| &check; | Like and unlike buttons are hidden on rigs that are owned by the authenticated user

[Back to top](<#contents>)

| Status | **Save / Unsave**
|:-------:|:--------|
| &check; | When a rig is saved the save button is hidden and the unsave button appears
| &check; | When a rig is unsaved the unsave button is hidden and the save button appears
| &check; | Saving a rig adds one to the rig star count
| &check; | Unsaving a rig subtracts one from the rig star count
| &check; | Save and unsave buttons are only visible to authenticated users
| &check; | Save and unsave buttons are hidden on rigs that are owned by the authenticated user
| &check; | Saving a rig adds it to the users saved list
| &check; | Unsaving a rig removes it from the users saved list

[Back to top](<#contents>)

### Input Validation Tests

This section will detail the input validation tests carried out on the Gear Addict application.

| Status | **Sign In Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a username
| &check; | Form cannot be submitted without a password

[Back to top](<#contents>)

| Status | **Sign Up Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a username
| &check; | Form cannot be submitted without a password
| &check; | Form cannot be submitted without confirming password
| &check; | Username cannot be over 30 characters in length
| &check; | Form cannot be submitted without matching password fields

[Back to top](<#contents>)

| Status | **Add Rig Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a rig name
| &check; | Rig name cannot be over 50 characters in length
| &check; | Form cannot be submitted without a category
| &check; | Form cannot be submitted without a budget
| &check; | Form cannot be submitted without an attribute 1
| &check; | Form cannot be submitted without a genre 1
| &check; | Form cannot be submitted without a description

[Back to top](<#contents>)

| Status | **Edit Rig Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a rig name
| &check; | Rig name cannot be over 50 characters in length
| &check; | Form cannot be submitted without a category
| &check; | Form cannot be submitted without a budget
| &check; | Form cannot be submitted without an attribute 1
| &check; | Form cannot be submitted without a genre 1
| &check; | Form cannot be submitted without a description

[Back to top](<#contents>)

| Status | **Add Gear Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a gear name
| &check; | Gear name cannot be over 50 characters in length
| &check; | Form cannot be submitted without a category
| &check; | Form cannot be submitted without a value
| &check; | Value cannot be less than or equal to zero

[Back to top](<#contents>)

| Status | **Edit Gear Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a gear name
| &check; | Gear name cannot be over 50 characters in length
| &check; | Form cannot be submitted without a category
| &check; | Form cannot be submitted without a value
| &check; | Value cannot be less than or equal to zero

[Back to top](<#contents>)

| Status | **Edit Profile Form**
|:-------:|:--------|
| &check; | Name cannot be over 20 characters in length
| &check; | Location cannot be over 30 characters in length

[Back to top](<#contents>)

| Status | **Edit Username Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a username
| &check; | Username cannot be over 30 characters in length

[Back to top](<#contents>)

| Status | **Edit Password Form**
|:-------:|:--------|
| &check; | Form cannot be submitted without a password
| &check; | Form cannot be submitted without confirming password
| &check; | Form cannot be submitted without matching password fields

[Back to top](<#contents>)

| Status | **Add Comment Form**
|:-------:|:--------|
| &check; | Form cannot be submitted if the content field is empty

[Back to top](<#contents>)

| Status | **Edit Comment Form**
|:-------:|:--------|
| &check; | Form cannot be submitted if the content field is empty

[Back to top](<#contents>)

### Automated Tests

Automated tests were run on the Gear Addict project using the [Jest Dom Testing Library](https://testing-library.com/docs/ecosystem-jest-dom/). Both the nav bar and footer components were tested to check that they were rendering the correct elements for logged in and logged out users. Details of the tests and a link to the test directory can be found below.

| Status | **Nav Bar Tests**
|:-------:|:--------|
| &check; | Renders sign in link
| &check; | Renders sign up link
| &check; | Renders latest link
| &check; | Renders home link
| &check; | Renders link to gear page for logged in user
| &check; | Renders link to rig page for logged in user
| &check; | Renders link to feed page for logged in user
| &check; | Renders link to saved page for logged in user
| &check; | Renders sign in and sign up buttons again on user log out

[Back to top](<#contents>)

| Status | **Footer Tests**
|:-------:|:--------|
| &check; | Renders sign in link
| &check; | Renders sign up link
| &check; | Renders latest link
| &check; | Renders home link
| &check; | Renders link to gear page for logged in user
| &check; | Renders link to rig page for logged in user
| &check; | Renders link to feed page for logged in user
| &check; | Renders link to saved page for logged in user
| &check; | Renders sign in and sign up buttons again on user log out

[Click this link to view the testing directory](https://github.com/Matthew-Hurrell/gear-addict/tree/main/src/components/__tests__)

[Back to top](<#contents>)

### Responsive Tests

Gear Addict has been tested on a diverse range of different devices and screen sizes to test for style and layout issues. Manual responsive tests were carried out using [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/), [Responsive Design Checker](https://responsivedesignchecker.com/) and [Am I Responsive](https://ui.dev/amiresponsive) as well as on a number of physical devices. All device screen sizes were tested on Chrome Dev Tools as well as Responsive Design Checker and no issues were found.

| Status | **Chrome Dev Tools**
|:-------:|:--------|
| &check; | iPhone SE
| &check; | iPhone XR
| &check; | iPhone 12 Pro
| &check; | Pixel 5
| &check; | Samsung Galaxy S8+
| &check; | Samsung Galaxy S20 Ultra
| &check; | iPad Air
| &check; | iPad Mini
| &check; | Surface Pro 7
| &check; | Surface Duo
| &check; | Galaxy Fold
| &check; | Samsung Galaxy A51/71
| &check; | Nest Hub
| &check; | Nest Hub Max
| &check; | iPhone 6/7/8
| &check; | Responsive mode

[Back to top](<#contents>)

| Status | **Responsive Design Checker**
|:-------:|:--------|
| &check; | 24" Desktop
| &check; | 23" Desktop
| &check; | 22" Desktop
| &check; | 20" Desktop
| &check; | 19" Desktop
| &check; | 15" Desktop
| &check; | 13" Notebook
| &check; | 10" Notebook
| &check; | Apple iPad Mini
| &check; | Apple iPad Retina
| &check; | Apple iPad Pro
| &check; | Amazon Kindle Fire
| &check; | Amazon Kindle Fire HD
| &check; | Asus Eee 1000
| &check; | Nexus 7
| &check; | Nexus 9
| &check; | Samsung Galaxy Tab 10
| &check; | Apple iPhone 3/4/4s
| &check; | Apple iPhone 5/5s
| &check; | Apple iPhone 6/6s/7
| &check; | Apple iPhone 6s Plus/7 Plus
| &check; | Samsung Galaxy S5/S6/S7
| &check; | Sony Xperia Z2/Z3
| &check; | Google Pixel
| &check; | Nexus 4
| &check; | Nexus 5
| &check; | Nexus 6

### Browser Tests


### Lighthouse Tests

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

* [GitHub](https://github.com/) - An internet hosting service used for version control. Used to host the Gear Addict repositories and for the project board used for project management and user stories
* [VScode](https://www.gitpod.io/) - IDE to write code, create new files and folders for my project before pushing the project to Github.
- [Git](https://git-scm.com/) - Provided the version control system for the site.
* [Heroku](https://dashboard.heroku.com/) - A cloud platform used to host the Gear Addict application
* [Draw.io](https://app.diagrams.net/) - An online diagram software used for the database schemas
* [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - A set of web developer tools built directly into the chrome browser. Used for responsiveness tests and further testing.
* [Google Fonts](https://fonts.google.com/) - A web based font service by Google used to supply the site typography
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - An open source automated testing tool used for site tests
* [Responsive Design Checker](https://responsivedesignchecker.com/) - An online testing tool used for responsive site testing
* [Am I Responsive](https://ui.dev/amiresponsive) - An online testing tool used for responsive site testing
* [Colour Contrast Checker](https://colourcontrast.cc/) - An online tool used to test background and text colour contrast
* [Font Awesome](https://fontawesome.com/) - A font and icon toolkit used for the Gear Addict icons
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

2. A new repository was created using 'Code-Instutute-Org/ci-full-template'.

3. A meaningful name was given to my new repository and I selected 'Create Repository'.

4. inside the created repo select the 'Code' button above the file list on the right hand side.

5. Ensure HTTPS is selected and click the clipboard on the right of the URL to copy it.

6. Open VS-code, creat new project folder, open the terminal, On the terminal type "git clone", then paste the copied url and press 'Enter'.

7. One the repo cloned, run the terminal command `npx create-react-app . --use-npm` to install React

8. After it has finished installing run the command `npm start` to check the app is working

9. Add a Procfile in the root directory

10. Add the following code into the Procfile - `web: serve -s build`

11. In the root package.json file in the scripts section, add the following code - `"heroku-prebuild": "npm install -g serve"`

12. Version control was used throughout the project using the following commands in the terminal:

    - git add . OR git add "file name" - to stage the changes and get them ready for being committed to the local repo.
    - git commit -m "Description of the update" - to save the change and commit the change to the local repo
    - git push origin main - to push all committed changes to the GitHub repo.

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
