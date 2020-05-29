import React from 'react';
import { render } from 'react-dom';

window.addEventListener('load', () => {
    setTimeout(() => {
        render(
            <MyComponent />,
            document.getElementById('app')
        );
    }, 100);
});

function MyComponent() {
    return (
        <div>
            Hello world!
        </div>
    );
}
