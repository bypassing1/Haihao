import { IconChevronDown } from "@tabler/icons-react";
import { Burger, Center, Container, Drawer, Group, Menu, ScrollArea, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from '../assets/logo.png'
import classes from "../css/Header.module.css";

const links = [
    { link: "/about", label: "Features" },
    { link: "/about", label: "About" },
    { link: "/pricing", label: "Pricing" },
];

export function HeaderMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    const menuItems = links.map((link) => {
        if (link.links) {
            return (
                <Menu key={link.label} trigger="hover" position="bottom-start" withinPortal>
                    <Menu.Target>
                        <UnstyledButton className={classes.link}>
                            <Center inline>
                                <span>{link.label}</span>
                                <IconChevronDown size={16} style={{ marginLeft: 4 }} />
                            </Center>
                        </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                        {link.links.map((subLink) => (
                            <Menu.Item key={subLink.link} component="a" href={subLink.link}>
                                {subLink.label}
                            </Menu.Item>
                        ))}
                    </Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a key={link.label} href={link.link} className={classes.link}>
                {link.label}
            </a>
        );
    });

    const mobileMenuItems = links.map((link) => {
        if (link.links) {
            return (
                <div key={link.label} className={classes.mobileSubMenu}>
                    <UnstyledButton className={classes.link}>
                        {link.label}
                    </UnstyledButton>
                    <div className={classes.mobileSubmenuItems}>
                        {link.links.map((subLink) => (
                            <a
                                key={subLink.link}
                                href={subLink.link}
                                className={classes.subLink}
                                onClick={closeDrawer}
                            >
                                {subLink.label}
                            </a>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={closeDrawer}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md" h="100%">
                <div className={classes.inner}>
                    <img src={logo} alt="Logo" className={classes.logo} />

                    <Group gap={5} visibleFrom="sm">
                        {menuItems}
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        size="sm"
                        hiddenFrom="sm"
                    />
                </div>
            </Container>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px)" mx="-md">
                    <div className={classes.mobileMenu}>
                        {mobileMenuItems}
                    </div>
                </ScrollArea>
            </Drawer>
        </header>
    );
}

export default HeaderMenu;