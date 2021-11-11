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
 const FAKE_RESPONSE = {
    "$schema": "../beaconCountResponse.json",
    "meta": {
        "beaconId": "org.example.beacon.v2",
        "apiVersion": "2.0.0-draft.4",
        "returnedSchemas": [{ "entityType": "individual", "schema": "ga4gh-beacon-default-individual-2.0.0-draft.4" }],
        "receivedRequestSummary": {
            "apiVersion": "2.0.0-draft.4",
            "requestedGranularity": "count",
            "requestedSchemas": [{ "entityType": "individual", "schema": "ga4gh-beacon-default-individual-2.0.0-draft.4" }],
            "pagination": {
                "skip": 0,
                "limit": 10
            },
            "filters": [
                {
                    "id": "CDM:1147028",
                    "operators": ">=",
                    "value": "1970"
                }
            ],
            "requestParameters": {
                "individual": {
                    "id": "",
                    "sex": "NCIT:C16576",
                    "diseases": [
                        {
                            "id": "SNOMED:1234567"
                        }
                    ],
                    "ageOfOnset": {
                        "min": 30,
                        "max": 40
                    }
                }
            }
        },
        "returnedGranularity": "count"
    },
    "responseSummary": {
        "exists": true,
        "numTotalResults": 25355
    }
}
export class FakeBeaconHandler {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }


    requestDisease = (diseaseCode, onsetStart, onsetEnd, genderCode) => {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {

                resolve(FAKE_RESPONSE);
            }, 2000);
        });

    }
}

