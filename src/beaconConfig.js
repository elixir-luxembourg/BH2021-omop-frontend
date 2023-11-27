export const BEACON_BASE_URL = "http://localhost"
export const DISEASES_LIST = [
    {code: "SNOMED:840539006", label: "COVID-19"},
    {code: "SNOMED:49049000:", label: "Parkinson's Disease"},
    {code: "SNOMED:26929004", label: "Alzheimer"},
]
export const REQUEST_DISEASE_TEMPLATE = {
    "$schema": "../beaconRequestBody.json",
    "meta": {
        "apiVersion": "2.0.0-draft.4",
        "requestedSchemas": [
            {
                "entityType": "individual",
                "schema": "ga4gh-beacon-default-individual-2.0.0-draft.4"
            }
        ]
    },
    "query": {
        "requestParameters": {
            "individual": {
                "id": "",
                "sex": null,
                "diseases": [
                    {
                        "id": null
                    }
                ],
                "ageOfOnset": {
                    "min": null,
                    "max": null
                }
            }
        },
        "filters": [
            {
                "id": "CDM:1147028",
                "operators": ">=",
                "value": "1970"
            }
        ],
        "includeResultsetResponses": "ALL",
        "pagination": {
            "skip": 0,
            "limit": 10
        },
        "requestedGranularity": "count"
    }
}
