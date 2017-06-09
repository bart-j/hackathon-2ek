import React from "react"
import Category from "./components/Category"
import autobind from "autobind-decorator"
import classnames from "classnames"

const inwoners = {
    Amsterdam: 844947,
    Eindhoven: 226868,
    Utrecht: 343038,
    Maastricht: 122753,
    "Den Haag": 524882
}

export default class Overview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            slide: 0,
            transform: "translateX(0px)"
        }
    }

    @autobind
    gotoSlide(i) {
        if (i < 0) {
            return
        }

        if (i > 8) {
            return
        }

        this.setState({
            slide: i,
            transform: `translateX(-${document.body.clientWidth * i}px)`
        })
    }

    render() {

        const items = data.map((item, i) => {
            return (
                <Category key={i} inwoners={inwoners[item.gemeente]} data={item} isActive={this.state.slide === i} />
            )
        })

        return (
            <div className="page">
                <div className={classnames({"page__prev": true, " ___is-hidden":this.state.slide === 0})} onClick={(e) => this.gotoSlide(this.state.slide - 1)}>
                    <svg id="Layer_1" version="1.1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40">
                        <path fill="#3A4F4F" d="M20,0C8.954,0,0,8.954,0,20s8.954,20,20,20s20-8.954,20-20S31.046,0,20,0z M20,38c-9.941,0-18-8.059-18-18S10.059,2,20,2s18,8.059,18,18S29.941,38,20,38z"></path>
                        <polygon fill="#3A4F4F" points="28,19 28,21 15.83,21 21.41,26.59 20,28 12,20 20,12 21.42,13.41 15.83,19 "></polygon>
                    </svg>
                </div>
                <div className={classnames({"page__next": true, " ___is-hidden":this.state.slide === 8})} onClick={(e) => this.gotoSlide(this.state.slide + 1)}>
                    <svg id="Layer_1" version="1.1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" >
                        <path fill="#3A4F4F" d="M20,0C8.954,0,0,8.954,0,20s8.954,20,20,20s20-8.954,20-20S31.046,0,20,0z M20,38c-9.941,0-18-8.059-18-18S10.059,2,20,2s18,8.059,18,18S29.941,38,20,38z"></path>
                        <polygon fill="#3A4F4F" points="24.17,19 18.58,13.41 20,12 28,20 20,28 18.59,26.59 24.17,21 12,21 12,19 "></polygon>
                    </svg>
                </div>
                <div className="categories ___bestuur" style={{height:"100%", width:"900%", transform:this.state.transform}}>
                    {items}
                </div>
            </div>
        )
    }
}