'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import '../styles/Contact.css';
import { useLang } from '../../context/LangContext';
const translations = {
  ar: {
    pageName: 'اتصل بنا',
    home: 'الرئيسية',
    info: {
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      whatsapp: 'واتساب',
      address: 'العنوان',
    },
    addressText:
      'الرياض: طريق الأمير تركي بن عبد العزيز الأول - حي حطين مبنى 6957 - وحدة رقم 3 - الرمز البريدي: 2447-13512 المملكة العربية السعودية',
    form: {
      firstName: 'الاسم الأول',
      lastName: 'الاسم الأخير',
      address: 'العنوان',
      phone: 'الجوال',
      message: 'الرسالة',
      send: 'إرسال',
      messageRequired: 'الرسالة مطلوبة',
      placeholders: {
        firstName: 'الاسم الأول',
        lastName: 'الاسم الأخير',
        address: 'العنوان',
        phone: 'رقم الجوال',
        message: 'اكتب رسالتك...',
      },
    },
  },
  en: {
    pageName: 'Contact Us',
    home: 'Home',
    info: {
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      address: 'Address',
    },
    addressText:
      'Riyadh: Prince Turki Bin Abdulaziz Al-Awal Road – Hittin District – Building 6957 – Unit 3 – Postal Code 2447-13512 – Saudi Arabia',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      address: 'Address',
      phone: 'Phone',
      message: 'Message',
      send: 'Send',
      messageRequired: 'Message is required',
      placeholders: {
        firstName: 'First Name',
        lastName: 'Last Name',
        address: 'Address',
        phone: 'Phone Number',
        message: 'Write your message...',
      },
    },
  },
};

const ContactPage: React.FC = () => {
  const { locale } = useLang();
  const t = translations[locale];
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    message: '',
  });

  const [messageError, setMessageError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.message.trim()) {
      setMessageError(t.form.messageRequired);
      return;
    }

    setMessageError('');
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      message: '',
    });
  };

  return (
    <>
      <Navbar />

      <Header
        imageSrc="/images/about.jpg"
        pageName="اتصل بنا" 
        showBar={false}
        topLink={{ label: t.home, href: '/' }}
      />

      {/* ===== CONTACT INFO ===== */}
      <section className="contact-info" dir={dir}>
        <a href="mailto:info@the1stavenue.com" className="info-card">
          <div className="icon-circle">
            <FaEnvelope className="info-icon" />
          </div>
          <h3>{t.info.email}</h3>
          <span>info@the1stavenue.com</span>
        </a>

        <a href="tel:+966112362009" className="info-card">
          <div className="icon-circle">
            <FaPhoneAlt className="info-icon" />
          </div>
          <h3>{t.info.phone}</h3>
          <span>+966112362009</span>
        </a>

        <a href="https://wa.me/966571112009" className="info-card">
          <div className="icon-circle">
            <FaWhatsapp className="info-icon" />
          </div>
          <h3>{t.info.whatsapp}</h3>
          <span>+966571112009</span>
        </a>

        <a
          href="https://www.google.com/maps"
          className="info-card info-card-wide"
        >
          <div className="icon-circle">
            <FaMapMarkerAlt className="info-icon" />
          </div>
          <h3>{t.info.address}</h3>
          <span>{t.addressText}</span>
        </a>
      </section>

      {/* ===== FORM ===== */}
      <section className="contact-form-section" dir={dir}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>{t.form.firstName}</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t.form.placeholders.firstName}
              />
            </div>

            <div className="form-group">
              <label>{t.form.lastName}</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t.form.placeholders.lastName}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t.form.address}</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={t.form.placeholders.address}
              />
            </div>

            <div className="form-group">
              <label>{t.form.phone}</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.form.placeholders.phone}
              />
            </div>
          </div>

          <div className="form-row full">
            <div className="form-group">
              <label>{t.form.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => {
                  handleChange(e);
                  setMessageError('');
                }}
                placeholder={t.form.placeholders.message}
              />
              {messageError && (
                <span className="error-text">{messageError}</span>
              )}
              <button type="submit">{t.form.send}</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
