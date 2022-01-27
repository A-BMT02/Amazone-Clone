import React , { useState , useEffect } from 'react'
import "./Payment.css" ;
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement , useStripe , useElements} from "@stripe/react-stripe-js" ;
import CurrencyFormat from 'react-currency-format';
import { total } from "./reducer" ;
import axios from './axios';

function Payment() {

    const navigate = useNavigate() ;
    const [ {basket , user} , dispatch ] = useStateValue() ;

    const stripe = useStripe() ; 
    const elements = useElements() ; 

    const [succeeded , setsucceeded ] = useState(false) ; 
    const [processing , setProcessing] = useState("") ;
    const [ error , setError] = useState(null) ; 
    const [ disabled , setDisabled] = useState(true) ; 
    const [ clientSecret , setclientSecret] = useState(true) ;

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method : "post" , 
                url : `/payments/create?total=${total(basket) * 100}`
            })

            setclientSecret(response.data.clientSecret)
        }

        getClientSecret() ;
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault() ; 
        setProcessing(true) ;

        const payload = await stripe.confirmCardPayment(clientSecret  , {
            payment_method :  {
                card : elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            setsucceeded(true) ; 
            setError(null) ; 
            setProcessing(false) ; 

            navigate("/orders", { replace: true })
        })
    }

    const handleChange = e => {

        setDisabled(e.empty)
        setError(e.error ? e.error.message : "") ;
    }
    return (
        <div className="payment"> 
            <div className="payment__container">
                <h1>
                    Checkout {<Link to="./checkout">{basket?.length} items</Link>}
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment___title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map( item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className='payment__section'>
                    <div className="payment__title">
                            <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                         <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total : {value}</h3>
                                    </>
                                )}
                                decimalScale={2} 
                                value={total(basket)}
                                displayType="text"
                                thousandSeparator={true}
                                prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                         </form>
                    </div>
            </div>
        </div>

        </div>
    )
}

export default Payment
