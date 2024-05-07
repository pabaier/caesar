import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Layout({plainText, cipherText, keyText, cipherButton}) {
    return (
      <Container className="pt-3">
        <Row>
          <Col>Plain Text</Col>
          <Col xs={2}><center>Key</center></Col>
          <Col className="right-align">Cipher Text</Col>
        </Row>
        <Row>
          <Col>{plainText}</Col>
          <Col xs={2}>{keyText}</Col>
          <Col>{cipherText}</Col>
        </Row>
        <Row>
          <Col />
          <Col xs={7} className="pt-3"><center>{cipherButton}</center></Col>
          <Col />
        </Row>
      </Container>
    );
    };

export function Input({id, value, changeHandler, type="text"}) {
    return <Form.Control id={id} onChange={changeHandler} value={value} type={type} />;
    };

export function PageButton({text, clickHandler}) {
    return <Button 
            variant="primary"
            onClick={clickHandler}
           >
            {text}
          </Button>;
    };