import React from 'react';

class Pager extends React.Component {

    constructor(props) {
        super(props);
    }

    pageChanged(pageArg, event) {
        event.preventDefault();
        if (pageArg > 0 && pageArg <= this.getPageCount()) {
            this.props.onPageChanged(pageArg);
        }
    }

    render() {
        // Do not show the pager if there's not enough items to be paged
        if (this.getPageCount() < 2) {
            return null;
        }
        let pageNodes = [];
        for (var i = 1; i <= this.getPageCount(); i++) {
            let cls = this.props.active === i ? 'active' : '';
            pageNodes.push(<li key={i} className={cls}><a href="#" onClick={this.pageChanged.bind(this, i)}>{i}</a></li>);
        }
        return (
            <nav>
                <ul className="pagination" style={{margin: "0px"}}>
                    <li>
                      <a href="#" aria-label="Previous" onClick={this.pageChanged.bind(this, this.props.active - 1)}>
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    {pageNodes}
                    <li>
                      <a href="#" aria-label="Next" onClick={this.pageChanged.bind(this, this.props.active + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                </ul>
            </nav>
        );
    }

    getPageCount() {
        return Math.ceil(this.props.itemCount / this.props.pageSize);
    }
}

module.exports = Pager;