import React,{useState, useEffect} from "react";
import backgroundImage from "../Background Pattern.png";
import "../profile.css"; // Import the CSS file for Profile styles


const Profile = () =>{
    // let {token, setToken} = useContext(Context);
    let[success, setSuccess] = useState("");
    let[error, setError] = useState("");
    let[name, setName] = useState("");
    let[username, setUsername] = useState("")
    let[email, setEmail] = useState("");
    let[gender, setGender] = useState("");
    let[image, setImage] = useState("");

    useEffect(() => {
        // Get the user object from local storage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          fetch(`https://dummyjson.com/users/${user.id}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to fetch user details.");
              }
              return response.json();
            })
            .then((data) => {
              // Log the response data
              console.log("Response data:", data);
              // Update state with the user details
              setName(data.firstName); 
              setUsername(data.username);
              setEmail(data.email);
              setGender(data.gender);
              setImage(data.image);
              setSuccess("");
              setError("");
            })
            .catch((error) => {
              setError("An error occurred while fetching user details.");
              console.error("Fetch error:", error);
            });
        }
      }, []);
      


    return(
        <div className="profile">
            <h1 className="profilePage">Profile Page</h1>
            {error && <h1>{error}</h1>}
            <h1>Welcome {name}</h1> 
             {image && <img src = {image} alt = {name} />} 
            <h2>Username : {username}</h2> 
            <h2>Email: {email}</h2>
            <h2>Gender: {gender}</h2>
        </div>
    )
}
export default Profile;





