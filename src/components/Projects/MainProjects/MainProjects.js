import { Card, Grid, Text, Row, Col, Link, Button, Spacer } from '@nextui-org/react';
// import cardBattle from '../../../images/Card-Battle.png'

function MainProjects () {
    return (
        <>
            <Grid.Container gap={2} justify='center'>
                <Grid xs={16} md={3}>
                        <Card isHoverable >
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: -10 }}>
                                <Text h3>
                                    ReelSearch
                                </Text>
                            </Card.Header>
                            <Card.Body css={{ position: "absolute", zIndex: 1, top: 80}}>
                                <Col justify='center'>
                                <Text b>
                                    An Application Created to Search for New Movies.
                                </Text>
                                <Spacer/>
                                <Text b>
                                    HTML, JavaScript, CSS
                                </Text>
                                </Col>
                            </Card.Body>
                            <Card.Image
                            
                            objectFit='cover'
                            alt='Card Game Project'
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
                                            href="https://trufl.github.io/nonsocial-drinker/"
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
                            <Text h3>
                                Card Battle
                            </Text>
                        </Card.Header>
                        <Card.Body css={{ position: "absolute", zIndex: 1, top: 120 }}>
                            <Text b>A Turn Based Card Game</Text>
                            <Text b>
                                Express, Sequelize,
                            </Text>
                            <Text b>
                                JavaScript, Handlebars
                            </Text>
                        </Card.Body>
                        <Card.Image
                            
                            objectFit='cover'
                            alt='Card Game Project'
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
                                        href="https://card-battle.herokuapp.com/"
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
                                <Text h3>
                                    Coming Soon!
                                </Text>
                            </Card.Header>
                            <Card.Body css={{ position: "absolute", zIndex: 1, top: 20 }}>
                                <Text b size='$xs'>A collabritive project, still being worked on</Text>
                                <Text b size='$xs'>
                                    React, GraphQL, Mongoose, Express, JavaScript
                                </Text>
                            </Card.Body>
                            <Card.Image
                            
                            objectFit='cover'
                            alt='Card Game Project'
                            width="100%"
                            height={340}
                        />
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    );
}

export default MainProjects;