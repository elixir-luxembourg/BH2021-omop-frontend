import {REQUEST_DISEASE_TEMPLATE} from "./beaconConfig.js";

const ENDPOINT_INDIVIDUALS = '/individuals'

export class BeaconHandler {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    requestDisease = (diseaseCode, onsetStart, onsetEnd, genderCode) => {
        const headers = {'Content-Type': 'application/json'};
        let body = {...REQUEST_DISEASE_TEMPLATE};
        body.query.requestParameters.individual.sex = genderCode;
        body.query.requestParameters.individual.diseases[0].id = diseaseCode;
        body.query.requestParameters.individual.ageOfOnset.min = onsetStart;
        body.query.requestParameters.individual.ageOfOnset.max = onsetEnd;
        body = JSON.stringify(body)
        return fetch(this.baseUrl += ENDPOINT_INDIVIDUALS, {
            method: 'POST',
            headers,
            body
        })

    }
}

export class FakeBeaconHandler {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    requestDisease = (diseaseCode, onsetStart, onsetEnd, genderCode) => {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({count: 102});
            }, 2000);
        });

    }
}