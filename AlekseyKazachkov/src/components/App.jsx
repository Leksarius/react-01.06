import React from 'react';
import Child from './Child';


export default class App extends React.Component {
    state = {
        text: 'Наш первый React-компонент',
        counter: 0,
    };

    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        // setTimeout(() => this.setState({'text': 'Обновленный React-компонент'}), 5000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    handleClick = () => {
        this.setState({
            'counter': this.state.counter + 1
        });
    };

    render() {
        console.log('render');
        return (
            [
                <
                h1 key = "parent" > {
                    this.state.text
                } < /h1>,
                <
                Child key = "child"
                counter = {
                    this.state.counter
                }
                />,
                <
                button onClick = {
                    this.handleClick
                } > +1 < /button>,
            ]
        )
    }
}