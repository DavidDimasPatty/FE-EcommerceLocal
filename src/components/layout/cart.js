import React, { useState, useEffect } from "react";

const CartBar = () => {
    const [isCartOpenInside, setIsCartOpenInside] = useState(false);

    const toggleCart = () => {
        setIsCartOpenInside(false);
    };

    return (
        <aside className="cart-Bar">
            <b className="text-light ms-3">My Cart</b>
            <div className="row gap-3 mt-4">
                <div className="row-md-1">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        Nama Barang
                                    </div>
                                    <div className="row">
                                        Kuantitas
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    Total Harga :
                                </div>
                                <div className="col">
                                    <b>Rp. 180.000</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row-md-1">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        Nama Barang
                                    </div>
                                    <div className="row">
                                        Kuantitas
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    Total Harga :
                                </div>
                                <div className="col">
                                    <b>Rp. 180.000</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hrCustom1" />
            <div className="row ms-2 d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col">
                        Total Belanja :
                    </div>
                    <div className="col">
                        <b>Rp. 360.000</b>
                    </div>
                </div>
            </div>
            <div className="mt-4 row-md-3 d-flex justify-content-center align-items-center">
                <div className="col-md-3 justify-content-center align-items-center" align="center">
                    <button className="btn btn-xl btn-success">Bayar</button>
                </div>
                <div className="col-md-3 justify-content-center align-items-center" align="center">
                    <button className="btn btn-xl btn-danger">Batal</button>
                </div>
            </div>
        </aside>
    );
}

export default CartBar;