import GigItem from "./gig-item.js"
import gigData from "../data/gigs.json"

export default function Gigs() {
    console.log(gigData)
    return (
        <section className="gigsContainer jnUoFC" id="gigs">
            <div className="sectionTitle">
                <div className="text-primary font-mono">03.</div>
                <div className="font-mono">Gigs</div>
                <div className="horiLine">
                    <div className="horiLineMain"></div>
                </div>
            </div>
            <div className="gigsFlexContainer">
                <GigItem />
                <GigItem />
                <GigItem />
            </div>
        </section>
    )
}