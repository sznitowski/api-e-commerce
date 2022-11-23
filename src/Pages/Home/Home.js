import { Container, Row } from 'react-bootstrap';
import './Home.css';

export default function Home() {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <h1 className='title'>Bienvenido!</h1>
                    </div>
                </Row>
            </Container>
        </div>
    );
};