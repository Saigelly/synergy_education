import { useEffect } from 'react';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../TItle/Title';
import ReviewsItem from './ReviewsItem/ReviewsItem';
import './style.css';


const ReviewsSection = () => {
    const arrReviewsItem = [
        {
            id: 'review_1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
            userInfo: {
                avatar: '/src/users/author-1.jpg',
                name: 'Davis Rhiel Madsen',
                position: 'Manager'
            }
        },
        {
            id: 'review_2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
            userInfo: {
                avatar: '/src/users/author-2.jpg',
                name: 'Jaydon Rosser',
                position: 'Top Manager'
            }
        },
        {
            id: 'review_3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex, architecto eaque quo suscipit.',
            userInfo: {
                avatar: '/src/users/author-3.jpg',
                name: 'Cooper Dorwart',
                position: 'Manager'
            }
        },
    ]

    useEffect(() => {
        const firstReview = document.getElementById('review_1');

        const cancelMargin = () => {
            if (window.innerWidth > 767 & firstReview.hasAttribute('style')) {
                console.log('cancelMargin')
                document.querySelector('.reviews__label_active').classList.remove('reviews__label_active');
                firstReview.removeAttribute('style');
                document.querySelector('.reviews__label').classList.add('reviews__label_active');
            }
        }

        window.addEventListener('resize', cancelMargin);
        return () => window.removeEventListener('resize', cancelMargin);
    }, []);

    const switchReview = (e, margin) => {
        const reviewsActive = document.querySelector('.reviews__label_active');
        if (reviewsActive !== e.target) {
            reviewsActive.classList.remove('reviews__label_active');
            e.target.classList.add('reviews__label_active');
            document.querySelector('#review_1').style.marginLeft = `${margin}%`;
        }
    }

    return (
        <section className="reviews">
            <div className="container">
                <div className="reviews__inner">
                    <Title titlePlace='reviews__title' value='what our customers are saying' />
                    <Subtitle subtitlePlace='reviews__subtitle' value='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <div className="reviews__content">
                        {arrReviewsItem.map((item, index) => <ReviewsItem reviewsContent={item} key={index} />)}
                    </div>

                    <div className="reviews__navigation">
                        <div className="reviews__label reviews__label_active" onClick={(e) => switchReview(e, 0)}></div>
                        <div className="reviews__label" onClick={(e) => switchReview(e, -25)}></div>
                        <div className="reviews__label" onClick={(e) => switchReview(e, -50)}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection;