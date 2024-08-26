import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
const Cities = () => {
    const [city,setCity] = useState("default city");
    const cityName = useParams().city;
    return (
        <div className="City">
            <select onChange={(e) => {setCity(e.target.value);}}>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="kolkata">Kolkata</option>
            </select>
            <Link to={city}>Go to {city}</Link>
            <Outlet />
        </div>
    );
}
export default Cities;