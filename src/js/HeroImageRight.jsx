import React, { useEffect } from "react";
import { Button, Container, Text, Title } from "@mantine/core";
import classes from "../css/HeroImageRight.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroImageRight() {
    useEffect(() => {
        gsap.fromTo(
            `.${classes.root}`,
            { backgroundSize: "110%" },
            {
                backgroundSize: "100%",
                duration: 1,
                scrollTrigger: {
                    trigger: `.${classes.root}`,
                    toggleActions: 'restart none restart none',
                },
            }
        );
    }, []);

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
                            Delicious Options to Satisfy Your Cravings Anytime!{" "}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: "pink", to: "yellow" }}
                                fw={700}
                                ml={5}
                            >
                                Everybody needs dim ‘sum’ body sometimes
                            </Text>
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
