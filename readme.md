# Entertainment App
The Entertainment App is a user-friendly platform designed for movie and TV series enthusiasts. It allows users to explore trending content, search for their favorite titles, and bookmark their preferred movies and TV shows for quick access. The app ensures an immersive experience with a clean UI and personalized functionality.


## Deployment

- **Frontend:** :-   https://entertainment-app-abhi.netlify.app/


## Important Links

- API Documentation : 
- Video Explanation: h
- Database Design: 
- Best Practices : 

## 📄 Features:
# Home Page
Displays trending and recent movies/TV series in an organized grid.
Search bar to find movies or TV series by title.
# Movies Page
Dedicated to showcasing a diverse catalog of movies across various genres.
Clicking on a movie card directs users to detailed information about the movie.
# TV Series Page
Focuses on an extensive collection of TV series, catering to fans of all genres.
Users can view detailed information about a selected TV series.
# Bookmarks Page
Allows users to bookmark their favorite movies and TV series.
Provides quick access to a personalized entertainment library.
##  Authentication
# Sign-Up Page: Enables new users to register for an account (profile image optional).
# Login Page: Allows returning users to securely log in and access their bookmarks.


## 🛠️ Tools and Technologies:
Frontend: HTML, CSS, Tailwind CSS, React, Redux Toolkit.
Backend: Node.js, Express.js, MongoDB.
API Integration: TMDB API for fetching movie and TV series data.
This app is designed to provide a seamless and enjoyable entertainment browsing experience, making it easy for users to find, bookmark, and explore their favorite content. 🌟


## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB instance (local or remote)
- TMDB API key for fetching media data

## Getting Started For Backend

### Backend Setup

1.  **Clone the Repository:** Start by cloning the Entertainment App repository to your local machine.

    ```sh
    git clone https://github.com/yourusername/entertainment-app.git
    ```

2.  **Navigate to the Backend Directory:** Move into the backend directory of the project.

    ```sh
    cd entertainment-web-app/backend
    ```

3.  **Install Dependencies:** Install the necessary dependencies using npm.

    ```sh
    npm install
    ```

4.  **Configure Environment Variables:** Create a `.env` file based on the provided `.env.example` file. Provide your MongoDB URI and TMDB API key in the `.env` file.

    ```
    MONGODB_URL= "Mongodb connection string our url "
    TOKEN= "Secret token for authentication & cookies"
    NODE_ENV="Current environment - Development or Production"
    TMDB_KEY="TMDB api key "
    FRONTEND_URL="Frontend url"
    ```

5.  **Start the Server:** Run the backend server.

    ```sh
    node index.js
    ```

6.  **Verify Backend Setup:** Confirm that the backend server is running without any errors.

### Backend Technologies
- Node js 
- Express js
- jsonwebtoken
- bcrypt
- MongoDB 
- Mongoose 
- dotenv
- cors
- cookie-parser

### Backend Project Structure

- **Constant:** Contains TMDB api end points
- **Controllers:** Contains logic for handling API requests.
- **Middleware:** Includes middleware for authentication.
- **Models:** Defines the schema for database collections.
- **Routes:** API routes for handling requests to different endpoints.
- **Utils:** Containers Helper Function to fetch media & to generate cookie.

<pre>
|-- src
    |-- constants 
        |-- media.constant.js
    |-- controllers
        |-- bookmark.controllers.js 
        |-- media.controllers.js 
        |-- mediaDetail.controllers.js 
        |-- mediaImage.controllers.js 
        |-- mediaSearch.controllers.js 
        |-- user.controller.js
    |-- middleware
        |-- auth.js 
    |-- models 
        |-- bookmark.models.js 
        |-- user.models.js 
    |-- routes 
        |-- bookmark.routes.js 
        |-- media.routes.js 
        |-- user.routes.js 
    |-- utils
        |-- media.utils.js 
        |-- user.utils.js 
    |-- app.js 
|-- .env
|-- .gitignore
|-- index.js
|-- package.json
|-- package-lock.json
</pre>

## Getting Started For Frontend

### Frontend Setup

1. **Navigate to the Frontend Directory:** Move into the frontend directory of the project.

   ```sh
   cd entertainment-web-app/frontend
   ```

2. **Install Dependencies:** Install the necessary dependencies using npm.

   ```sh
   npm install
   ```

3. **Configure Base Url or API end points :** This is our api endpoins, comming from backend

   ```
   const baseUrl = "Enter Your own backend api endpoints", 
   ```

4. **Start the Application:** Run the frontend application.

   ```sh
   npm run dev
   ```

5. **Access the Application:** Open your web browser and navigate to the specified URL (default: http://localhost:5173) to access the Entertainment App.

### Frontend Technologies 

- Vite
- Npm
- HTML
- CSS
- Tailwind CSS
- React.js
- React Query
- Javascript
- Context API
- React hook 
- React Loader Spinner

### Frontend Project Structure

- **Assets:** Contains dummy image .
- **Components:** Reusable components code .
- **Context:** State mangement accross applicaton for authenticatin & bookmark.
- **Pages:** Five main pages, Home, Movie, Tv, Bookmark, Profile.
- **Utils:** Contains baseUrl of api & function to fetch media

<pre>
|-- src
    |-- assets 
    |-- components
        |-- AuthComponents 
            |-- Login.jsx 
            |-- Logout.jsx 
            |-- Register.jsx 
        |-- CssComponents
            |-- Navbar.jsx
            |-- Toast.jsx
        |-- HomeMedia
            |-- HomePageVideo.jsx
            |-- ShowVideo.jsx
            |-- MediaRecommend.jsx
            |-- MediaTrending.jsx
        |-- MediaComponents
            |-- Media.jsx
            |-- MediaBookmark.jsx
            |-- MediaBookmarked.jsx 
            |-- MediaImage.jsx
            |-- MediaInfo.jsx
            |-- MediaPlay.jsx
        |-- MediaDetails
            |-- Details.jsx
            |-- MediaCast.jsx
            |-- MediaGenre.jsx 
            |-- MediaHeading.jsx
            |-- MediaImage.jsx
            |-- MediaInfo.jsx
            |-- MediaLink.jsx
            |-- MediaRatings.jsx
            |-- MediaSynopsis.jsx
        |-- ShimmerUi
            |-- ShimmerUi.jsx
            |-- ShimmerUiDetailsPage.jsx
            |-- ShimmerUiHomePage.jsx
        |-- Error404.jsx
        |-- Header.jsx
        |-- MoreMedia.jsx
        |-- SearchBar.jsx
        |-- SearchResult.jsx
    |-- context
        |-- MyContext.js
        |-- MyState.js  
    |-- pages
        |-- Bookmarks.jsx 
        |-- Home.jsx 
        |-- Movie.jsx 
        |-- Profile.jsx 
        |-- Tv.jsx  
    |-- utils 
        |-- baseUrl.js 
        |-- fetchMultiMedia.js
    |-- App.jsx 
    |-- main.jsx 
|-- .eslintrc.cjs
|--.gitignore
|-- index.css 
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.cofig.js
|-- vite.config.js 
</pre>

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.


## Thank You 
