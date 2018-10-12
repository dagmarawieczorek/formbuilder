import React from 'react';
import SubInput from './Subinput.jsx';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
        };
    }

    handleAddNew = (e) => {
        e.preventDefault();

        if (this.state.data.question!== "") {
            const newData = {
                "id": 100,
                "question": "",
                "type":"",
                "condition":"equals",
                "conditionInput":"",
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

    handleQuestionChange=(event)=>{
        this.state.data.question= event.target.value;
        this.setState({

        })
    };


    handleDeleteSubinput = (elem, i) => {
        let arr = this.state.data.items;
        arr.splice(i, 1);
        this.setState({
            inputs: arr
        })
    }
    handleTypeChange=(event)=>{

        this.state.data.type= event.target.value;
        this.setState({

        })
    };



    render() {
             let newList = this.state.data.items.map((elem, i)=> {
            return <SubInput key={i} index={i} data={elem}
                             deleteSubinput={this.handleDeleteSubinput}/>
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
                         value={this.state.data.question}
                    onChange={this.handleQuestionChange}/>
                    <select name="Yes/No" className="form-input"
                            ref={typeInput => this.typeInput = typeInput}
                    onChange={this.handleTypeChange}
                            value={this.state.data.type}
                    >
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

