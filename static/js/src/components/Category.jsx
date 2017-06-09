import React from "react"
import { uitleg, repeat } from "../lib/helpers"
import autobind from "autobind-decorator"
import classnames from "classnames"

const currencyFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
})

const digitFormatter = new Intl.NumberFormat("nl-NL", {
  maximumFractionDigits: 0
})

const units = {
    null: { name: "Euro's", fraction: 1 },
    boeing: { name: "Boeing 747's", fraction: 180000000 },
    huizen: { name: "Huizen", fraction: 250000 },
    koeien: { name: "Koeien", fraction: 1000 },
    koffie: { name: "Bakkies koffie", fraction: 2.5 }
}

export default class Category extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            unit: null
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.forceUpdate(), 100)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    @autobind
    toggle(unit) {
        this.setState({ unit })
    }

    render() {
        const { data, inwoners } = this.props
        
        const now = new Date()
        const startYear = new Date(now.getFullYear(), 0, 1)
        const endYear = new Date(now.getFullYear(), 11, 31)

        const fraction = (now.getTime() - startYear.getTime()) / (endYear.getTime() - startYear.getTime())

        const current = fraction * data.bedrag

        let content

        switch (this.state.unit) {
            case "boeing":
                content = (
                    <div className="category__counter">
                        <div className="counter">
                            <div>
                                <h1>{digitFormatter.format(data.bedrag / units[this.state.unit].fraction )} ✈️</h1>
                            </div>
                        </div>
                    </div>
                )
                break
            case "huizen":
                content = (
                    <div className="category__counter">
                        <div className="counter">
                            <div>
                                <h1>{digitFormatter.format(current / units[this.state.unit].fraction )} 🏠</h1>
                            </div>
                        </div>
                    </div>
                )
                break
            case "koeien":
                content = (
                    <div className="category__counter">
                        <div className="counter">
                            <div>
                                <h1 onClick={(e) => this.toggle("kamelen")}>{digitFormatter.format(current / units[this.state.unit].fraction )} 🐄</h1>
                            </div>
                        </div>
                    </div>
                )
                break
            case "kamelen":
                content = (
                    <div className="category__counter">
                        <div className="counter">
                            <div>
                                <h1>{digitFormatter.format(current / 1500 )} 🐫</h1>
                            </div>
                        </div>
                    </div>
                )
                break
            case "koffie":
                content = (
                    <div className="category__counter">
                        <div className="counter">
                            <div>
                                <h1>{digitFormatter.format(current / units[this.state.unit].fraction )} ☕</h1>
                            </div>
                        </div>
                    </div>
                )
                break
            default:
                content = (
                    <div className="category__counter">
                        <div className="counter">
                            <div>
                                <h1>{currencyFormatter.format(current)}</h1>
                                <div className="counter__sub">
                                    <div>
                                        <h2>{currencyFormatter.format(data.bedrag)}</h2>
                                        <h3>voor heel 2017<br />en {currencyFormatter.format(data.bedrag / inwoners)} per inwoner</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }

        let selected
        if (this.state.unit && units[this.state.unit]) {
            selected = (
                <div className={classnames({"units__unit":true, "___is-selected": true})} onClick={(e) => this.toggle(this.state.unit)}>{units[this.state.unit].name}</div>
            )
        }

        let notSelected = []
        Object.keys(units).forEach((unit, i) => {
            if (unit === this.state.unit) {
                return false
            }

            notSelected.push((
                <div key={i} className="units__unit" onClick={(e) => this.toggle(unit)}>{units[unit].name}</div>
            ))
        })

        return (
            <div className={classnames({"category": true, "___is-active": this.props.isActive})}>
                <div className="category__info">
                    <div className="category__town">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path>
                        </svg>
                        <h2>{data.gemeente}</h2>
                    </div>
                    <h1>{data.post}</h1>
                    <p>{uitleg[data.post]}</p>
                </div>
                {content}
                <div className="category__units">
                    Hoeveel is dat in&nbsp;<div className="units">
                        {selected}
                        {notSelected}
                    </div>
                    ?
                </div>
            </div>
        )
    }
}