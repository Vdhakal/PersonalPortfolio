import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import './styles.scss';
// import './projects.css'

function Project() {



    function Hero({ children }) {
        return (
          <div className="hero">
            <div className="hero-body">{children}</div>
          </div>
        );
      }
  return (

    <div className="main">
        <Hero>
              <div className="container">
                
              <body>
            <div class="wrapper">

            <div class="container" id="c0">
                <div class="image" id="i0">
                    
                    <div class="city">
                    

                    </div>
                </div>
                <div class="story" id="s0">
                    <div class="info">
                    <h3>Pyramids</h3>
                    <p> Built during a time when Egypt was one of the richest and most powerful civilizations in the world. Their massive scale reflects the unique role that the pharaoh played in ancient Egyptian society.</p>
                    </div>
                </div>
            </div>
            <div class="container" id="c1">
                <div class="image" id="i1">
                    <div class="city">
                    

                    </div>
                </div>
                <div class="story" id="s1">
                    <div class="info">
                        <h3>Stonehenge</h3>
                    <p> Stonehenge is a prehistoric monument in Wiltshire, England. It was constructed in several stages between 3000 and 1500 B.C., spanninng to the Bronze Age.</p>
                    </div>
                </div>
            </div>
            <div class="container" id="c2">
                <div class="image" id="i2">
                    <div class="city">
                

                    </div>
                </div>
                <div class="story" id="s2">
                    <div class="info">
                    <h3>Tower of Pisa</h3>
                    <p> The Leaning Tower of Pisa or simply the Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its unintended tilt</p>

                    </div>
                </div>
            </div>


        </div>
            

        </body>


              </div>
        </Hero>
        
        
        {/* <Hero>
          <div className="container">
            <div className="row">


              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}


            </div>
          </div>
        </Hero> */}
    </div>
  );
}

const cards = [
  {
    title: 'Build faster ⚡️',
    description:
      'Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_collection.svg',
    imageRatio: 784 / 1016
  },
  {
    title: 'Tweak anything 👩‍🎨',
    description:
      'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_upload.svg',
    imageRatio: 839 / 1133
  },
  {
    title: 'Export your code 🚀',
    description:
      "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
    image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
    imageRatio: 730 / 1030
  },
  {
    title: 'Tweak anything 👩‍🎨',
    description:
      'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_upload.svg',
    imageRatio: 839 / 1133
  },
  {
    title: 'Export your code 🚀',
    description:
      "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
    image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
    imageRatio: 730 / 1030
  },
  {
    title: 'Tweak anything 👩‍🎨',
    description:
      'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_upload.svg',
    imageRatio: 839 / 1133
  },
  {
    title: 'Export your code 🚀',
    description:
      "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
    image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
    imageRatio: 730 / 1030
  },
  {
    title: 'Tweak anything 👩‍🎨',
    description:
      'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_upload.svg',
    imageRatio: 839 / 1133
  },
];
export default Project;