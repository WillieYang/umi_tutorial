import React from 'react';
import Link from 'umi/link'
import Styles from './index.css';

const Navigation = () => 
    <h1 className = {Styles.NavigationBar}>
        <Link className = {Styles.NavigationLink} to="/">首页</Link>
        <Link className = {Styles.NavigationLink} to="/user">在线制图</Link>
        <Link className = {Styles.NavigationLink} to="/user">新闻中心</Link>
        <Link className = {Styles.NavigationLink} to="/user">资源中心</Link>
        <Link className = {Styles.NavigationLink} to="/user">用户中心</Link>
        <Link className = {Styles.NavigationLink} to="/user">三维地球</Link>
        <Link className = {Styles.NavigationLink} to="/user">帮助中心</Link>
    </h1>
export default Navigation;