import Image from "next/image";
import "../styles/About.css";
import ReusableText from "../components/ReusableText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faSackDollar, faHouse } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <Image
            src="/images/about-bg.jpg"
            alt="About Background"
            fill
            className="about-bg-image"
            priority
          />
          <div className="about-overlay-top">
            <ReusableText firstWord="من" secondWord="نحن" />
            <span className="overlay-arrow">↙</span>
          </div>
          <p className="about-text">
            الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة في الاستثمار
            والتطوير العقاري، والتي يقع مقرها في الرياض. حققت الشركة نمو متسارعا
            لتصبح إحدى الشركات البارزة والرائدة في صناعة فرص الاستثمار المستدام
            من خلال التطوير العقاري المبتكر.
          </p>
        </div>

        <div className="about-box">
          <div className="small-box-first">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faBuilding} size="lg" />
            </div>
            <div className="box-text">
              <div className="box-number-text">+١٢٩ ألف م<sup>٢</sup></div>
              <div className="box-desc-text">إجمالي مساحة البناء</div>
            </div>
          </div>

          <div className="small-box-second">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faSackDollar} size="lg" />
            </div>
            <div className="box-text">
              <div className="box-number-text">+٢ مليار ريال</div>
              <div className="box-desc-text">حجم المشاريع</div>
            </div>
          </div>

          <div className="small-box-second">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faHouse} size="lg" />
            </div>
            <div className="box-text">
              <div className="box-number-text">+٢٥ مشروع</div>
              <div className="box-desc-text">إجمالي عدد المشاريع</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
