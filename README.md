# Custom useFetch Hook
## Project Description

This project demonstrates how to create and use a custom React hook named **useFetch**. The hook is responsible for fetching data from an API and managing the loading and error states. The fetched data is then displayed in cards.By using advanced hooks properties in react we create this application .

## Features

- Custom hook (useFetch)
- Fetch data from an API
- Loading indicator
- Error handling
- Display fetched data
- Responsive card layout

## Technologies Used

- React JS
- Vite
- JavaScript
- CSS

## Folder Structure
-src{app.jsx,app.css,usefetch.js,main.jsx,index.css}

## API Used

The project uses the free JSONPlaceholder API.

https://jsonplaceholder.typicode.com/users

## How to Run the Project

1.Install the dependencies:npm install
2.Start the development server:npm run dev
3.Open your browser and visit:http://localhost:5173

## How It Works

- The `useFetch` hook accepts a URL as a parameter.
- It fetches data using the `fetch()` method.
- While the data is loading, a loading message is displayed.
- If an error occurs, an error message is shown.
- When the request is successful, the fetched user data is displayed in cards.

## React Concepts Used

- Functionall Components
- Custom Hooks
- useState Hook
- useEffect Hook
- Fetch API
- Conditional Rendering
- Array map()

## What I Learned

While buildding this project, I learned how to:
- Create a custom React hook.
- Reuse fetching logic in different components.
- Handle loading and error states.
- Fetch data from an API using fetch().
- Display API data using the map() function.
- Organize React files into separate components and hooks.
