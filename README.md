```markdown
# Fetch API Using Axios

A simple guide on how to fetch data from an API in a React component using Axios.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Fetching API Data in a React Component](#fetching-api-data-in-a-react-component)
- [Conclusion](#conclusion)

## Introduction

In the world of modern web development, integrating data from external sources is a common requirement. When building React applications, Axios stands out as a versatile and easy-to-use library for making HTTP requests to fetch data from APIs. In this guide, we will walk you through the process of fetching data from an API and displaying it in a React component using Axios.

## Prerequisites

Before you begin, ensure you have the following prerequisites in place:

1. **Node.js**: If you're working with React, you probably already have Node.js installed. If not, download and install it from the official [Node.js website](https://nodejs.org/).

2. **React**: Ensure that you have a React application set up. If not, you can create one using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

3. **Axios**: Axios must be included in your project. You can install it via npm or yarn:

   ```bash
   npm install axios
   # or
   yarn add axios
   ```

4. **API Endpoint**: Identify the API you want to fetch data from and obtain its URL.

## Fetching API Data in a React Component

Now, let's walk through the steps to fetch data from an API and display it in a React component using Axios:

### Step 1: Import Axios

In your React component file, start by importing Axios:

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
```

### Step 2: Initialize State

Use the `useState` hook to initialize a state variable where you will store the fetched data. Here, we'll call it `userdata`:

```jsx
const FetchApi = () => {
  const [userdata, setUserData] = useState([]);
```

### Step 3: Fetch Data with Axios

Inside the `useEffect` hook, make an Axios GET request to the API endpoint. For this example, we're using the JSONPlaceholder API:

```jsx
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserData(response.data); // Update the userdata state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
```

### Step 4: Display the Data

In the component's return statement, map through the `userdata` array and render each user's information. For simplicity, we're displaying the name and username:

```jsx
  return (
    <div className="container my-4">
      <h1 className="d-flex justify-content-center">Fetching API Data Using Axios</h1>
      <hr />
      <div className="container">
        {userdata.map((data) => (
          <div key={data.id}>{data.name} - {data.username}</div>
        ))}
      </div>
    </div>
  );
};
```

### Step 5: Export the Component

Finally, export the `FetchApi` component:

```jsx
export default FetchApi;
```

## Conclusion

You've now learned how to fetch data from an API and display it in a React component using Axios. This simple example demonstrates the fundamental steps required for making API requests and handling responses in a React application. As you continue to explore Axios, you can dive deeper into advanced features like handling headers, timeouts, and interceptors, making it a versatile tool for working with APIs in React applications. Happy coding!
```

