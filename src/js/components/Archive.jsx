import React from 'react';
import PresentationBox from './PresentationBox.jsx';
import Pager from './Pager.jsx';

class Archive extends React.Component {

    constructor(props) {
        super(props)
        // minimal state to track current page
        this.state = { page: 1 } ;
    }

    pageChanged(pageArg) {
        this.setState({page: pageArg});
    }

    sortAndSlice(arrayIn, page, pageSize) {
        let sortedData = arrayIn.sort(function (first, second) {
            return second.date - first.date;
        });
        let start = (this.state.page - 1) * pageSize;
        return sortedData.slice(start, start + pageSize);
    }

    render() {
        const pageSize = 20; //should be moved to better place?
        let sliced = this.sortAndSlice(this.props.data, this.state.page, pageSize);

        let presentationNodes = sliced.map( function(presentation) {
            return (
                <PresentationBox key={presentation.id} data={presentation} upcoming={false}/>
            )
        });
        return (
            <div>
                <h2>Archive</h2>
                <div className="Archive list-group">
                    {presentationNodes}
                </div>
                <Pager onPageChanged={this.pageChanged.bind(this)} itemCount={this.props.data.length} pageSize={pageSize} active={this.state.page}/>
            </div>
        );
    }
}

module.exports = Archive;