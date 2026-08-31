import Card from "./components/Card";
import ThreeLinks from "./components/ThreelLinkes";

export default function App() {
    return (
        <div>
            <Card
                title="momo"
                url="https://t4.ftcdn.net/jpg/03/67/16/39/360_F_367163919_qaOTpy4dYNdUU1O4nRjl8skbRSITrchX.jpg"
                description="Nehoray is a king"
                click={() => {
                    console.log("nehoray");
                    return "momo";
                }}
            />
            <ThreeLinks
                url1="https://t3.ftcdn.net/jpg/05/73/72/20/360_F_573722054_Y1nHQBJDTNUCJkdL5dWDO0j6JcIedtTz.jpg"
                url2="https://t3.ftcdn.net/jpg/05/73/72/20/360_F_573722054_Y1nHQBJDTNUCJkdL5dWDO0j6JcIedtTz.jpg"
                url3="https://t3.ftcdn.net/jpg/05/73/72/20/360_F_573722054_Y1nHQBJDTNUCJkdL5dWDO0j6JcIedtTz.jpg"
            />
        </div>
    );
}
