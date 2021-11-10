import './Menu.css'

export function Menu(props) {
    const PAGES = [
        {label: "home", target: "#", id: "home"},
        {label: "about", target: "#", id: "about"},
        {label: "contact", target: "#", id: "contact"},
    ]
    return <ul className={"menu"}>
        {PAGES.map(page => {
                const isActive = page.id === props.activePage ? 'menu__item active' : 'menu__item'
                return <li key={page.id} className={isActive}><a href={page.target}>{page.label}</a></li>
            }
        )}
    </ul>;
}