import React, { useEffect } from "react";
import "./Footer.css";
import Aos from "aos";
export default function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  });
  return (
    
    <div class="m-4 my-12">
      <hr class="w-full h-2 mb-[4rem]" />

      <div className="flex flex-cols gap-x-5 gap-y-1rem px-3 flex-wrap mb-[3rem]">
        <div className="w-[25%] my-2 xl:w-1/6 sm:w-1/4">
          <h5>Great Value</h5>
          <p>
            Most popular brands with widest range of selection at best prices.
          </p>
        </div>
        <hr className="bg-black w-[1px] h-[100px] mt-[-1rem] sm:h-[120px]" />

        <div className="w-full my-2 xl:w-1/6  sm:w-1/4">
          <h5>Nationwide Delivery</h5>
          <p>Over 20,000 pincodes serviceable across India. </p>
        </div>
        <hr className="bg-black w-[1px]  h-[100px] mt-[-1rem] sm:h-[120px]" />

        <div className="w-full my-2 xl:w-1/6  sm:w-1/4">
          <h5>Secure Payment</h5>
          <p>
            Partnered with India's most popular and secure payment solutions.
          </p>
        </div>
        <hr className="bg-black w-[1px]  h-[100px] mt-[-1rem] sm:h-[120px]" />

        <div className="w-fit my-2 xl:w-1/6  sm:w-1/4">
          <h5>Buyer Protection</h5>
          <p>
            Committed to buyer interests to provide a smooth shopping
            experience.
          </p>
        </div>
        <hr className="bg-black w-[1px]  h-[100px] m-[-.5rem] sm:h-[120px]" />

        <div className="w-fit my-2 xl:w-1/6  sm:w-1/4">
          <h5>365 Days Help Desk</h5>
          <p>+91 9857446633 </p>
        </div>
      </div>

      <hr class="w-full h-2 text-black" />

      <div class="flex flex-wrap justify-between px-3 py-4">
        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h5>INDUSNET</h5>
          <p><a href="#" class="text-black hover:text-red-400 no-underline">About Us</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Career</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Press</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Testimonials</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Blog</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Article</a></p>
        </div>

        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h5>Help</h5>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Contact Us</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Track My Order</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Buying Guide</a></p>
        </div>

        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h5>FAQs</h5>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Order Tracking</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Cancellation and Return</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Refund</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Payment Option</a></p>
        </div>

        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h5>INDUSNET's Own</h5>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Popular Searches</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Best Deals</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Online Assist</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Industry Store</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Top Buying Requirement</a></p>
        </div>

        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h5>Miscellaneous</h5>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Bulk Enquiry</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">INDUSNET Business</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Supplier Central</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Credlix</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">DigiMRO</a></p>
          <p><a href="#" class="text-black hover:text-blue-400 no-underline">Zoglix</a></p>
        </div>
      </div>

      <div className="footer">
      <hr className="w-full mt-4"/>
      {/* <div className="foooter-logo">
        <img src="/images/google.jpeg" />
        <p>SHOPPER</p>
      </div> */}
      <ul className="footer-links" data-aos="fade-up" data-aos-once="true">
        <li  >Company</li>
        <li >products</li>
        <li >Offices</li>
        <li >About</li>
        <li >Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-social-icons-container">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="footer-social-icons-container">
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div className="footer-social-icons-container">
          <i class="fa-solid fa-envelope"></i>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2024 - All Right Reserved </p>
      </div>
    </div>
    </div>
  );
}
