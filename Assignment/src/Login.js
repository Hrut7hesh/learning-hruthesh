import { useParams } from "react-router-dom";
function Login(props){
    let params = useParams();
    console.log(params);
    console.log(props);
    function doLogin(){
        alert("Wow, now i can login also");
    }
    return(
        <div className="Login">
            <button onClick={props.greet}>Greet</button>
            <h5>Login Url={props.L_URL}</h5>
            <h5>Login Attempts = {props.login_attempts}</h5>
            <h1>{params.title}</h1>
            <h2>Token = {params.tokenId}</h2>
            <input placeholder="Username" type="text" name="username"/>
            <input placeholder="Password" type ="text" name="password"/>
            <button onClick={doLogin}>Login Now!</button>
        </div>
    );
}
export default Login;