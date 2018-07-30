/**
 * @author liuyanhao
 * @date 2018-07-16
 * @Description:
 */
import React, { Component } from 'react';

export default class Simple extends Component{
    state = {
        title: this.props.title
    }
    render(){
        const {title} = this.state
        return <div>{title}</div>
    }
}
