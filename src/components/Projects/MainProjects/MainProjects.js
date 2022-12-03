import { Card, Grid, Text } from '@nextui-org/react';
import cardBattle from '../../../images/Card-Battle.png'

function MainProjects () {
    return (
        <>
            <Grid.Container gap={2} justify='center'>
                <Grid xs={16} md={3}>
                        <Card isHoverable isPressable>
                            <Card.Header>
                                <Text h3>
                                    ReelSearch
                                </Text>
                            </Card.Header>
                            <Card.Divider/>
                            <Card.Body>
                                <Text>Being updated</Text>
                                <Text>
                                    HTML, JavaScript, CSS
                                </Text>
                            </Card.Body>
                        </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable isPressable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 100, left: 80 }}>
                            <Text h3>
                                Card Battle
                            </Text>
                        </Card.Header>
                        <Card.Body css={{ position: "absolute", zIndex: 1, top: 160, left: 50 }}>
                            <Text b>A Turn Based Card Game</Text>
                            <Text b>
                                Express, Sequelize,
                            </Text>
                            <Text b>
                                JavaScript, Handlebars
                            </Text>
                        </Card.Body>
                        <Card.Image
                            objectFit='fill'
                            alt='Card Game Project'
                            width="100%"
                            height={340}
                        />
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable isPressable>
                        <Card.Header>
                            <Text h3>
                                Coming Soon!
                            </Text>
                        </Card.Header>
                        <Card.Divider/>
                        <Card.Body>
                            <Text>Coming Soon</Text>
                            <Text>
                                React, GraphQL, Mongoose, Express, JavaScript
                            </Text>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    );
}

export default MainProjects;