import React from 'react';
import footerLogo from '../../assets/images/freshcart-logo.svg'; 
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import img1 from '../../assets/payment-icons/american-express.svg';
import img2 from '../../assets/payment-icons/checkout-shop.svg';
import img3 from '../../assets/payment-icons/mastercard.svg';
import img4 from '../../assets/payment-icons/pay.svg';
import img5 from '../../assets/payment-icons/shop-pay.svg';

const Footer = () => {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <footer className="footer  position-relative">
            <div className="footer_position  w-100"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#f2a807" 
                        fill-opacity="1"    
                    d="M0,96L60,96C120,96,240,96,360,80C480,64,600,32,720,37.3C840,43,960,85,1080,90.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> 
            <div className="row bg-main px-0 py-0 mx-0">
                <div className="col-md-12 d-flex justify-space-between my-5">
                    <img src={footerLogo} height={40} alt="" className={`${styles.footer_logo}`} />
                </div>
                <div className="col-md-3 d-flex justify-content-start my-5 flex-column">
                    <Link className='mb-3  dicor text-dark'   to={'/products'}><i class="mx-2 fa fa-arrow-right"></i>PRODUTCS</Link>
                    <Link className='mb-3  dicor text-dark'   to={'/categories'}><i class="mx-2 fa fa-arrow-right"></i>CATEGORIES</Link>
                    <Link className='mb-3  dicor text-dark'   to={'/brands'}><i class="mx-2 fa fa-arrow-right"></i>BRANDS</Link>
                </div>
                <div className="col-md-3 rightMedia d-flex my-5  justify-content-end flex-column">
                    <i className="m-3 cursor-pointer fs-5 cursor fa fa-brands fa-facebook"></i>
                    <i className="m-3 cursor-pointer fs-5 cursor fa-brands fa-twitter"></i>
                    <i className="m-3 cursor-pointer fs-5 cursor fa-brands fa-instagram"></i>
                    <i className="m-3 cursor-pointer fs-5 cursor fa-brands fa-tiktok"></i>
                </div>
                <div className="col-md-3 rightMedia d-flex my-5  justify-content-start flex-column">
                    <h3>Contact</h3>
                    <div className="mt-4">
                        <h5>+201113179351</h5>
                        <h5>www.example.com</h5>
                    </div>

                </div>
                <div className={`${styles.search_content} col-md-3 ms-auto d-flex justify-content-start my-5 flex-column`}>
                    <input type="search" className='w-100 d-block my-1 ms-auto'/>
                    <div className="btn w-50 bg-dark text-white w-25 d-block my-1 ms-auto">Sereach</div>
                </div>
            </div>

            <div className={`${styles.footer_content} bg-main p-4 d-flex justify-content-between align-items-start`}>
                <p>&copy; {new Date().getFullYear()} E-commerce. All rights reserved.</p>
                <div className="payment-icons">
                    <img src={img1} alt="Payment Icon 1" className='cursor-pointer'  height={20} />
                    <img src={img2} alt="Payment Icon 2" className='cursor-pointer'  height={20} />
                    <img src={img3} alt="Payment Icon 3" className='cursor-pointer'  height={20} />
                    <img src={img4} alt="Payment Icon 4" className='cursor-pointer'  height={20} />
                    <img src={img5} alt="Payment Icon 5" className='cursor-pointer'  height={20} />
                </div>
                <div onClick={()=>scrollToTop()} className="btn"><i class="bi bi-arrow-up bg-dark text-main p-2 rounded-circle"></i></div>
            </div>
            </div>
        </footer>
    );
};
export default Footer;