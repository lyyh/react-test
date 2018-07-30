/**
 * @author liuyanhao
 * @date 2018-07-30
 * @Description:
 */
import React, { Component } from 'react';
import './index.less'
export default class LessCr extends Component{
    state = {
        title: this.props.title
    }
    render(){
        const {title} = this.state
        return (
            <section>
                <div className={'box box-dark'}>123<h1>123</h1><span className={'post--actived'}>post actived</span></div>
                <ParentSelector/>
            </section>
        )
    }
}


// 父选择器
class ParentSelector extends Component{

    render(){
        return (
            <section className={'ps__section'}>
                <div className={'inner'}>
                    <a href="#">parentSelector</a>
                </div>
            </section>
        )

    }
}
