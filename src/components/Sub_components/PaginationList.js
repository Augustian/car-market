import React from 'react';
import { Pagination } from 'react-bootstrap';

class PaginationList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Page: 1,
        }
    }

    render() {
        let pageItems = [];
        for (let number = 1; number <= this.props.count; number++) {
            if (number > this.state.Page - 4 && number < this.state.Page + 4) {
                pageItems.push(
                    <Pagination.Item
                        key={number}
                        active={number === this.state.Page}
                        onClick={() => {
                            this.setState({ Page: number });
                            this.props.sendData(number, null, null, null, "");
                            window.scrollTo(0, 0);
                        }}>
                        {number}
                    </Pagination.Item>,
                );
            }
        }

        let prev = this.state.Page > 0 ? this.state.Page - 1 : 1;
        let next = this.state.Page < this.props.count - 1 ? this.state.Page + 1 : this.props.count - 1;

        return (
            <Pagination style={{ justifyContent: "center" }}>
                <Pagination.First
                    active={0 === this.state.Page}
                    onClick={() => {
                        this.setState({ Page: 0 });
                    }} />
                <Pagination.Prev
                    active={prev === this.state.Page}
                    onClick={() => {
                        this.setState({ Page: prev });
                        this.props.sendData(this.state.Page, null, null, null, "");
                        window.scrollTo(0, 0);
                    }} />
                {this.state.Page > 4 ?
                    <Pagination.Ellipsis /> :
                    null}
                {pageItems}
                {this.state.Page < this.props.count - 4 ?
                    <Pagination.Ellipsis /> :
                    null}
                <Pagination.Next
                    active={next === this.state.Page}
                    onClick={() => {
                        this.setState({ Page: next });
                        this.props.sendData(next, null, null, null, "");
                        window.scrollTo(0, 0);
                    }} />
                <Pagination.Last
                    active={this.props.count === this.state.Page}
                    onClick={() => {
                        this.setState({ Page: this.props.count - 1 });
                    }} />

            </Pagination>
        );
    }
}
export default PaginationList;