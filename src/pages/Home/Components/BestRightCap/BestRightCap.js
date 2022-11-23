
export default function BestRightCap(props) {
    return(
        <div className="best-right-cap ">
            <div className="best-single mb-30" key={props.key}>
                {/* props.active true return class active */}
                <div className={`single-cap ${props.active ? "active" : ""}`}>
                    <h4>{props.name}<br /> {props.type}</h4>
                </div>
                <div className="single-img">
                    <img src={props.img} alt="" />
                </div>
            </div>
        </div>
    )
}