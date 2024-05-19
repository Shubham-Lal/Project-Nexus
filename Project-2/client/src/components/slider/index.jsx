import './style.css';

const Slider = () => {
    const texts = [
        'WE FOLLOW TRADITIONAL ITALIAN RECIPES. ENJOY THE AUTHENTIC TASTE OF SICILY. RARE SPICES, FRESH INGREDIENTS & ALWAYS DELIVERED ON TIME, THAT’S PIZZERIA!',
        'WE FOLLOW TRADITIONAL ITALIAN RECIPES. ENJOY THE AUTHENTIC TASTE OF SICILY. RARE SPICES, FRESH INGREDIENTS & ALWAYS DELIVERED ON TIME, THAT’S PIZZERIA!'
    ];

    return (
        <div className='logo-slider'>
            <div className='slider-row'>
                {texts.map((text, index) => (
                    <p key={index} className='slider-text'>{text}</p>
                ))}
            </div>
            <div className='slider-row'>
                {texts.map((text, index) => (
                    <p key={index} className='slider-text'>{text}</p>
                ))}
            </div>
        </div>
    );
};

export default Slider;