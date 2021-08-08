import React from "react";
import Heading from "./Heading";
import Article from "./Article";
import DataDisplay from "./DataDisplay";
import SubscribeForm from "./SubscribeForm";
import AccordionGroup from "./AccordionGroup";
import Footer from "./Footer";

class Tomato extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <Heading text="The Tomato" />
        <div id="article-data-wrapper">
          <Article />
          <DataDisplay />
        </div>
        <AccordionGroup />
        <SubscribeForm />
        <Footer />
      </div>
    );
  }
}

export default Tomato;
