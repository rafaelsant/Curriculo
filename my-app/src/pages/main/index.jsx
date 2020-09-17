import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css'

export default class Main extends Component{
    state ={
        data:{},
    };
    componentDidMount(){
        this.loadAPI();
    }
    loadAPI = async() =>{
        const response = await api.get(`/users/rafaelsant`);
        console.log(response)
        const {...data} = response.data;
        this.setState({data})
    }
    render(){
        const {data} = this.state;
        console.log(data.bio);
        return(
            <div>
                    
            </div>
            
        );
    }
};