import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Book.css';
import './Footer.css';

export default function Book() {
  return (
    <div>
        <Navbar />
        <div class="container">
            <div class="Book">
                <img src="./One_piece_tome_1.jpg" alt=""/>
            </div>
            <div>
                <div class="Name">
                    <div>
                    <div class="title-and-author">
                        <p class="title"></p>
                        <p class="author"></p>
                    </div>
                    <div class="rating">
                        <p class="note">Note : /10</p>
                    </div>
                    </div>
                        <div class="emprunter">
                            <button id="reserveButton" data-id="{{book.Id_Book}}" type="button">Emprunter</button>
                        </div>
                </div>
                <div class="resume">
                    <p></p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

