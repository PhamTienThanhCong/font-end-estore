import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    document.title = 'Register';
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (name === '' || phone === '' || email === '' || password === '' || confirmPass === '') {
            navigate('/register');
            alert('Please enter enough information');
        } else if (confirmPass !== password) {
            navigate('/register');
            alert('Please re-enter your confirm password');
        } else {
            // setting header for axios
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://web-estore-backend.onrender.com/v1/user/register', {
                fullname: name,
                phone: phone,
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res);
                alert('Register successfully');
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
                alert('Register failed');
            });
        }
    };
    return (
        <div className="col-lg-6 col-md-6 register_container">
            <div className="login_part_form">
                <div className="login_part_form_iner register_inner">
                    <h1 style={{ color: 'black', paddingTop: 50, paddingBottom: 50 }}>Register</h1>
                    <form
                        className="row contact_form"
                        action="#"
                        method="post"
                        noValidate="novalidate"
                        onSubmit={handleRegister}
                    >
                        <div className="col-md-12 form-group p_star">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                defaultValue=""
                                placeholder="Fullname"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12 form-group p_star">
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                name="phone"
                                defaultValue=""
                                placeholder="Phone Number"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12 form-group p_star">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                defaultValue=""
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12 form-group p_star">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                defaultValue=""
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12 form-group p_star">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                defaultValue=""
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12 form-group register_btn">
                            <button type="submit" className="btn_3 btn">
                                Register
                            </button>
                            <div>
                                Do you have an account?{' '}
                                <Link to="/login" style={{ color: 'blue' }}>Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
