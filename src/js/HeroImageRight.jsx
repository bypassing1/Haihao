import { Button, Container, Text, Title } from "@mantine/core";
import classes from "../css/HeroImageRight.module.css";

export function HeroImageRight() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                        Discover the Ultimate{" "}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: "pink", to: "yellow" }}
                            >
                                Dimsum Mentai
                            </Text>{" "}
                            Experience 
                        </Title>

                        <Text className={classes.description} mt={30}>
                        Delicious Options to Satisfy Your Cravings Anytime! 
                        <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: "pink", to: "yellow" }}
                                fw={700}
                                ml={5}
                            >Everybody needs dim ‘sum’ body sometimes</Text>
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: "pink", to: "yellow" }}
                            size="xl"
                            className={classes.control}
                            mt={40}
                        >
                            Buy Now
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
