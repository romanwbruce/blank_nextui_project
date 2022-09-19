import { Container, Grid, Spacer } from "@nextui-org/react";
import { Card, Col, Text, Row, Link, Button, Badge } from "@nextui-org/react";
import Head from "next/head";

export default function App() {
    return (
        <Container>
            <Head>
                <title>Blank Project</title>
                <link rel="icon" type="image/x-icon" href="icon.png"/>
        </Head>
          
          <Text b size={40}>This is a blank project.</Text>

        </Container>
    );
}
