import { Card, Spacer, Text, Grid } from '@nextui-org/react';

function AboutMeContainer() {
    return (
        <>
            <Spacer/>
            <Grid.Container justify='center'>
                <Grid xs={11}>
                    <Card isHoverable>
                    <Card.Header>
                        <Text h2>
                            About Me
                        </Text>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body>
                        <Text b size='$xl'>
                            I am a Full Stack Web Developer based in Arizona. Projects that require creative solutions are my favorite. I'm always interested
                            in learning about new tech, new programming languages, and just about anything relating to computers. I completed the Full Stack
                            Web Develoment through the University of Arizona while also pursuing a Bachleors in Computer Science. My dream project to work on would be one
                            that has a positive impact on many users and improves their lives in some way.
                        </Text>
                    </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
            <Spacer/>
        </>
    )
}

export default AboutMeContainer;