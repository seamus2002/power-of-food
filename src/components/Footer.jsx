import React from 'react'

const Footer = () => {
    return (
        <section id='footer'>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span class="text-muted">© 2021 Company, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-youtube"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/forthepoweroffood/"><i class="fa-brands fa-instagram"></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/profile.php?id=100078775555350"><i class="fa-brands fa-facebook-square"></i></a></li>
                    </ul>
                </footer>
            </div>
        </section>
    )
}

export default Footer