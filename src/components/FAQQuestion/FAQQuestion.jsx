/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon={faChevronDown} />  */
import { Accordion } from "react-bootstrap";

function FAQQuestion({ question, answer }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>{question}</Accordion.Header>
        {answer}
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQQuestion;
