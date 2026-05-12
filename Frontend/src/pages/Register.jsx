import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { toast } from "react-toastify";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import baseurl from "../context/ShopContext"

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`http://localhost:2006/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                dispatch(
                    loginSuccess({
                        user: data.user,
                        token: data.token || null
                    })
                );

                localStorage.setItem("user", JSON.stringify(data.user));
                if (data.token) localStorage.setItem("token", data.token);

                toast.success("Registration Successful 🎉");
                navigate("/login")
                window.scrollTo({top:0, behavior:"smooth"})
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(data.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2 className="register-title">Register</h2>

                <form onSubmit={handleSubmit} className="register-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />

                    <button
                        type="submit"
                        className="register-button"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
                <p className="login-footer">
                    Don’t have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;