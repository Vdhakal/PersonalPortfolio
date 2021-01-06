import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, useSprings, animated, interpolate } from 'react-spring'
import css from './css.png';
import './styles.scss'


function Stack({ image, background }) {
    const [open, setOpen] = useState(false)
    const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 })
    const cards = useSprings(5, [0, 1, 2, 3, 4].map(i => ({ opacity: 0.2 + i / 5, z: open ? (i / 5) * 80 : 0 })))
    return (
    
      <div class="skillscontainer" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
         
        {cards.map(({ z, opacity }, index) => (
            
          <animated.div
            style={{
              opacity,
              background,
              transform: interpolate(
                [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
                (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
              )
            }}>
            {index === 4 && <animated.img style={{ transform: f.interpolate([0, 1], ['scale(0.7)', 'scale(1)']) }} src={image} />}
          </animated.div>
        ))}
      </div>
    )
  }

const Skills = () => {
    return (
        <><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1 id="Skills_title">SKILLS</h1>
        <div class="skillsWrapper">
            
            <div class="skillsmain">
            
            <Stack image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" background="#52649e" />{/*Front*/ }
            <Stack image="https://www.brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg" background="#f7f295" />{/*Back*/ }
            <Stack image="https://www.brandeps.com/logo-download/U/Unity-Game-Engine-logo-vector-01.svg" background="#ee7074" />{/*Software*/ }
            <Stack image="https://www.brandeps.com/logo-download/J/Java-logo-vector-01.svg" background="wheat" />{/*Language*/ }

            <Stack image="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" background="#f7f295" />
            <Stack image="data:image/png;base64,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" width="" background="#ee7074" />
            <Stack image="https://upload.wikimedia.org/wikipedia/commons/3/34/Android_Studio_icon.svg" background="#f7f295" />
            <Stack image="https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg" background="#FAF566" />

            <Stack image="https://logodix.com/logo/374976.jpg" background="#f7f295" />
            <Stack image="https://www.boylesoftware.com/blog/wp-content/uploads/2016/03/240x240_mysql_logo.jpg" background="#f7f295" />
            <Stack image="data:image/png;base64,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" background="#f7f295" />
            <Stack image="https://www.brandeps.com/icon-download/P/Python-icon-vector-04.svg" background="#ee7074" />

            <Stack image="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" background="#52649e" />
            <Stack image="" background="black" />
            <Stack image="https://seeklogo.com/images/A/adobe-illustrator-logo-775FAF240B-seeklogo.com.png" background="wheat" />
            <Stack image="https://bitmovin.com/wp-content/uploads/2016/12/ruby-logo.png" background="#f7f295" />

            <Stack image="data:image/png;base64,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" background="#ee7074" />
            <Stack image="" background="black" />
            <Stack image="https://cdn2.unrealengine.com/Unreal+Engine%2Fblog%2Fconnect-with-the-unreal-engine-community-online%2FUE_Community_Online_feed-thumb-mobileV2-800x450-62c20011417d65be1c8fc0188304c576ceb286e6.png?resize=1&w=500" background="#9D5AFA" />
            <Stack image="https://www.brandeps.com/icon-download/P/Python-icon-vector-04.svg" background="#ee7074" />
            </div>
        </div>
        </>
    )
}

export default Skills
