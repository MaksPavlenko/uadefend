import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../../../../../hooks/useLanguage';
import {
  Accordion,
  AccordionHeader,
  AccordionContent,
} from '../../../../Ui/AccordionDefault/AccordionDefault';

const AboutFaq = ({ items }) => {
  const langToggle = useLanguage;

  const [active, setActive] = React.useState(null);

  function accordionToggle(e, index) {
    setActive(index);
    if (active === index) {
      setActive(null);
    }
  }

  return (
    <div className="assets-faq__accordion">
      {items.map((item, index) => {
        return (
          <Accordion key={index}>
            <AccordionHeader
              title={langToggle(
                item.question_ua,
                item.question_fr,
                item.question_en
              )}
              index={index}
              accordionToggle={accordionToggle}
              active={active}
            />
            <AccordionContent active={active} index={index}>
              <ReactMarkdown
                source={langToggle(
                  item.answer_ua,
                  item.answer_fr,
                  item.answer_en
                )}
                className="assets-faq__answer"
              />
              {/* <p className="assets-faq__answer">
                  {langToggle(item.answer_ua, item.answer_ru, item.answer_en)}
                </p> */}
            </AccordionContent>
          </Accordion>
        );
      })}
    </div>
  );
};

AboutFaq.propTypes = {
  items: PropTypes.array,
};

export default AboutFaq;
