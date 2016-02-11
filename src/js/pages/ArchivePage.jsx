import React from 'react';
import rawdata from 'raw!data/data.json';
import Upcoming from '../components/Upcoming.jsx';
//import Archive from '../components/Archive.jsx';
import 'styles/carousel.css';

// Parse json
// var data = JSON.parse(rawdata, function(key,value) {
//     if (key === 'date') {
//         return new Date(value);
//     } else {
//         return value;
//     }
// });

 // jQuery.ajax({
 //          type: 'GET',
 //          dataType: 'json',
 //          url: 'http://mistvan.spolocenstvomajak.sk/spevnik?rest_route=/wp/v2/song',
 //          success: function(response) {
 //              //data1 = JSON.parse(response);
 //              data1 = response;
 //          }
 //        });

class ArchivePage extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Playlisty</h3>
                        </div>
                        <div class="panel-body">
                            Panel content
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Názvy piesní</h3>
                        </div>
                        <div class="panel-body">
                            Panel content
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    
                    <Upcoming source="http://mistvan.spolocenstvomajak.sk/spevnik?rest_route=/wp/v2/song" />

                </div>
            </div>
        </div>
        );
    }
}

module.exports = ArchivePage;
