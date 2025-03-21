import React from "react";
import "./TextInput.css";

export function TextInput({
    placeholder = "",
    label = "",
    description = "",
    error = "",
    variant = "default",
    radius = "4px",
    size = "medium",
    disabled = false,
    asterisk = false,
    icon = null,
    ...props
}) {
    const variantClass = `text-input--${variant}`;
    const sizeClass = `text-input--${size}`;
    const disabledClass = disabled ? "text-input--disabled" : "";

    const inputStyle = {
        borderRadius: radius,
    };

    return (
        <div
            className={`text-input ${variantClass} ${sizeClass} ${disabledClass}`}
        >
            {label && (
                <label className="text-input__label">
                    {label}
                    {asterisk && (
                        <span className="text-input__asterisk">*</span>
                    )}
                </label>
            )}
            <div className="text-input__wrapper">
                {icon && <span className="text-input__icon">{icon}</span>}
                <input
                    type="text"
                    placeholder={placeholder}
                    style={inputStyle}
                    disabled={disabled}
                    {...props}
                />
            </div>
            {description && (
                <p className="text-input__description">{description}</p>
            )}
            {error && <p className="text-input__error">{error}</p>}
        </div>
    );
}
