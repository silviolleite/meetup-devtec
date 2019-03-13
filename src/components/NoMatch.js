import React from "react"
import { Container, Row, Col } from "reactstrap"

export default function NoMatch(){
	return(
		<Container>
			<Row>
				<Col className="text-center">
					<h1 className="display-3">404!</h1>
					<p className="lead">Página não encontrada</p>
				</Col>
			</Row>
		</Container>
	)
}

