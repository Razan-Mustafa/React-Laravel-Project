import React, { useState, useEffect } from 'react';
import './style.css'
// import test from './boat1.jpg'

function ImageGallery({ package_id }) {
    const [slideIndex, setSlideIndex] = useState(1);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${package_id}`);
                setProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        if (package_id) {
            fetchProductDetails();
        }
    }, [package_id]);

    // Define your image data
    const images = [
        { src: process.env.PUBLIC_URL + '/boat1.jpg', alt: 'The Woods tttt' },
        { src: process.env.PUBLIC_URL + '/boat2.jpg', alt: 'Cinque Terre' },
        { src: process.env.PUBLIC_URL + '/boat3.jpg', alt: 'Mountains and fjords' },
        { src: process.env.PUBLIC_URL + '/boat4.jpg', alt: 'Northern Lights' },
        { src: process.env.PUBLIC_URL + '/boat1.jpg', alt: 'Nature and sunrise' },
        { src: process.env.PUBLIC_URL + '/boat2.jpg', alt: 'Snowy Mountains' },
    ];

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    // Next/previous controls
    function plusSlides(n) {
        setSlideIndex(slideIndex + n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        setSlideIndex(n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName('mySlides');
        const dots = document.getElementsByClassName('demo');
        const captionText = document.getElementById('caption');

        if (n > slides.length) setSlideIndex(1);
        if (n < 1) setSlideIndex(slides.length);

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('active');
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    return (
        <div className="container2">
            {images.map((image, index) => (
                <div key={index} className={`mySlides ${slideIndex === index + 1 ? 'active' : ''}`}>
                    <div className="numbertext">{index + 1} / {images.length}</div>
                    <img src={image.src} style={{ width: '100%' }} alt={image.alt} />
                </div>
            ))}

            <a className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
            </a>
            <a className="next" onClick={() => plusSlides(1)}>
                &#10095;
            </a>

            <div className="caption-container">
                <p id="caption"></p>
            </div>

            <div className="row">
                {images.map((image, index) => (
                    <div key={index} className="column">
                        <img
                            className={`demo cursor ${slideIndex === index + 1 ? 'active' : ''}`}
                            src={image.src.replace('_wide', '')}
                            style={{ width: '100%' }}
                            onClick={() => currentSlide(index + 1)}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;
