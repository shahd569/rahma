import Sidbar from "@/components/dashboard/sidbar";
import Home from "@/components/dashboard/home";
export default function Test() {
  return (
    <div
      style={{
        backgroundColor: "rgb(233,241,252)",
        display: "flex",
        direction: "ltr",
      }}
    >
      <Sidbar></Sidbar>
      <Home></Home>
    </div>
  );
}
