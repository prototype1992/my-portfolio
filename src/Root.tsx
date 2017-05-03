import * as React from 'react';

import './styles/main.scss';

import { img1 } from './assets/';

export default class Root extends React.Component<any, any> {
    public render () {
        return(
            <div>
                <div>Привет Человек</div>
                <img src={img1} alt="Чак Ремезов" width={100}/>
            </div>
        );
    }
}
