import React, {useState, useEffect, useRef} from "react";
import './mapStyle.css'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Typography, Col, Row } from 'antd';
const { Title, Text } = Typography;

export default function MapBox({location}) {
    const [marker, setMarker] = useState();
    const [coord, setCoord] = useState([12.567898, 55.67583]);

    // TODO: replace with your access token
    mapboxgl.accessToken = "your api key mapbox";
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(8);

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: coord,
            zoom: zoom
        });
        const marker = new mapboxgl.Marker(map.current)
        .setLngLat(coord) //longitude and latitude
        .addTo(map.current);
        setMarker(marker);
    }, []);

    useEffect(()=>{
        if(marker != undefined) {
            marker.remove().setLngLat(stores[location]) //longitude and latitude
                .addTo(map.current)
        }
    }, [location])

    const stores = {
        central: [12.567898, 55.67583],
        norrebro: [12.553806, 55.699299],
        airport: [12.650784, 55.618042]
    }

    return <>
        <div className="container-fluid">
            <Row gutter={16} align="middle" >
                <Col span={3}><Title style={{margin: 0}} level={4}>Map view</Title></Col>
                <Col span={9}><Text strong>Zoom:</Text> {zoom}</Col>
            </Row>
        </div>

        <div  ref={mapContainer} className="map-container" />
    </>;
}

