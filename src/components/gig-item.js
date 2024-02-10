export default function GigItem(props) {
    const gigTitle = props.gigTitle
    const gigDescription = props.gigDescription
    const gigImage = props.gigImage
    const gigLink = props.gigLink

    return (
        <div className="gigItemcontainer">
            <div className="image_top">
                <img src={gigImage} />
            </div>
            <div className="gig-item-body">
                <div className="gig_title">{gigTitle}</div>
                <div className="gig_rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span className="gig-rating-text">5.0</span>
                </div>
                <div className="gig_description">{gigDescription}</div>
                <div className="gig_links">
                    <button className="buy_gig_btn">Buy</button>
                </div>
            </div>
        </div>
    )
}