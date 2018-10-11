import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input.jsx'

document.addEventListener('DOMContentLoaded', () => {


    class App extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                inputs: []
            };
        }


        handleDeleteInput = (elem, i) => {
            let arr = this.state.inputs;
            arr.splice(i, 1);
            this.setState({
                inputs: arr
            })
        }

        handleAddnewInput = (e, i) => {
            e.preventDefault();
            const newData = {
                "id": i,
                "question":"",
                "type":"",
                "condition":"",
                "items": []
            };

            this.setState({
                inputs: [...this.state.inputs, newData]
            })
        };

        handleRenderJson = (e) => {
            e.preventDefault();
            console.log(this.state.inputs);
        };

        render() {
            console.log(this.state.inputs);
            let inputs = this.state.inputs.map((elem, i)=> {

                return <Input key={i} index={i} data={elem}
                deleteInput={this.handleDeleteInput}/>
            });

            return <div className="container">
                <h3> Form Builder</h3>
                {inputs}
                <button className="addInput"
                        onClick={this.handleAddnewInput}>Add Input
                </button>
                <button className="addInput"
                        onClick={this.handleRenderJson}>Render JSON
                </button>
            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});