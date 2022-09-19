import { Container, Grid, Spacer, Navbar, Modal, Dropdown, Avatar, Table, Input } from "@nextui-org/react";
import { Card, Col, Text, Row, Link, Button, Badge } from "@nextui-org/react";
import Head from "next/head";
import { MiniStat, Stat } from "../library/Library";

export async function getServerSideProps() {
    // Fetch data from external API

    return { props: { payload: "null" } }
}

export default function Payroll() {
    const collapseItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    return (
        <Container>
            <Head>
                <title>Blank Project</title>
                <link rel="icon" type="image/x-icon" href="icon.png" />
            </Head>
            <Container>
                <Navbar isBordered variant="sticky">
                    <Navbar.Toggle showIn="xs" />
                    <Navbar.Brand
                        css={{
                            "@xs": {
                                w: "12%",
                            },
                        }}
                    >
                        <Text b color="inherit" hideIn="xs">
                            Company Name
                        </Text>
                    </Navbar.Brand>
                    <Navbar.Content
                        activeColor="warning"
                        hideIn="xs"
                    >
                        <Navbar.Link isDisabled href="#">Logistics</Navbar.Link>
                        <Navbar.Link href="../">
                            Production
                        </Navbar.Link>
                        <Navbar.Link href="#">Employees</Navbar.Link>
                        <Navbar.Link isActive href="../payroll">Payroll</Navbar.Link>
                    </Navbar.Content>
                    <Navbar.Content
                        css={{
                            "@xs": {
                                w: "12%",
                                jc: "flex-end",
                            },
                        }}
                    >
                        <Dropdown placement="bottom-right">
                            <Navbar.Item>
                                <Dropdown.Trigger>
                                    <Avatar
                                        bordered
                                        as="button"
                                        color="secondary"
                                        size="md"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                </Dropdown.Trigger>
                            </Navbar.Item>
                            <Dropdown.Menu
                                aria-label="User menu actions"
                                color="secondary"
                                onAction={(actionKey) => console.log({ actionKey })}
                            >
                                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        Signed in as
                                    </Text>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        dave@company.com
                                    </Text>
                                </Dropdown.Item>
                                <Dropdown.Item key="help_and_feedback" withDivider>
                                    Help & Feedback
                                </Dropdown.Item>
                                <Dropdown.Item key="logout" withDivider color="error">
                                    Log Out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Content>
                    <Navbar.Collapse>
                        {collapseItems.map((item, index) => (
                            <Navbar.CollapseItem
                                key={item}
                                activeColor="secondary"
                                css={{
                                    color: index === collapseItems.length - 1 ? "$error" : "",
                                }}
                                isActive={index === 2}
                            >
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href="#"
                                >
                                    {item}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>
                </Navbar>

                <Container css={{ mw: "1200px" }}>
                    <Spacer y={3} />
                    <ProductionData />
                </Container>
            </Container>

        </Container>
    );
}


const ProductionData = ({ }) => (
    <Container>
        <Col>
            <Text b size={16}>Choose payroll provider:</Text>
        </Col>
        <Grid.Container gap={2} justify="left">
            <Grid xs={5} sm={3}>
                <Provider name="INTERGRATE" title="Quickbooks" imgSource={"https://quickbooks.intuit.com/cas/dam/IMAGE/A6OWCozsM/qb_thumb.png"} />
            </Grid>
            <Grid xs={5} sm={3}>
                <Provider name="INTERGRATE" title="Paychex" imgSource={"https://play-lh.googleusercontent.com/VpIfES8tvIMWUSpOKnNGGzJB4TlWpJstrQNkkH4cdkuamR5U3IjzdjK0JUv7gh66E5k"} />
            </Grid>
            <Grid xs={5} sm={3}>
                <Provider name="INTERGRATE" title="Onpay" imgSource={"https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/https://onpay.com/wp-content/uploads/2022/03/onpay-stacked-new-2021-300x300-01.png"} />
            </Grid>
        </Grid.Container>
    </Container>
)

const Provider = ({ imgSource,title, name }) => (
    <Card  isPressable>
        <Card.Header css={{  position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text h4 color="white">
                  {title}
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src={imgSource}
            objectFit="contain"
            width="100px"
            height={200}
            alt="Card image background"
        />
    </Card>
)