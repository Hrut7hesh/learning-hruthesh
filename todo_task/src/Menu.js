import { Link } from "react-router-dom";
function Menu(props){
    return(                                                                                     
        <div className="Menu">
            
            {
                props.menuData.map(function(val){
                    return(
                    <Link to={val.path}>{val.title}</Link>       
                )
                })
            }
        </div>
    );
}
export default Menu;


// props.menuData.map(function (val,index){
//     <div>
//     <Link to=val.path>val.title</Link>
//     <Link to=val.path>val.title</Link>
//     <Link to=val.path>val.title</Link>
//     </div>
// })}