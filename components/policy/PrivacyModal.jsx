"use client";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslations, useLocale  } from "next-intl";

import PrivacyPolicyTextEn from "./PrivacyPolicyText.en";
import PrivacyPolicyTextRu from "./PrivacyPolicyText.ru";
import PrivacyPolicyTextAm from "./PrivacyPolicyText.am";

export default function PrivacyModal() {
  const t = useTranslations();
  const locale = useLocale();
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleClose = () => setShow(false);

  let PolicyComponent = PrivacyPolicyTextEn;
  if (locale === "ru") PolicyComponent = PrivacyPolicyTextRu;
  else if (locale === "am") PolicyComponent = PrivacyPolicyTextAm;

  return (
    <>
      <a href="#" onClick={handleShow}>{t("policy.privacyPolicy")}</a>

      <Modal show={show} onHide={handleClose} size="lg" centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>
            {t("policy.privacyPolicy")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#fff",
            color: "#000",
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          <PolicyComponent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("policy.close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
