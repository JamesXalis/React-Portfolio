function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <Navbar isBordered variant='static' height={125}>
                <Grid.Container wrap="wrap">
                    <Grid xs>
                        <Navbar.Brand>
                            <Col>
                                <Text b h1 size={30} >
                                    Tristan Saragosa
                                </Text>
                                <Text>
                                    Full Stack Web Developer
                                </Text>
                            </Col>
                        </Navbar.Brand>
                    </Grid>
                    <Grid >
                        <Navbar.Content enableCursorHighlight activeColor='primary' hideIn="xsMax" variant='highlight-solid-rounded' >
                            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                        </Navbar.Content>
                    </Grid>
                </Grid.Container>
            </Navbar>
        </header>
    );
}

export default Header ();