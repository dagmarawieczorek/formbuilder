import React from 'react';


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

    render() {
        console.log(this.state.subQuestions);

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

export default SubInput;