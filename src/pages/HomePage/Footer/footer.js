import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4">
                        <section className>
                            <form action>
                                {/*Grid row*/}
                                <div className="row d-flex justify-content-center">
                                    {/*Grid column*/}
                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-md-5 col-12">
                                        {/* Email input */}
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="form5Example21" className="form-control" />
                                            <label className="form-label" htmlFor="form5Example21">
                                                Email address
                                            </label>
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-auto">
                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-outline-light mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                    {/*Grid column*/}
                                </div>
                                {/*Grid row*/}
                            </form>
                        </section>
                        {/* Section: Form */}
                        {/* Section: Text */}
                        <section className="mb-4">
                            <p>© 2023 Nike, Inc. All Rights Reserved</p>
                        </section>
                        {/* Section: Text */}
                        {/* Section: Links */}
                        <section className>
                            <div className="row">
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Chăm Sóc Khác Hàng</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-white">
                                                Trung Tâm Trợ Giúp
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                Thanh Toán
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                Chính Sách Bảo Hành
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                Link 4
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Theo Dõi Chúng Tôi Trên</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-white">
                                                Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                Zalo
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                YouTobe
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Chính Sách Bảo Mật</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-white">
                                                Quy Chế Hoạt Động
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                Chính Sách Vận Chuyển
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                Chính Sách Trả Lại Hàng Và Hoàn Tiền
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">
                                                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
                                                Phường Ngọc Khánh, Quận 1, Thành phố Hồ Chính Minh, Việt Nam
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Thanh Toán</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <img
                                                src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
                                                alt="logo"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09"
                                                alt="logo"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06"
                                                alt="logo"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09"
                                                alt="logo"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/* Section: Links */}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Nike:
                        <a className="text-white" href="https://mdbootstrap.com/">
                            Nike.com
                        </a>
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
        );
    }
}

export default Footer;
