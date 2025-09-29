import SideBar from "@/components/dashboard/sidbar"
import OrphanList from "@/components/dashboard/orphanList"
export default function orphanView() {
    return(
        <div
           style={{
           backgroundColor: "rgb(233,241,252)",
           display: "flex",
           direction: "ltr",
      }}>
            <SideBar></SideBar>
            <OrphanList></OrphanList>
        </div>
    )
}