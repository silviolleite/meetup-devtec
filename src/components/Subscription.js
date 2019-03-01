import React, {useState, useEffect} from 'react';
import { Row, Col, Form, FormGroup, Label, Button } from 'reactstrap';


export default function Subscription(){
    const name = useFormInput('');
    const email = useFormInput('');

    return (
        <Row>
            <Col>
                <h1>Formulário de Inscrição</h1>
                <Form>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <input type="text" name="nome" id="nome" className="form-control" placeholder="Nome Completo" {...name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="E-mail" {...email} />
                    </FormGroup>
                    <Button color="primary">Me inscrever</Button>
                </Form>
            </Col>
        </Row>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    };
}