import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './E-books.css';

export default function E_books() {
  return (
    <div>
        <Navbar />
        <div class="container">
                <div class="filters">
                    <ul class="genre">
                        <h3>Genres</h3>
                        <div class="list">
                            <li><a href="/e-book-connected">Tous</a></li>
                        </div>
                        <div class="list">
                            <li><a href="/e-book-connected/genre/{{this.Genre_Name}}"></a></li>
                        </div>
                    </ul>
                    <ul class="author">
                        <h3>Auteurs</h3>
                        <div class="list">
                            <li><a href="/e-book-connected">Tous</a></li>
                        </div>
                        <div class="list">
                            <li><a href="/e-book-connected/author/{{this.Author_Name}}"></a></li>
                        </div>
                    </ul>
                </div>
                <div class="eBooks">
                        <div class="Book">
                            <a href="/book-connected/{{this.Id_Book}}"><img src="./One_piece_tome_1.jpg" alt="Image Livre"></img></a>
                        </div>
                </div>
        </div>
        <Footer />
    </div>
  );
}
