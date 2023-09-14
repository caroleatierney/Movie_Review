import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // send HTTP request
        // save it to the state
    }

    render() {
        return (
            <div>
                <h1>This is a view created by a class component</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;