import React from 'react';
import './SidebarOption.css';
import {useHistory} from "react-router-dom"

function SidebarOption({ text, Icon }) {
    const history = useHistory()

    function onClick(){
        console.log("pressed", text)
        history.push(`/${text}`)

    }

	return (
		<div className="sidebarOption" onClick = {onClick}>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

export default SidebarOption;
