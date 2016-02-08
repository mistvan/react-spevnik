import React from 'react';
import ComponentGallery from 'node_modules/react-component-gallery';

class TukePage extends React.Component {
    render() {
        let imageWidth = 256;
        return (
            <div className="container">
                <h3>We are bringing Geeky days to Technical University in Kosice!</h3>
                <div className="row">
                    <div className="col-md-4">
                        <p>Students have a good opportunity to hear some insight and experience of highly skilled developers about latest and interesting technologies and topics.
                        </p>
                        <p>The first event took place on 22/04/2014 and we presented four topics, namely Spring Boot, Docker, Front-end dev workflow (Submline &amp; Grunt) and Tech radar 2015.</p>
                        
                        <br />
                        <p>Stay tuned for future events!</p>
                    </div>
                    <div className="col-md-8">
                        <img className="img-responsive" src="img/gf-tuke-banner.jpg" />
                    </div>
                </div>
                <div className="row" style={{marginTop: '30px'}} >
                    <div className="col-md-12">
                        <ComponentGallery
                            className="photos"
                            margin={10}
                            widthHeightRatio={3/5}
                            targetWidth={imageWidth}>
                              <img src="img/photos/tuke/IMG_7504.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7507.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7508.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7509.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7512.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7521.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7528.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7551.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7557.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7558.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7559.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7565.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7569.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7580.jpg" width={imageWidth}/>
                              <img src="img/photos/tuke/IMG_7582.jpg" width={imageWidth}/>
                        </ComponentGallery>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = TukePage;