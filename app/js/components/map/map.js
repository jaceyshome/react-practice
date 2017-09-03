import { GoogleMapLoader, GoogleMap, Marker } from "../../../../node_modules/react-google-maps/lib";
import InfoBox  from "../../../../node_modules/react-google-maps/lib/addons/InfoBox";
import mapConfig from "../../../data/map-config.json";

//https://github.com/istarkov/google-map-react
const propTypes = {};

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
const Map = (props) => {

    return (
        <div style={{ "height": `520px` }} className="b-map">

            <GoogleMapLoader

                className="b-container__children"

                containerElement={
                    <div
                        {...props.containerElementProps}
                        style={{height: `100%` }}
                    />
                }
                googleMapElement={
                    <GoogleMap
                        ref={(map) => console.log(map)}
                        defaultZoom={mapConfig.zoomLevel}
                        defaultCenter={new google.maps.LatLng(
                            mapConfig.geolocation.lat,
                            mapConfig.geolocation.lng
                        )}
                        defaultOptions={{
                            styles: mapConfig.style,
                            disableDefaultUI: mapConfig.disableDefaultUI
                        }}
                        onClick={props.onMapClick}
                    >

                        <Marker {...mapConfig.marker}
                            onRightclick={() => props.onMarkerRightclick(index)}
                        />

                        <InfoBox
                            defaultPosition={new google.maps.LatLng(
                                mapConfig.infoBox.position.lat,
                                mapConfig.infoBox.position.lng
                            )}
                            options={{ closeBoxURL: ``, enableEventPropagation: true }}
                        >
                            <div onClick={props.onClickFromChildrenOfInfoBox} >
                                <div style={{ fontSize: `14px`, fontWeight: `bold`, fontColor: `#000000` }}
                                     dangerouslySetInnerHTML={{__html: mapConfig.infoBox.text}} >
                                </div>
                            </div>
                        </InfoBox>


                    </GoogleMap>
                }
            />
        </div>

    );
};


Map.propTypes = propTypes;

export default Map;
