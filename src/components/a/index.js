/**
 * Created by lihanying on 2018/7/31.
 */
import React from 'react';
import {Link} from 'react-router-dom'

export default class extends React.Component{
    render(){
        return(
            <div>
                 <p>我是 AAAAA 界面....</p>
                 <div>
                     <Link to="/BHome">点击跳转B界面</Link>
                     <Link to="/CHome">点击跳转C界面</Link>
                 </div>
            </div>
        )
    }
}