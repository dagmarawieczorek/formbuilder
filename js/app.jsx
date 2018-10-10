import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {

    class Input extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                questions: [{"question": "none"}]
            };
        }


        handleAddNew = (e) => {
            e.preventDefault();
            const newData = {"question": this.questionInput.value};
            this.setState({
                questions: [...this.state.questions, newData]
            })
        };

        handleAddNewSub = (e) => {
            e.preventDefault();
            const newData = {"question": this.questionInput.value};
            this.setState({
                questions: [...this.state.questions, newData]
            })
        };



        render() {
            console.log(this.state.questions);
            return <div className="all-forms">
                <div className="form-box">
                    <div className="form-description">
                        <span> Question</span>
                        <span>Type</span>
                    </div>
                    <form className="form-inputs">
                        <input type="text"
                               className="form-input"
                               ref={questionInput => this.questionInput = questionInput}/>
                        <select name="Yes/No" className="form-input">
                            <option value="Yes/No">Yes/No</option>
                            <option value="Text">Text</option>
                            <option value="Number">Number</option>
                        </select>
                        <div className="form-buttons">
                            <button
                                onClick={this.handleAddNew}>Add Sub-Input
                            </button>
                            <button>Delete</button>
                        </div>
                    </form>
                </div>
                <SubInput>
                    <SubInput></SubInput>
                </SubInput>
            </div>;
        }
    }


    class SubInput extends React.Component {


        render() {

            return <div className="all-forms">
                <div className="form-box ">
                    <div className="form-description">
                        <span> Condition</span>
                        <span> Question</span>
                        <span>Type</span>
                    </div>
                    <form className="form-inputs">
                        <div className="condition">
                            <select name="Equals" className="form-input">
                                <option value="equals">Equals</option>
                                <option value="greater">Greater than</option>
                            </select>
                            <input type="text" className="form-input"/>
                        </div>
                        <input type="text" className="form-input"/>
                        <select name="Yes/No" className="form-input">
                            <option value="Yes/No">Yes/No</option>
                            <option value="Text">Text</option>
                            <option value="Number">Number</option>
                        </select>
                        <div className="form-buttons">
                            <button
                                onClick={this.props.handleAddNewSub}> Add Sub-Input
                            </button>
                            <button>Delete</button>
                        </div>
                    </form>
                </div>
                {this.props.children}
            </div>;

        }

    }


    class App extends React.Component {
        render() {
            return <div>
                <Input/>

            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});