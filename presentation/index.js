// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Code,
  Markdown,
  Table,
  TableRow,
  TableHeader,
  TableItem,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

// Pre-load images

const images = {
  tuck: require("../assets/tuck.jpg"),
  wp_logo: require("../assets/warby_parker.svg"),
  excel_logo: require("../assets/excel-logo.png"),
  i_heart_spreadsheets: require("../assets/i-heart-spreadsheets.jpg"),
  excel_not_responding: require("../assets/excel-not-responding.jpg"),
  supercomputer: require("../assets/supercomputer.jpg"),
  aws_cloud: require("../assets/aws-cloud.png"),
  people_connected: require("../assets/people-connected.jpg"),
  gibson_start: require("../assets/gibson-start.png"),
  gibson_stop: require("../assets/gibson-stop.png"),

};


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading textAlign="left" size={2} caps lineHeight={1} textColor="secondary">
            Chatbot-controlled Cloud Infrastructure Management in Python
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Table>
            <TableRow>
              <TableItem>
                <Image src={images.tuck} width={400}/>
              </TableItem>
              <TableItem textAlign="left">
                <Heading size={3} textAlign="left" textColor="tertiary">Ryan Tuck</Heading>
                <Text textAlign="left">Data Engineer</Text>
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide bgColor="primary">
          <Image
            src={images.wp_logo}
          />
        </Slide>
        <Slide bgColor="primary">
          <Text textAlign="left">Growing company</Text>
          <Text textAlign="left">More retail stores</Text>
          <Text textAlign="left">More vendors</Text>
          <Text textAlign="left">More data</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            How do we analyze it all?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
            <List textColor="primary">
              <ListItem>Fancy BI Tools</ListItem>
              <ListItem>SQL</ListItem>
              <ListItem>R</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>Google Sheets</ListItem>
              <ListItem>...</ListItem>

            </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            src={images.excel_logo}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            src={images.i_heart_spreadsheets}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The Problem
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            src={images.excel_not_responding}
            width={600}
          />
        </Slide>
        <Slide bgImage={images.supercomputer}></Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            src={images.aws_cloud}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textAlign="left">
          <Heading size={3} textAlign="left">EC2</Heading>
          <Table>
            <TableRow>
              <TableItem>
                <Markdown
                  textAlign="left"
                  textSize="1em"
                  source={require("!raw-loader!../assets/ec2-specs.txt")}
                />
              </TableItem>
              <TableItem>
                <Heading textAlign="left" size={4}>$1.59 / hour!</Heading>
                <Heading textAlign="left" size={4}>$1100+ / month!</Heading>
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide bgImage={images.people_connected}></Slide>
        <Slide transition={["none"]} bgImage={images.people_connected}>
          <Heading caps textColor="tertiary" size={2}>Resource Contention</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            src="https://media.giphy.com/media/MF1kR4YmC2Z20/giphy.gif"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1}>Idea</Heading>
          <Text>Give everyone a supercomputer</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1}>$$$</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1}>New Idea</Heading>
          <Text>Give everyone a supercomputer</Text>
          <Text>Use them only when needed</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1}>Okay, where's the on/off switch?</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1}>New New Idea</Heading>
          <Text>Give everyone a supercomputer</Text>
          <Text>Use them only when needed</Text>
          <Text>Use a chatbot as an interface!</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            src={images.gibson_start}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            src={images.gibson_stop}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/manage_instance.py")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/should_stop.py")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text textColor="primary">... add more coding content ...</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Text textColor="tertiary">Fin.</Text>
        </Slide>
      </Deck>
    );
  }
}
