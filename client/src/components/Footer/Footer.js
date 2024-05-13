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
    <div class="mx-[1rem] mt-[1rem] ">
      <hr class="w-full h-2 mb-[4rem]" />

      <div className="flex flex-cols gap-x-5 gap-y-1rem px-3 flex-wrap mb-[3rem]">
      <div className="w-full my-2 xl:w-1/6  sm:w-1/4">
          <h6>Great Value</h6>
          <p className="text-[.8rem]">
            Most popular brands with widest range of selection at best prices.
          </p>
        </div>
        <hr className="bg-black w-[1px] h-[100px] mt-[-1rem] sm:h-[120px]" />

        <div className="w-full my-2 xl:w-1/6  sm:w-1/4">
          <h6>Nationwide Delivery</h6>
          <p className="text-[.8rem]">
            Over 20,000 pincodes serviceable across India.{" "}
          </p>
        </div>
        <hr className="bg-black w-[1px]  h-[100px] mt-[-1rem] sm:h-[120px]" />

        <div className="w-full my-2 xl:w-1/6  sm:w-1/4">
          <h6>Secure Payment</h6>
          <p className="text-[.8rem]">
            Partnered with India's most popular and secure payment solutions.
          </p>
        </div>
        <hr className="bg-black w-[1px]  h-[100px] mt-[-1rem] sm:h-[120px]" />

        <div className="w-fit my-2 xl:w-1/6  sm:w-1/4">
          <h6>Buyer Protection</h6>
          <p className="text-[.8rem]">
            Committed to buyer interests to provide a smooth shopping
            experience.
          </p>
        </div>
        <hr className="bg-black w-[1px]  h-[100px] m-[-.5rem] sm:h-[120px]" />

        <div className="w-fit my-2 xl:w-1/6  sm:w-1/4">
          <h6>365 Days Help Desk</h6>
          <p className="text-[.8rem]">+91 9857446633 </p>
        </div>
      </div>

      <hr class="w-full h-2 text-black" />

      <div class="flex flex-wrap justify-between px-3 py-4">
        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h6>INDUSNET</h6>
          <a
            href="#"
            class="text-black text-[.8rem] hover:text-red-400 no-underline"
          >
            <p>About Us</p>
          </a>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Career
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Press
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Testimonials
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Blog
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Article
            </a>
          </p>
        </div>

        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h6>Help</h6>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Contact Us
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Track My Order
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Buying Guide
            </a>
          </p>
        </div>

        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h6>FAQs</h6>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Order Tracking
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Cancellation and Return
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Refund
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Payment Option
            </a>
          </p>
        </div>

        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h6>INDUSNET's Own</h6>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Popular Searches
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Best Deals
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Online Assist
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Industry Store
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Top Buying Requirement
            </a>
          </p>
        </div>

        <div class="w-fit my-4 sm:w-1/2 md:w-1/5">
          <h6>Miscellaneous</h6>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Bulk Enquiry
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              INDUSNET Business
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Supplier Central
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Credlix
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              DigiMRO
            </a>
          </p>
          <p>
            <a
              href="#"
              class="text-black text-[.8rem] hover:text-blue-400 no-underline"
            >
              Zoglix
            </a>
          </p>
        </div>
      </div>

      <div className="footer">
        <hr className="w-full mt-4" />
        {/* <div className="foooter-logo">
        <img src="/images/google.jpeg" />
        <p>SHOPPER</p>
      </div> */}
        {/* <ul className="footer-links" data-aos="fade-up" data-aos-once="true">
        <li  >Company</li>
        <li >products</li>
        <li >Offices</li>
        <li >About</li>
        <li >Contact</li>
      </ul> */}
        <div className="flex justify-evenly gap-[8rem]">
          <div className="flex">
            <img src="./images/appstore.png" className="w-[7rem] h-[3rem]" />
            <img
              src="./images/playstore.png"
              className="w-[9rem] h-[4.5rem] mt-[-.7rem]"
            />
          </div>

          <div className="footer-social-icons">
            <div className="footer-social-icons-container w-fit h-fit bg-white border-0">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="footer-social-icons-container  w-fit h-fit bg-white border-0">
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div className="footer-social-icons-container  w-fit h-fit bg-white border-0">
              <i class="fa-solid fa-envelope"></i>
            </div>
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
