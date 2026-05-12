import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import "../css/login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
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
            const res = await fetch(`https://velora-5.onrender.com/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });


            const data = await res.json();
            console.log(data);


            if (data.success) {
                dispatch(
                    loginSuccess({
                        user: data.user,
                        token: data.token
                    })
                );

                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                toast.success(`Welcome Back ${data?.user?.name}`);
                navigate("/")
                window.scrollTo({top:0, behavior:"smooth"})
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="login-input"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="login-input"
                    />

                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="login-footer">
                    Don’t have an account? <a href="/signup">Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;