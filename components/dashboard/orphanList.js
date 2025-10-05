// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Styles from "./OrphanList.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import Modal from "./orphanModel";

// const OrphansCarousel = () => {
//   const [orphans, setOrphans] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrphans = async () => {
//       try {
//         const response = await axios.get("/api/orphanView");
//         setOrphans(response.data.orphans);
//       } catch (error) {
//         console.error("Error fetching orphans:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrphans();
//   }, []);

//   if (loading) {
//     return <div className="text-center my-5">جاري التحميل...</div>;
//   }

//   if (orphans.length === 0) {
//     return <div className="text-center my-5">لا يوجد أيتام لعرضهم.</div>;
//   }
//   return (
//     <section className={Styles.orphan}>
//       <div className={Styles.cards}>
//           {orphans.map((orphan) => (
//             <div key={orphan.id}>
//               <div >
//                 <div className={Styles.card}>
//                   <Image
//                     src={`/image/${orphan.picture}`}
//                     alt=""
//                     width={100}
//                     height={100}
//                     className={Styles.image}
//                   />
//                   <p className={Styles.name}>
//                     {orphan.fname} {orphan.minit} {orphan.lname}
//                   </p>
//                   <div className={Styles.button}>
//                     <Modal orphan={orphan} />

//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </section>
//   );
// };

// export default OrphansCarousel;
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "./OrphanList.module.css";
import Image from "next/image";
import Modal from "./orphanModel";

const OrphansCarousel = () => {
  const [orphans, setOrphans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrphans = async () => {
      try {
        const response = await axios.get("/api/orphanView");
        setOrphans(response.data.orphans);
      } catch (error) {
        console.error("Error fetching orphans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrphans();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("هل أنت متأكد أنك تريد حذف هذا اليتيم؟")) return;

    try {
      await axios.delete(`/api/orphan/${id}`);
      setOrphans((prev) => prev.filter((orphan) => orphan.Orphan_id !== id));
    } catch (error) {
      console.error("Error deleting orphan:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`فشل الحذف : ${error.response.data.message}`);
      } else {
        alert("فشل الحذف، حاول مرة أخرى.");
      }
    }
  };

  if (loading) {
    return <div className="text-center my-5">جاري التحميل...</div>;
  }

  if (orphans.length === 0) {
    return <div className="text-center my-5">لا يوجد أيتام لعرضهم.</div>;
  }

  return (
    <section className={Styles.orphan}>
      <div className={Styles.cards}>
        {orphans.map((orphan) => (
          <div key={orphan.Orphan_id}>
            <div className={Styles.card}>
              <Image
                src={`/image/${orphan.picture}`}
                alt=""
                width={100}
                height={100}
                className={Styles.image}
              />
              <p className={Styles.name}>
                {orphan.fname} {orphan.minit} {orphan.lname}
              </p>

              <div className={Styles.button}>
                <Modal orphan={orphan} />
                {/* <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600"
                  onClick={() => handleDelete(orphan.Orphan_id)}
                >
                  {" "}
                  حذف
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrphansCarousel;
