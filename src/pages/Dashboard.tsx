import Sidebar from "../components/Sidebar"
import LineChart from "../components/LineChart"
import CovidMap from "../components/CovidMap"
import GlobalStats from "../components/GlobalStats"
const Dashboard = () => {
    return (
        <div className="md:flex md:h-screen">
            <Sidebar />
            <div className="md:overflow-auto w-full">
                {/* Firstly Global Over all Data will be shoen here and then fluctuations and country wise data */}
                <div>
                    <GlobalStats />
                </div>
                <LineChart />
                <div className="mx-10">
                    <CovidMap />
                </div>
            </div>
        </div>
    )
}

export default Dashboard