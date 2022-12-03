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
                    <Card isHoverable >
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: -10 }}>
                            <Text h3 color='warning' >
                                JavaScript Quiz
                            </Text>
                        </Card.Header>
                        <Card.Body css={{ position: "absolute", zIndex: 1, top: 11}}>
                            <Text b color='warning' >A small quiz on JavaScript topics</Text>
                            <Text b color='warning' >
                                HTML, JavaScript, CSS
                            </Text>
                        </Card.Body>
                        <Card.Image

                            objectFit='cover'
                            alt='Quiz App Homepage'
                            width="100%"
                            height={340}
                            />
                            <Card.Footer
                                isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#0f111466",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                    bottom: 0,
                                    zIndex: 1,
                                }}
                            >
                                <Row justify="center">
                                    <Button  flat shadow auto rounded color="primary">
                                        <Link 
                                            color="primary"
                                            target="_blank"
                                            href="https://trufl.github.io/javascript-quiz/"
                                        >
                                            <Text
                                                css={{ color: "inherit" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                Visit App
                                            </Text>
                                        </Link>
                                    </Button>
                                </Row>
                            </Card.Footer>
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable >
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: -10 }}>
                            <Text h3 color='warning' >
                                Weather Application
                            </Text>
                        </Card.Header>
                        <Card.Divider/>
                        <Card.Body css={{ position: "absolute", zIndex: 1, top: 11}}>
                            <Text b color='warning' >Current weather and a five day forecast</Text>
                            <Text b color='warning' >
                                JavaScript, APIs
                            </Text>
                        </Card.Body>
                        <Card.Image
                            
                            objectFit='cover'
                            alt='Weather App Homepage'
                            width="100%"
                            height={340}
                            />
                            <Card.Footer
                                isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#0f111466",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                    bottom: 0,
                                    zIndex: 1,
                                }}
                            >
                                <Row justify="center">
                                    <Button  flat shadow auto rounded color="primary">
                                        <Link 
                                            color="primary"
                                            target="_blank"
                                            href="https://trufl.github.io/weather-application/"
                                        >
                                            <Text
                                                css={{ color: "inherit" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                Visit App
                                            </Text>
                                        </Link>
                                    </Button>
                                </Row>
                            </Card.Footer>
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable >
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 0, left: 70}}>
                            <Text h3 color='warning' >
                                Employee Tracker
                            </Text>
                        </Card.Header>
                        <Card.Body css={{ position: "absolute", zIndex: 1, top: 120, left: 40 }}>
                            <Text b color='warning' >A back-end CLI application</Text>
                            <Text b color='warning' >
                                JavaScript, Sequelize, Inquirer
                            </Text>
                        </Card.Body>
                        <Card.Image
                            
                            objectFit='cover'
                            alt='Command Line Interface Logo'
                            width="100%"
                            height={340}
                            />
                            <Card.Footer
                                isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#0f111466",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                    bottom: 0,
                                    zIndex: 1,
                                }}
                            >
                                <Row justify="center">
                                    <Button  flat shadow auto rounded color="primary">
                                        <Link 
                                            color="primary"
                                            target="_blank"
                                            href="https://github.com/trufl/Employee-Tracker-Application"
                                        >
                                            <Text
                                                css={{ color: "inherit" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                Visit App
                                            </Text>
                                        </Link>
                                    </Button>
                                </Row>
                            </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    );
}

export default SideProjects;