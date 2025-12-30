'use client';

import Image from "next/image";
import "../styles/MapCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHouse } from "@fortawesome/free-solid-svg-icons";

const MapCard = () => {
  return (
    <section className="map-section">
      <div className="map-wrapper">
        <Image
          src="/images/map2.jpg"
          alt="map"
          fill
          className="map-bg"
          priority
        />

        <span className="map-corner" />

        <div className="map-blur" />

        <div className="map-top-content">
          <h2 className="map-title"> جادة الدرعية</h2>

          <p className="map-text">
             عندما يجتمع الفن والرقي والعصرية في مجمع سكني فاخر.        
          </p>
          <div className="map-top-boxes">
            <div className="small-box">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faHouse} />
              </div>

              <div className="box-text">
                <div className="box-number-text">
                ٧٦ وحدة 
                </div>
                <div className="box-desc-text">
                 اجمالي عدد الوحدات
                </div>
              </div>
            </div>

             <div className="small-box">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faBuilding} />
              </div>

              <div className="box-text">
                <div className="box-number-text">
                  +٢٢٫٤ ألف م<sup>٢</sup>
                </div>
                <div className="box-desc-text">
                  إجمالي مساحة البناء
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-card">
          <div className="map-images">
            <div className="map-img-box">
              <Image src="/images/map4.jpg" alt="img1" fill />
            </div>

            <div className="map-img-box">
              <Image src="/images/map2.jpg" alt="img2" fill />
            </div>

            <div className="map-img-box">
              <Image src="/images/map3.jpg" alt="img3" fill />
            </div>
          </div>

          <button className="button">  المزيد ↖</button>
        </div>
      </div>

      <div className="side-image-wrapper">
        <Image
          src="/images/map.png"
          alt="side"
          fill
          className="side-image"
          priority
        />
      </div>
    </section>
  );
};

export default MapCard;
