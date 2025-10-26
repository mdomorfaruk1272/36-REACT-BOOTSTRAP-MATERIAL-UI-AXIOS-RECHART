import { Button, Card } from "react-bootstrap";

const News = () => {
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius soluta commodi, sit doloremque dolores tenetur vero nesciunt voluptate?
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default News;