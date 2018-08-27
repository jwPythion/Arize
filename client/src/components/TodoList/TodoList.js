
import React, { Component } from "react";
import API from "../../utils/API";
import withAuth from '../withAuth';
import { Container, Row, Col } from '../Grid';
import { Input, FormBtn } from '../Form';
import { BgImage } from '../Main';
import { BackBtn } from '../UI';
import TodoItems from "./TodoItems";

import "./TodoList.css";


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }


    addItem(e) {
        e.preventDefault();
        if (this._inputElement !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

        }


        this._inputElement.value = "";
        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }


    render() {
        return (
            <div className="todoListMain">
                <Container fluid>
                    <BackBtn />
                    <div className="card weather-title p-4">
                        <h1 className="card-title text-center pl-4"><strong>To Do List</strong></h1>
                        <div className="card-body">
                            <form className="form-inline" onSubmit={this.addItem}>

                                <input className="input-full-inline"
                                    ref={(a) => this._inputElement = a}
                                    placeholder="enter task" />
                                <button className="btn btn-info ml-2" type="submit"> add </button>

                            </form>

                        </div>
                    </div>


                    <Row classes="justify-content-center profile-row">
                        <Col size="sm-12" spacing="text-center">
                            <TodoItems entries={this.state.items}
                                delete={this.deleteItem} />
                        </Col>
                    </Row>
                </Container>
                <BgImage />
            </div>


        );
    }
}

export default TodoList;
