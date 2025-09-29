'use client';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Styles from './orphanModal.module.css'

export default function DonationModal({ orphan }) {
  const [show, setShow] = useState(false);

  if (!orphan) return null;

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        التفاصيل
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className={Styles.title}>تفاصيل اليتيم</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:"flex", justifyContent:"center"}}>
          <div className={Styles.container}>
          <p 
          className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>اسم الطفل :</strong> {orphan.fname} {orphan.minit} {orphan.lname}</p>
           <p className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>الجنس : </strong> {orphan.gender}</p>
           <p className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>العمر :</strong> {orphan.age}</p>
           <p className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>نبذة عن الطفل :</strong> {orphan.about}</p>
           <p className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>العنوان :</strong> {orphan.city}</p>
           <p className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>المؤسسة التعليمية :</strong> {orphan.school}</p>
           <p className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>المرحلة الدراسية :</strong> {orphan.class}</p>
           <p className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>الحالة الصحية :</strong> {orphan.H_state}</p>
           <p className={`${Styles.label} ${orphan.gender === "ذكر" ? Styles.boy : Styles.girl}`}><strong>الهوايات :</strong> {orphan.skills}</p>
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