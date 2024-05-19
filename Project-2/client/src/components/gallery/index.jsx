import './style.css';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='gallery'>
            {pizzaData.map((item, i) => (
                <div className='item' key={i}>
                    <img src={item.image} alt={item.name} />
                    <div className='info'>
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                        <Link to='/'>ADD TO CART</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

const pizzaData = [
    {
        id: 1,
        name: 'Caprici',
        image: 'https://marcello.qodeinteractive.com/wp-content/uploads/2022/03/product-list-6.png',
        price: 5.10
    },
    {
        id: 2,
        name: 'Mediterrano',
        image: 'https://marcello.qodeinteractive.com/wp-content/uploads/2022/03/product-list-3.png',
        price: 7.50
    },
    {
        id: 3,
        name: 'Campania',
        image: 'https://marcello.qodeinteractive.com/wp-content/uploads/2022/03/product-list-2.png',
        price: 8.15
    },
    {
        id: 4,
        name: 'European',
        image: 'https://marcello.qodeinteractive.com/wp-content/uploads/2022/03/product-list-1.png',
        price: 12.50
    },
    {
        id: 5,
        name: 'Neapolitan',
        image: 'https://marcello.qodeinteractive.com/wp-content/uploads/2022/03/product-list-8.png',
        price: 9.75
    },
    {
        id: 6,
        name: 'Capricorno',
        image: 'https://marcello.qodeinteractive.com/wp-content/uploads/2022/03/product-list-5.png',
        price: 10.00
    }
]

export default Gallery