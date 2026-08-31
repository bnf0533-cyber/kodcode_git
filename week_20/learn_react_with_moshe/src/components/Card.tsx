import "./card.css";

type CardProps = {
    title: string;
    url: string;
    description: string;
    click: () => string;
};
export default function Card(props: CardProps) {
    return (
        <div onClick={() => props.click()} className="card">
            <img width={900} src={props.url} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}


