import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

import './FAQComponent.css'

import { useState } from 'react';

function FAQComponent({ title, description }) {
    const [open,setOpen] = useState(false)
  return (
    <>
      <div className="d-flex flex-column ">
        <a className="faq-link" onClick={() => setOpen(!open)}>
         {title}
          <FontAwesomeIcon icon={faChevronDown} />
        </a>

        {open && (
          <div id="collapse-text">
            {description}
          </div>
        )}
      </div>
    </>
  );
}

export default FAQComponent;
