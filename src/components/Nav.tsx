import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";



const NavWrapper =styled.nav`
  line-height: 24px; 
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul{
  display: flex;
  > li{
    > a{
      padding: 4px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        width: 24px;
        height: 24px;
      } 
    }
    width: 33.33%;
    text-align: center;
    
  }
}`
const Nav = ()=>{
    return <NavWrapper>
    <ul>
        <li>
            <Link to="/tags">
                <Icon name='tag'/>
                标签页</Link>
        </li>
        <li>

            <Link to="/money">
                <Icon name='money'/>
                记账页</Link>
        </li>
        <li>

            <Link to="/statistics">
                <Icon name='chart'/>
                统计页</Link>
        </li>
    </ul>
    </NavWrapper>
}
export default Nav