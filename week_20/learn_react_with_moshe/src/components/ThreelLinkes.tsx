import Url from "./Url";

type ThreeLinks = {
    url1: string;
    url2: string;
    url3: string;
};

export default function ThreeLinks(props: ThreeLinks) {
    return (
        <div>
            <Url url={props.url1} />
            <Url url={props.url2} />
            <Url url={props.url3} />
        </div>
    );
}
