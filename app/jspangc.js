import React from 'react';
// 类继承
export default class jspang extends React.Component{
    componentWillMount(){
        console.log(this.props)
        console.log(this.props.match.params.param)
        console.log('-------'+this.props.match.params.aaa)
    }
    render(){
        return(
            <div>C默认页面
                <p>{this.props.match.params.param }</p>
                <p>{this.props.match.params.aaa}</p>
            </div>
        )
    } 
}