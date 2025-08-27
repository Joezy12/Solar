import Navbar from "../general/navbar";
import "../styles/products.css"

function Products(prop) {
  return (
    <div className="products">
      <div className="products-banner">
        <Navbar openNav={prop.openNav} />
        <div className="products-banner-write">
          <h1>EXPLORE OUR PREMIUMN PRODUCTS</h1>
          <p>Read about our orginazation and what we offer to keep your electricity runnig, <br /> we are here to serve your our premiumn feautures</p>
          <h4>Home / Products</h4>
        </div>
      </div>
      <div className="products-advantage">
        <div className="p-advantage">
          <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <polyline class="st0" points="2,9 19,9 19,24 10,24 "></polyline> <circle class="st0" cx="24" cy="24" r="2"></circle> <circle class="st0" cx="8" cy="24" r="2"></circle> <polyline class="st0" points="19,24 19,13 25,13 29,18 29,24 26,24 "></polyline> <line class="st0" x1="4" y1="13" x2="13" y2="13"></line> <line class="st0" x1="2" y1="17" x2="11" y2="17"></line> <rect x="-288" y="-432" class="st3" width="536" height="680"></rect> </g></svg>
          <div>
            <h3>Free shipping</h3>
            <p>Free shipping on all orders over #15,000,000</p>
          </div>
        </div>
        <div className="p-advantage">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style></style> </defs> <g id="dolar_coin" data-name="dolar coin"> <path class="cls-1" d="M22.5,12A10.5,10.5,0,1,1,12,1.5,10.5,10.5,0,0,1,22.5,12"></path> <path class="cls-1" d="M9.14,15.82H13a1.91,1.91,0,0,0,1.91-1.91h0A1.9,1.9,0,0,0,13,12h-1.9a1.9,1.9,0,0,1-1.91-1.91h0a1.91,1.91,0,0,1,1.91-1.91h3.81"></path> <line class="cls-1" x1="12" y1="6.27" x2="12" y2="8.18"></line> <line class="cls-1" x1="12" y1="15.82" x2="12" y2="17.73"></line> </g> </g></svg>
          <div>
            <h3>Money Back Guarantee</h3>
            <p>100% money back guarantee</p>
          </div>
        </div>
        <div className="p-advantage">
          <svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 309.768 309.768" xml:space="preserve" fill="#1a1919" stroke="#1a1919"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="black" d="M308.417,122.685c-2.317-4.607-7.223-7.408-12.292-6.967l-15.409,1.126 c-16.714-60.412-72.04-104.968-137.706-104.968C64.154,11.875,0,76.034,0,154.884c0,78.856,64.154,143.009,143.009,143.009 c45.645,0,88.934-22.083,115.798-59.063c4.123-5.689,2.855-13.63-2.823-17.764c-5.689-4.128-13.636-2.845-17.759,2.817 c-22.099,30.421-57.692,48.587-95.222,48.587c-64.839,0-117.582-52.748-117.582-117.582S78.165,37.308,143.004,37.308 c52.22,0,96.549,34.244,111.838,81.434l-8.023,0.587c-5.124,0.37-9.524,3.807-11.139,8.681 c-1.621,4.884-0.131,10.258,3.753,13.619l23.083,19.934c2.246,3.617,6.217,6.037,10.775,6.037c0.239,0,0.462-0.054,0.696-0.065 c0.076,0,0.136,0.033,0.207,0.033c0.305,0,0.615-0.005,0.93-0.033c3.361-0.25,6.483-1.822,8.692-4.373l22.849-26.456 C310.038,132.818,310.723,127.275,308.417,122.685z"></path> <g> <path fill="black" d="M75.772,199.191v-12.347l11.259-10.176c19.031-17.024,28.278-26.815,28.544-36.997 c0-7.109-4.286-12.733-14.348-12.733c-7.5,0-14.071,3.742-18.629,7.239l-5.765-14.62c6.57-4.944,16.752-8.974,28.55-8.974 c19.706,0,30.562,11.525,30.562,27.342c0,14.609-10.584,26.276-23.187,37.53l-8.044,6.701v0.261h32.841v16.763H75.772V199.191z"></path> <path fill="black" d="M186.261,199.191v-20.783H147.66v-13.26l32.972-53.091h24.933v51.073h10.454v15.278h-10.454 v20.783C205.564,199.191,186.261,199.191,186.261,199.191z M186.261,163.13v-19.298c0-5.232,0.267-10.584,0.669-16.219h-0.533 c-2.823,5.635-5.102,10.726-8.044,16.219l-11.661,19.031v0.267H186.261z"></path> </g> </g> </g> </g></svg>
          <div>
            <h3>Online SUPPORT 24/7</h3>
            <p>Always dedicated team</p>
          </div>
        </div>
      </div>


      <div className="p-advert">
        <div className="p-advert-box">
          <div>
            <h1>Solar Inverters</h1>
            <h4>30% OFF</h4>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="p-advert-box p-2-box">
          <div>
            <h1>Solar Lights</h1>
            <h4>DEAL PROMO</h4>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="p-advert-box p-3-box">
          <div>
            <h1>Solar Panels</h1>
            <h4>STARTING AT #80,000</h4>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>




      <section className="new-product">
        <div className="new-head"><h1>BEST SELLING PRODUCTS</h1></div>
        <div className="new-container">


          <div className="new-box">
            <div className="new-pic"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N325,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic2"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N150,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic3"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N325,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic4"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N120,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>


        </div>


      </section>








      <section className="new-product">
        <div className="new-head"><h1>BEST SELLING PRODUCTS</h1></div>
        <div className="new-container">


          <div className="new-box">
            <div className="new-pic"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N325,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic2"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N150,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic3"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N325,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic4"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N120,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>


        </div>

      </section>





      <section className="new-product">
        <div className="new-head"><h1>BEST SELLING PRODUCTS</h1></div>
        <div className="new-container">


          <div className="new-box">
            <div className="new-pic"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N325,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic2"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N150,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic3"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N325,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic4"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N120,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>


        </div>
        
      </section>


        <section className="new-product">
        <div className="new-head"><h1>BEST SELLING PRODUCTS</h1></div>
        <div className="new-container">


          <div className="new-box">
            <div className="new-pic"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N325,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic2"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N150,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic3"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N325,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>

          <div className="new-box">
            <div className="new-pic new-pic4"></div>
            <div className="new-write">
              <p>CHARGE CONTROLLER</p>
              <h2>100A 12/24/48V With 245V Input MPP</h2>
              <div className="new-rating">
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
                <i className="bi-star-fill"></i>
              </div>
              <h1>N120,000.00</h1>
              <button className="new-add-cart"><i className="bi-bag"></i>ADD TO CART</button>
              <button className="new-buy-button">Buy now</button>
            </div>
          </div>


        </div>
        
      </section>




    </div>
  )
}

export default Products;