import './Contact.css';
import Map from '../../Components/Map/Map';

function Contact() {
    document.title = 'Contact';
    return (
        <main>
            <div className="slider-area " style={{ textAlign: 'center', paddingTop: 50 }}>
                <h1 style={{ color: 'blue', paddingTop: 50 }}>Contact Us</h1>
            </div>

            <section className="contact-section" style={{ paddingTop: 50 }}>
                <div className="container">
                    <Map />
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">
                            <form
                                className="form-contact contact_form"
                                action="#"
                                method="post"
                                id="contactForm"
                                noValidate="novalidate"
                                onSubmit={(e) => { 
                                    e.preventDefault(); 
                                    alert('Thank you for your message!');
                                }}
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea
                                                className="form-control w-100"
                                                name="message"
                                                id="message"
                                                cols="30"
                                                rows="9"
                                                placeholder=" Enter Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="name"
                                                id="name"
                                                type="text"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="subject"
                                                id="subject"
                                                type="text"
                                                placeholder="Enter Subject"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm boxed-btn">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="media contact-info">
                                <span className="contact-info__icon">
                                    <i className="ti-home"></i>
                                </span>
                                <span className="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </span>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon">
                                    <i className="ti-tablet"></i>
                                </span>
                                <span className="media-body">
                                    <h3>+1 253 565 2365</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </span>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon">
                                    <i className="ti-email"></i>
                                </span>
                                <span className="media-body">
                                    <h3>
                                        <a
                                            href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="eb989e9b9b84999fab8884878499878289c5888486"
                                        >
                                            [email protected]
                                        </a>
                                    </h3>
                                    <p>Send us your query anytime!</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
