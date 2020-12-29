import React from 'react';

export default () => (
    <div>
        <p>This is car component</p>
        <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
    </div>
)