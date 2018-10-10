import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {

    class AddForm extends React.Component {


        render() {

            return <div>

                <div className="form-box">
                    <div className="form-description">
                        <span> Question</span>
                        <span>Type</span>
                    </div>
                    <form>
                        <input type="text"/>
                        <select name="Yes/No">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <button>Add Sub-Input</button>
                        <button>Delete</button>
                    </form>
                </div>

            </div>;

        }

    }


    class App extends React.Component {
        render() {
            return <div>
                <AddForm/>

            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});