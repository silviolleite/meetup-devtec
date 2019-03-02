import React from "react"
import { Container, Row, Col } from "reactstrap"

export default function NoMatch(){
	return(
		<Container>
			<Row>
				<Col className="text-center">
					<h1 className="display-3">404!</h1>
					<p className="lead">Page not found</p>
				</Col>
			</Row>
		</Container>
	)
}

