import React, { useState, useEffect } from "react";

const Notification = () => {
    const [isCartOpenInside, setIsCartOpenInside] = useState(false);

    const toggleCart = () => {
        setIsCartOpenInside(false);
    };

    return (
        <div className="notification-content pb-3">
            <div className="row">
                <b className="text-success ms-2">Pembayaranmu Berhasil Untuk Order ID : 12350122SPX</b>
            </div>
            <hr />
            <div className="row">
                <b className="text-danger ms-2">Pembayaranmu Gagal Untuk Order ID : 12350122SPX</b>
            </div>
        </div>
    );
}

export default Notification;