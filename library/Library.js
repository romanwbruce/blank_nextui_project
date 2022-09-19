import { Container, Col, Spacer, Text, Grid, Input, Row, Button, Link, Card, useSSR } from "@nextui-org/react"
import axios from "axios";
import { useState } from "react"


export function PageLayout({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export function AlertMessage({ icon, color, message }) {
    return (
        <Row align="flex-start">
            <Grid>
                {icon}
            </Grid>
            <Text css={{ ml: "$5" }} color={color} b size={16}>{message}</Text>
        </Row>
    )
}

export function GetUpdates({ header=true }) {
    const [email, setEmail] = useState("");
    return (
        <Container>
            <Grid.Container>
                <Spacer y={1.5} />
                <Col align="center">
                    {header &&
                        <Text
                            h1
                            size={40}
                            weight="bold">
                            Stay Updated
                        </Text>
                    }
                    <Text size={16}>Be the first know when we add new tokens and features!</Text>
                    <Spacer y={1} />

                    <Row align="center" justify="center">
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            contentRightStyling={false}

                            contentRight={
                                <Button onPress={() => {
                                    setEmail("Signed up!")
                                    axios.post("/api/internal/subscribe", { email: email })
                                }} flat auto >
                                    Sign Up
                                </Button>

                            }
                            size="lg"
                            placeholder="Email"
                        />

                    </Row>

                </Col>
                <Spacer y={2} />
            </Grid.Container>
        </Container>

    )
}
export function Stat({ label, value, color = "success" }) {
    return (
        <Card css={{ m: "5px", mw: "250px" }}>
            <Card.Body>
                <Col gap={1}>
                    <Link block
                        color={color}>
                        <Text b color={color} size={30}>{value}</Text>
                    </Link>
                    <Text css={{ ml: "10px" }} color={"$gray600"} size={14} b>{label}</Text>
                </Col>
            </Card.Body>
        </Card>
    )
}
export function SpecialStat({ label, value, color = "success" }) {
    return (
        <Grid.Container css={{ background: "$black", mt: "2rem" }}>
            <Col gap={1}>
                <Text b color={color} css={{
                    textGradient: "45deg, #e53935 -20%, #e35d5b 100%",
                }} size={30}>{value}</Text>
                <Text css={{ ml: "10px" }} color={"$gray600"} size={16} b>{label}</Text>
            </Col>
        </Grid.Container >
    )
}
export function MiniStat({ small = false, label, value, color = "success" }) {
    return (
        <Col gap={1} css={{ mw: (small == false ? "200px" : "175px") }}>
            <Text css={{ ml: "10px" }} color={"$gray600"} size={12} b>{label}</Text>
            <Link
                css={{ pl: "10px", wordWrap: "break-word" }}
                color={color}>
                <Text b color={color} size={15}>{value}</Text>
            </Link>
        </Col>
    )
}
export function Hero({ heroText, heroSubTitle }) {
    return (
        <Container>
            <Col align="center">
                <Text
                    h1
                    size={50}
                    weight="bold">
                    {heroText}
                </Text>
                <Text b>{heroSubTitle}</Text>
            </Col>
        </Container>
    )
}

export function SocialProof({ }) {
    return (
        <Row justify="center">
            <Link block color="success" align="center">
                <Text color="success" b size={16}>
                    Over $1,000 withdrawn within the last 24 hours.
                </Text>
            </Link>
        </Row>
    )
}