import React from 'react';


class SubInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        };
    }

    handleAddNewSub = (e) => {
        e.preventDefault();

        if (this.state.data.question!== "") {
            const newData = {
                "id": 100,
                "question": "",
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
        this.props.deleteSubinput(this.props.index);
    };

    handleSubquestionChange=(event)=>{
        this.state.data.question= event.target.value;
        this.setState({

        })
    };


    handleTypeChange=(event)=>{

        this.state.data.type= event.target.value;
        this.setState({

        })
    };


    handleConditionChange=(event)=>{
        this.state.data.condition= event.target.value;
        this.setState({

        })
    };

    handleConditionInputChange=(event)=>{
        this.state.data.conditionInput= event.target.value;
        this.setState({

        })
    };


    render() {

        let newSubList = this.state.data.items.map(function (elem, index) {
            return <SubInput key={index} data={elem} />
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
                        <select name="conditions" className="form-conditions-input"
                                onChange={this.handleConditionChange}
                                value={this.state.data.condition}
                        >
                            <option value="equals">Equals</option>
                            <option value="greater">Greater than</option>
                            <option value="less">Less than</option>
                        </select>
                        <input type="text" className="form-conditions-input"
                               value={this.state.data.conditionInput}
                               onChange={this.handleConditionInputChange}
                        />
                    </div>
                    <input type="text"
                           className="form-input"
                           value={this.state.data.question}
                           onChange={this.handleSubquestionChange}/>

                    <select name="Yes/No" className="form-input"
                            onChange={this.handleTypeChange}
                            value={this.state.data.type}
                    >
                        <option value="Yes/No">Yes/No</option>
                        <option value="Text">Text</option>
                        <option value="Number">Number</option>
                    </select>
                    <div className="form-buttons">
                        <button
                            onClick={this.handleAddNewSub}> Add Sub-Input
                        </button>
                        <button
                        onClick={this.handleDelete}>Delete</button>
                    </div>
                </form>
            </div>
            {newSubList}
        </div>;

    }

}

export default SubInput;