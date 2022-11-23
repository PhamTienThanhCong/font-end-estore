import LinkTag from "./LinkTag";

export default function HotTag(props) {
    return (
        <>
            <div className="single-footer-caption mb-50">
            <div className="footer-tittle">
                <h4>{props.name}</h4>
                <ul>
                {props.tags.map((tag, index) => {
                    return (
                        <LinkTag to={tag.to} key={index}>{tag.name}</LinkTag>
                    );
                })}
                </ul>
            </div>
            </div>
        </>
    )    
}