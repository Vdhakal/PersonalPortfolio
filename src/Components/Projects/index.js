import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import './styles.scss';
import complement from './complement.jpg'

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
                    <Image ratio={card.imageRatio} src={card.image} />
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
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
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
        const dampen = 50; // Lower the number the less rotation
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
    title: 'Tune It 🎹',
    description:
      'A Piano Simulator app that mimics an electronic piano while also utilizing Unity’s Particle System.',
    image: 'https://lh3.googleusercontent.com/pw/ACtC-3dEH_RPV7sfJFUEnuE6dNMHjCWkk6QxAqyLt9MoRlu9y5N1StwdEFjz9iYm6Co5AkykoP8AIjmQadZ45AjX__E8vb9SKudjwvEBHY6GfIcZ8puvh-Oqp5VPInX21d26Z_Mq9GF5lZpOpEer5WfhkH5b=w1047-h517-no?authuser=0',
    imageRatio: 730 / 1030
  },
  {
    title: 'Complement Calculator 🧮',
    description:
      "A mobile app with a simple and intuitive UI that does Radix, Diminshed Radix and base conversion related computations.",
    image: 'https://lh3.googleusercontent.com/pw/ACtC-3f0i9yqL0eZt_koAUCHHsZNeRZMS84djW8hOq6fqxqnoh1hZPUQT8CQHJ5eGx4WBWlArJZn9svaYg6fU2rfRZE5CgOTT8HPjrIKmiSRK46sGzbOfkVMSuqQurh1W_7qL70jyM1gUFKd1PcTNiRGTMMo=w1057-h939-no',
    imageRatio: 730 / 1030
  },  {
    title: 'Castle Escape 🏃',
    description:
      "A 2D platformer made with tilemap system in unity. The game has rewards, coins, obstacles and a working simple enemy A.I.",
    image: 'https://lh3.googleusercontent.com/pw/ACtC-3ePYzKNrPQhftLWqtjPCGxJbdRnClzE9crJjZQUZHTMFxvK_xPeubLXiajJHcLIK0KQnNaV4BZe3toZluePKc6IBNbTkPg52ZGCb32tmcn4yq3Jt2GGpESc_NRfiYaDIT_mdnbkuimhEq9eh156lBfd=w875-h531-no?authuser=0',
    imageRatio: 730 / 1030
  }, 
  {
    title: 'Ride Past 🥽',
    description:
      'A V.R. racing android game with 3D Physics Engine utilizing kinematics, friction and collision response.',
    image: 'https://lh3.googleusercontent.com/pw/ACtC-3frUxrZtOESM4wWSkravDn-aMf8lrtGBZQX_AxpR-aPAktXrrRoqF-wv0878C6our4U9LpLOCpxk3fQJw46s6nkmLInsLBO-SrZ5axKFBtsoo56aX2smCe_E3rx85sKeqmt2ulDuTdhZSg51INkjO5w=w913-h450-no?authuser=0',
    imageRatio: 730 / 1030
  },
  {
    title: 'Python Reddit Bot 🤖',
    description:
      'A Reddit bot made using PRAW API that downloads the image post that it’s tagged under and replies to the user with the text in the image which is done using pythons pytesseract library.',
    image: 'https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png',
    imageRatio: 730 / 1030
  },
  {
    title: 'Personal Portfolio 📁',
    description:
      'A dynamic and responsive personal portfolio website made using React js.',
    image: 'https://lh3.googleusercontent.com/pw/ACtC-3f3mpkydbOXXd7ghuJwmHiXDNvdQwJSd6Uw4w_cf55We8SU9tAJ85qwy5dZQL_mAGAv8d_JDFsIrWuQKn2PtRqC1R52xshRAcr3VugL4s5aD3PI8t5QLPL_1pbkNDsZKok7XHRhqJuXhrSGU5gIvw-D=w1256-h660-no?authuser=0',
    imageRatio: 730 / 1030
  }
  
];

export default Project;