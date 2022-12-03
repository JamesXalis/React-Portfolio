import { Card, Grid, Text, Row, Link, Button } from '@nextui-org/react';

function SideProjects () {
    return (
        <>
            <Grid.Container justify='center'>
                <Text justify='center' h2 b>
                        Side projects
                </Text>
            </Grid.Container>
            <Grid.Container gap={2} justify='center'>

                <Grid xs={16} md={3}>
                    <Card isHoverable isPressable>
                        <Card.Header>
                            <Text h3>
                                JavaScript Quiz
                            </Text>
                        </Card.Header>
                        <Card.Divider/>
                        <Card.Body>
                            <Text>A small quiz on JavaScript topics</Text>
                            <Text>
                                HTML, JavaScript, CSS
                            </Text>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable isPressable>
                        <Card.Header>
                            <Text h3>
                                Weather Application
                            </Text>
                        </Card.Header>
                        <Card.Divider/>
                        <Card.Body>
                            <Text>Search for a city's current day weather and a five day forecast</Text>
                            <Text>
                                JavaScript, APIs
                            </Text>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable isPressable>
                        <Card.Header>
                            <Text h3>
                                Employee Tracker
                            </Text>
                        </Card.Header>
                        <Card.Divider/>
                        <Card.Body>
                            <Text>A back-end CLI application</Text>
                            <Text>
                                JavaScript, Sequelize, Inquirer
                            </Text>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    );
}

export default SideProjects;