import React, { useState } from 'react'
import { Switch, Space } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { PropTypes } from 'prop-types';


const darkColour_Shade1= '#173757';

export default function MySwitch(props) {
    const [checked, setChecked]= useState(props.checked)
    return (
    <Space direction="vertical" style={{marginRight: '1%'}}>
        <Switch
            checkedChildren={props.checkIcon}
            unCheckedChildren={props.unCheckIcon}
            checked={checked}
            onChange={(e) => {setChecked(!checked); props.callback(!checked)}}
            style={{background: checked ? 'lightgray' : darkColour_Shade1}}
            size='large'
        />
        </Space>
    )
}

MySwitch.propTypes= {
    checkIcon: PropTypes.element,
    unCheckIcon: PropTypes.element,
    checked: PropTypes.bool,
}

MySwitch.defaultProps= {
    checkIcon: <CheckOutlined />,
    unCheckIcon: <CloseOutlined />,
    checked: true
}