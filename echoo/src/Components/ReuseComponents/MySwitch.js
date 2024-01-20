import React, { useEffect, useState } from 'react'
import { Switch, Space } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { PropTypes } from 'prop-types';

// My React Components
import { useDispatch } from 'react-redux';
import { setAppTheme } from '../../Redux/Slicers'

// My Constants
import { DarkTheme, LightTheme, darkColour_Shade1 } from '../../Utils/Constants'


export default function MySwitch(props) {
    const [checked, setChecked]= useState(true)
    const dispatch= useDispatch();

    function changeTheme(){
        setChecked(!checked);
        props.callback()
    }

    useEffect(() => {
        dispatch(setAppTheme({themeStyle: checked ? LightTheme : DarkTheme})) 
    }, [checked])

    return (
    <Space direction="vertical" style={{marginRight: '1%'}}>
        <Switch
            checkedChildren={props.checkIcon}
            unCheckedChildren={props.unCheckIcon}
            checked={checked}
            onChange={changeTheme}
            style={{background: checked ? 'lightgray' : darkColour_Shade1}}
            size='large'
        />
        </Space>
    )
}

MySwitch.propTypes= {
    checkIcon: PropTypes.element,
    unCheckIcon: PropTypes.element
}

MySwitch.defaultProps= {
    checkIcon: <CheckOutlined />,
    unCheckIcon: <CloseOutlined />
}