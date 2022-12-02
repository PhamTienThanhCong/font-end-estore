import { Link } from 'react-router-dom';
// import { FormLogin } from "./components/FormLogin"

export default function Login() {
    // set name page
    document.title = 'Login';
    return (
        <>
            <div className="slider-area " style={{ textAlign: 'center' }}>
                <h1>Login</h1>
            </div>

            <section className="login_part section_padding " style={{ paddingTop: 50 }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_text text-center">
                                <div className="login_part_text_iner">
                                    <h2>New to our Shop?</h2>
                                    <p>
                                        There are advances being made in science and technology everyday, and a good
                                        example of this is the
                                    </p>
                                    <Link to="/register" className="btn_3">
                                        Create an Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_form">
                                <div className="login_part_form_iner">
                                    <h3>
                                        Welcome Back ! <br /> Please Sign in now
                                    </h3>

                                    <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                                        <div className="col-md-12 form-group p_star">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                defaultValue=""
                                                placeholder="Username"
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
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account d-flex align-items-center">
                                                <input type="checkbox" id="f-option" name="selector" />
                                                <label htmlFor="f-option">Remember me</label>
                                            </div>
                                            <button type="submit" defaultValue="submit" className="btn_3">
                                                log in
                                            </button>
                                            <Link className="lost_pass" to="#">
                                                forget password?
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
