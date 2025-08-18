"use client";
// pages/profile.js
import { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";
import {
  // faCalendar,
  faCalendarAlt,
  faEdit,
  faEnvelope,
  // faMailBulk,
  faPhone,
  faSave,
  faUser,
  faVenus,
  // faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./profile.module.css";
import Image from "next/image";
import Profile2 from "@/public/image/protofile.jpg";
import Offcanvas from "@/components/Offcanvas/offcanvas";
import Offcanvas1 from "@/components/Offcanvas/offcanvas2";

const Profile = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [img, setImg] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (status === "authenticated") {
        try {
          const response = await fetch("/api/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("فشل في جلب البيانات");
          }

          const data = await response.json();
          setUserData(data.user);
          setEditedData(data.user);
        } catch (err) {
          setError(err.message);
        }
      }
    };

    const fetchImage = async () => {
      const res = await fetch("/api/profile/profile-image/get");
      const data = await res.json();
      if (data.image) {
        setImg(data.image);
      }
    };
    fetchUserData();
    fetchImage();
  }, [session, status]);

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const handleChange = async (e) => {
    // setEditedData({
    //   ...editedData,
    //   [e.target.name]: e.target.value,
    // });
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    // رفع الصورة للسيرفر
    const res = await fetch("/api/profile/profile-image", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      setImg(URL.createObjectURL(file));
    } else {
      alert("فشل رفع الصورة");
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      for (const key in editedData) {
        formData.append(key, editedData[key]);
      }
      const response = await fetch("/api/profile", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("فشل في حفظ البيانات");
      }

      const data = await response.json();
      setUserData(data.user);
      setEditingField(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (status === "loading") {
    return <div>جاري التحميل...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>لا توجد بيانات مستخدم متاحة.</div>;
  }

  return (
    <div className={Styles.Profile}>
           {" "}
      <div className={Styles.form}>
        <div>
          <div className={Styles.marge}>
            <div
              className={Styles.image}
              style={{
                width: 150,
                height: 150,
                cursor: "pointer",
              }}
              onClick={() => inputRef.current.click()}
            >
              <Image
                src={img || Profile2}
                alt="avatar"
                width={150}
                height={150}
                style={{ objectFit: "cover" }}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              className="d-none"
              onChange={handleChange}
            />
          </div>
          <div className={`${Styles.welcomeFaild} ${Styles.slidein}`}>
            <p className={Styles.welcome}>
              مرحباً {userData.first_name} {userData.last_name}
            </p>
          </div>
        </div>
        <p className={Styles.failed}>
          <FontAwesomeIcon
            icon={faUser}
            className={Styles.rightIcon}
          ></FontAwesomeIcon>
                   {" "}
          {editingField === "first_name" ? (
            <input
              type="text"
              name="first_name"
              value={editedData.first_name}
              onChange={handleChange}
            />
          ) : (
            userData.first_name
          )}
                   {" "}
          <FontAwesomeIcon
            className={Styles.icon}
            icon={editingField === "first_name" ? faSave : faEdit}
            onClick={() =>
              editingField === "first_name"
                ? handleSave()
                : handleEdit("first_name")
            }
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
                 {" "}
        </p>
        <p className={Styles.failed}>
          <FontAwesomeIcon
            icon={faUser}
            className={Styles.rightIcon}
          ></FontAwesomeIcon>
                   {" "}
          {editingField === "last_name" ? (
            <input
              type="text"
              name="last_name"
              value={editedData.last_name}
              onChange={handleChange}
            />
          ) : (
            userData.last_name
          )}
                   {" "}
          <FontAwesomeIcon
            className={Styles.icon}
            icon={editingField === "last_name" ? faSave : faEdit}
            onClick={() =>
              editingField === "last_name"
                ? handleSave()
                : handleEdit("last_name")
            }
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
                 {" "}
        </p>
        <p className={Styles.failed}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={Styles.rightIcon}
          ></FontAwesomeIcon>
                   {" "}
          {editingField === "email" ? (
            <input
              type="email"
              name="email"
              value={editedData.email}
              onChange={handleChange}
            />
          ) : (
            userData.email
          )}
                   {" "}
          <FontAwesomeIcon
            className={Styles.icon}
            icon={editingField === "email" ? faSave : faEdit}
            onClick={() =>
              editingField === "email" ? handleSave() : handleEdit("email")
            }
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
                 {" "}
        </p>
        <p className={Styles.failed}>
          <FontAwesomeIcon
            icon={faPhone}
            className={Styles.rightIcon}
          ></FontAwesomeIcon>
                   {" "}
          {editingField === "ph_num" ? (
            <input
              type="text"
              name="ph_num"
              value={editedData.ph_num}
              onChange={handleChange}
            />
          ) : (
            userData.ph_num
          )}
                   {" "}
          <FontAwesomeIcon
            className={Styles.icon}
            icon={editingField === "ph_num" ? faSave : faEdit}
            onClick={() =>
              editingField === "ph_num" ? handleSave() : handleEdit("ph_num")
            }
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
                 {" "}
        </p>
        <p className={Styles.failed}>
          {editingField === "gender" ? (
            <select
              name="gender"
              value={editedData.gender}
              onChange={handleChange}
            >
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          ) : (
            <>
              {userData.gender === "male" ? (
                <>
                  <FontAwesomeIcon icon={faMars} className={Styles.rightIcon} />
                  {userData.gender}
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faVenus}
                    className={Styles.rightIcon}
                  />
                  {userData.gender}
                </>
              )}
            </>
          )}
          <FontAwesomeIcon
            className={Styles.icon}
            icon={editingField === "gender" ? faSave : faEdit}
            onClick={() =>
              editingField === "gender" ? handleSave() : handleEdit("gender")
            }
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
        </p>
        <p className={Styles.failed}>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className={Styles.rightIcon}
          ></FontAwesomeIcon>
                 
          {editingField === "Bdate" ? (
            <input
              type="date"
              name="Bdate"
              value={editedData.Bdate}
              onChange={handleChange}
            />
          ) : (
            new Date(userData.Bdate).toLocaleDateString("EG")
          )}
                   {" "}
          <FontAwesomeIcon
            className={Styles.icon}
            icon={editingField === "Bdate" ? faSave : faEdit}
            onClick={() =>
              editingField === "Bdate" ? handleSave() : handleEdit("Bdate")
            }
            style={{ cursor: "pointer", marginLeft: "10px" }}
          ></FontAwesomeIcon>
             
        </p>
        <p className={Styles.failed}>
                   {" "}
          {editingField === "Address" ? (
            <select
              name="Address"
              value={editedData.Address}
              onChange={handleChange}
            >
              {/*               <option value="male">ذكر</option>
                            <option value="female">أنثى</option> */}
                         {" "}
            </select>
          ) : (
            userData.Address
          )}
                   {" "}
          <FontAwesomeIcon
            className={Styles.icon}
            icon={editingField === "Address" ? faSave : faEdit}
            onClick={() =>
              editingField === "Address" ? handleSave() : handleEdit("Address")
            }
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
                 {" "}
        </p>
        <div
          className={`${Styles.buttonContainer} ${
            userData.role === "user" ? Styles.user : Styles.Admin
          }`}
        >
          <Offcanvas />
          <Offcanvas1 />
        </div>
      </div>
    </div>
  );
};

export default Profile;
