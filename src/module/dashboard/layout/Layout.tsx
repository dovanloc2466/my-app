import * as React from 'react';

import styled from 'styled-components';

interface LayoutProps {

}
const _Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    header {
        height: 100px;
        background: #472200;
        width: 100%;
        margin-bottom: 10px;
    }

    footer {
        height: 100px;
        background: #472200;
        width: 100%;
        margin-bottom: 10px;
    }
`;


export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <_Layout>
            <header>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
            </footer>
        </_Layout>
    );
};


