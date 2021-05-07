import React from "react";
import {Placemark, Map, YMaps} from "react-yandex-maps";
import {mapDataMocks} from "../../mocks/mocks";

const YandexMap = () => {
  return (
    <div className="contacts__map">
      <YMaps>
        <Map
          defaultState={{
            center: mapDataMocks.CENTER,
            zoom: mapDataMocks.ZOOM,
          }}
          width={mapDataMocks.WIDTH}
          height={mapDataMocks.HEIGHT}
        >
          <Placemark geometry={mapDataMocks.MARK} />
        </Map>
      </YMaps>
    </div>
  );
};

YandexMap.displayName = `YandexMap`;

export default YandexMap;
