
import { getGeoLocation, getWeather } from '../services/weather';

export const weather = async(req, res) => {
    const response: any = {};
    if (!req.query.address) {
        response.error = 'You must provide a address';

    } else {
        // console.log('inside request');
        await getWeather(req.query.address as string).then((data) => {
            response.data = {...data};
            // console.log(data);
        }).catch((error) => {
            response.error = error;
        });
    }

    res.send(response);
}

export const location = async(req, res) => {
    const response: any = {};
    if (!req.query.address) {
        response.error = 'You must provide a address';

    } else {
        // console.log('inside request');
        await getGeoLocation(req.query.address as string).then((data) => {
            response.data = {...data.data[0]};
            // console.log(data);
        }).catch((error) => {
            response.error = error;
        });
    }

    res.send(response);
}