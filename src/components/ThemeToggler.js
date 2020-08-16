import React, { useState, useEffect } from "react";

export default function Toggler(props) {
    const [isDark, themeChange] = useState(false);

    useEffect(() => {
        props.theme(isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <div className={`text-right`}>
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={isDark} onChange={() => { themeChange(!isDark) }} />
                <label className="custom-control-label" htmlFor="customSwitch1">Switch Theme</label>
            </div>
        </div>
    );
}