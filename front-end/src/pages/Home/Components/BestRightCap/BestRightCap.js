import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BestRightCap(props) {
    return (
        <div className="best-right-cap" key={props.index}>
            <div className="best-single mb-30">
                {/* props.active true return class active */}
                <div className={`single-cap + active`}>
                    <Link to={props.link}>
                        <h4>
                            {props.name}
                            <br /> {props.type}
                        </h4>
                    </Link>
                </div>
                <Link to={props.link}>
                    <div className="single-img">
                        <img src={props.img} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
