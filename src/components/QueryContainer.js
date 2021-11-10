import './QueryContainer.css';


function QueryBoxMeasurement() {
    return <form className={"queryBox"}>
        <h3 className={"queryBox__title"}>Having a specific measurement</h3>
        <div className={"inputGroup"}><label>measurement</label>
            <select>
                <option>Oxygen saturation</option>
            </select>
        </div>
        <div className={"inputGroup"}>
            <p><input type={"checkbox"}/> <label>include descendants</label></p>
        </div>
        <div className={"inputSubmitButtonGroup"}>
            <input className={"button"} type={"submit"} value={"search"}/>
        </div>
    </form>;
}

function QueryBoxValue() {
    return <form className={"queryBox"}>
        <h3 className={"queryBox__title"}>With a specific value</h3>
        <div className={"inputGroup"}>

            <label>measurement</label>
            <select>
                <option>Oxygen saturation</option>
            </select>
        </div>
        <div className={"inputGroup"}>

            <label>value</label>
            <input type={"number"}/>
        </div>
        <div className={"inputGroup"}>
            <p><input type={"checkbox"}/> <label>include descendants</label></p>
        </div>
        <div className={"inputSubmitButtonGroup"}>
            <input className={"button"} type={"submit"} value={"search"}/>
        </div>

    </form>;
}

export function QueryContainer() {
    return <main className={"queryContainer"}>
        <h2 className={"queryContainer__title"}>Search Dataset</h2>
        <div className={"queryBoxGrid"}>
            <QueryBoxMeasurement/>
            <QueryBoxValue/>
        </div>
    </main>;
}