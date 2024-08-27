import React from 'react';

const Hours = () => {
    
    const today = new Date().getDay();

    let hours;
    if (today >= 1 && today <= 5) {
        hours = '10:00 a.m. - 4:00 p.m.';
    } else {
        hours = '9:00 a.m. - 8:00 p.m.';
    }

    return (
        <div style={{ padding: '10px' }}>
            <h2 style={{ color: '#007bff', letterSpacing: '0.05em' }}>Horario de hoy</h2>
            <p style={{ color: '#000000', letterSpacing: '0.05em' }}>{hours}</p>
        </div>
    );
};

export default Hours;