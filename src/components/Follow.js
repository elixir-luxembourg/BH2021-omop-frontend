import './Follow.css'
import twitter from '../images/icons/twitter.svg'

export function Follow() {
    const SOCIALNETWORKS = [
        {label: "Twitter", target: "/", id: "twitter", icon: twitter},
    ]
    console.log(SOCIALNETWORKS[0]);
    return <div>
      <h2 className={"follow__title"}>Follow us</h2>
      <ul className={"networks__list"}>
          {SOCIALNETWORKS.map(network => {
                  return <li key={network.id} className={"network__item"}><a href={network.target}><img className={"follow__footer"} src={network.icon} alt={network.label}/></a></li>
              }
          )}
      </ul>
    </div>;
}
