import './Accommodation.css'

export default function AccommodationList({name, rating, price}) {
    return (
        <div className='container'>
            <div className='box'>
                <h1>{name}</h1>
                <h2>${price}</h2>
                <h3>{rating}★</h3>
            </div>
        </div>
    );
}