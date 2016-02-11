import React from 'react';
import 'styles/PresentationBox.css'

class PresentationBox extends React.Component {
    formatDate(date) {
        let pad = function(val) {
            return ("00" + val).slice(-2);
        };
        return pad(date.getDate()) + "/" + pad(date.getMonth()+1) + "/" + date.getFullYear();
    }

    render() {
        let pres = this.props.data;
        let link = pres.link ?
                    <a target="_blank" href={pres.link}></a>
                    : undefined;
        let classes = ['PresentationBox', 'list-group-item'];
        classes.push(this.props.upcoming ? 'PresentationBoxUpcoming' : 'PresentationBoxArchive');
        return (
            <div className={classes.join(' ')}>
                <div className="pleft">
                    <h3 className="list-group-item-heading">{pres.slug}</h3>
                    <h4 className="list-group-item-heading">{pres.teaser}</h4>
                    Song: 
                    <div dangerouslySetInnerHTML={{__html: pres.content.rendered}} />
                </div>
                <div className="pright">
                    <span className="pdate"></span><br />
                    {link}{this.props.upcoming ? '' : ' (' + pres.lang + ')'}
                </div>
            </div>
        );
    }
}

module.exports = PresentationBox;