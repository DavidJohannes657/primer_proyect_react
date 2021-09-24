import React, {Component} from "react";
import axios from "axios";

class DatosApi extends Component{

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/javierortegon/datajson/characters')
        .then(resp => {
            this.setState({
                posts: resp.data
            })
        })
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts', {method:'get'})
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             posts: data
    //         })
    //     })
    // }

    render(){
        const {posts} = this.state
        return (
            <>
                {
                    posts.map( u => (
                        <>
                            <p>{u.id}</p>
                            <p>{u.name}</p>
                            <p>{u.age}</p>
                            <hr/>
                        </>
                    ))
                }
            </>
        )
    }

}

export default DatosApi;