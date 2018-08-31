import React from 'react';
import './/index.css';
import axios from 'axios';
import AccountList from "./components/AccountList";
import {ReactCytoscape} from 'react-cytoscape';

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: [],
            elements: []
        };
    }

    componentDidMount() {
        axios.get(' http://localhost:8000/api/account/').then(response => {
            this.setState({
                accounts: response.data
            });
            this.createTree(response.data);
        });
    }

    createTree(accounts) {
        const nodes = accounts.map(account => {
            return {
                data: {id: account.name}
            }
        });
        let edges = [];
        accounts.map(account => {
            edges = [...edges, ...account.children.map(child => {
                return {
                    data: {
                        id: `${account.name}${child}`,
                        source: account.name,
                        target: child
                    }
                }
            })]
        });
        this.setState({
            elements: {
                nodes: nodes,
                edges: edges
            }
        })
    }

    cyRef(cy) {
        this.cy = cy;
        cy.on('tap', 'node', function (evt) {
            var node = evt.target;
        });
    }

    render() {
        const {accounts, elements} = this.state;

        return (

            <div className="row">
                <div className="col-sm-4">
                    <AccountList
                        accounts={accounts}/>
                </div>
                {
                    accounts.length === 0 ? (
                        <label>Empty account list</label>
                    ) : (
                        <div className="col-sm-8">
                            <ReactCytoscape containerID="cy"
                                            elements={elements}
                                            cyRef={(cy) => {
                                                this.cy = cy;
                                            }}
                                            cytoscapeOptions={{wheelSensitivity: 0.1}}/>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Account;