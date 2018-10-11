import React from 'react';
import SubInput from './Subinput.jsx';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        };
    }

    handleAddNew = (e) => {
        e.preventDefault();

        if (this.questionInput.value !== "") {
            this.state.data.question = this.questionInput.value;
            this.state.data.type = this.typeInput.value;

            const newData = {
                "id": 100,
                "question":"",
                "type":"",
                "condition":"",
                "items": []
            };

            this.state.data.items = [...this.state.data.items, newData];
            this.setState({

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
        console.log(this.state.data.items);

        let newList = this.state.data.items.map((elem, i)=> {
            return <SubInput key={i} index={i} data={elem}
                          deleteInput={this.handleDeleteInput}/>
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

