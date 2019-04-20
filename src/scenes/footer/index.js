import React from 'react'
import { Container, Row, Col } from 'reactstrap'

// import Logo from '../../assets/logo.png';
import './index.less';

export default () => (
    <footer className="footer">
        <Container>
            <Row className="footer-body">
                <Col md={3} sm={6}>
                    <h4>Features</h4>
                    <ul>
                        <li><a href="/">Overview</a></li>
                        <li><a href="/">Applicant tracking</a></li>
                        <li><a href="/">Relationship management</a></li>
                        <li><a href="/">Sourcing</a></li>
                        <li><a href="/">G Suite</a></li>
                        <li><a href="/">GDPR Compliance</a></li>
                    </ul>
                </Col>
                <Col md={3} sm={6}>
                    <h4>Getting Started</h4>
                    <ul>
                        <li><a href="/">Request Demo</a></li>
                        <li><a href="/">Pricing</a></li>
                    </ul>
                </Col>
                <Col md={3} sm={6}>
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="/press/">Press</a></li>
                        <li><a href="/">YouTube Channel</a></li>
                        <li><a href="/">Support</a></li>
                        <li><a href="/">Community</a></li>
                        <li><a href="/">re:Work</a></li>
                    </ul>
                </Col>
                <Col md={3} sm={6}>
                    <h4>Why Hireflow?</h4>
                    <ul>
                        <li><a href="/">ATS for G Suite</a></li>
                        <li><a href="/">G Suite ATS</a></li>
                        <li><a href="/">Google ATS</a></li>
                        <li><a href="/">Post a Job</a></li>
                        <li><a href="/">Sourcing on Google</a></li>
                        <li><a href="/">Candidate Experience</a></li>
                        <li><a href="//">Interview Scheduling</a></li>
                        <li><a href="/">Chrome Extension ATS</a></li>
                        <li><a href="//">Rejection Email Templates</a></li>
                        <li><a href="/">Top Applicant Tracking System</a></li>
                        <li><a href="/">Best ATS for Small Businesses</a></li>
                    </ul>
                </Col>
            </Row>
            <hr />
            <div className="copy-right">
                <ul>
                    <li><a href="">About Hireflow</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms</a></li>
                </ul>
                <div style={{ display: 'flex' }}>
                    Share
                    <ul>
                        <li><a href="" className="email-icon"></a></li>
                        <li><a href="" className="fb-icon"></a></li>
                        <li><a href="" className="twitter-icon"></a></li>
                        <li><a href="" className="gplus-icon"></a></li>
                        <li><a href="" className="linkedin-icon"></a></li>
                    </ul>
                </div>
            </div>            
        </Container>
    </footer>
)