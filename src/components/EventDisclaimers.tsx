import { useState } from 'react';
import { MdFrontHand } from 'react-icons/md';
import { RxMinus, RxPlus } from 'react-icons/rx';
import { AccordionItem, AccordionWrapper } from './Accordion';

const EventDisclaimers = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-2 items-center font-semibold">
          <MdFrontHand size={20} />
          <p>Read Carefully</p>
        </div>
        <button
          className="hover:text-blue-500 mr-3"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? <RxMinus /> : <RxPlus />}
        </button>
      </div>

      <AccordionWrapper>
        <AccordionItem title="Behave well" opened={showAll}>
          <div>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </AccordionItem>
        <AccordionItem title="Behave well" opened={showAll}>
          <div>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </AccordionItem>
        <AccordionItem title="Behave well" opened={showAll}>
          <div>
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </AccordionItem>
      </AccordionWrapper>
    </>
  );
};

export default EventDisclaimers;
