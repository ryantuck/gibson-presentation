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
  Link,
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
  quarternary: "#CECECE",
  code_bg: "#272823",
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
});


const images = {
  appstream: require("../assets/appstream.png"),
  appstream_pricing: require("../assets/appstream-pricing.png"),
  aws_api_gateway: require("../assets/api-gateway.png"),
  aws_cloud: require("../assets/aws-cloud.png"),
  aws_ec2: require("../assets/aws-ec2.svg"),
  aws_lambda: require("../assets/aws-lambda.svg"),
  excel_logo: require("../assets/excel-logo.png"),
  excel_not_responding: require("../assets/excel-not-responding.jpg"),
  facepalm: require("../assets/facepalm.jpg"),
  fast_company: require("../assets/fast-company.png"),
  gibson_pod_bay_doors: require("../assets/gibson-pod-bay-doors.png"),
  gibson_start: require("../assets/gibson-start.png"),
  gibson_status: require("../assets/gibson-status.png"),
  gibson_stop: require("../assets/gibson-stop.png"),
  i_heart_spreadsheets: require("../assets/i-heart-spreadsheets.jpg"),
  people_connected: require("../assets/people-connected.jpg"),
  roasted: require("../assets/roasted.gif"),
  supercomputer: require("../assets/supercomputer.jpg"),
  tuck: require("../assets/tuck.jpg"),
  warby_home_page: require("../assets/warby-home-page.png"),
  warby_mission: require("../assets/warby-mission.png"),
  wp_logo: require("../assets/warby_parker.svg"),
};


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading textAlign="left" size={2} caps lineHeight={1} textColor="secondary">
            Chatbot-controlled Cloud Infrastructure Management in Python
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Table>
            <TableRow>
              <TableItem>
                <Image src={images.tuck} width={400}/>
              </TableItem>
              <TableItem textAlign="left">
                <Heading size={3} textAlign="left" textColor="tertiary">Ryan Tuck</Heading>
                <Heading size={4} textAlign="left">Data Engineer</Heading>
                <Text textAlign="left">Warby Parker</Text>
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
          <Image
            src={images.warby_home_page}
          />
        </Slide>
        <Slide bgColor="primary">
          <Image
            src={images.warby_mission}
          />
        </Slide>
        <Slide bgColor="primary">
          <Image
            src={images.fast_company}
          />
        </Slide>
        <Slide bgColor="primary">
          <Markdown
            textAlign="left"
            textSize="1em"
            source={require("!raw-loader!../assets/departments.md")}
          />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={5} textAlign="left">&#x1F4C8; Growing company</Heading>
          <Heading size={5} textAlign="left">&#x1F4C8; More retail stores</Heading>
          <Heading size={5} textAlign="left">&#x1F4C8; More vendors</Heading>
          <Heading size={5} textAlign="left">&#x1F4C8; More data</Heading>
        </Slide>
        <Slide transition={["none"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            How do we analyze it all?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
            <List>
              <ListItem>Fancy BI Tools</ListItem>
              <ListItem>SQL</ListItem>
              <ListItem>BigQuery</ListItem>
              <ListItem>R</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>Google Sheets</ListItem>
              <ListItem>...</ListItem>

            </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.excel_logo}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.i_heart_spreadsheets}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            The Problem
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.excel_not_responding}
            width={600}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading>&#x1F914;</Heading>
        </Slide>
        <Slide bgImage={images.supercomputer}></Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.aws_cloud}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textAlign="left">
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
        <Slide transition={["slide"]} bgColor="primary">
          <Text>&#x1F389; Our biggest workbook runs! &#x1F389;</Text>
        </Slide>
        <Slide bgImage={images.people_connected}></Slide>
        <Slide transition={["none"]} bgImage={images.people_connected}>
          <Heading caps textColor="#f00" size={2}>Resource Contention</Heading>
        </Slide>
        <Slide transition={["none"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Idea
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text>Give everyone a supercomputer</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text>&#x1F62C; $$$$$ &#x1F62C;</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text>Give everyone a supercomputer</Text>
          <Text>Use them only when needed</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text>&#x1F914; Where's the on/off switch? &#x1F914;</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text>Give everyone a supercomputer</Text>
          <Text>Use them only when needed</Text>
          <Text>Use a chatbot as an interface!</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src="https://media.giphy.com/media/MF1kR4YmC2Z20/giphy.gif"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Table>
            <TableRow>
              <TableItem>
                <Text>Lambda</Text>
                <Image src={images.aws_lambda} width={300}/>
              </TableItem>
              <TableItem>
                <Text>API Gateway</Text>
                <Image src={images.aws_api_gateway} width={300}/>
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.gibson_start}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">POST payload</Heading>
          <CodePane
            lang="json"
            textSize="0.6em"
            source={require("!raw-loader!../assets/message.json")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="primary">
          <Text>&#x1F40D; And finally, some python. &#x1F40D;</Text>
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <CodePane
            lang="python"
            textSize="2em"
            source={require("!raw-loader!../assets/boto3.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">Parse message</Heading>
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/handle-overview.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">Catch parsing issues</Heading>
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/handle-parts.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">&#x261d;</Heading>
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/return-payload.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">Ensure instance exists</Heading>
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/handle-no-user.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">&#x261d;</Heading>
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/get-all-instances.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">Start / stop / status</Heading>
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/handle-start-stop-status.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">&#x261d;</Heading>
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/start-stop.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <Heading size={5} textColor="primary" textAlign="left">Deploy with apex</Heading>
          <CodePane
            textSize="0.6em"
            source={require("!raw-loader!../assets/apex-deploy.txt")}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.gibson_start}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.gibson_stop}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.gibson_status}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.gibson_pod_bay_doors}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Cool ...
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Image
            src={images.facepalm}
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Text>&#x1F644; Let's do it for them &#x1F644;</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5}>Autokiller goal</Heading>
          <Text>Stop instances if network activity and CPU utilization have been low for the past hour.</Text>
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/manage_instance.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/should_stop.py")}
          />
        </Slide>
        <Slide transition={["none"]} bgColor="code_bg">
          <CodePane
            lang="python"
            textSize="0.6em"
            source={require("!raw-loader!../assets/get_cpu.py")}
          />
        </Slide>
        <Slide bgColor="primary">
          <Markdown
            textAlign="left"
            textSize="1em"
            source={require("!raw-loader!../assets/usage.md")}
          />
        </Slide>
        <Slide bgColor="primary">
          <Text>We're continuing to help our analysts level up their technical skills, and building simple tools to help them leverage automation. &#x1F60E;</Text>
        </Slide>
        <Slide transition={["none"]} bgColor="tertiary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            But wait! you don't need all of this!
          </Heading>
        </Slide>
        <Slide transition={["none"]} bgImage={images.roasted}>
          <Image
            src={images.appstream}
          />
        </Slide>
        <Slide transition={["none"]} bgImage={images.roasted}>
          <Image
            src={images.appstream_pricing}
          />
        </Slide>
        <Slide bgColor="primary">
          <Text>Deck made with Spectacle, a React.js library for presentations.</Text>
          <Link href="http://formidable.com/open-source/spectacle/">http://formidable.com/open-source/spectacle/</Link>
        </Slide>
        <Slide bgColor="primary">
          <Markdown
            textAlign="left"
            textSize="1em"
            source={require("!raw-loader!../assets/bio.md")}
          />
        </Slide>
      </Deck>
    );
  }
}
