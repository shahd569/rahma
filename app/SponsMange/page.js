import Sidbar from "@/components/dashboard/sidbar";
import Table from "@/components/dashboard/sponsorshipMange";
import Cards from "@/components/dashboard/card";
export default function SponsMange() {
  return (
    <div
      style={{
        backgroundColor: "rgb(233,241,252)",
        display: "flex",
        direction: "ltr",
      }}
    >
      <Sidbar></Sidbar>
      <div>
        <Table></Table>
        <Cards></Cards>
      </div>
    </div>
  );
}
