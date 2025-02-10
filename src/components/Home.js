import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderLayer1 from "./HeaderLayer2/HeaderLayer1"
import "../assets/style/home.css";

const Home = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexBD, setCurrentIndexBD] = useState(0);
  const [bestDealItems, setBestDealItems] = useState(null);

  const items = [
    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
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

  const nextSlideBestDeals = () => {
    setCurrentIndexBD((prevIndex) =>
      prevIndex === bestDealItems.length - 1 ? 0 : prevIndex + 1);
  };

  const prevSlideBestDeals = () => {
    setCurrentIndexBD((prevIndex) =>
      prevIndex === 0 ? bestDealItems.length - 1 : prevIndex - 1
    );
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    const fetchDataCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/GetAllCategory");
        setCategories(response.data)
        setLoading(false);
      }
      catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    const fetchDataBestDealItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setBestDealItems(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
    fetchDataCategories();
    fetchDataBestDealItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <HeaderLayer1 categories={categories} />
      <div>
        <div className="d-flex justify-content-center align-item-center fs-2 mt-4">
          <h1 className="text-dark">Welcome Customers!</h1>
        </div>

        <div className="d-flex justify-content-center align-item-center fs-2 mt-4">
          <div class="col-md-5">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Cari Barang Apa Aja Disini!!!" />
              <span class="input-group-text"><i class="bi bi-search"></i></span>
            </div>
          </div>
        </div>

        {/* Moving Text */}
        <div class="moving-text-container">
          <div class="moving-text">This is a moving text! 🎉</div>
        </div>

        <div className="row mt-4 gap-4 d-flex justify-content-center align-item-center">
          <div align="center">
            <h3>
              Flash Sale !!!
            </h3>
          </div>
          {data.map((product) => (
            <div className="col-md-3">
              <a href="/detailProduct" style={{ textDecoration: 'none' }}>
                <div className="card card-info">
                  <div className="card card-header" align="center">
                    <b className="fs-4">{product.name}</b>
                  </div>

                  <div className="card card-body">
                    <div className="d-flex justify-content-center align-item-center">
                      <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" width={100} />
                    </div>
                  </div>

                  <div className="card card-footer">
                    {product.name}
                  </div>
                </div>
              </a>
            </div>
          ))}
          <div align="end">
            <h6>
              <u>
                Lihat Selengkapnya
              </u>
            </h6>
          </div>
        </div>

        {/* Carrousel */}
        <div className="carousel mb-5">
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

        {/* Best Deals */}
        <div className="carouselBestDeal">
          <div align="center">
            <h3>Best Deals !!!</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="divBannerBestDeals">
              <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" />
            </div>
            <div className="carrouselBestDealContent d-flex justify-content-center align-items-center">
              <button className="" onClick={prevSlideBestDeals}>
                &#8592;
              </button>
              {bestDealItems.map((product) => (
                <div className="cardBestDeals">
                  <div className="cardImageBestDeals">
                    <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" />
                  </div>
                  <div className="cardDescBestDeals">
                    <div className="cardDescBestDealsTitle">
                      {product.name}
                    </div>
                    <div className="cardDescBestDealsPrice">
                      {product.amount}
                    </div>
                    <div className="cardDescBestDealsRating">
                      {product.qty}
                    </div>
                    <div className="cardDescBestDealsLocation">
                      Jakarta
                    </div>
                  </div>
                </div>
              ))}
              <button className="" onClick={nextSlideBestDeals}>
                &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* Promo Pilihan Untukmu */}

        {/* Tagihan & Isi Ulang */}

        {/* Potongan Kupon */}

        {/* All Product */}

      </div>
    </div>
  );
};

export default Home;