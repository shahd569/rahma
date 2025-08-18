import GuaranteeHeroo from "@/components/(guarantee)/hero/hero";
import Navbar from "@/components/Navbar/Navbar";
import Type from "@/components/(guarantee)/Type/type";
import Learnning from "@/components/(guarantee)/learnning/learnning";
import Form from "@/components/(guarantee)/Form/form";
import Footer from "@/components/Footer/Footer";

export default function Sponsorship() {
  return (
    <div>
      <Navbar />
      <GuaranteeHeroo />
      <Type></Type>
      <Learnning />
      <Form />
      <Footer />
    </div>
  );
}
