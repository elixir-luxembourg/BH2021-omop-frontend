import './Partners.css'

export function Partners() {
    const PARTNERS = [
        {label: "LCSB", target: "https://wwwen.uni.lu/research/focus_areas/luxembourg_centre_for_systems_biomedicine_lcsb", id: "lcsb"},
        {label: "ELIXIR", target: "https://elixir-europe.org/", id: "elixir"},
        {label: "EGA", target: "https://ega-archive.org/", id: "ega"},
        {label: "BSC", target: "https://www.bsc.es/", id: "bsc"},
    ]

    return <div>
      <h2 className={"partners__title"}>Partners</h2>
      <ul className={"partners__list"}>
          {PARTNERS.map(partner => {
                  return <li key={partner.id} className={"partner__item"}><a href={partner.target}>{partner.label}</a></li>
              }
          )}
      </ul>
    </div>;
}
