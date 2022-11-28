import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { useSpring, animated } from 'react-spring';
import './styles.scss';

function Project() {
  return (
    <div id = 'project' className="main">
        <Hero>
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <p>
                      <a  href={card.link} target="_blank">See on Github
                      <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg>
                    </a>
                    </p>
                    {/* <Image ratio={card.imageRatio} src={card.image} /> */}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 700, friction: 30, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 70
        ; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
    <h1><span>P</span><span>R</span><span>O</span><span>J</span><span>E</span><span>C</span><span>T</span><span>S</span></h1>
      <div className="notice">(best viewed at larger screen width)</div>
    </div>
  );
}

const cards = [
  {
    title: 'Counting Reps 💪',
    description:
      'A fitness application to track diet and exercise. It is designed such a way that the user has to open the app the least number of times as possible enforcing a succesful workout session with less distractions',
    link:
      "https://github.com/Vdhakal/Counting-Reps",
    imageRatio: 730 / 730
  },
  {
    title: 'AIMS Fuel Dispatcher App 🚚',
    description:
      'AIMS is a software company that creates software solutions for petroleum distributors. As a part of the project, our group created a mobile app for their company. The AIMS Dispatcher Mobile App is a phone or tablet application tightly integrated with the AIMS Dispatcher web app. The mobile app received data from, and sent data to, AIMS Dispatcher.',
    link:
      "https://github.com/Vdhakal/git-set-code",
    image: '..//..//flower.jpg',
    imageRatio: 730 / 730
  },
  {
    title: 'Tune It 🎹',
    description:
      'A Piano Simulator app that mimics an electronic piano while also utilizing Unity’s Particle System.',
    link:
      "https://github.com/Vdhakal/Tune-It",
    image: 'https://lh3.googleusercontent.com/pw/ACtC-3dEH_RPV7sfJFUEnuE6dNMHjCWkk6QxAqyLt9MoRlu9y5N1StwdEFjz9iYm6Co5AkykoP8AIjmQadZ45AjX__E8vb9SKudjwvEBHY6GfIcZ8puvh-Oqp5VPInX21d26Z_Mq9GF5lZpOpEer5WfhkH5b=w1047-h517-no?authuser=0',
    imageRatio: 730 / 730
  },
  {
    title: 'Complement Calculator 🧮',
    link:
      "https://github.com/Vdhakal/Complement-Calculator",
    description:
      "A mobile app with a7 simple and intuitive UI that does Radix, Diminshed Radix and base conversion related computations.",
      
      image: 'https://lh3.googleusercontent.com/pw/ACtC-3f0i9yqL0eZt_koAUCHHsZNeRZMS84djW8hOq6fqxqnoh1hZPUQT8CQHJ5eGx4WBWlArJZn9svaYg6fU2rfRZE5CgOTT8HPjrIKmiSRK46sGzbOfkVMSuqQurh1W_7qL70jyM1gUFKd1PcTNiRGTMMo=w1057-h939-no',
    imageRatio: 730 / 730
  },  {
    title: 'Castle Escape 🏃',
    description:
      "A 2D platformer made with tilemap system in unity. The game has rewards, coins, obstacles and a working simple enemy A.I.",
      link:
      "https://github.com/Vdhakal/Castle-Escape",
      image: 'https://lh3.googleusercontent.com/pw/ACtC-3ePYzKNrPQhftLWqtjPCGxJbdRnClzE9crJjZQUZHTMFxvK_xPeubLXiajJHcLIK0KQnNaV4BZe3toZluePKc6IBNbTkPg52ZGCb32tmcn4yq3Jt2GGpESc_NRfiYaDIT_mdnbkuimhEq9eh156lBfd=w875-h531-no?authuser=0',
    imageRatio: 730 / 730
  }, 
  {
    title: 'Ride Past 🥽',
    description:
      'A V.R. racing android game with 3D Physics Engine utilizing kinematics, friction and collision response.',
      link:
      "https://github.com/Vdhakal/Unity-VR-game",
      image: 'https://lh3.googleusercontent.com/pw/ACtC-3frUxrZtOESM4wWSkravDn-aMf8lrtGBZQX_AxpR-aPAktXrrRoqF-wv0878C6our4U9LpLOCpxk3fQJw46s6nkmLInsLBO-SrZ5axKFBtsoo56aX2smCe_E3rx85sKeqmt2ulDuTdhZSg51INkjO5w=w913-h450-no?authuser=0',
    imageRatio: 730 / 730
  },
  {
    title: 'Python Reddit Bot 🤖',
    description:
      'A Reddit bot made using PRAW API that downloads the image post that it’s tagged under and replies to the user with the text in the image which is done using pythons pytesseract library.',
      link:
      "https://github.com/Vdhakal/Reddit-Bot",
      image: 'https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png',
    imageRatio: 730 / 730
  },
  {
    title: 'Personal Portfolio 📁',
    description:
      'A dynamic and responsive personal portfolio website made using React js.',
      link:
      "https://github.com/Vdhakal/PersonalPortfolio",
      image: 'https://lh3.googleusercontent.com/pw/AM-JKLWsIwIYJ-NBIcNQS37VYtvUjKnPCa3-2Juc43NZRXEb2cCvZQTXbGJnU5fO-Dm82RJyNRA4e3_p-0flrkw0gQKmQZtiHu7XMRTVgJ_gwep5dga9KsbdVMfH7H267el5H1P144wLqzHTf9wOMmx7i2izCw=w944-h495-no',
    imageRatio: 730 / 730
  }
  
];

export default Project;