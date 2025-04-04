import React from 'react'
import './Footer.css'
function Footer() {
    const submitMessage = ()=>{
        alert("Feedback sent successfully!...")
    }
  return (
    <div>
        <footer>
            <div class="content">
            <div class="left box">
                <div class="upper">
                    <div class="topic">Di-SHA</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex distinctio. Tenetur asperiores quisquam ullam? Tenetur asperiores quisquam ullam?</p>
                </div>
                <div class="lower">
                    <div class="topic">Contact us</div>
                    <div class="phone">
                        <a href="#"><i class="bx bxs-phone"></i> 10 20 30 40 50</a>
                    </div>
                    <div class="phone">
                        <a href="#"><i class="bx bxs-envelope"></i> disha.jobs@mydomain.com</a>
                    </div>
                </div>
            </div>
            <div class="middle box">
                <div class="topic"></div>
                <div><a href="#">Home</a></div>
                <div><a href="#">About</a></div>
                <div><a href="#">Jobs</a></div>
                <div><a href="#">Services</a></div>
                <div><a href="#">Contact</a></div>
                <div><a href="#">Account</a></div>
            </div>
            <div class="right box">
                <div class="topic">Subscribe Us</div>
                <form>
                    <input type="text" placeholder="Enter email address" />
                    <input type="submit" name="" value="Send"/>
                    <div class="media-icons">
                        <a href="#"><i class="bx bxl-facebook"></i></a>
                        <a href="#"><i class="bx bxl-youtube"></i></a>
                        <a href="#"><i class="bx bxl-instagram"></i></a>
                        <a href="#"><i class="bx bxl-twitter"></i></a>
                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </form>
            </div>
        </div>
        <div class="bottom">
            <p>Copyright @ <a href="#">Di-SHA</a> All rights reserved, February 2025.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
