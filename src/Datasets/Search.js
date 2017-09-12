import React, {Component} from 'react'

const styles = {
    fontBlack: {
        color: "#000"
    }
}
class Search extends Component{
    render(){
        return (
            <div className="container" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <nav className="grey lighten-5">
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" defaultValue={ this.props.keyword } style={styles.fontBlack} placeholder="Type your keywords here..." onChange={ (e) => { this.props.search(e) }}/>
                                <label className="label-icon" htmlFor="search" style={{ top: "-10px" }}><i className="material-icons" style={ styles.fontBlack }>search</i></label>
                                <i className="material-icons" style={ styles.fontBlack } onClick={ (e) => { this.props.deleteSearch(e) } }>close</i>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Search