import React, { Component } from "react";
import images from '../libs/images';
import '../index.css';

let {elinProfile, HTMLicon} = images

export default class Content extends Component {


    render() {
      return (
        <div>
          <div className="parallax" id="top">
          <div className="caption">
              <div className="column-one">
                {/*   <p>Hi my name is Elin, and this is my portfolio site<span>|</span></p> */}
              </div>

          </div>
        </div>
          <section className="test" id="page">
            <div className="infoPage" >
              <img className="elinProfile" src={elinProfile} />
            </div>
            <div className="infoCaption">
              <p>My name is Elin, Im 25 years old and I am studying front-end development.
                I have experience working with React, HTML, CSS, dittan dattan.
                I also enjoy running and swimming and jumping.</p>
            </div>
          </section>
          <div className="parallaxSecond">
            <div className="logoTypes">
              <div className="test1 firstLogo">

              </div>
              <div className="test1 secondLogo">

              </div>
              <div className="test1 thirdLogo">

              </div>
              <div className="test1 forthLogo">

              </div>
              <div className="test1 fifthLogo">

              </div>
              <div className="test1 sixthLogo">

              </div>
            </div>
            <div className="logoTypeCaption">
              <p>Hej text</p>
            </div>



        	</div>
          <section className="infoPage" id="">
          </section>
        </div>
      )
    }
}
