import React from 'react';
import SubInput from './Subinput.jsx';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: []

        };
    }

    handleAddNew = (e) => {
        e.preventDefault();

        if (this.questionInput.value !== "") {
            const newData = {
                "question": this.questionInput.value,
                "type": this.typeInput.value, sublist: this.props.sublist
            };

            this.setState({
                questions: [...this.state.questions, newData]
            })
        }
        else {
            alert("you must type in question!")
        }
    };

    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteInput(this.props.index);
    };

    render() {
        console.log(this.state.questions);

        let newList = this.state.questions.map(function (elem, i) {

            return <SubInput key={i} index={i}/>

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
                            onClick={this.handleDelete}>Delete
                        </button>
                    </div>
                </form>
            </div>
            {newList}
        </div>;
    }
}

