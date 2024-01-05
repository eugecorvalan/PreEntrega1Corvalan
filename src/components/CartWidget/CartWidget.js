import cart from './assets/carrito.jpeg'

const CartWidget = () => {
    return(
        <div>
            <img className='imgCartWiget' src={cart} alt="cart-wiget" />
            0
        </div>
    )
}

export default CartWidget