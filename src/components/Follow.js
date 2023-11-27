import './Follow.css'
import TwitterLogo from "./icons/TwitterLogo";

export function Follow() {
    const SOCIALNETWORKS = [
        {label: "Twitter", target: "/", id: "twitter", icon: TwitterLogo},
    ]
    console.log(SOCIALNETWORKS[0]);
    return <div>
      <h2 className={"follow__title"}>Follow us</h2>
      <ul className={"networks__list"}>
          {SOCIALNETWORKS.map(network => {
                  return <li key={network.id} className={"network__item"}><a href={network.target}><TwitterLogo className={"follow__footer"} alt={network.label}/></a></li>
              }
          )}
      </ul>
    </div>;
}
