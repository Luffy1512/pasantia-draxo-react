import {Marker, Popup} from 'react-leaflet';

const Position = ({casa}) => {
    const {location, name} = casa
  return (
    <Marker
        position={[location.latitude, location.longitude]}
    >
        <Popup>
            {name}
        </Popup>
    </Marker>
  )
}

export default Position