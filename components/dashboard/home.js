"use client";
import CountUp from "react-countup";
import Image from "next/image";
import DashboardImg from "@/public/image/dashboard.jpg";
import Styles from "./home.module.css";
import DonationChart from "./DonationChart";
import PieChrt from "./Piechart";
// import dbConnect from '../lib/dbConnect';
// import Donation from '../models/Donation';

const Dashboard = () => {
  return (
    <div className={Styles.home}>
      <div>
        <Image src={DashboardImg} alt="dashboard" />
      </div>
      <div className={Styles.counters}>
        <div className={Styles.conter}>
          <h6>إجمالي التبرعات المستلمة</h6>
          <CountUp start={0} end={54000} duration={2} />
        </div>
        <div className={Styles.conter}>
          <h6>عدد المتبرعين</h6>
          <CountUp start={0} end={150} duration={2} />
        </div>
        <div className={Styles.conter}>
          <h6>عدد الكفالات النشطة</h6>
          <CountUp start={0} end={50} duration={2} />
        </div>
        <div className={Styles.conter}>
          <h6>عدد الأيتام</h6>
          <CountUp start={0} end={15} duration={2} />
        </div>
      </div>
      <div className={Styles.Bar}>
        <DonationChart />
      </div>
      <div className={Styles.pie}>
        <PieChrt></PieChrt>
      </div>
    </div>
  );
};

export default Dashboard;
