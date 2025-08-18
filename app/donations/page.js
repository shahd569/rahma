import DonateType from "@/components/donationType/donation";
import DonateForm from "@/components/donationForm/donate";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default function Donations() {
  return (
    <div>
      <Navbar />
      <DonateType />
      <DonateForm />
      <Footer />
    </div>
  );
}
