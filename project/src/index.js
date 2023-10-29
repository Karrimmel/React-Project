import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "apropos",
        element: <h1>A propos</h1>
    }
])  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
                <RouterProvider router={route} />
            </React.StrictMode>
);


