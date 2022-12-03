import { useTheme, Image, Row, Spacer, Grid, Text } from '@nextui-org/react'

function Footer() {

    return (
        <footer>
            <Grid.Container justify='center'>
                <Text h4>
                    Get in touch with me
                </Text>
                <Row justify='center'>
                    <a target="_blank" rel="noreferrer" href="https://github.com/JamesXalis">
                        <Image
                            width={57}
                            height={57}
                            alt="github logo"
                        objectFit='fill'
                        />
                    </a>
                    <Spacer x={2}/>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/JamesXalis">
                        <Image
                            width={57}
                            height={57}
                            alt="github logo"
                            objectFit='fill'
                        />
                    </a>
                    <Spacer x={2}/>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/JamesXalis">
                        <Image
                            width={57}
                            height={57}
                            alt="github logo"
                            objectFit='fill'
                        />
                    </a>
                </Row>
            </Grid.Container>
        </footer>
    );
}

export default Footer;