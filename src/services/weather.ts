import axios from 'axios';
import { ConfigTokens, APIPaths } from '../../config/tokens';
import { GeoCodingResponse } from '../interface/MapResponse';
import { WeatherResponse } from '../interface/WeatherResponse';

export const getWeather = async (address: string): Promise<WeatherResponse> => {
    const response = await axios.request<WeatherResponse>({
        method: 'GET',
        url: `${APIPaths.weather}/current?query=${address}&access_key=${ConfigTokens.weatherAccessKey}`
    });

    return response.data;
}

export const getGeoLocation = async (address: string): Promise<GeoCodingResponse> => {
    const response = await axios.request<GeoCodingResponse>({
        method: 'GET',
        url: `${APIPaths.map}/v1/forward?query=${address}&access_key=${ConfigTokens.mapAccessKey}&limit=1`
    });

    return response.data;
}