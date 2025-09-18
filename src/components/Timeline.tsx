import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Timeline.scss';

// Import logos
import ltLogo from '../assets/images/LT.svg';
import accentureLogo from '../assets/images/accenturelogo.svg';
import cognizantLogo from '../assets/images/cognizantlogo.svg';
import gpinfotechLogo from '../assets/images/gpinfotechlogo.svg';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        {/* ====== Career History Section ====== */}
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Oct 2023 - present"
            iconStyle={{ background: '#fff', border: '2.5px solid #000' }}
            icon={
              <div className="timeline-icon-wrapper">
                <img src={ltLogo} alt="LT Logo" className="timeline-custom-icon" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">LTI Mindtree</h3>
            <h4 className="vertical-timeline-element-subtitle">USA</h4>
            <p>Software Development Engineer <br /> Full-stack Web Development</p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2021 – Nov 2022"
            iconStyle={{ background: '#fff', border: '2.5px solid #000' }}
            icon={
              <div className="timeline-icon-wrapper">
                <img src={accentureLogo} alt="Accenture Logo" className="timeline-custom-icon logo-accenture" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">Accenture</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, In</h4>
            <p>Software Engineer <br /> API Development, User Experience</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2019 – Oct 2021"
            iconStyle={{ background: '#fff', border: '2.5px solid #000' }}
            icon={
              <div className="timeline-icon-wrapper">
                <img src={cognizantLogo} alt="Cognizant Logo" className="timeline-custom-icon" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">Cognizant</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, In</h4>
            <p>Programmer Analyst <br /> API Development, User Experience</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2018 – Jun 2018"
            iconStyle={{ background: '#fff', border: '2.5px solid #000' }}
            icon={
              <div className="timeline-icon-wrapper">
                <img src={gpinfotechLogo} alt="GP Infotech Logo" className="timeline-custom-icon" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">GP Infotech</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, In</h4>
            <p>.Net Developer <br /> Application Development</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {/* ====== Education History Section ====== */}
        <div className="education-container">
          <h1>Education</h1>
          <div className="education-grid">
            <div className="education-item">
              <FontAwesomeIcon icon={faGraduationCap} size="3x"/>
              <h3>Master Of Science,<br/> Computer Science</h3>
              <p>
                California State University, Long Beach, USA
                <br />
                January 2023 - December 2024
              </p>
            </div>

            <div className="education-item">
              <FontAwesomeIcon icon={faGraduationCap} size="3x"/>
              <h3>Bachelor of Technology,<br/> Computer Science</h3>
              <p>
                KL University, India
                <br />
                June 2016 - May 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
