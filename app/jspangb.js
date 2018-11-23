import React from 'react';
import { Prompt } from 'react-router-dom';
// 类继承
export default class jspang extends React.Component{
    constructor (props) {
        super(props)
        this.state={
            status: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.setState({
            status:true
        })
    }

    render(){
        return(
            <div>
                <Prompt message="是否残忍离开" when={this.state.status}/>
                <p>B默认页面</p>
                <button onClick={this.handleChange}>启用</button>
            </div>
        )
    } 
}