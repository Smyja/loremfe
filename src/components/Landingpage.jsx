import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Space,
} from "@mantine/core";
import { Dots } from "./Dots";
import { FeaturesAsymmetrical } from "./Features";
import { FooterCentered } from "./Footer";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 64,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function LandingPage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title
          className={classes.title}
          style={{
            backgroundImage:
              "linear-gradient(315deg, #4d0eae, #d846a5 49%, #ff7b61 103%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "80px",
            backgroundColor:"#4d0eae",
      
          }}
        >
          Anti-lorem
        </Title>
        <Title className={classes.title}>
          All you need is a{" "}
          <Text component="span" className={classes.highlight} inherit>
            Story
          </Text>{" "}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Free and open-source front-end tool, which can be used to create
            seamless content. Anti-lorem turns your plain text into clean and
            compelling web content, in seconds.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            component="a"
            href="/demo"
            className={classes.control}
            size="lg"
            variant="default"
            color="black"
          >
            Try it
          </Button>
          <Button
            component="a"
            href="https://github.com/smyja/lorem"
            className={classes.control}
            size="lg"
            target="_blank"
          >
            Github
          </Button>
        </div>
        <FeaturesAsymmetrical />
      </div>
      <Space h="md" />
      <FooterCentered />
    </Container>
  );
}
