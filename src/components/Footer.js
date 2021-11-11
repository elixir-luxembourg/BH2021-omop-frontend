import './Footer.css';
import {Partners} from "./Partners";
import {Follow} from "./Follow";
import electrictorch_footer from '../images/electrictorch_footer.svg'

export function Footer() {
    return <footer className={"footer"}>
        <h1 className={"footer__title"}>beacon-clinical</h1>
        <div className={"footer__partners"}><Partners /></div>
        <div className={"footer__follow"}><Follow /></div>
        <div className={"footer__credits"}>
          <h3>@2021 Elixir</h3>
          <div className={"links"}>
            <a href="/">Terms of Service</a> | <a href="/">Privacy Policy</a>
          </div>
        </div>
        <div className={"lightIcons"}>
            <img className={"lightIcons__footer"} src={electrictorch_footer} alt={"electronictorch icon"}/>
        </div>
    </footer>;
}
