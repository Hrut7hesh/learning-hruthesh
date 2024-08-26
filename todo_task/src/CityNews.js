import { useParams } from "react-router-dom";
const CityNews = ({newsText}) => {
    return(
        <div className="CityNews">
            <h1>welcome to city News</h1>
            <h2>{newsText}</h2>
        </div>
    );
}
export default CityNews;