import { useEffect, useState } from 'react';

interface GlobalData {
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
}

const GlobalStats = () => {
    const [globalData, setGlobalData] = useState<GlobalData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://disease.sh/v3/covid-19/all");
            const data = await response.json();
            if (response.ok) {
                setGlobalData({
                    cases: data.cases,
                    deaths: data.deaths,
                    recovered: data.recovered,
                    active: data.active
                });
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-5 bg-white shadow-md rounded-lg text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">World Wide Data</h2>
            {globalData ? (
                <div>
                    <p><strong>Total Cases:</strong> {globalData.cases.toLocaleString()}</p>
                    <p><strong>Active Cases:</strong> {globalData.active.toLocaleString()}</p>
                    <p><strong>Recovered:</strong> {globalData.recovered.toLocaleString()}</p>
                    <p><strong>Deaths:</strong> {globalData.deaths.toLocaleString()}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default GlobalStats;