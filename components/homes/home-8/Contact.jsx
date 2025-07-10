"use client";

import React, { useState, useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap"; 
import PrivacyModal from "@/components/policy/PrivacyModal";
import { useTranslations } from 'next-intl';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const t = useTranslations();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setToastMessage(t('massageSend.setToastMessageDONE'));
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Ошибка от API:", data.error);
        setToastMessage(`${t('massageSend.setToastMessageERROR')}${data.error}`);
      }
    } catch (err) {
      console.error("Сетевая ошибка:", err);
      setToastMessage(t('massageSend.setToastMessageNetERROR'));
    } finally {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500); // 1.5 секунды
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-sm-60">
          <div className="section-descr black">
            <p>
            {t('contact.block1')}
            </p>
            <p>
            {t('contact.block2Title')}
              <br />
              {/* <a href="tel:+18376528800" className="text-link">
              {t('contact.block2Phone')} +1 837 652 8800
              </a> */}
              {/* <br /> */}
              
              <a href="mailto:info@trendsetterwb.com" className="text-link">
              {t('contact.block2Email')}
              </a>
            </p>
            <p>{t('contact.block2Follow')}</p>
            <div>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/trendsetter.a.multibrand/"
                  className="hs-social-link d-inline-flex me-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="visually-hidden">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/trendsetteramultibrand"
                  className="hs-social-link d-inline-flex me-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="visually-hidden">Telegram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.5 2.3L1.8 10.5c-1.4.6-1.4 1.3-.2 1.7l5.4 1.7L18.8 7.6c.7-.4 1.2-.2.8.3L9.8 15.4l-.4 4.5c.6 0 .8-.2 1.1-.5l2.7-2.5 5.5 4c1 .6 1.7.3 2-.9l3.6-16.8c.3-1.5-.6-2.1-1.6-1.7z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/trendsetter-%D0%B0%CC%81-multibrand/"
                  className="hs-social-link d-inline-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="visually-hidden">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.555v-5.569c0-1.33-.023-3.042-1.854-3.042-1.857 0-2.141 1.45-2.141 2.946v5.665H9.344V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.367-1.848 3.6 0 4.268 2.368 4.268 5.448v6.284zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zm1.777 13.017H3.56V9h3.554v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.541C0 23.226.792 24 1.771 24h20.451c.98 0 1.778-.774 1.778-1.73V1.73C24 .774 23.206 0 22.225 0z" />
                  </svg>
                </a>
              </div>
          </div>
        </div>
        <div className="col-md-7 offset-md-1">
          <form onSubmit={handleSubmit} className="form contact-form" id="contact_form">
            <div className="row mb-30">
              <div className="col-lg-6 mb-md-30">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-lg input-circle form-control"
                  placeholder={t('contact.formName')}
                  pattern=".{3,100}"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-lg input-circle form-control"
                  placeholder={t('contact.formEmail')}
                  pattern=".{5,100}"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-50">
              <textarea
                name="message"
                id="message"
                className="input-lg input-circle form-control"
                style={{ height: 130 }}
                placeholder={t('contact.formMessage')}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <div className="col-xs-4 col-lg-6 mb-md-30">
                <button
                  type="submit"
                  className="submit_btn btn btn-mod btn-white btn-circle btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">{t('contact.formButtonSend')}</span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                    {t('contact.formButtonSend')}
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-xs-8 col-lg-6 d-flex align-items-center">
                <div className="form-tip">
                  <i className="icon-info size-16" />
                  {t('contact.formPrivicy')}{" "}
                  <PrivacyModal />
                </div>
              </div>
            </div>

            {/* <div id="result" role="region" aria-live="polite" aria-atomic="true">
              {status}
            </div> */}
          </form>
        </div>
      </div>
      {/* Тост-уведомление */}
        <ToastContainer
        className="p-3 position-fixed top-50 start-50 translate-middle"
        style={{ zIndex: 1060 }} // поверх всего
      >
        <Toast
          show={showToast}
          bg={toastMessage.startsWith("✅") ? "success" : "danger"}
          onClose={() => setShowToast(false)}
          delay={1500}
          autohide
        >
          <Toast.Body className="text-white text-center fw-bold">{toastMessage}</Toast.Body>
        </Toast>

      </ToastContainer>
    </>
  );
}
