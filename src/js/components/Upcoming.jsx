import React from 'react';
import PresentationBox from './PresentationBox.jsx';

class Upcoming extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        username: '',
          songContent: '',
          songs: []
    };
  }

  componentDidMount () {
    this.serverRequest = $.get(this.props.source, function (result) {
      var song = result[0];
      this.setState({
        username: song.slug,
        songContent: song.content,
        songs: result
      });
    }.bind(this));
  }
    render() {
        var presentationNodes = this.state.songs.map( function(presentation) {
            return (
                <PresentationBox key={presentation.id} data={presentation} upcoming={true}/>
            )
        });
        if (presentationNodes.length == 0) {
            presentationNodes = <div className="PresentationBox list-group-item">
                No upcoming events.
            </div>;
        }
        return (
            <div>
                <h2>Upcoming</h2>
                <div className="Archive list-group">
                    {presentationNodes}
                </div>
                <div>{this.state.username}</div>
                <div>{this.state.songContent}</div>
            </div>
        );
    }
}
module.exports = Upcoming;