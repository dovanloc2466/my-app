import * as React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Dashboard } from './module/dashboard';

interface RouteAppProps {
}

export const RouteApp: React.FunctionComponent<RouteAppProps> = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};


