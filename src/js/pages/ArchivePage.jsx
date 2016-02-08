import React from 'react';
import rawdata from 'raw!data/data.json';
import Upcoming from '../components/Upcoming.jsx';
//import Archive from '../components/Archive.jsx';
import Carousel from 'node_modules/react-responsive-carousel/components/Carousel.js';
import 'styles/carousel.css';

// Parse json
// var data = JSON.parse(rawdata, function(key,value) {
//     if (key === 'date') {
//         return new Date(value);
//     } else {
//         return value;
//     }
// });
var data1 = [];
 // jQuery.ajax({
 //          type: 'GET',
 //          dataType: 'json',
 //          url: 'http://mistvan.spolocenstvomajak.sk/spevnik?rest_route=/wp/v2/song',
 //          success: function(response) {
 //              //data1 = JSON.parse(response);
 //              data1 = response;
 //          }
 //        });

// Gallery
var galleryImages = [
    {url: 'img/photos/smARTin-20150227-0075-800.jpg'},
    {url: 'img/photos/smARTin-20150227-0077-800.jpg'},
    {url: 'img/photos/smARTin-20150227-0079-800.jpg'},
    {url: 'img/photos/smARTin-20150227-0081-800.jpg'},
    {url: 'img/photos/smARTin-20150227-0083-800.jpg'},
    {url: 'img/photos/smARTin-20150227-0085-800.jpg'},
    {url: 'img/photos/smARTin-20150227-0092-800.jpg'},
    {url: 'img/photos/smARTin-20150227-0094-800.jpg'}
]

class ArchivePage extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="img-responsive" src="img/geekyFridayLogo.png" width="250" style={{margin: '30px auto'}} />
                    <p>Geeky Friday is a series of workshops and presentations held irregularly on Fridays in Ness KDC Perform lab.
                    Its aim is to share the passion for technologies between developers and expand the interest beyond the daily work.</p>
                    
                    <Carousel items={ galleryImages } 
                        type="slider" 
                        showControls={true} 
                        showStatus={true}/>
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
