import { Container, Grid, Spacer, Navbar, Modal, Dropdown, Avatar, Table, Input } from "@nextui-org/react";
import { Card, Col, Text, Row, Link, Button, Badge } from "@nextui-org/react";
import Head from "next/head";

export async function getServerSideProps() {

    return { props: { payload: "null" } }
}

export default function Index() {
    return (
        <Container>
            <Head>
                <title>Roman Bruce</title>
            </Head>
            <Row justify="center" css={{ mt: "$20" }}>
                <Col align="center">
                    <Text
                        h1
                        size={80}
                        css={{
                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                            textAlign: "center",
                            maxWidth: "500px"
                        }}
                        weight="bold"
                    >
                        Hello, I&apos;m Roman.
                    </Text>
                    <Text b size={16} color="white">A software engineer from Greenville, South Carolina.</Text>

                    <Row css={{ mt: "$15" }} justify="center">
                        <Grid css={{ m: "$5" }}>
                            <Link href="../resume.pdf"><Text b color="warning">Resume</Text></Link>
                        </Grid>
                        <Grid css={{ m: "$5" }}>
                            <Link href="https://www.linkedin.com/in/roman-bruce-4864ab248/"><Text b color="primary">LinkedIn</Text></Link>
                        </Grid>
                        <Grid css={{ m: "$5" }}>
                            <Link color={"secondary"} href="mailto:romanwbruce@gmail.com">romanwbruce@gmail.com</Link>
                        </Grid>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}

