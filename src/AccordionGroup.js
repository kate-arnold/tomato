import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

class AccordionGroup extends React.Component {
  render() {
    return (
      <div className="mtb2">
        <Accordion preExpanded="1">
          <AccordionItem uuid="1">
            <AccordionItemHeading>
              <AccordionItemButton>Nutrition</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              Tomatoes are now eaten freely throughout the world. They contain
              the carotene lycopene , one of the most powerful natural
              antioxidants . In some studies, lycopene, especially in cooked
              tomatoes, has been found to help prevent prostate cancer , but
              other research contradicts this claim. Lycopene has also been
              shown to improve the skin's ability to protect against harmful UV
              rays. A study done by researchers at Manchester and Newcastle
              universities revealed that tomato can protect against sunburn and
              help keeping the skin looking youthful. Natural genetic variation
              in tomatoes and their wild relatives has given a genetic plethora
              of genes that produce lycopene, carotene, anthocyanin, and other
              antioxidants. Tomato varieties are available with double the
              normal vitamin C (Doublerich), 40 times normal vitamin A (97L97),
              high levels of anthocyanin (resulting in blue tomatoes), and two
              to four times the normal amount of lycopene (numerous available
              cultivars with the high crimson gene).
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="2">
            <AccordionItemHeading>
              <AccordionItemButton>Health benefits</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              Lycopene has also been shown to protect against oxidative damage
              in many epidemiological and experimental studies. In addition to
              its antioxidant activity, other metabolic effects of lycopene have
              also been demonstrated. The richest source of lycopene in the diet
              is tomato and tomato derived products. Tomato consumption has been
              associated with decreased risk of breast cancer, head and neck
              cancers and might be strongly protective against neurodegenerative
              diseases. Tomatoes, tomato sauces and puree are said to help lower
              urinary tract symptoms (BPH) and may have anticancer properties.
              Tomato consumption might be beneficial for reducing cardiovascular
              risk associated with type 2 diabetes.
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="3">
            <AccordionItemHeading>
              <AccordionItemButton>Storage</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              Tomatoes keep best unwashed at room temperature and out of direct
              sunlight. It is not recommended to refrigerate as this can harm
              the flavor. Tomatoes that are not yet ripe can be kept in a paper
              bag till ripening. Storing stem down can prolong shelf life.
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default AccordionGroup;
