import { useContext, useState } from "react";
import "./ProfileUpdate.scss";
import { authContext } from "../../context/authContext";
import apiRequest from "../../lib/apiRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import UploadWidget from "../../components/UploadWidget/UploadWidget";
import noavatar from "../../assets/noavatar.jpg"

function ProfileUpdate() {
  const { currentUser, updateUser } = useContext(authContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await axios.put(`http://localhost:6900/api/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar
      }, {withCredentials:true});
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1 className=" self-center text-[24px]">Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={ avatar || noavatar} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "drncrfu2r",
            uploadPreset: "realEstate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setAvatar={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdate;