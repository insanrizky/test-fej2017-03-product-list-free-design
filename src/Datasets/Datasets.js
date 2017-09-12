import React, {Component} from 'react'
import Search from './Search'
import Filter from './Filter'
import DataList from './DataList'
import Preloader from '../Preloader'
import axios from 'axios'

class Datasets extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            filter: "",
            keyword: "",
            infiniteScroll: {
                minIndex: 0,
                increment: 5,
                display: true
            }
        }
        this.search = this.search.bind(this)
        this.deleteSearch = this.deleteSearch.bind(this)
        this.filter = this.filter.bind(this)
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    componentDidMount(){
        // Scroll Listener
        window.addEventListener('scroll', this.listenScrollEvent);

        var self = this
        axios.get('/data.json')
            .then(function (response) {
                let items = self.getItems(response.data)
                self.setState({
                    items: items
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
    };

    getItems = function(data){
        var items = []
        var min = this.state.infiniteScroll.minIndex
        var inc = this.state.infiniteScroll.increment
        var max = min + inc
        var display = true

        console.log(min)
        console.log(max)
        for(var i=0; i<=max; i++){
            if(i < data.length){
                items.push(data[i])
            }
        }

        if(max >= data.length){
            display = false
        }

        var self = this
        self.setState({
            infiniteScroll: {
                minIndex: max+1,
                increment: inc,
                display: display
            }
        })
        console.log(items)
        return items
    }
    
    listenScrollEvent(){
        if(this.state.infiniteScroll.display === true){
            if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
                console.log("Bottom!");

                var self = this
                axios.get('/data.json')
                    .then(function (response) {
                        let items = self.getItems(response.data)
                        self.setState({
                            items: items
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
    
    search = function(e){
        var keyword = e.target.value
        var self = this
        
        axios.get('/data.json')
            .then(function (response) {
                if(keyword !== ""){
                    console.log(response.data)
                    var result = response.data.filter(function(res) {
                        return res.name.toLowerCase().includes(keyword.toLowerCase());
                    });
                    console.log(result)
                    self.setState({
                        items: result,
                        filter: ""
                    })
                }else{
                    self.setState({
                        items: response.data,
                        filter: ""
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteSearch = function(e){
        var self = this
        axios.get('/data.json')
            .then(function (response) {
                self.setState({
                    items: response.data,
                    keyword: ""
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    filter = function(e){
        var keyword = e.target.value
        var self = this

        self.setState({ filter: keyword })
        if(keyword === "cheapest"){
            self.setState( state => {
                state.items.sort(function(a, b){
                    return parseFloat(a.price) - parseFloat(b.price)      
                })      
            })
        }else if(keyword === "highest"){
            self.setState( state => {
                state.items.sort(function(a, b){
                    return parseFloat(a.price) + parseFloat(b.price)      
                })      
            })
        }else if(keyword === "popular"){
            self.setState( state => {
                state.items.sort(function(a, b){
                    return parseFloat(a.views) + parseFloat(b.views)      
                })      
            })
        }
    }

    render(){
        return (
            <div className="container" ref="navbar" onScroll={ this.listenScrollEvent }>
                <Search keyword={ this.state.keyword } search={ this.search } deleteSearch={ this.deleteSearch }/>
                <Filter filter={ this.filter } category={ this.state.filter }/>

                <DataList items={ this.state.items }/>
                <Preloader display={ this.state.infiniteScroll.display }/>
            </div>
        )
    }
}

export default Datasets