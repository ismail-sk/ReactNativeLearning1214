import React, { Component, useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
// import { robots } from './robots';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log("1 constructor");
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(Response=> {
            return Response.json();
        }).then(users => {
            this.setState({ robots: users})
        })
       // this.setState({ robots: robots})
        console.log("2 componentDidMount");
    }
    onSerchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log("3 render");// event.target.value

        if (this.state.robots.length === 0) {
            return <h1>LOADING...</h1>
        }
        else {
            return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSerchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
        }


    }
}

export default App;