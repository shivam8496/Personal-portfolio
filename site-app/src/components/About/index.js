
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About =()=>{

    const [letterClass,setLetterClass] = useState("text-animate");
    const aboutme=['A','b','o','u','t',' ','m','e']

    // useEffect(() =>{
    //     setLetterClass('text-animate-hover')
// ,3000    },[])
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={aboutme} idx={15}/>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates dolores veritatis possimus sit! Earum reiciendis
                 dolorum neque sint rem ab, non aspernatur. Repudiandae imp
                 edit aliquam praesentium ipsum autem nisi atque natus dict
                 a molestiae blanditiis?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                    . Impedit et quaerat culpa quisquam asperiores, ad quae
                     officiis minus? Quidem ea eveniet asperiores voluptatem
                      ad ipsam doloribus molestiae, deserunt iste accusamus.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quae, dolor magnam veritatis repellat ea harum dolore 
                     adipisci in? Animi atque quidem cumque itaque, autem 
                     quis rerum quod maxime debitis veniam.</p>
           
           </div>
           <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>









        </div>
        <Loader type="pacman"/>
        </>
    )
}


export default About;