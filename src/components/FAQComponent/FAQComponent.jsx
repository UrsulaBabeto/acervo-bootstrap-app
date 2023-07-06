/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon={faChevronDown} />  */
import {Accordion} from "react-bootstrap";


function FAQComponent({ title, description }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          {title}
        </Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQComponent;
