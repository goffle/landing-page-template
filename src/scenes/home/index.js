import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import TopBar from "../header";
import Form from "./Form";

import "./index.less";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <HeaderSection />
        <WhatSection />
        <WhySection />
        <HowSection />
        <PriceSection />
      </div>
    );
  }
}

const HeaderSection = () => (
  <div className="section header" id="overview">
    <Container fluid>
      <TopBar />
      <Row className="hero-section">
        <Col md={5} className="description">
          <h1>Source easily your candidates</h1>
          <h2>
            Easy sourcing for busy recruiter. Hireflow enables you to post your job offer on 400+ channels so you can
            focus on your most important work
          </h2>
        </Col>
        <Col md={{ size: 5, offset: 2 }}>
          <Form />
        </Col>
      </Row>
    </Container>
  </div>
);

const WhatSection = () => (
  <div className="section what" id="what">
    <Container>
      <h2>What is Hireflow ?</h2>
      <p>
        Hireflow is the marketplace of sourcing channels such as generalist or niche job boards, google or facebook ads
        or specifics recruitments channels
      </p>
      <p>
        You can post on multiples job boards in few minutes and our ai powered recommendations engine will advise you on
        which job board you should go for.
      </p>
    </Container>
  </div>
);

const PriceSection = () => (
  <div className="section price" id="pricing">
    <Container>
      <h2>Price</h2>
      <p>Each job offer post cost 20 € + negociated job board price</p>
    </Container>
  </div>
);

const WhySection = () => (
  <div className="section why" id="why">
    <Container fluid>
      <h2>Why Hireflow ?</h2>
      <Row>
        <Col md={3}>
          <h3>Time Saving</h3>
          <p>
            Don't spend time register and filling job offer on multiple time. Your time would be better used doing more
            critical tasks
          </p>
        </Col>
        <Col md={3}>
          <h3>Compare</h3>
          <p>Compare job boards to select the one that best suits your needs.</p>
        </Col>
        <Col md={3}>
          <h3>Buy</h3>
          <p>
            Once you've selected your job board, purchase a job slot on our market place and publish a job offer. You'll
            be receiving applications in no time!
          </p>
        </Col>
        <Col md={3}>
          <h3>Export</h3>
          <p>
            Export all candidates in excel sheet with resume. You can now work directly in it or use your favorite ATS
            system
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

class HowSection extends React.Component {
  constructor(props) {
    super(props);
    const items = [
      {
        src: require("../../assets/screens/0.png"),
        altText: "Job offer",
        caption: "1 - Write or copy-paste your job offer"
      },
      {
        src: require("../../assets/screens/1.png"),
        altText: "Choose your jobboard",
        caption: "2 - Choose where to publish your job offer from the most complete list on the market"
      },
      {
        src: require("../../assets/screens/3.png"),
        altText: "Get analytics",
        caption: "3 - Measure your campaign"
      },
      {
        src: require("../../assets/screens/2.png"),
        altText: "Export",
        caption: "4 - Export all candidates to your favorite ATS"
      }
    ];

    this.state = {
      items,
      activeIndex: 0
    };
  }

  next() {
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  render() {
    const slides = this.state.items.map(item => {
      return (
        <CarouselItem key={item.src}>
          <div>
            <div className="text">{item.caption}</div>
            <div className="image-container">
              <img src={item.src} alt={item.altText} />
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div className="section how" id="how">
        <Container>
          <h2>How it works ?</h2>
          <Carousel
            activeIndex={this.state.activeIndex}
            next={this.next.bind(this)}
            previous={this.previous.bind(this)}
            slide={false}
            ride="false"
            interval={false}
          >
            <CarouselIndicators items={this.state.items} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous.bind(this)} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next.bind(this)} />
          </Carousel>
        </Container>
      </div>
    );
  }
}
