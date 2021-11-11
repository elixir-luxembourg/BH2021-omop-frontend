import './QueryContainer.css';
import clipboard from '../images/clipboard.svg';
import dash from '../images/dash.svg';
import syringe from '../images/syringe.svg';
import {FakeBeaconHandler} from "../service";
import {useState} from "react";

const beaconHandler = new FakeBeaconHandler()

function QueryBoxMeasurement() {
    return <form className={"queryBox"}>
        <img className={"queryBox__icon"} src={clipboard} alt={"clipboard-icon"}/>
        <h3 className={"queryBox__title"}>Having a specific measurement</h3>
        <div className={"inputGroup"}>
            <label>measurement</label>
            <select className={"inputGroup__select"}>
                <option>Oxygen saturation</option>
                <option>Heart rate</option>
            </select>
        </div>
        <div className={"inputGroup"}>
            <p>
                <label className={"inputGroup__labelCheckBox"}>include descendants
                    <input className={"inputGroup__checkbox"} type={"checkbox"}/>
                    <span className={"inputGroup__checkmark"}></span>
                </label>
            </p>
        </div>
        <div className={"inputSubmitButtonGroup"}>
            <input className={"button"} type={"submit"} value={"search"}/>
        </div>
    </form>;
}

function QueryBoxValue() {
    return <form className={"queryBox"}>
        <img className={"queryBox__icon"} src={dash} alt={"dash-icon"}/>
        <h3 className={"queryBox__title"}>With a specific value</h3>
        <div className={"inputGroup"}>

            <label>measurement</label>
            <select className={"inputGroup__select"}>
                <option>Oxygen saturation</option>
            </select>
        </div>
        <div className={"inputGroup"}>

            <label>value</label>
            <input className={"inputGroup__input"} type={"number"}/>
        </div>
        <div className={"inputGroup"}>
            <p>
                <label className={"inputGroup__labelCheckBox"}>include descendants
                    <input className={"inputGroup__checkbox"} type={"checkbox"}/>
                    <span className={"inputGroup__checkmark"}></span>
                </label>
            </p>
        </div>
        <div className={"inputSubmitButtonGroup"}>
            <input className={"button"} type={"submit"} value={"search"}/>
        </div>

    </form>;
}

function QueryBoxDisease() {

    const [diseaseCode, setDiseaseCode] = useState();
    const [genderCode, setGenderCode] = useState();
    const [onsetStart, setOnsetStart] = useState();
    const [onsetEnd, setOnsetEnd] = useState();
    const [loading, setLoading] = useState(false);
    const [resultCount, setResultCount] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setResultCount(null);
        beaconHandler.requestDisease(diseaseCode, onsetStart, onsetEnd, genderCode).then((body) => {
            setResultCount(body.count);
            setLoading(false);
        });
    }
    const resultClass = resultCount !== null && resultCount > 0 ? 'results__block results__block--positive' : 'results__block  results__block--negative';
    return <form className={"queryBox"}>
        <img className={"queryBox__icon"} src={syringe} alt={"dash-icon"}/>
        <h3 className={"queryBox__title"}>For a specific disease and onset age</h3>
        <div className={"inputGroup"}>

            <label>disease</label>
            <select className={"inputGroup__select"}>
                <option>COVID-19</option>
            </select>
        </div>
        <div className={"inputGroup"}>

            <label>characteristic</label>
            <select className={"inputGroup__select"}>
                <option>Gender</option>
            </select>
        </div>
        <div className={"inputGroup"}>

            <label>value</label>
            <select className={"inputGroup__select"}>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
            </select>
        </div>
        <div className={"inputGroup"}>
            <label>onset age range</label>
            <div className={"inputGroup__inline"}>
                <input className={"inputGroup__inputSmall"} type={"number"}/>
                <span>to</span>
                <input className={"inputGroup__inputSmall"} type={"number"}/>
            </div>
        </div>
        <div className={"inputGroup"}>
            <p>
                <label className={"inputGroup__labelCheckBox"}>include descendants
                    <input className={"inputGroup__checkbox"} type={"checkbox"}/>
                    <span className={"inputGroup__checkmark"}></span>
                </label>
            </p>
        </div>

        <div className={"inputSubmitButtonGroup"}>
            <input onClick={onSubmit} className={"button"} type={"submit"} value={"search"}/>
        </div>
        {
            loading && <div className="loader">Loading...</div>
        }
        {
            resultCount !== null && <div className={"results"}><h4 className={"results__title"}>Results</h4>
                <p className={resultClass}><span className={'results__count'}>{resultCount}</span> individuals found</p>
            </div>
        }
    </form>;
}

export function QueryContainer() {
    return <main className={"queryContainer"}>
        <h2 className={"queryContainer__title"}>Search Dataset</h2>
        <div className={"queryBoxGrid"}>
            <QueryBoxMeasurement/>
            <QueryBoxValue/>
            <QueryBoxDisease/>
        </div>
    </main>;
}