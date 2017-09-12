import React, {Component} from 'react'

class DataList extends Component{

    sliceText = function(string, length){
        let slicedText = string.substring(0, length).toLowerCase()
        return (string.length > length) ? slicedText+"..." : slicedText
    }

    rupiah = function(numbers){
        var rupiah = '';		
        var angkarev = numbers.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }

    render(){
        var renderedItems = this.props.items.map((data, index) => 
            <div className="col s6 m4" key={index}>
                <div className="card">
                    <div className="card-image" style={{ overflow: "hidden", height: "150px" }}>
                        <img src={ data.image } alt={ data.name }/>
                        <span className="card-title">
                            { this.sliceText(data.name, 15) }
                            <p>Price: { this.rupiah(data.price) }</p>
                        </span>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="row">
                { renderedItems }
            </div>
        )
    }
}

export default DataList