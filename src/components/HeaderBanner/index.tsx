import React from 'react';

interface HeaderBannerProps {
    title: string;
    subtitle: string;
    className?: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ title, subtitle, className = ""}) => {
    return (
        <div className={`header-banner ${className}`}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default HeaderBanner;