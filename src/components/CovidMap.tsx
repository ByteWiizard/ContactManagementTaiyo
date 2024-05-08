import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Country {
    country: string;
    countryInfo: {
        lat: number;
        long: number;
    };
    cases: number;
    deaths: number;
    recovered: number;
}

const CovidMap = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://disease.sh/v3/covid-19/countries");
            const data = await response.json();
            if (response.ok) {
                setCountries(data);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5 text-gray-800 underline">Country Specific Data</h1>
            <MapContainer center={[34, -40]} zoom={2} style={{ height: '90vh', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {countries.map((country, index) => (
                    <Marker key={index} position={[country.countryInfo.lat, country.countryInfo.long]}>
                        <Popup>
                            {country.country} <br /> Cases: {country.cases} <br /> Recovered: {country.recovered} <br /> Deaths: {country.deaths}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default CovidMap;