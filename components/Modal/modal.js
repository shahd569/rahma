"use client"
import { useState } from "react";
import Styles from './modal.module.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function DonationModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        اضغط هنا
      </Button>

      <Modal  show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className={Styles.modal}>
          <h3 className={Styles.title}>للتبرع العيني نحن متواجدون في المراكز التالية</h3>
          <p>دمشق-مركز الأمل- يومياً ماعدا الجمعة من الساعة 8:00 صباحاً حتى الساعة2:00 مساءاً</p>
          <p>دمشق-مركز الأمل- يومياً ماعدا الجمعة من الساعة 8:00 صباحاً حتى الساعة2:00 مساءاً</p>
          <p>دمشق-مركز الأمل- يومياً ماعدا الجمعة من الساعة 8:00 صباحاً حتى الساعة2:00 مساءاً</p>
          <p>دمشق-مركز الأمل- يومياً ماعدا الجمعة من الساعة 8:00 صباحاً حتى الساعة2:00 مساءاً</p>
          <p>دمشق-مركز الأمل- يومياً ماعدا الجمعة من الساعة 8:00 صباحاً حتى الساعة2:00 مساءاً</p>
          <Button className={Styles.button} variant="secondary" onClick={() => setShow(false)}>
            إغلاق
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
