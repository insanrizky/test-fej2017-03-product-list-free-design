import React, {Component} from 'react'

class Filter extends Component{

    shouldComponentUpdate(nextProps) {
        const differentTitle = this.props.category !== nextProps.title
        return differentTitle;
    }
    render(){
        return (
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <label>Sort By</label>
                <select className="browser-default"
                    defaultValue={ this.props.category } onChange={ (e) => { this.props.filter(e) } }>
                    <option value="" disabled>-- Sort By --</option>
                    <option value="cheapest">Cheapest</option>
                    <option value="highest">Highest Price</option>
                    <option value="popular">Popular</option>
                </select>
            </div>
        )
    }
}

export default Filter