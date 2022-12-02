import './Register.css';

function Register() {
    document.title = 'Register';
    return (
        <div className="col-lg-6 col-md-6 register_container">
            <div className="login_part_form">
                <div className="login_part_form_iner register_inner">
                    <h1 style={{ paddingBottom: 50 }}>Register</h1>

                    <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                        <div className="col-md-12 form-group p_star">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                defaultValue=""
                                placeholder="Họ và tên"
                            />
                        </div>
                        <div className="col-md-12 form-group p_star">
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                name="phone"
                                defaultValue=""
                                placeholder="Số điện thoại"
                            />
                        </div>
                        <div className="col-md-12 form-group p_star">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                defaultValue=""
                                placeholder="Email"
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
                            />
                        </div>
                        <div className="col-md-12 form-group register_btn">
                            <button type="submit" defaultValue="submit" className="btn_3 btn">
                                Register
                            </button>
                            <div>
                                Do you have an account?{' '}
                                <a href="/login" style={{ color: 'blue' }}>
                                    Login
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
