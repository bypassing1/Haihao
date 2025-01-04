import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import classes from '../css/Footer.module.css';

export function FooterSocial() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                {/* <MantineLogo size={28} /> */}
                <img className={classes.logo} src="../../public/logo.png" alt="" />
                <Group gap={10} className={classes.links} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="light" variant="subtle">
                        <IconBrandTwitter size={50} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="light" variant="subtle">
                        <IconBrandYoutube size={50} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="light" variant="subtle">
                        <IconBrandInstagram size={50} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}