import React, { useState, useEffect } from "react";
import "../assets/style/detailProduct.css"

const DetailProduct = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        "https://via.placeholder.com/600x300?text=Slide+1",
        "https://via.placeholder.com/600x300?text=Slide+2",
        "https://via.placeholder.com/600x300?text=Slide+3",
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="mb-5">
            <div className="d-flex justify-content-center align-item-center">
                <h2 className="fs-2">Nama Product</h2>
            </div>

            <div className="carousel">
                <button className="carousel-button prev" onClick={prevSlide}>
                    &#8592;
                </button>
                <div className="carousel-content">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentIndex ? "active" : "inactive"
                                }`}
                        >
                            <img src={item} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-button next" onClick={nextSlide}>
                    &#8594;
                </button>
            </div>

            <div className="row mt-4 d-flex justify-content-center align-item-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-center align-item-center">
                                <h4>Detail Product</h4>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    Nama Product : Test
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    Deskripsi Product : Test
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col">
                                    Kategori Product : Alat Rumah Tangga, Sembako, Dewasa
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    Harga Product : <b>Rp. 90.0000</b>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    Kuantitas Product : <b className="text-success">123</b>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-center align-item-center">
                                <h4>Detail Toko</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    Nama Toko : Toko Sembako
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    Rating Toko : <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col">
                                    Alamat Toko : Jl. Kembangan No.42, Kembangan, Jakarta Barat
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-3">
                                    <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                </div>
                                <div className="col-md-5">
                                    <div className="row">
                                        <b>Nama Toko</b>
                                    </div>
                                    <div className="row">
                                        <b><i>"Deskripsi Toko"</i></b>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="row mt-4 d-flex justify-content-center align-item-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-center align-item-center">
                                <h4>Review</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-2 d-flex justify-content-center align-item-center">
                                    <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <b>Nama Reviewer</b>
                                    </div>
                                    <div className="row">
                                        <b><i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i></b>
                                    </div>
                                    <div className="row">
                                        <b><i>Bagus nih bro!</i></b>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-2 d-flex justify-content-center align-item-center">
                                    <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <b>Nama Reviewer</b>
                                    </div>
                                    <div className="row">
                                        <b><i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i></b>
                                    </div>
                                    <div className="row">
                                        <b><i>Bagus nih bro!</i></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4 d-flex justify-content-center align-item-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-item-center">
                                <h4>Recomendation For You</h4>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-item-center gap-3">
                            <div className="col-md-3">
                                <a href="/detailProduct" style={{ textDecoration: 'none' }}>
                                    <div className="card card-info">
                                        <div className="card card-header" align="center">
                                            <b className="fs-4">Product 1</b>
                                        </div>

                                        <div className="card card-body">
                                            <div className=" d-flex justify-content-center align-item-center">
                                                <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                            </div>
                                        </div>

                                        <div className="card card-footer">
                                            Product 1
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="/detailProduct" style={{ textDecoration: 'none' }}>
                                    <div className="card card-info">
                                        <div className="card card-header" align="center">
                                            <b className="fs-4">Product 1</b>
                                        </div>

                                        <div className="card card-body">
                                            <div className=" d-flex justify-content-center align-item-center">
                                                <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                            </div>
                                        </div>

                                        <div className="card card-footer">
                                            Product 1
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="/detailProduct" style={{ textDecoration: 'none' }}>
                                    <div className="card card-info">
                                        <div className="card card-header" align="center">
                                            <b className="fs-4">Product 1</b>
                                        </div>

                                        <div className="card card-body">
                                            <div className=" d-flex justify-content-center align-item-center">
                                                <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                            </div>
                                        </div>

                                        <div className="card card-footer">
                                            Product 1
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="/detailProduct" style={{ textDecoration: 'none' }}>
                                    <div className="card card-info">
                                        <div className="card card-header" align="center">
                                            <b className="fs-4">Product 1</b>
                                        </div>

                                        <div className="card card-body">
                                            <div className=" d-flex justify-content-center align-item-center">
                                                <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                            </div>
                                        </div>

                                        <div className="card card-footer">
                                            Product 1
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="/detailProduct" style={{ textDecoration: 'none' }}>
                                    <div className="card card-info">
                                        <div className="card card-header" align="center">
                                            <b className="fs-4">Product 1</b>
                                        </div>

                                        <div className="card card-body">
                                            <div className=" d-flex justify-content-center align-item-center">
                                                <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                            </div>
                                        </div>

                                        <div className="card card-footer">
                                            Product 1
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3 mb-3">
                                <a href="/detailProduct" style={{ textDecoration: 'none' }}>
                                    <div className="card card-info">
                                        <div className="card card-header" align="center">
                                            <b className="fs-4">Product 1</b>
                                        </div>

                                        <div className="card card-body">
                                            <div className=" d-flex justify-content-center align-item-center">
                                                <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                                            </div>
                                        </div>

                                        <div className="card card-footer">
                                            Product 1
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default DetailProduct;