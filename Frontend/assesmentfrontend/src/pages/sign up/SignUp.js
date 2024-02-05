import React from "react";
import "./signup.css";
import useApi from "../../hooks/useApi";
import { useNavigate,Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
export default function SignUp() {
  const [loading, setLoading] = useState(false);
  // const { user, checkUser } = useContext(AuthContext);
  const { fetchUserData } = useContext(AuthContext);
  const { apiCall } = useApi();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username:"",
    isAdmin:false,
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    if (!formData.email || !formData.password) {
      alert("Please insert email or password");
      setLoading(false);
      return;
    }
    try {
      await apiCall({
        url: "/user/signup",
        method: "post",
        data: {
          email: formData.email,
          password: formData.password,
          username:formData.username,
          isAdmin:formData.isAdmin,
        },
      });

      await fetchUserData();
      setFormData({
        email: "",
        password: "",
        username:"",
      });
      alert("Logged in Successfully!");
      setLoading(false);
      navigate("/");
    } catch (error) {
      setFormData({
        email: "",
        password: "",
      });
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Welcome!</h1>
          <p>Sign up and create your account</p>
          <div className="input-group">
            <input
              onChange={handleInputChange}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              placeholder="username"
              required
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleInputChange}
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleInputChange}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              required
            />
          </div>
          <button type="submit">Sign up</button>
          <p><Link to="/login">Log in</Link> if you do have account</p>
        </form>
      </div>
    </div>
  );
}
