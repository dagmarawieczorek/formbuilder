import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {

    class Input extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                questions: []

            };
        }


        handleAddNew = (e) => {

            e.preventDefault();

            if(this.questionInput.value!=="") {
                const newData = {
                    "question": this.questionInput.value,
                    "type": this.typeInput.value, sublist: this.props.sublist
                };

                this.setState({
                    questions: [...this.state.questions, newData]
                })
            }
            else{
                alert("you must type in question!")
            }
        };

// TODO: przenieść przez props do rodzica i tam usunac, to samo dla sublisty
        handleDelete =(index)=>{
            index.preventDefault();
           console.log(index)

        }


        render() {
            console.log(this.state.questions);

            let newList = this.state.questions.map(function (elem, index) {

                return <SubInput key={index} index={index} />

            });

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
                        <select name="Yes/No" className="form-input"
                                ref={typeInput => this.typeInput = typeInput}>
                            <option value="Yes/No">Yes/No</option>
                            <option value="Text">Text</option>
                            <option value="Number">Number</option>
                        </select>
                        <div className="form-buttons">
                            <button
                                onClick={this.handleAddNew}>Add Sub-Input
                            </button>
                            <button
                                onClick={this.handleDelete}>Delete</button>
                        </div>
                    </form>
                </div>
                {newList}
            </div>;
        }
    }


    class SubInput extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                subQuestions: []
            };
        }

        handleAddNewSub = (e) => {
            e.preventDefault();
            const newData = {"question": this.questionInput.value};

            this.setState({
                subQuestions: [...this.state.subQuestions, newData]
            })
        };

        render() {           console.log(this.state.subQuestions);

            let newSubList = this.state.subQuestions.map(function (elem, index) {

                return <SubInput key={index}/>

            });

            return <div className="all-forms">
                <div className="form-box ">
                    <div className="form-description">
                        <span> Condition</span>
                        <span> Question</span>
                        <span>Type</span>
                    </div>
                    <form className="form-inputs">
                        <div className="form-conditions">
                            <select name="Equals" className="form-conditions-input">
                                <option value="equals">Equals</option>
                                <option value="greater">Greater than</option>
                                <option value="less">Less than</option>
                            </select>
                            <input type="text" className="form-conditions-input"
                                   ref={questionInput => this.questionInput = questionInput}/>
                        </div>
                        <input type="text" className="form-input"/>
                        <select name="Yes/No" className="form-input">
                            <option value="Yes/No">Yes/No</option>
                            <option value="Text">Text</option>
                            <option value="Number">Number</option>
                        </select>
                        <div className="form-buttons">
                            <button
                                onClick={this.handleAddNewSub}> Add Sub-Input
                            </button>
                            <button>Delete</button>
                        </div>
                    </form>
                </div>
                {newSubList}
            </div>;

        }

    }


    class App extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                inputs: []
            };
        }

        handleAddnewInput = (e) => {
            e.preventDefault();
            const newData = e;

            this.setState({
                inputs: [...this.state.inputs, newData]
            })
        };

        render() {

            let inputs = this.state.inputs.map(function (elem, index) {

                return <Input key={index}/>

            });
            return <div className="container">
                <h3> Form Builder</h3>
                    {inputs}
                <button className="addInput"
                        onClick={this.handleAddnewInput}>Add Input
                </button>
            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});