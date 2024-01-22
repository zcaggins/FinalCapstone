<script setup>
import router from '@/router';
import { ref } from 'vue'
import { RouterLink } from 'vue-router';



let menu = document.querySelector('#menu-bars');
        let navbar = document.querySelector('.navbar');
        
        window.onload = function(){
        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        }}
        // window.onscroll= () => {
        //     menu.classList.remove('fa-times');
        //     navbar.classList.remove('active');
        // }
        window.onload = function() {
        document.querySelector('#search-icon').onclick=() => {
            document.querySelector('#search-form').classList.toggle('active');
        }
        document.querySelector('#close1').onclick=() => {
            document.querySelector('#search-form').classList.toggle('active');
        }
        document.querySelector("#feedback").onclick=() =>{
        document.querySelector("#co1").classList.toggle("active");
    }
        document.querySelector("#close").onclick=() =>{
        document.querySelector("#co1").classList.toggle("active");

        }
        
}
    function bakery(){
        document.getElementById("cakes").style.display="block";
    }
    function candy(){
        document.getElementById("precakes").style.display="block";
    }
    function coffee(){
        document.getElementById("pastry").style.display="block";
    }
    function myburger(){
        document.getElementById("burger").style.display="block";
    }
    function dairy(){
        document.getElementById("bread").style.display="block";
    }
    function produce(){
        document.getElementById("sandwich").style.display="block";
    }
    function seafood(){
        document.getElementById("nonpizza").style.display="block";
    }
    
        const btn = document.querySelector("button");
        const post = document.querySelector(".post");
        const widget = document.querySelector(".star-widget");
        const editBtn = document.querySelector(".edit");
    
        window.onload = function() {
        btn.onclick = () =>{
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = () =>{
            widget.style.display = "block";
            post.style.display = "none";
        }
        return false;
    }}
      function openAbout(){
        document.getElementById("about").style.width = "100%";

    }
    function openCart(){
        document.getElementById("cart").style.width = "0%";
    }
    function closeNav(){
        document.getElementById("about").style.width = "0%";
    }
   
   
       

</script>

<template>
<header>
        <a href="#" class="logo"><i class="fa fa-utensils"></i>ZCG</a>
        <nav class="navbar">
            <a class="active" href="./home.html">Home</a>
             <a href="#" onclick="openAbout()">About</a>
             <a href="./contact.html" >Contact Us</a>
             <a class="feed" id="feedback">Feedback</a>
            <a href="#">Orders</a>
        </nav>
        <div class="icons">
            <i class="fas fa-bars" id="menu-bars"></i>
            <i class="fas fa-search" id="search-icon"></i>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart"></a>
            <i class="fa fa-user" aria-hidden="true"></i>
            <a href="login.html" class="fas fa-sign-in-alt"></a>
            
        </div>

         <!--search form-->
    <form action="" id="search-form">
        <input type="search" placeholder="search here..." name="" id="search-box">
        <label for="search-box" class="fas fa-search"></label>
        <i class="fas fa-times" id="close1"></i>
    </form>
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
        <li><button @click="bakery()">Bakery</button></li>
        <li><button @click="candy()">Candy</button></li>
        <li><button @click="coffee()">Coffee</button></li>
        <!-- <li><a href="#burger" onclick="myburger()">Burgers</a></li> -->
        <li><button @click="dairy()">Dairy</button></li>
        <li><button @click="produce()">Fresh Produce</button></li>
        <li><button @click="seafood()">Meat & Seafood</button></li>
        

    </ul>
</div>
</nav>
<!--Side bar ends-->

<section class="home" id="home">
    <div class="barb">
    <h2><img src="https://loufoodcoop.com/wp-content/uploads/2023/04/cropped-louisville-community-grocery-white-opaque.png" height="150"></h2>
    <div class="cont">
        <iframe width="520" height="400"
src="https://youtu.be/WoR_-q7rO6Q?si=lq2zzeM1R-08SWVw">
</iframe>
        </div>
        </div>
</section>
<section class="brd" id="bread">
    <h2 class="ks">ZGC</h2>
    <hr class="line">
    <h4>Dairy</h4>  
    <!-- <div class="'box-bread'"> -->
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Great-Value-2-Reduced-Fat-Milk-128-Fl-Oz_22a6459a-13b6-4057-aeae-45e62c69e8f8.47f793426ff66fa6432c948d836704f0.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
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
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Great-Value-Whole-Vitamin-D-Milk-Gallon-128-fl-oz_6a7b09b4-f51d-4bea-a01c-85767f1b481a.86876244397d83ce6cdedb030abe6e4a.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
        <h3>Whole Milk</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$2.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Great-Value-Cream-Cheese-8-oz-2-Count_c1862190-29aa-4845-9e86-3e842bcb6428_2.668ca473439254df7207aee3ea25dcc9.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
        <h3>Cream Cheese</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$1.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Great-Value-Original-Vanilla-Lowfat-Yogurt-6-oz-4-Count_f45b0c18-2f8a-4d93-b791-a3146973174d.f07fa33261c6e4a513ef511177200fd1.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
        <h3>Low Fat Vanilla Yogurt</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$2.19</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    <!-- </div>
    <div class="box">
        <img src="./Images/Dishes/fruit bread.jpg">
        <h3>Fruit Bread</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹40</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/pavbaji.jpg">
        <h3>Pav Baji</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹129</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div> -->
    </div>
    
</section>
<section class="sand" id="sandwich">
    <h2 class="ks">ZCG</h2>
    <hr class="line">
    <h4>Fresh Produce</h4>  
    <div class="box-sandwich">
    <div class="box">
        <img src="https://farmfreshcarolinas.com/wp-content/uploads/2022/03/Cabbage.jpg">
        <h3>Organic Green Cabbage</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$3.99/lb</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://target.scene7.com/is/image/Target/GUEST_9902ec66-fdc7-4f94-a982-088478099ed4?wid=1200&hei=1200&qlt=80&fmt=webp">
        <h3>Organic Cucumber</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$1.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://goodeggs4.imgix.net/e4d38d0e-0c59-4cfe-b977-2e016f78e129.jpg?w=840&h=525&fm=jpg&q=80&fit=crop">
        <h3>Fresh Organic Spinach</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$2.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
<!--     
    <div class="box">
        <img src="./Images/Dishes/mini-chicken-burger.jpg">
        <h3>Mini Chicken Burger</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/paneer-tikka-burger.JPG">
        <h3>Pineapple tikka Burger</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹121</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/chicken burger.jpg">
        <h3>Chicken Burger</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹127</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/chicken tika burger.jpg">
        <h3>Chicken Tikka Burger</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹149</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/sandwich bread.jpg">
        <h3>Sandwich Bread</h3>hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹50</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/veg-burger.jpg">
        <h3>Veg burger</h3>hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹85</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/veg corn burger.jpg">
        <h3>Veg Corn Burger</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹116</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/veghotdog.jpg">
        <h3>Veg Hot Dog </h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹95</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div> -->
    </div>
    
</section>
<section class="burg" id="burger">
    <h2 class="ks">ZCG</h2>
    <hr class="line">
    <h4>Selections</h4>  
    <div class="box-burger">
    <div class="box">
        <img src="./Images/Dishes/paneer-hot-dog.jpg">
        <h3>Paneer Hot Dog</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>₹88</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="./Images/Dishes/chicken-hot-dog.webp">
        <h3>Chicken Hot Dog</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>₹109</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="./Images/Dishes/chicken spring roll.jpg">
        <h3>Chicken Spring Roll</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹94</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    
    <div class="box">
        <img src="./Images/Dishes/mini-chicken-burger.jpg">
        <h3>Mini Chicken Burger</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/paneer-tikka-burger.JPG">
        <h3>Pineapple tikka Burger</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹121</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/chicken burger.jpg">
        <h3>Chicken Burger</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹127</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/chicken tika burger.jpg">
        <h3>Chicken Tikka Burger</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹149</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/sandwich bread.jpg">
        <h3>Sandwich Bread</h3>hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹50</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/veg-burger.jpg">
        <h3>Veg burger</h3>hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹85</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/veg corn burger.jpg">
        <h3>Veg Corn Burger</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹116</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/veghotdog.jpg">
        <h3>Veg Hot Dog </h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹95</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    </div>
    
</section>
<section class="past" id="pastry">
    <h2 class="ks">Coffee</h2>
    <hr class="line">
    <h4>Selections</h4>  
    <!-- <div class="box-pastry"> -->
    <div class="box">
        <img src="https://m.media-amazon.com/images/I/71PTkVskSNL.jpg">
        <h3>Dunkin Donuts Variety Pack</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$31.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Ethical-Bean-Sweet-Espresso-Medium-Dark-Roast-Fairtrade-Organic-Ground-Coffee-8-oz-Bag_757e8ce7-d025-4b17-b755-fcf0cdebf143.b458ff0e25b3074bdedd23a9d3380619.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
        <h3>Ethical Bean Medium Dark Roast, Espresso</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$21.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Don-Francisco-s-Coffee-100-Colombia-Supremo-Ground-Coffee-Medium-Roast-12-Oz_9e444bc9-8c26-4f53-a8bc-7c9c5a856c66.5b4092db31d437c1f5295dbf300d111c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
        <h3>Don Francisco Colombia Supremo Medium Roast</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$24.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    <!-- </div>
    
    <div class="box">
        <img src="./Images/Dishes/pineapple pastry.jpg">
        <h3>ButterScotch pastry</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹73</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/butterscotch pastry.jpg">
        <h3>Pineapple pastry</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹73</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/dry fruit pastry.jpg">
        <h3>Dry Fruit pastry</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹109</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/donut.jpg">
        <h3>Donut</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹109</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/lyche pastry.png">
        <h3>Lyche pastry</hh3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹109</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div> -->
    </div>
    
</section>
<section class="choco" id="chococake">
    <h2 class="ks">KS Bakers</h2>
    <hr class="line">
    <h4>Choclate cakes</h4>  
    <div class="box-choco">
    <div class="box">
        <img src="./Images/Dishes/italian choclate cake.jpg">
        <h3>Italian choclate cake 1kg</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>₹936</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="./Images/Dishes/choco tuffle cake.jpg">
        <h3>Choco Tuffle cake 1kg</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>₹1099</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="./Images/Dishes/choco chips cake.jpg">
        <h3>choco chips cake 1kg</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹1034</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    
    <div class="box">
        <img src="./Images/Dishes/eggless choclate cake.jpg">
        <h3>Eggless choclate cake 1KG</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹1034</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>

    </div>
    
</section>
<section class="pre" id="precakes">
    <h2 class="ks">ZGC</h2>
    <hr class="line">
    <h4>Candy</h4>  
    <div class="box-precake">
        <div class="box">
            <img src="https://i5.walmartimages.com/seo/Kinder-Joy-Egg-Treat-Plus-Toy-Sweet-Cream-Chocolatey-Wafers-Valentines-Day-Gift-1-Ct_b912632c-71ca-4e87-9234-ab65c917fdf1.6e5d9e9cd70d78878abbb740e5eb67f5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF">
            <h3>Kinder Joy Eggs</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>$2.99</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Cadbury-Dairy-Milk-Milk-Chocolate-Candy-Bar-3-5-oz_ce97d3d4-9f7d-4b28-b48e-30aa9c5d98fb.f4605deca0bb7cc5c31a49a7ab063fa8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF">
        <h3>Cadbury Milk Chocolate</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$2.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://target.scene7.com/is/image/Target/GUEST_e641f737-472e-435a-bcba-a98d230284b3?wid=1200&hei=1200&qlt=80&fmt=webp">
        <h3>HERSHEY'S, Milk Chocolate Almond</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$2.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <!-- <div class="box">
        <img src="./Images/Dishes/mix-dry-fruit-cake.jpg">
        <h3>Mix Dry Fruit cake 1kg</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹800</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div> -->
    <!-- <div class="box">
        <img src="./Images/Dishes/gulab-jamun-cake.jpg">
        <h3>Gulab Jamun cake 1pc</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹110</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/gulab-jamun-cake1.jpg" >
        <h3>Gulab Jamun cake 1kg</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹1108</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/red-velvet cake.jpg">
        <h3>Red velvet cake 1/2kg</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹540</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div> -->
    
    </div>
    
</section>
<section class="nonveg" id="nonpizza">
    <h2 class="dominos">ZCG</h2>
    <hr class="line">
    <h4>Meat & Seafood</h4> 
    <div class="box-nonpizza">
        <div class="box">
            <img src="https://i5.walmartimages.com/asr/00ffc86c-5fd9-4bda-95ca-3be3fe75faed.3d8f7c4a27ecdda43e365a2e7cf1255b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF&format=avif">
            <h3>Beef Choice Angus Ribeye Steak</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>$18.99</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
        <div class="box">
            <img src="https://images.ctfassets.net/ttw7uwgviuml/56fxbUcmimyaBgQTgvhjYH/9b8b2f87c1e9a9360c1414bbacfa3073/2616_WF_RAW_Thick_Angus_Beef_Chef_Style_Burgers_Burgers.jpg?fm=jpg&fl=progressive&w=650&h=650">
            <h3>Angus Steak Burgers</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>$11.99</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
        <div class="box">
            <img src="https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-live-catalog-en/default/dwbc0f7a9f/images/products/ZCHIGRE224-1.jpg?sw=1270&strip=false">
            <h3>Bonesless Skinless Chicken Breasts</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>$9.99</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
        <!-- <div class="box">
            <img src="./Images/Dishes/PepperBarbequeChicken.jpg">
            <h3>Pepper Barbeque Chicken</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>₹439</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
        <div class="box">
            <img src="./Images/Dishes/chicken-sausage.png">
            <h3>Chicken Sausage</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>₹379</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
        <div class="box">
            <img src="./Images/Dishes/Non-Veg_Supreme.jpg">
            <h3>Non Veg Supreme</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>₹619</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
        <div class="box">
            <img src="./Images/Dishes/indi-chicken-tikkapizza.jpg">
            <h3>Indi Chicken Tikka</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>₹610</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
        <div class="box">
            <img src="./Images/Dishes/keema-do-pizza.jpg">
            <h3>Keema Do Pyaza</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>₹438</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
        <div class="box">
            <img src="./Images/Dishes/Moroccan Spice Pasta Pizza - Non Veg.jpg">
            <h3>Moroccan Spice Pasta Pizza - Non Veg</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
    
            </div>
            <span>₹440</span>
            <br>
            <a href="#" class="btn">Add to cart</a>
        </div>
    
    <div class="box">
        <img src="./Images/Dishes/double-chesse-margherita.png">
        <h3>Double cheese marghherita</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>₹339</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="./Images/Dishes/fresh-veggie.jpg">
        <h3>Fresh veggie Pizza</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>₹339</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="./Images/Dishes/margherita.jpg">
        <h3>Margherita</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹199</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/farmhouse.jpg">
        <h3>Farm house</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹399</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div> -->
    <!-- <div class="box">
        <img src="./Images/Dishes/peppy-paneer.jpg" >
        <h3>Peppy Paneer</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹399</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/mexican-greenwave.jpg">
        <h3>Mexican Greenwave</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹399</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/veggie-paradise.jpg">
        <h3>Veggie Paradise</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹399</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/IndianTandooriPaneer.jpg">
        <h3>Indi Tandoori Panner</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹459</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/Paneer_Makhni.jpg">
        <h3>Paneer Makhani</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹459</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/achari do pyaza.jpg">
        <h3>Achari do Pyaza</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹140</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/cheese-n-corn.png">
        <h3>Cheese and corn Pizza</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹140</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="./Images/Dishes/cheese n tomato.png">
        <h3>Cheese and Tomato</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹140</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    
    
    
    
    
    <div class="box">
        <img src="./Images/Dishes/moroccan spice pasta pizza.jpg">
        <h3>Moroccan Spice Pasta Pizza - Veg</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹110</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    </div> -->
</div>
   
</section>
<section class="meh" id="cakes">
    <h2 class="ks">ZCG</h2>
    <hr class="line">
    <h4>Bakery</h4>  
    <div class="box-container">
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Wonder-Bread-Classic-White-Sandwich-Bread-Sliced-White-Bread-20-oz_47c2e08a-1074-45d7-8801-5050cbb619be.3bb061e8d56f9e7304e5e2414555a1a4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF">
        <h3>White Bread</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$4.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://images.heb.com/is/image/HEBGrocery/000401996-1">
        <h3>Wheat Bread</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>

        </div>
        <span>$4.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>
    </div>
    <div class="box">
        <img src="https://i5.walmartimages.com/seo/Brownberry-Whole-Grains-Healthy-Multi-Grain-Bread-Loaf-24-oz_1a210d5a-3f78-4b98-8048-c046ea9266c1.9e20bf5271d4d14a45a2b836a0511fd7.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF">
        <h3>Mulitgrain Bread</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$4.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="https://target.scene7.com/is/image/Target/GUEST_a05a3f9b-5175-4bc9-99c7-738c1cf94ef1?wid=1200&hei=1200&qlt=80&fmt=webp">
        <h3>Cinnamon Raisin Bread</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$4.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/62609ffa9167cc74977d830d_0856564006121-glamor-front-2022-03-28t18-48-26-iphone-x-quality-90-1-29-0-user-5984ad42a967f880524de2c4-hf6t-349564.jpg" >
        <h3>Croissant Bread</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$4.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    <div class="box">
        <img src="https://target.scene7.com/is/image/Target/GUEST_69b207ce-d1ae-4007-afe6-158d47c488ea?wid=1200&hei=1200&qlt=80&fmt=webp">
        <h3>Hamburger Buns</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$4.99</span>
        <br>
        <a href="#" class="btn">Add to cart</a>

    </div>
    
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
            To build a cooperatively-owned grocery store that supports the local economy <br>by providing health, affordable food through just and equitable food practices, employment, and ownership.
            <br>
            <br>
            <b>Values:</b><br>
            We are community-driven, we believe in equity, accountability, and empowerment.</p>
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
                <!-- <div class="footer-col">
                    <h4>Order Now</h4>
                    <ul>
                        <li><a href="#">Biryani's</a></li>
                        <li><a href="#">Restaurants</a></li>
                        <li><a href="#">Starters</a></li>
                        <li><a href="#">Fast food</a></li>
                    </ul>
                </div> -->
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
:root{
    --green: green;
    --black: black;
    --light-color:#666;
    --box-shadow:0 .5rem 1.5rem rgba(0,0,0,.1);
   
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.2s linear;
}

html{
    font-size: 62.5%;
    overflow: auto;
    scroll-padding-top:5.5rem;
    scroll-behavior: smooth;
}
html::-webkit-scrollbar{
    
    display:block;
    height:10px;
    width: 10px;
    
}
html::-webkit-scrollbar-track{
    
    border-radius: 0;
}
html::-webkit-scrollbar-thumb{
    background: rgb(158, 158, 158);
    border-radius: 5px;
}
html::-webkit-scrollbar-thumb:hover{
    background:green;
}
header{
    position: fixed;
    top:0; left:0; right:0;
    background: white;
    padding:1rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: var(--box-shadow);
}
header .logo{
    color: var(--black);
    font-size:2.5rem;
    font-weight:bolder;
}
header .logo i{
    color: green;
}
header .navbar a{
    font-size: 1.7rem;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    color:var(--light-color);

}
header .navbar a.active,
header .navbar a:hover{
    color: #fff;
    background: green;
}
header .icons i,
header .icons a{
    cursor:pointer;
    margin: left 0.5rem;
    height: 4.5rem;
    line-height: 4.5rem;
    width: 4.5rem;
    text-align: center;
    font-size: 1.7rem;
    color:black;
    border-radius:50%;
    background: #eee;

}
header .icons i:hover,
header .icons a:hover{
    color: #fff;
    background: green;
    transform: rotate(360deg);

}
header .icons #menu-bars{
    display: none;
}
#search-form{
    position:fixed;
    top:-110%;left:0;
    height:100%;width:100%;
    z-index: 1004;
    background:rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
}
#search-form.active{
    top: 0;
}
#search-form #search-box{
    width: 50rem;
    border-bottom: .1rem solid #fff;
    padding:1rem 0;
    color:#fff;
    font-size: 3rem;
    text-transform: none;
    background: none;
}
#search-form #search-box::placeholder{
    color:#eee;

}
#search-form #search-box::-webkit-search-cancel-button{
    -webkit-appearance: none;
}
#search-form label{
    color:#fff;
    cursor: pointer;
    font-size:3rem;
}
#search-form label:hover{
    color:green;

}
#search-form #close1{
    position:absolute;
    color:#fff;
    cursor:pointer;
    top:2rem; right:3rem;
    font-size: 20px;
}






.container{
    width: 100%;
    background-color:#24262b;
    margin: auto;
}

.row{
    display:flex;
    flex-wrap:nowrap;
}
ul{
    list-style: none;
}
.footer{
    margin-left: auto;
    background: #24262b;
    padding: 70px 0;
    
}
.footer-col{
    width: 25%;
    height: 140px;
    padding: 0 10px;
}
.footer-col h4{
    cursor: default;
    font-size: 13.5pt;
    font-weight: normal;
    color: green;
    padding-bottom: 10px;

}

.footer-col ul a
{
    font-size:25px;
    color:green;
}
.footer-col ul i{
    font-size:35px;
    color:green;
}
.footer-col ul span{
    cursor:pointer;
    font-size:35px;
    font-weight:bold;
    color:white;
}
.footer-col ul span:hover{
    color:green;
}
.map ul a{
    margin-left: 10px;
    font-size: 15px;
    color:white;
}
.footer-col .mail ul i{
    padding-top: 20px;
    
    font-size:25px;
}
.footer-col .mail span{
    
    padding-left: 15px;;
    font-size: 13px;
    font-weight: normal;
}
.footer-col .map ul i{
    padding-top:30px;
    font-size: 25px;
}
.footer-col .map span{
    font-weight: normal;
    font-size:13px;
    margin-left: 30px;
    margin-top: auto;
    margin-bottom: auto;
    color:white;
    
}
.footer-col ul li a{
    line-height: 1.6;
    font-size:11pt;
    text-decoration: none;
    color:white;
    
}
.footer-col ul li a:hover{
    color:green;
}
.footer .social-links a,
.footer .social-links i{
    margin-left: 0.5rem;
    text-align: center;
    font-size: 2.4rem;
    height: 35px;
    width: 45px;
    color:white;
    border-radius:50%;
    
}
.navbar .feed{
    cursor:pointer;
}


.container1{
    position: relative;
    width: 400px;
    background: #111;
    padding: 20px 30px;
    border:1px solid #444;
    border-radius:5px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.container1 .post{
    display: none;
}
.container1 .text{
    font-size: 25px;
    color:#666;
    font-weight: 500;
}

.container1 .edit{
    position:absolute;
    right:10px;
    top:5px;
    font: size 16px;
    color: #666;
    font-weight: 500;
    cursor:pointer;
}
.container1 .edit:hover{
    text-decoration:underline;
    color: green;
}
.container1 .star-widget input{
    display:none;
}
.star-widget label{
    font-size: 40px;
    color:#444;
    padding: 10px;
    float:right;
    transition: all 0.2s ease;
}
input:not(:checked) ~ label:hover,
input:not(:checked) ~ label:hover ~ label{
    color:#fd4;
}
input:checked ~ label{
    color:#fd4;
}
input#rate-5:checked ~ label{
    color:#fe7;
    text-shadow:  0 0 20px #952;
}
input#rate-4:checked ~ label{
    color:#fe7;
    text-shadow:  0 0 20px #952;
}
input#rate-3:checked ~ label{
    color:#fe7;
    text-shadow:  0 0 20px #952;
}input#rate-2:checked ~ label{
    color:#fe7;
    text-shadow:  0 0 20px #952;
}input#rate-1:checked ~ label{
    color:#fe7;
    text-shadow:  0 0 20px #952;
}
#rate-1:checked ~ form h4:before{
    content: "I just hate it😡";
}
#rate-2:checked ~ form h4:before{
    content: "I dont like it 😐";
}
#rate-3:checked ~ form h4:before{
    content: "It is awesome 😅";
}
#rate-4:checked ~ form h4:before{
    content: "I Just like it 😁";
}
#rate-5:checked ~ form h4:before{
    content: "I Just love it 😍";
}
.container1 form{
    display: none;
}
input:checked ~ form{
    display: block;
}
form h4{
    width: 100%;
    font-size: 25px;
    color:#fe7;
    font-weight: 500;
    margin:5px 0 20px 0;
    text-align:center;
    transition: all 0.2s ease;
}

form .textarea{
    height: 100px;
    width:100%;
    overflow: hidden;
}
form .textarea textarea{
    height: 100%;
    width: 100%;
    outline: none;
    color: #eee;
    border: 1px solid #333;
    background: #222;
    padding:10px;
    font-size: 17px;
    resize: none;
}
form .btn{
    height:45px;
    width:100%;
    margin:15px 0;

}
form .btn button{
    height: 100%;
    width: 100%;
    border:1px solid #444;
    outline: none;
    background:#222;
    color: white;
    font-size:17px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
}
form .btn button:hover{
    background: green;
}
.icon{
    cursor: pointer;
}
#co1{
    position:fixed;
    top:-110%;left:0;
    height:100%;width:100%;
    z-index: 1004;
    background:rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
}
#co1.active{
    top: 0;
}
#co1 #feed{
    width: 50rem;
    border-bottom: .1rem solid #fff;
    padding:1rem 0;
    color:#fff;
    font-size: 3rem;
    text-transform: none;
    background: none;
}

#co1 #feed::placeholder{
    color:#eee;

}
#co1 #feed::-webkit-search-cancel-button{
    -webkit-appearance: none;
}
#co1 label{
    color:#fff;
    cursor: pointer;
    font-size:3rem;
}
#co1 label:hover{
    color:green;

}
#co1 #close{
    position:absolute;
    color:#fff;
    cursor:pointer;
    top:2rem; right:3rem;
    font-size: 20px;
}
section{
    margin-left: 250px;
}

section h2{
    margin-top: 80px;
    margin-left: 105px;
    font-size: 40px;
    display:inline-block;
}
section hr{
    border:none;
        height: 20px;
        width: 90%;
        height: 50px;
        margin-top: 0;
        border-bottom: 1px solid #1f1209;
        box-shadow: 0 20px 20px -20px #333;
        margin: -50px auto 10px;
}
#cakes{
    display:none;
}
#precakes{
    display:none;
}
#chococake{
    display:none;
}
#pastry{
    display:none;
}
#tandoori{
    display:none;
}
#sandwich{
    display:none;
}
#burger{
    display:none;
}
#bread{
    display:none;
}
#nonpizza{
    display:none;
}
section .ks{
    text-align: center;

}


section h4{
    margin-left: 105px;
    font-size: 30px;
    color:green;
}

.veg .box-container{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.nonveg .box-nonpizza{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}

.nonveg .box-nonpizza .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
}
.nonveg .box-nonpizza .box:hover{
    transform: scale(1.1);
}
.nonveg .box-nonpizza .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
}
.nonveg .box-nonpizza .box span{
    font-size: 20px;
}
.veg .box-container .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    
}
.veg .box-container .box:hover{
    transform: scale(1.1);
}
.veg .box-container .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    
}
.veg .box-container .box span{
    font-size: 20px;
}


.brd .box-bread{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.brd .box-bread .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    
}
.brd .box-bread .box:hover{
    transform: scale(1.1);
}
.brd .box-bread .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    
}
.brd .box-bread .box span{
    font-size: 20px;
}
.brd .box-bread{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.sand .box-sandwich{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.sand .box-sandwich .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    
}
.sand .box-sandwich .box:hover{
    transform: scale(1.1);
}
.sand .box-sandwich .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    
}
.sand .box-sandwich .box span{
    font-size: 20px;
}
.sand .box-sandwich{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.burg .box-burger{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.burg .box-burger .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    
}
.burg .box-burger .box:hover{
    transform: scale(1.1);
}
.burg .box-burger .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    
}
.burg .box-burger .box span{
    font-size: 20px;
}
.burg .box-burger{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.past .box-pastry{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.past .box-pastry .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    
}
.past .box-pastry .box:hover{
    transform: scale(1.1);
}
.past .box-pastry .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    
}
.past .box-pastry .box span{
    font-size: 20px;
}
.pastry .box-pastry{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.choco .box-choco .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    
}
.choco .box-choco .box:hover{
    transform: scale(1.1);
}
.choco .box-choco .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    
}
.choco .box-choco .box span{
    font-size: 20px;
}
.pre .box-precake{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.pre .box-precake .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    
}
.pre .box-precake .box:hover{
    transform: scale(1.1);
}
.pre .box-precake .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    
}
.pre .box-precake .box span{
    font-size: 20px;
}
.meh .box-container{
    margin: auto;
    align-items: center;
    
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
    gap:5.5rem;
}
.meh .box-container .box{
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding:2.5rem;
    align-items: center;
    background: #fff;
    border-radius: .5rem;
    border: .1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
    
}
.meh .box-container .box:hover{
    transform: scale(1.1);
}
.meh .box-container .box img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    
}
.meh .box-container .box span{
    font-size: 20px;
}

.btn{
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.4rem;
    text-decoration: none;
    background: green;
    border-radius: .5rem;
    cursor: pointer;
    padding: .8rem 3rem;
    color:white;
}.sidebar{
    margin-top: 65px;
    position:absolute;
    width: 200px;
    height:100%;
    left:0;
    background:transparent;

}
.sidebar .text{
    color:white;
    font-size: 25px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    background:white;
    letter-spacing : 1px;
}
.sidebar .text i{
    cursor:pointer;
    color:black;
  
}
.arrow a i{
    cursor: pointer;
    font-size:35px;
    color:white;
    float:right;
    background: #444;
    border-radius:60%;
    
}
.sidebar .text i:hover{
    color:green;
}
.sidebar ul{
    background: white;
    height: 100%;
    width: 100%;
    list-style:none;
}
.sidebar ul li{
    line-height: 50px;
    border-bottom: 1px solid rgba(255,255,255,0.1);

}
.sidebar ul li a{
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
.sidebar ul li a:hover{
    color: green;
    background:rgb(216, 216, 216);
    border-top-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-left: 10px solid green;
    
}
.home{
    text-align: center;
    
}
.home .meh .glow{
    
        font-size: 80px;
        color:black;
        text-align: center;
        animation: glow 1s ease-in-out infinite alternate;
      
    
}

.home .cont{
    background:white;
    align-items: center;
    text-align: center;
}
.home .cont iframe{
    
    margin-top:80px;
    margin:0 auto;
    width:50%;
    border:none;
    border-radius: 10px;
    
}
.about{
    height: 100%;
    width: 0;
    position:fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}
.about a{
    padding: 60px;
    text-align: right;
    text-decoration: none;
    font-size: 36px;
    color: red;
    display: block;
    transition: 0.3s;
}
.about a:hover, .about a:focus{
    color:#f1f1f1;

}
.about .closebtn{
    position:abosolute;
    top:20px;
    right:45px;
    font-size: 60px;
    
}
.about a .closebtn{
    color:white;
}
.about-overlay h1{
    text-align: center;
    color: white;
    font-size: 45px;

}
.about-overlay p{
    text-align: center;
    font-size: 18px;
    color:white;

}








































/*media queries*/

@media (max-width:991px){
    html{
        font-size: 55%;
    }
    header{
        padding: 1rem 2rem;
    }
    section{
        padding: 1rem 2rem;
    }
    footer{
        padding: 1rem 2rem;
    }

}
@media (max-width:768px){
    header .icons #menu-bars{
        display: inline-block;
    }
    header .navbar{
        position: absolute;
        top:100%; left:0;right:0;
        background:#fff;
        border-top:.1rem solid rgba(0,0,0,.2);
        border-bottom:.1rem solid rgba(0,0,0,.2);
        padding:1rem;
        clip-path: polygon(0 0, 100% 0,100% 0,0 0);

    }
    header .navbar.active{
        clip-path: polygon(0 0, 100% 0,100% 100%,0% 100%);
    }
    header .navbar a{
        display:block;
        padding:1.5rem;
        margin:1rem;
        font-size:2rem;
        background: #eee;
    }
    .footer{
        background: #24262b;
        padding: 50px 0;
    }
    .footer-col h4{
        cursor: default;
        font-size: 11.5pt;
        font-weight: normal;
        color: green;
        padding-bottom: 10px;
    }
    .footer-col ul a
{
    font-size:25px;
    color:green;
}
.footer-col ul i{
    font-size:25px;
    color:green;
}
.footer-col ul span{
    cursor:pointer;
    font-size:20px;
    font-weight:bold;
    color:white;
}

.map ul a{
    margin-left: 10px;
    font-size: 15px;
    color:white;
}
.footer-col .mail ul i{
    padding-top: 20px;
    
    font-size:25px;
}
.footer-col .mail span{
    
    padding-left: 3px;
    font-size: 12px;
    font-weight: normal;
}
.footer-col .map ul i{
    padding-top:20px;
    font-size: 20px;
}
.footer-col .map span{
    font-weight: normal;
    font-size:12px;
    margin-left: 15px;
    margin-top: auto;
    margin-bottom: auto;
    color:white;
}
}

</style>