# WEB103 Project 1, 2 & 3 - Events4U

Submitted by: Joshua Holguin

About this web app:

Events4Me is a simple listicle-style web application that helps users discover upcoming events, concerts, shows, and games. The homepage displays a list of events as interactive cards, each with a title, image, price point, and audience. Clicking Read More on any event brings the user to a detail page with the full event description, submission info, and additional details.

This project was built using Node.js/Express for the backend API and vanilla HTML, CSS, JavaScript (with PicoCSS) for the frontend. The app demonstrates routing, serving static files, dynamic DOM manipulation, and client-server interaction through JSON.

Time spent: 6 hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [✅] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [✅] **The web app displays a title**
- [✅] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [✅] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [✅] **Each detail view should be a unique endpoint, such as as `localhost:3000/bosses/crystalguardian` and `localhost:3000/mantislords`**
  - [✅] _Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation_
- [✅] **The web app serves an appropriate 404 page when no matching route is defined**
- [✅] **The web app is styled using Picocss**

  ## Project 3 Requirements:
  - [✅] **The web app uses React to display data from the API**
- [✅] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
- [✅] **The web app displays a title.**
- [✅] **Website includes a visual interface that allows users to select a location they would like to view.**
- [✅] **Each location has a detail page with its own unique URL.**

## Video Walkthrough

Here's a walkthrough of implemented required features:
![Web103 Project 3](https://github.com/user-attachments/assets/12bc7049-9f8f-4839-be3d-56dc7a58bd08)
![Web103-Lab-1](https://github.com/user-attachments/assets/bd1a0d28-98e4-4eca-97e4-28b80bf38f04)
![Web103 Project 2](https://github.com/user-attachments/assets/22673138-dd62-4414-a331-327062488972)

<!-- Recommended tools:
[Kap](https://getkap.co/
) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add:

One challenge I encountered was correctly setting up the detail page so it could display a single event. At first, linking from the homepage to the detail view caused errors (missing event.html in the server build), but I resolved this by adjusting the routing and making sure the client files were copied into the server’s public directory during the build process. Another tricky part was handling different URL formats (/event.html?id=1 in Vite dev mode vs. /events/1 in production), which I solved by writing logic that works with both query parameters and pretty URLs.

This project also gave me good practice in separating code responsibilities: one script for rendering the list (events.js) and another for rendering event details (event.js). Overall, the app helped me understand Express routing better and how to connect backend JSON data with dynamic DOM rendering on the frontend.

## License

Copyright 2025 Joshua Holguin

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
