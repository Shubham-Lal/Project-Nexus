const Footer = () => {
    return (
        <>
            <footer>
                <div className="container flex footer-container">
                    <a href="#" className="company-logo">
                        <img src="/logo-large.png" alt="company logo" />
                    </a>
                    <div className="link-column flex">
                        <h4>Product</h4>
                        <a href="#" className="hover-link">Overview</a>
                        <a href="#" className="hover-link">Pricing</a>
                        <a href="#" className="hover-link">Customers Page</a>
                        <a href="#" className="hover-link">Status Page</a>
                    </div>
                    <div className="link-column flex">
                        <h4>Methodology</h4>
                        <a href="#" className="hover-link">Overview</a>
                        <a href="#" className="hover-link">Pricing</a>
                        <a href="#" className="hover-link">Customers Page</a>
                        <a href="#" className="hover-link">Status Page</a>
                    </div>
                    <div className="link-column flex">
                        <h4>Resources</h4>
                        <a href="#" className="hover-link">Overview</a>
                        <a href="#" className="hover-link">Pricing</a>
                        <a href="#" className="hover-link">Customers Page</a>
                        <a href="#" className="hover-link">Status Page</a>
                    </div>
                </div>
            </footer>


            <div className="subfooter">
                <div className="container flex subfooter-container">
                    <a className="hover-link" href="#">Privacy policy</a>
                    <a className="hover-link" href="#">Terms & Condition</a>
                    <a className="hover-link" href="#">Security Information</a>
                    <a className="hover-link" href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a className="hover-link" href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </>
    )
}

export default Footer