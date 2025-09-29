import DonationTable from "@/components/dashboard/donationView"
import SideBar from "@/components/dashboard/sidbar"
export default function Donations() {
    return(
        <div
         style={{
         backgroundColor: "rgb(233,241,252)",
         display: "flex",
         direction: "ltr",
      }}>
           <SideBar></SideBar>
           <DonationTable></DonationTable> 
        </div>
    )
}