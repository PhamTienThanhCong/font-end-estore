import { Link } from "react-router-dom"

function FormLogin(){
    return (
        <form className="row contact_form" action="#" method="post" noValidate="novalidate">
            <div className="col-md-12 form-group p_star">
                <input type="text" className="form-control" id="name" name="name" value="" placeholder="Username" />
            </div>
            <div className="col-md-12 form-group p_star">
                <input type="password" className="form-control" id="password" name="password" value=""
                    placeholder="Password" />
            </div>
            <div className="col-md-12 form-group">
                <div className="creat_account d-flex align-items-center">
                    <input type="checkbox" id="f-option" name="selector" />
                    <label for="f-option">Remember me</label>
                </div>
                <button type="submit" value="submit" className="btn_3">
                    log in
                </button>
                <Link className="lost_pass" to="#">forget password?</Link>
            </div>
        </form>
    )
}

