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

        let category
        switch (this.state.slide) {
            case 0:
                category = "___bestuur"
                break
            case 1:
                category = "___veiligheid"
                break
            case 2:
                category = "___verkeer"
                break
            case 3:
                category = "___economie"
                break
            case 4:
                category = "___bestuur"
                break
            case 5:
                category = "___veiligheid"
                break
            case 6:
                category = "___verkeer"
                break
            case 7:
                category = "___economie"
                break
            default:
                category = "___bestuur"
        }

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
                <div className={classnames({"categories": true, [category]: true})} style={{height:"100%", width:"900%", transform:this.state.transform}}>
                    {items}
                </div>
                <nav className="nav">
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 0})}>
                        <label>Sociaal domein</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
                        </svg>
                    </div>
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 1})}>
                        <label>Bestuur en ondersteuning</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                          <path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path>
                        </svg>
                    </div>
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 2})}>
                        <label>Verkeer, vervoer en waterstaat</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z"></path>
                        </svg>
                    </div>
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 3})}>
                        <label>Volkshuisvesting, ruimtelijke ordening en stedelijke vernieuwing</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path>
                        </svg>
                    </div>
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 4})}>
                        <label>Volksgezondheid en milieu</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"></path>
                        </svg>
                    </div>
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 5})}>
                        <label>Sport, cultuur en recreatie</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"></path>
          <circle cx="16.5" cy="5.5" r="2.5"></circle>
                        </svg>
                    </div>
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 6})}>
                        <label>Onderwijs</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
                        </svg>
                    </div>
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 7})}>
                        <label>Veiligheid</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                        </svg>
                    </div>
                    <div className={classnames({"nav__item":true, "___is-active": this.state.slide === 8})}>
                        <label>Economie</label>
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                        </svg>
                    </div>
                </nav>
            </div>
        )
    }
}