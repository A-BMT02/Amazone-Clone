import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="Home">
            <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>

            <div className="home__row">
                <Product id="1" title="The lean Startup" 
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                rating={5}/>
                <Product id="2" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
                price={269}
                image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
                rating={4}/>
            </div>

            <div className="home__row">
                <Product id="3"
                title="SAMSUNG LC27F398FWNXZA SAMSUNG C27F398 27 Inch Curved LED Monitor"
                price={1000}
                image="https://m.media-amazon.com/images/I/41XR9tRv5VL._AC_SY580_.jpg"
                rating={3}/>
                <Product id="4"
                title="ViewSonic VX3218-PC-MHD 32 Inch Full HD 1080p 165Hz 1ms Curved Gaming Monitor with Adaptive-Sync Eye Care HDMI and Display Port"
                price={300}
                image="https://m.media-amazon.com/images/I/41XR9tRv5VL._AC_SY580_.jpg"
                rating={3}/>
                <Product  id="5"
                title="ViewSonic VX3218-PC-MHD 32 Inch Full HD 1080p 165Hz 1ms Curved Gaming Monitor with Adaptive-Sync Eye Care HDMI and Display Port"
                price={300}
                image="https://m.media-amazon.com/images/I/41XR9tRv5VL._AC_SY580_.jpg"
                rating={3}/>
            </div>

            <div className="home__row">
                <Product id="6" title="The lean Startup" 
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                rating={5}/>
            </div>

            <div className="home__row">
                
            </div>
            </div>
        </div>

        
    )
}

export default Home
