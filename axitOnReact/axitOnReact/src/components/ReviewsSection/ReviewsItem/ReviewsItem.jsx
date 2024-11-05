import './style.css'


const ReviewsItem = ({ reviewsContent }) => {

    return (
        <div className="reviews__item item-reviews" id = {reviewsContent.id}>
            <p className="item-reviews__text">{reviewsContent.text}</p>
            <div className="item-reviews__author">
                <div className="item-reviews__img">
                    <img src={reviewsContent.userInfo.avatar} alt="avatar" />
                </div>
                <div className="item-reviews__description">
                    <h4 className="item-reviews__name">{reviewsContent.userInfo.name}</h4>
                    <p className="item-reviews__position">{reviewsContent.userInfo.position}</p>
                </div>

            </div>
        </div>
    )
}

export default ReviewsItem;