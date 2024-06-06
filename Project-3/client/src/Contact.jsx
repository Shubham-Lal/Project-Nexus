import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
    const [details, setDetails] = useState({ full_name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleContact = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!details.full_name || details.full_name.length === 0) {
            return toast.error('Please enter your name');
        }
        if (!details.email || !emailRegex.test(details.email)) {
            return toast.error('Please enter a valid email');
        }
        if (!details.message || details.message.length === 0) {
            return toast.error('Please enter the message');
        }

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/feedback`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(details)
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                setDetails({ full_name: '', email: '', message: '' })
            } else {
                toast.error(data.message || 'An error occurred during signup');
            }
        } catch (error) {
            toast.error('An error occurred during signup');
        }
        finally { setLoading(false) };
    }

    return (
        <section className="contact-us" id="contact">
            <div className="screen">
                <div className="screen-header">
                    <div className="screen-header-left">
                        <div className="screen-header-button close"></div>
                        <div className="screen-header-button maximize"></div>
                        <div className="screen-header-button minimize"></div>
                    </div>
                    <div className="screen-header-right">
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                    </div>
                </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                        <div className="app-title">
                            <span>CONTACT</span>
                            <span>US</span>
                        </div>
                        <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                    </div>
                    <div className="screen-body-item">
                        <form id="contact-form" className="app-form" onSubmit={handleContact}>
                            <div className="app-form-group">
                                <input
                                    className="app-form-control"
                                    name="full_name"
                                    placeholder="NAME"
                                    value={details.full_name}
                                    onChange={e => setDetails({ ...details, full_name: e.target.value })}
                                />
                            </div>
                            <div className="app-form-group">
                                <input
                                    className="app-form-control"
                                    name="email"
                                    placeholder="EMAIL"
                                    value={details.email}
                                    onChange={e => setDetails({ ...details, email: e.target.value })}
                                />
                            </div>
                            <div className="app-form-group message">
                                <input
                                    className="app-form-control"
                                    placeholder="MESSAGE"
                                    value={details.message}
                                    onChange={e => setDetails({ ...details, message: e.target.value })}
                                />
                            </div>
                            <div className="app-form-group buttons">
                                <button disabled={loading} className="app-form-button">{loading ? "SENDING" : "SEND"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact