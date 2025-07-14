import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import PlaceCard from '../components/place-card'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container1">
      <Helmet>
        <title>DevDrops</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1>DevDrops</h1>
          <div className="landing-page-right-side">
            <div className="landing-page-links-container1">
              <span className="landing-page-text10">
                Contact Us :   bhardwaj.vaibs@gmail.com
              </span>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="landing-page-text11">Vaibhav Bhardwaj</h1>
            <span className="landing-page-text12">B.E.(CSE) | Android Developer</span>

          </div>

        <div className="landing-page-photo-container">
    <img
      src="/2241025_Vaibhav_Bhardwaj.jpeg"  // Replace with your image path or URL
      alt="Profile"
      className="circular-photo"
    />
  </div>
        </div>

  
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>Android Apks</h1>
        <div className="landing-page-cards-container">
           <PlaceCard
            city="TO DO List"
            text={
              <Fragment>
                <span className="landing-page-text14">
                  <span>
                    Boost your productivity with this simple  React Native App.
                  </span>
                  <br></br>
                  <br></br>
                  <span>📝 Add new tasks quickly and easily.</span>
                  <br></br>
                  <span>🗑️ Delete tasks when you&apos;re done.</span>
                  <br></br>
                  <br></br>
                  <span>
                    Whether it’s a grocery list, work goals, or daily reminders
                    — this app helps you stay on track.
                  </span>
                </span>
              </Fragment>
            }
             showButton={true}
             repoUrl="https://github.com/bhardwajvaibs/todo"
  techStack={["React Native ", "Firebase", "MongoDB", "Render","Javascript"]}
             apkUrl="https://github.com/bhardwajvaibs/todo/releases/download/v1.0.0/app-release.apk"
          // rootClassName="place-cardroot-class-name"
          ></PlaceCard>
          <PlaceCard
            city="Vibe"
            text={
              <Fragment>
                <span className="landing-page-text24">
                  <span>
                    Experience instant communication with our Real-Time Chat
                    App, designed to keep you connected — anytime, anywhere.
                  </span>
                  <br></br>
                  <br></br>
                  <span>📡 Real-time messaging with instant updates.</span>
                  <br></br>
                  <span>🧑‍🤝‍🧑 One-on-one and group chats.</span>
                  <br></br>
                  <span>🔔 Push notifications for new messages.</span>
                  <br></br>
                  <span>✨ Clean and responsive UI.</span>
                  <br></br>
                  <span>🔒 Secure &amp; reliable communication .</span>
                </span>
              </Fragment>
            }
             showButton={true}
               repoUrl="https://github.com/bhardwajvaibs/Vibe"
  techStack={["React Native ", "Firebase", "MongoDB", "Render","Javascript"]}
          apkUrl="https://github.com/bhardwajvaibs/Vibe/releases/download/v1.0.0/app-release.apk" 
          ></PlaceCard>
          <PlaceCard
            city="Cure"
            text={
              <Fragment>
                <span className="landing-page-text37">
                  <span>
                    Connect with the right doctor in real time. This app lets
                    patients find doctors based on their health issues and start
                    a private chat instantly.
                  </span>
                  <br></br>
                  <br></br>
                  <span>🔍 Search doctors by symptoms or specialization.</span>
                  <br></br>
                  <span>💬 Real-time chat for quick consultations.</span>
                  <br></br>
                  <span>🛡️ Secure and easy to use.</span>
                  <br></br>
                  <br></br>
                  <span>
                    Healthcare made simple, fast, and accessible — right from
                    your phone.
                  </span>
                </span>
              </Fragment>
            }
              repoUrl="https://github.com/bhardwajvaibs/cure"
  techStack={["React Native ", "Firebase", "MongoDB", "Render","Javascript"]}
             showButton={true}
          ></PlaceCard>
         <PlaceCard
            city="Cropify"
            text={
              <Fragment>
                <span className="landing-page-text49">
                  <span>
                    Get the best crop for your land in seconds! This smart app
                    recommends the most suitable crop based on 7 key conditions
                    entered by the user.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    ✅ Enter soil type, pH, rainfall, temperature &amp; more.
                  </span>
                  <br></br>
                  <span>🌱 Get the best crop suggestion instantly.</span>
                  <br></br>
                  <span>📊 Based on real data and smart algorithms.</span>
                  <br></br>
                  <br></br>
                  <span>
                    Farming made smarter, with the right crop at the right time.
                  </span>
                </span>
              </Fragment>
            }
             showButton={true}
               repoUrl="https://github.com/bhardwajvaibs/Cropify"
  techStack={["React Native ", "Firebase", "MongoDB", "Render","Javascript"]}
             apkUrl="https://github.com/bhardwajvaibs/Cropify/releases/download/v1.0.0/app-release.apk"
          ></PlaceCard>
         
          <PlaceCard
            city="Upcoming ..."
            text={
              <Fragment>
                <span className="landing-page-text61">
                  Upcoming project ...
                </span>
              </Fragment>
            }
              showButton={false}
   
            rootClassName="place-cardroot-class-name1"
          ></PlaceCard>
          <PlaceCard
            city="Upcoming ..."
            text={
              <Fragment>
                <span className="landing-page-text62">
                  Upcoming project ...
                </span>
              </Fragment>
            }
            showButton={false}
            
            rootClassName="place-cardroot-class-name2"
          ></PlaceCard>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>DevDrops</h1>
          <div className="landing-page-links-container2">
            <div className="landing-page-container2">
              <a
                href="https://github.com/bhardwajvaibs"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link1"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/bhardwajvaibs/https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link2"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
 