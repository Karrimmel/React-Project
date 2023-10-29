import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Books from './Books';
import Book from './Book';
import E_books from './E-books';

const route = createBrowserRouter([
    {
        path: "/",
        element: <Books/>,
    },
    {
        path: "book",
        element: <Book />
    },
    {
        path: "e-books",
        element: <E_books />
    }
])  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
                <RouterProvider router={route} />
            </React.StrictMode>
);


