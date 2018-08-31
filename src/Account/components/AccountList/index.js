import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

class AccountList extends React.PureComponent {
    render() {
        const {accounts} = this.props;

        return (
            <React.Fragment>
                <h3>Accounts</h3>
                <ListGroup>
                    {
                        accounts.map((account, index) => (
                            <ListGroupItem
                                key={`account_${index}`}
                                href="#link"
                                disabled={account.parent === null}>
                                {account.name}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </React.Fragment>
        )
    }
}

export default AccountList;