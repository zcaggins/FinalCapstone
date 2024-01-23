<script setup>
import router from '@/router';
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import ProductCard from '../components/ProductCard.vue'

let items = ref([])
let bakeryItems = ref([])
let candyItems = ref([])
let coffeeItems = ref([])
let dairyItems = ref([])
let produceItems = ref([])

function getItems() {
    fetch("http://localhost:3000/products")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            items.value.push(...data)
        })
}

getItems()
console.log(items.value)

function bakery() {
    items.value.forEach(item => {
        if (item.category == "Bakery") bakeryItems.value.push(item)
        console.log(bakeryItems.value)
    })
    // figure otu how to hide div that hold the category adn items ebfore button is clicked
    document.getElementById("bakery")
}


function candy() {
    items.value.forEach(item => {
        if (item.category == "Candy") candyItems.value.push(item)
        console.log(candyItems.value)
    })
    document.getElementById("candy")
}


function coffee() {
    items.value.forEach(item => {
        if (item.category == "Coffee") coffeeItems.value.push(item)
        console.log(coffeeItems.value)
    })
    document.getElementById("coffee")
}


function dairy() {
    items.value.forEach(item => {
        if (item.category == "Dairy") dairyItems.value.push(item)
        console.log(dairyItems.value)
    })
    document.getElementById("dairy")
    
}


function produce() {
    items.value.forEach(item => {
        if (item.category == "Produce") produceItems.value.push(item)
        console.log(produceItems.value)
    })
    document.getElementById("produce")
}


function seafood() {
    document.getElementById("nonpizza").style.display = "block";
}

function openAbout() {
    document.getElementById("about").style.width = "100%";

}
function openCart() {
    document.getElementById("cart").style.width = "0%";
}
function closeNav() {
    document.getElementById("about").style.width = "0%";
}




</script>

<template>
    <header>
        <a href="#" class="logo"><i class="fa fa-utensils"></i>ZCG</a>
        <nav class="navbar">
            <a class="active" href="./home.html">Home</a>
            <a href="#" onclick="openAbout()">About</a>
            <a href="./contact.html">Contact Us</a>
            <a class="feed" id="feedback">Feedback</a>
            <a href="#">Orders</a>
        </nav>

        <!--Search Form ends-->
    </header>

    <!--Rating Form starts-->

    <div class="back">
        <div class="container1" id="co1">
            <div class="post">
                <div class="text">Thanks for Rating us!</div>
                <div class="edit">Edit</div>
                <i class="fas fa-times" id="close"></i>

            </div>
            <div class="star-widget">
                <input type="radio" name="rate" id="rate-5">
                <label for="rate-5" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-4">
                <label for="rate-4" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-3">
                <label for="rate-3" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-2">
                <label for="rate-2" class="fas fa-star"></label>
                <input type="radio" name="rate" id="rate-1">
                <label for="rate-1" class="fas fa-star"></label>
                <form action="#">
                    <i class="fas fa-times" id="close"></i>
                    <h4></h4>
                    <div class="textarea">
                        <textarea cols="30" placeholder="Describe your experience"></textarea>

                    </div>

                    <div class="btn">
                        <button type="submit">Post</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--Rating form ends-->
    <!--side bar-->

    <nav class="sidebar">
        <div class="text">
            <a href="./ksbakers.html"><i class="fa fa-home"></i></a>
            <ul>
                <li><button class="button" @click="bakery()">Bakery</button></li>
                <li><button class="button" @click="candy()">Candy</button></li>
                <li><button class="button" @click="coffee()">Coffee</button></li>
                <li><button class="button" @click="dairy()">Dairy</button></li>
                <li><button class="button" @click="produce()">Fresh Produce</button></li>
                <li><button class="button" @click="seafood()">Meat & Seafood</button></li>


            </ul>
        </div>
    </nav>
    <!--Side bar ends-->

    <section class="home" id="home">
        <div class="barb">
            <h2><img src="https://loufoodcoop.com/wp-content/uploads/2023/04/cropped-louisville-community-grocery-white-opaque.png"
                    height="150"></h2>
            <div class="cont">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KZHlYpjlvDk?si=oUk4n7ywygEWQiz_"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
        <!-- ****display these products by category -->
        <!-- css for the product card -->
        <div class="bakery">
            <div class="category"></div>
            <ProductCard v-for="product in bakeryItems" :item="product"></ProductCard>
        </div>
        <!-- css for the product card -->
        <div class="candy">
            <div class="category"></div>
            <ProductCard v-for="product in candyItems" :item="product"></ProductCard>
        </div>
        <div class="coffee">
            <div class="category"></div>
            <ProductCard v-for="product in coffeeItems" :item="product"></ProductCard>
        </div>
        <div class="dairy">
            <div class="category"></div>
            <ProductCard v-for="product in dairyItems" :item="product"></ProductCard>
        </div>
        <div class="produce">
            <div class="category"></div>
            <ProductCard v-for="product in produceItems" :item="product"></ProductCard>
        </div>


        <!-- <div class="dairy">
        <div class="category">Dairy</div>
        <ProductCard v-for="product in dairyitems" :item="product"></ProductCard>
    </div>

    <div class="candy">
        <div class="category">Candy</div>
        <ProductCard v-for="product in candyItems" :item="product"></ProductCard>
    </div> -->
    </section>


    <section class="brd" id="bread">
        <h2 class="ks">ZGC</h2>
        <hr class="line">
        <h4>Dairy</h4>

        <div class="box">
            <img
                src="https://i5.walmartimages.com/seo/Great-Value-2-Reduced-Fat-Milk-128-Fl-Oz_22a6459a-13b6-4057-aeae-45e62c69e8f8.47f793426ff66fa6432c948d836704f0.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
            <h3>Reduced Fat Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>

            </div>
            <span>$2.99</span>
            <br>
            <button class="btn" @click="addToCart()">Add to cart </button>
        </div>


    </section>


    <div class="arrow">

        <a href="#home"><i class="fas fa-arrow-up"></i></a>
    </div>
    <div id="about" class="about">
        <a href="#" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="about-overlay">
            <h1>About Us</h1>
            <p><b>Mission Statement:</b><br>
                To build a cooperatively-owned grocery store that supports the local economy <br>by providing health,
                affordable food through just and equitable food practices, employment, and ownership.
                <br>
                <br>
                <b>Values:</b><br>
                We are community-driven, we believe in equity, accountability, and empowerment.
            </p>
        </div>
    </div>
    <!--Footer Section-->
    <footer class="footer">
        <div class="container">
            <div class="row">

                <div class="footer-col">
                    <ul>
                        <i class="fa fa-utensils"></i>
                        <span>ZCG</span>
                    </ul>
                    <div class="map">
                        <ul>
                            <i class="fa fa-map-marker"></i>
                            <span>Based in Louisville, KY
                            </span>
                        </ul>
                    </div>
                    <div class="mail">
                        <ul>
                            <i class="fas fa-inbox"></i>
                            <span>
                                zcg@zcg.com
                            </span>
                        </ul>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>ZCG</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Payment policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">My ksbakers.html</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Payment options</a></li>

                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>

                    </div>

                </div>

            </div>
        </div>


    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

:root {
    --green: green;
    --black: black;
    --light-color: #666;
    --box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .1);

}

.bakery {
    display: none
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.2s linear;
}



html {
    font-size: 62.5%;
    overflow: auto;
    scroll-padding-top: 5.5rem;
    scroll-behavior: smooth;
}

html::-webkit-scrollbar {

    display: block;
    height: 10px;
    width: 10px;

}

html::-webkit-scrollbar-track {

    border-radius: 0;
}

html::-webkit-scrollbar-thumb {
    background: rgb(158, 158, 158);
    border-radius: 5px;
}

html::-webkit-scrollbar-thumb:hover {
    background: green;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: var(--box-shadow);
}

header .logo {
    color: var(--black);
    font-size: 2.5rem;
    font-weight: bolder;
}

header .logo i {
    color: green;
}

header .navbar a {
    font-size: 1.7rem;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    color: var(--light-color);

}

header .navbar a.active,
header .navbar a:hover {
    color: #fff;
    background: green;
}

header .icons i,
header .icons a {
    cursor: pointer;
    margin: left 0.5rem;
    height: 4.5rem;
    line-height: 4.5rem;
    width: 4.5rem;
    text-align: center;
    font-size: 1.7rem;
    color: black;
    border-radius: 50%;
    background: #eee;

}

header .icons i:hover,
header .icons a:hover {
    color: #fff;
    background: green;
    transform: rotate(360deg);

}

header .icons #menu-bars {
    display: none;
}

#search-form {
    position: fixed;
    top: -110%;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1004;
    background: rgba(0, 0, 0, .8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
}

#search-form.active {
    top: 0;
}

#search-form #search-box {
    width: 50rem;
    border-bottom: .1rem solid #fff;
    padding: 1rem 0;
    color: #fff;
    font-size: 3rem;
    text-transform: none;
    background: none;
}

#search-form #search-box::placeholder {
    color: #eee;

}

#search-form #search-box::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

#search-form label {
    color: #fff;
    cursor: pointer;
    font-size: 3rem;
}

#search-form label:hover {
    color: green;

}

#search-form #close1 {
    position: absolute;
    color: #fff;
    cursor: pointer;
    top: 2rem;
    right: 3rem;
    font-size: 20px;
}


.container {
    width: 100%;
    background-color: #24262b;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: nowrap;
}

ul {
    list-style: none;
}

.footer {
    margin-left: auto;
    background: #24262b;
    padding: 70px 0;

}

.footer-col {
    width: 25%;
    height: 140px;
    padding: 0 10px;
}

.footer-col h4 {
    cursor: default;
    font-size: 13.5pt;
    font-weight: normal;
    color: green;
    padding-bottom: 10px;

}

.footer-col ul a {
    font-size: 25px;
    color: green;
}

.footer-col ul i {
    font-size: 35px;
    color: green;
}

.footer-col ul span {
    cursor: pointer;
    font-size: 35px;
    font-weight: bold;
    color: white;
}

.footer-col ul span:hover {
    color: green;
}

.map ul a {
    margin-left: 10px;
    font-size: 15px;
    color: white;
}

.footer-col .mail ul i {
    padding-top: 20px;

    font-size: 25px;
}

.footer-col .mail span {

    padding-left: 15px;
    ;
    font-size: 13px;
    font-weight: normal;
}

.footer-col .map ul i {
    padding-top: 30px;
    font-size: 25px;
}

.footer-col .map span {
    font-weight: normal;
    font-size: 13px;
    margin-left: 30px;
    margin-top: auto;
    margin-bottom: auto;
    color: white;

}

.footer-col ul li a {
    line-height: 1.6;
    font-size: 11pt;
    text-decoration: none;
    color: white;

}

.footer-col ul li a:hover {
    color: green;
}

.footer .social-links a,
.footer .social-links i {
    margin-left: 0.5rem;
    text-align: center;
    font-size: 2.4rem;
    height: 35px;
    width: 45px;
    color: white;
    border-radius: 50%;

}

.navbar .feed {
    cursor: pointer;
}


.container1 {
    position: relative;
    width: 400px;
    background: #111;
    padding: 20px 30px;
    border: 1px solid #444;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container1 .post {
    display: none;
}

.container1 .text {
    font-size: 25px;
    color: #666;
    font-weight: 500;
}

.container1 .edit {
    position: absolute;
    right: 10px;
    top: 5px;
    font: size 16px;
    color: #666;
    font-weight: 500;
    cursor: pointer;
}

.container1 .edit:hover {
    text-decoration: underline;
    color: green;
}

.container1 .star-widget input {
    display: none;
}

.star-widget label {
    font-size: 40px;
    color: #444;
    padding: 10px;
    float: right;
    transition: all 0.2s ease;
}

input:not(:checked)~label:hover,
input:not(:checked)~label:hover~label {
    color: #fd4;
}

input:checked~label {
    color: #fd4;
}

input#rate-5:checked~label {
    color: #fe7;
    text-shadow: 0 0 20px #952;
}

input#rate-4:checked~label {
    color: #fe7;
    text-shadow: 0 0 20px #952;
}

input#rate-3:checked~label {
    color: #fe7;
    text-shadow: 0 0 20px #952;
}

input#rate-2:checked~label {
    color: #fe7;
    text-shadow: 0 0 20px #952;
}

input#rate-1:checked~label {
    color: #fe7;
    text-shadow: 0 0 20px #952;
}

#rate-1:checked~form h4:before {
    content: "I just hate it😡";
}

#rate-2:checked~form h4:before {
    content: "I dont like it 😐";
}

#rate-3:checked~form h4:before {
    content: "It is awesome 😅";
}

#rate-4:checked~form h4:before {
    content: "I Just like it 😁";
}

#rate-5:checked~form h4:before {
    content: "I Just love it 😍";
}

.container1 form {
    display: none;
}

input:checked~form {
    display: block;
}

form h4 {
    width: 100%;
    font-size: 25px;
    color: #fe7;
    font-weight: 500;
    margin: 5px 0 20px 0;
    text-align: center;
    transition: all 0.2s ease;
}

form .textarea {
    height: 100px;
    width: 100%;
    overflow: hidden;
}

form .textarea textarea {
    height: 100%;
    width: 100%;
    outline: none;
    color: #eee;
    border: 1px solid #333;
    background: #222;
    padding: 10px;
    font-size: 17px;
    resize: none;
}

form .btn {
    height: 45px;
    width: 100%;
    margin: 15px 0;

}

form .btn button {
    height: 100%;
    width: 100%;
    border: 1px solid #444;
    outline: none;
    background: #222;
    color: white;
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
}

form .btn button:hover {
    background: green;
}

.icon {
    cursor: pointer;
}

#co1 {
    position: fixed;
    top: -110%;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1004;
    background: rgba(0, 0, 0, .8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
}

#co1.active {
    top: 0;
}

#co1 #feed {
    width: 50rem;
    border-bottom: .1rem solid #fff;
    padding: 1rem 0;
    color: #fff;
    font-size: 3rem;
    text-transform: none;
    background: none;
}

#co1 #feed::placeholder {
    color: #eee;

}

#co1 #feed::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

#co1 label {
    color: #fff;
    cursor: pointer;
    font-size: 3rem;
}

#co1 label:hover {
    color: green;

}

#co1 #close {
    position: absolute;
    color: #fff;
    cursor: pointer;
    top: 2rem;
    right: 3rem;
    font-size: 20px;
}

section {
    margin-left: 250px;
}

section h2 {
    margin-top: 80px;
    margin-left: 105px;
    font-size: 40px;
    display: inline-block;
}

section hr {
    border: none;
    height: 20px;
    width: 90%;
    height: 50px;
    margin-top: 0;
    border-bottom: 1px solid #1f1209;
    box-shadow: 0 20px 20px -20px #333;
    margin: -50px auto 10px;
}

#cakes {
    display: none;
}

#precakes {
    display: none;
}

#chococake {
    display: none;
}

#pastry {
    display: none;
}

#tandoori {
    display: none;
}

#sandwich {
    display: none;
}

#burger {
    display: none;
}

#bread {
    display: none;
}

#nonpizza {
    display: none;
}

section .ks {
    text-align: center;

}

.brd .box-bread .box:hover {
    transform: scale(1.1);
}

.brd .box-bread .box img {
    height: 100%;
    width: 100%;
    border-radius: 5px;

}

.brd .box-bread .box span {
    font-size: 20px;
}

.brd .box-bread {
    margin: auto;
    align-items: center;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap: 5.5rem;
}



.sidebar {
    margin-top: 65px;
    position: absolute;
    width: 200px;
    height: 100%;
    left: 0;
    background: transparent;

}

.sidebar .text {
    color: white;
    font-size: 25px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    background: white;
    letter-spacing: 1px;
}

.sidebar .text i {
    cursor: pointer;
    color: black;

}



.sidebar .text i:hover {
    color: green;
}

.sidebar ul {
    background: white;
    height: 100%;
    width: 100%;
    list-style: none;
}

.sidebar ul li {
    line-height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

}

.sidebar ul li a {
    color: black;
    text-decoration: none;
    font-size: 15px;
    padding-left: 40px;
    font-weight: 500;
    display: block;
    width: 100%;
    border-left: 3px solid transparent;
    text-align: center;

}

.sidebar ul li a:hover {
    color: green;
    background: rgb(216, 216, 216);
    border-top-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-left: 10px solid green;

}

.home {
    text-align: center;

}

.home .meh .glow {

    font-size: 80px;
    color: black;
    text-align: center;
    animation: glow 1s ease-in-out infinite alternate;


}

.home .cont {
    background: white;
    align-items: center;
    text-align: center;
}

.home .cont iframe {

    margin-top: 80px;
    margin: 0 auto;
    width: 50%;
    border: none;
    border-radius: 10px;

}

.about {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
}

.about a {
    padding: 60px;
    text-align: right;
    text-decoration: none;
    font-size: 36px;
    color: red;
    display: block;
    transition: 0.3s;
}

.about a:hover,
.about a:focus {
    color: #f1f1f1;

}

.about .closebtn {
    position: abosolute;
    top: 20px;
    right: 45px;
    font-size: 60px;

}

.about a .closebtn {
    color: white;
}

.about-overlay h1 {
    text-align: center;
    color: white;
    font-size: 45px;

}

.about-overlay p {
    text-align: center;
    font-size: 18px;
    color: white;

}

.button {

    display: inline-block;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    transition-property: background-color, border-color, color, box-shadow, filter;
    transition-duration: .3s;
    border: 1px solid transparent;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 700;
    text-align: center;
    padding: 16px 14px 18px;
    color: #fff;
    background-color: #15883e;
    height: 48px;
    padding: 10px;

    :hover {
        background-color: #1db954;
    }

}

.active {
    text-align: center;
}









































/*media queries*/

@media (max-width:991px) {
    html {
        font-size: 55%;
    }

    header {
        padding: 1rem 2rem;
    }

    section {
        padding: 1rem 2rem;
    }

    footer {
        padding: 1rem 2rem;
    }

}

@media (max-width:768px) {
    header .icons #menu-bars {
        display: inline-block;
    }

    header .navbar {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        border-top: .1rem solid rgba(0, 0, 0, .2);
        border-bottom: .1rem solid rgba(0, 0, 0, .2);
        padding: 1rem;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

    }

    header .navbar.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    header .navbar a {
        display: block;
        padding: 1.5rem;
        margin: 1rem;
        font-size: 2rem;
        background: #eee;
    }

    .footer {
        background: #24262b;
        padding: 50px 0;
    }

    .footer-col h4 {
        cursor: default;
        font-size: 11.5pt;
        font-weight: normal;
        color: green;
        padding-bottom: 10px;
    }

    .footer-col ul a {
        font-size: 25px;
        color: green;
    }

    .footer-col ul i {
        font-size: 25px;
        color: green;
    }

    .footer-col ul span {
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        color: white;
    }

    .map ul a {
        margin-left: 10px;
        font-size: 15px;
        color: white;
    }

    .footer-col .mail ul i {
        padding-top: 20px;

        font-size: 25px;
    }

    .footer-col .mail span {

        padding-left: 3px;
        font-size: 12px;
        font-weight: normal;
    }

    .footer-col .map ul i {
        padding-top: 20px;
        font-size: 20px;
    }

    .footer-col .map span {
        font-weight: normal;
        font-size: 12px;
        margin-left: 15px;
        margin-top: auto;
        margin-bottom: auto;
        color: white;
    }
}
</style>