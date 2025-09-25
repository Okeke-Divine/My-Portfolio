// TabBadgeComponent.jsx
import React from 'react';
import "../assets/css/tabBadge.css"

export default function TabBadgeComponent({
    children,
    variant = "default",
    size = "medium",
    className = "",
    onClick
}) {
    const getVariantClass = () => {
        switch (variant) {
            case "primary":
                return "tab-badge-primary";
            case "secondary":
                return "tab-badge-secondary";
            case "tech":
                return "tab-badge-tech";
            case "outline":
                return "tab-badge-outline";
            case "muted":
                return "tab-badge-muted";
            default:
                return "tab-badge-default";
        }
    };

    const getSizeClass = () => {
        switch (size) {
            case "small":
                return "tab-badge-sm";
            case "large":
                return "tab-badge-lg";
            default:
                return "tab-badge-md";
        }
    };

    const badgeClasses = `tab-badge ${getVariantClass()} ${getSizeClass()} ${className}`;

    return (
        <div
            className={badgeClasses}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {children}
        </div>
    );
}