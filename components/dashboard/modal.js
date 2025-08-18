'use client';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Styles from './modal.module.css'

export default function DonationModal({ sponsor }) {
  const [show, setShow] = useState(false);

  if (!sponsor) return null;

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        التفاصيل
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className={Styles.title}>تفاصيل الكفيل </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:"flex", justifyContent:"center"}}>
          <div className={Styles.container}>
          <p className={Styles.label}><strong>اسم الكفيل:</strong> {sponsor.sponsorName}</p>
          <p className={Styles.label}><strong>هاتف الكفيل:</strong> {sponsor.sponsorPhone}</p>
          <p className={Styles.label}><strong>البريد الإلكتروني:</strong> {sponsor.sponsorEmail}</p>
          <p className={Styles.label}><strong>تاريخ الكفالة:</strong> {new Date(sponsor.sponsorDate).toLocaleDateString('en-EG')}</p>
          <p className={Styles.label}><strong>نوع الكفالة:</strong> {sponsor.type}</p>
          <p className={Styles.label}><strong>البنك:</strong> {sponsor.sponsorBank}</p>
          <p className={Styles.label}><strong>الحالة:</strong> {sponsor.sponsorState}</p>
          <p className={Styles.label}><strong>العمر :</strong> {sponsor.sponsorAge}</p>
          <p className={Styles.label}><strong>العنوان :</strong> {sponsor.sponsorAddress}</p>
          <p className={Styles.label}><strong>الجنس : </strong> {sponsor.sponsorGender}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}