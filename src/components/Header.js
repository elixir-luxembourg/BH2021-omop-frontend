import './Header.css';
import {Menu} from "./Menu";
import electricTorch from '../images/electrictorch.svg';
import chart from '../images/chart.svg';
import bottle from '../images/bottle.svg';
import clinical from '../images/clinical.svg';
import elixirLogin from '../images/login-button-orange-small.png';
import BottomHeader from "./icons/BottomHeader";

export function Header() {
    return <header className={"header"}>
        <Menu activePage={'home'}/>
        <h1 className={"header__title"}>beacon-clinical</h1>
        <h2 className={"header__subtitle"}>casting a light on clinical data</h2>
        <div className={"lightIcons"}>
            <img className={"lightIcons__torch"} src={electricTorch} alt={"electric torch icon"}/>
            <img className={"lightIcons__chart"} src={chart} alt={"chart icon"}/>
            <img className={"lightIcons__bottle"} src={bottle} alt={"bottle icon"}/>
            <img className={"lightIcons__clinical"} src={clinical} alt={"clinical icon"}/>
        </div>
        <img className={"header__elixirLogin"} src={elixirLogin} alt={"elixir login"}/>
        <BottomHeader className={"header__bottomImage"} alt={"separator"} />
    </header>;
}
