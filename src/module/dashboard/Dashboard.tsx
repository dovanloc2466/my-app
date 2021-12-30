import axios from 'axios';
import * as React from 'react';
import { hostName, NewModel } from '../../modal';
import { Layout } from './layout';
import { MediaComponent } from './MediaComponent';

interface DashboardProps {
}

export const Dashboard: React.FunctionComponent<DashboardProps> = (props) => {
    const [news, setNews] = React.useState<NewModel[]>();

    React.useEffect(() => {
        axios.get<NewModel[]>(hostName + '/blogs')
            .then(e => {
                setNews(e.data);
            }).catch(e => {
                console.log(e);
            });
    }, []);

    return (
        <Layout>
            <ul className="list-unstyled" >
                {news?.map(e => {
                    return <MediaComponent {...e} />;
                })}
            </ul >
        </Layout>
    );
};

