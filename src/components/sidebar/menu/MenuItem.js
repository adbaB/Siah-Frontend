import React, {useState} from 'react';
import styled from 'styled-components';
import { SidebarMenuItemData } from '../../../data/SidebarMenuItemData';
import { NavLink } from "react-router-dom";

const ListItem = styled.div`
    width: 18.75rem;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.188rem;
    margin-bottom: 1.125rem;
    cursor: pointer;
    display: flex;
`
const GreenLine = styled.div`
    width: 10px;
    height: 24px;
    background: #2AC227;
`
const White = styled.div`
    width: 10px;
    height: 24px;
`
const MenuItem = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }

  return (
    <div>
      {
        SidebarMenuItemData.map((item, index)=>{
          return(
            <NavLink to={item.path}
            style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItem key={index} onClick={() => toggle(index)}>
                  <span>{selected === index ? <GreenLine/> : <White/>}</span>
                  {item.icon}
                  {item.title}
              </ListItem>
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default MenuItem
