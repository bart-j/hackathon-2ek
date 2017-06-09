import React from "react"
import autobind from "autobind-decorator"
import classnames from "classnames"

export default class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            q: ""
        }
    }

    @autobind
    onChange(e) {
        this.setState({ q: e.target.value })
    }

    render() {
        return (
            <div className="search" style={{visibility:"visible"}}>
                <h1><span>🏡</span>Vul je gemeente in!</h1>
                <div className={classnames({"input": true, "___filled-in": this.state.q})}>
                    <form method="GET" action="/overview">
                        <input type="text" name="q" placeholder="bijv. Maastricht" onChange={this.onChange} autoFocus autoComplete="off" value={this.state.q} />
                        <label>en druk op<kbd>Enter</kbd></label>
                    </form>
                </div>
            </div>
        )
    }
}