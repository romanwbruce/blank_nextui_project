import { Container, Grid, Spacer, Navbar, Modal, Dropdown, Avatar, Table, Input } from "@nextui-org/react";
import { Card, Col, Text, Row, Link, Button, Badge } from "@nextui-org/react";
import Head from "next/head";
import { MiniStat, Stat } from "../library/Library";

export async function getServerSideProps() {
    // Fetch data from external API

    return { props: { payload: "null" } }
}

export default function Index() {
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
                        <Navbar.Link isActive href="#">
                            Production
                        </Navbar.Link>
                        <Navbar.Link href="#">Employees</Navbar.Link>
                        <Navbar.Link href="#">Invoices</Navbar.Link>
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

        <Col css={{mb: "2rem"}}>
            <Text b color="$gray600" css={{}}>Last updated: 10 minutes ago.</Text>
            <Text
                h1
                size={30}
            >
                Production
            </Text>
        </Col>


        <Row justify="space-between" wrap="wrap">
            <Stat value={54} label={"WIDGETS PRODUCED (DAY)"} />
            <Stat value={128} label={"WIDGETS PRODUCED (WEEK)"} />
            <Stat value={3} color="error" label={"REJECTED WIDGETS"} />
            <Stat value={0} color="warning" label={"WARNINGS"} />
        </Row>


        <Spacer y={3} />
        
        <Table
            aria-label="Example table with static content"
            css={{
                height: "auto",
                minWidth: "100%",
            }}
        >
            <Table.Header>
                <Table.Column>CLIENT</Table.Column>
                <Table.Column>ORDER NUMBER</Table.Column>
                <Table.Column>STATUS</Table.Column>
            </Table.Header>
            <Table.Body>
                <Table.Row key="1">
                    <Table.Cell>Company</Table.Cell>
                    <Table.Cell>{Math.random() * 1000000}</Table.Cell>
                    <Table.Cell><Text b color="success">COMPLETE</Text></Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                    <Table.Cell>Company</Table.Cell>
                    <Table.Cell>{Math.random() * 1000000}</Table.Cell>
                    <Table.Cell><Text b color="warning">IN PROGRESS</Text></Table.Cell>
                </Table.Row>
                <Table.Row key="3">
                    <Table.Cell>Company</Table.Cell>
                    <Table.Cell>{Math.random() * 1000000}</Table.Cell>
                    <Table.Cell><Text b color="warning">IN PROGRESS</Text></Table.Cell>
                </Table.Row>
                <Table.Row key="4">
                    <Table.Cell>Company</Table.Cell>
                    <Table.Cell>{Math.random() * 1000000}</Table.Cell>
                    <Table.Cell><Text b color="error">BEHIND SCHEDULE</Text></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        <Spacer y={3} />
        <Card>
            <Card.Body css={{ p: "2rem" }}>
                <Text b size={16}>Update Order</Text>
                <Spacer y={1} />
                <Grid.Container>
                    <Grid>
                        <Input
                            bordered
                            labelPlaceholder="Work Number"
                            color="default" />
                    </Grid>
                    <Spacer x={1} />
                    <Grid>
                        <Input
                            bordered
                            labelPlaceholder="Data"
                            color="default" />
                    </Grid>
                    <Spacer x={1} />
                    <Grid>
                        <Input
                            bordered
                            labelPlaceholder="Data"
                            color="default" />
                    </Grid>
                    <Spacer x={1} />
                    <Grid>
                        <Input
                            bordered
                            labelPlaceholder="Data"
                            color="default" />
                    </Grid>
                </Grid.Container>
            </Card.Body>
        </Card>
        <Spacer y={3} />
        <Row justify="space-evenly" wrap="wrap">
            <MiniStat value={34672} label={"PRODUCED (ALL TIME)"} />
            <MiniStat value={"123 Plant"} label={"PLANT"} />
            <MiniStat value={"2000"} color="error" label={"REJECT WIDGETS (ALL TIME)"} />
            <MiniStat value={10} label={"WORKERS"} />
        </Row>
    </Container>
)