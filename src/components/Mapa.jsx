import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Location from './Location';


const Mapa = ({casas}) => {

    const center = [37.76782350396153, -122.43582651510565]

    const casasValue = Object.values(casas)
    // console.log(casasValue);

  return (
    <div className='w-11/12 mx-auto md:w-full'>
        <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={false}
            style={ {width: 'auto', height: '85vh'} }
        >
            <TileLayer
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=DOR7RpOKc9zrwsmKvSys"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {casasValue.map( (casas, i) => (
                <Location 
                    key={i}
                    casas={casas}
                />
            ))}
            
        </MapContainer>
    </div>
  )
}

export default Mapa