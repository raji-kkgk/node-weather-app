export interface GeoCodingResponse {
    data: Datum[];
}

export interface Datum {
    latitude:            number;
    longitude:           number;
    type:                string;
    name:                string;
    number:              null;
    postal_code:         null;
    street:              null;
    confidence:          number;
    region:              string;
    region_code:         string;
    county:              string;
    locality:            string;
    administrative_area: null;
    neighbourhood:       null | string;
    country:             string;
    country_code:        string;
    continent:           string;
    label:               string;
}
