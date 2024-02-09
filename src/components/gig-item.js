export default function GigItem(props) {
    const gigTitle = props.gigTitle
    const gigDescription = props.gigDescription
    const gigLink = props.gigLink
    
    return (
        <div className="gigItemcontainer">
            <div className="image_top">
                <img src="/assets/images/_gigImages/FIGMA CONVERTION.png" />
            </div>
            <div className="gig-item-body">
                <div className="gig_title">FIGMA TO HTML</div>
                <div className="gig_rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>

                    5
                </div>
                <div className="gig_description">Figma to html/react Figma to html/react Figma to html/react Figma to html/react Figma to html/react Figma to html/react </div>
                <div className="gig_links">
                    <div><a href="#" className="gig_outer_link">Buy this gig on Freelancer! (5% Discount)</a></div>
                    <div><a href="#" className="gig_outer_link">Buy this gig on fiverr!</a></div>
                    <div><a href="#" className="gig_outer_link">Buy this gig on upwork!</a></div>
                </div>
            </div>
        </div>
    )
}