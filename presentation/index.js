// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

import preloader from "spectacle/lib/utils/preloader";

import "prismjs/components/prism-typescript";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import magicGif from "../assets/magic.gif";
import beemanJpg from "../assets/beeman.jpg";
import beemanWorldPng from "../assets/beemanWorld.png";
import babyTiredGif from "../assets/baby-tired.gif";
import boyDancingGif from "../assets/boyDancing.gif";
import boredElaineGif from "../assets/bored-elaine.gif";
import completeTemplate from "../assets/completeTemplate.png";
import nomadDream from "../assets/nomadDream.jpg";
import nomadReality from "../assets/nomadReality.jpg";
import awesomeWay from "../assets/awesomeWay.gif";
import jscamp from "../assets/jscamp.jpg";
import juriQuote from "../assets/juriQuote.png";
import abdellatif from "../assets/abdellatif.png";
import ghProject from "../assets/ghProject.png";

preloader({
  magicGif,
  beemanJpg,
  beemanWorldPng,
  babyTiredGif,
  boyDancingGif,
  boredElaineGif,
  completeTemplate,
  nomadDream,
  nomadReality,
  awesomeWay,
  jscamp,
  juriQuote,
  abdellatif,
  ghProject,
});


// Require CSS
require("normalize.css");
require("../assets/code-style.css");

const theme = createTheme({
  primary: "#211056",
  secondary: "#a296f7",
  tertiary: "#7becff",
  quaternary: "#FEFEFE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const blitzParams = "&hideExplorer=1&hideNavigation=1&view=preview";
const blitzStyles = { width: "100%", height: 600, border: 0 };
const blitz = {
  simple: `https://stackblitz.com/edit/tyrfooyt-simple?embed=1&file=src/app/app.component.ts${blitzParams}`
};

{/*<Slide>*/
}
{/*<iframe src={blitz.simple} style={blitzStyles}></iframe>*/
}
{/*</Slide>*/
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Text size={1} fit caps lineHeight={1} textColor="tertiary">
            Take your <b>Reactive</b> forms
          </Text>
          <Text size={1} fit caps lineHeight={1} textColor="tertiary" style={{ marginTop: 30 }}>
            out of your <b>Templates</b>!
          </Text>
          <Text size={4} fit caps lineHeight={2} textColor="secondary">
            Angular Forms the Awesome way!
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary">
          <Text size={1} fit lineHeight={1} textColor="secondary">
            beeman 🐝
          </Text>
          <Text size={1} fit lineHeight={1} textColor="secondary">
            Bram Borggreve
          </Text>

          <Layout>
            <Fit style={{ flex: 15 }}>
              <Image src={beemanJpg} style={{ width: 280, marginTop: 40 }}/>
            </Fit>
            <Fill style={{ flex: 20 }}>
              <List bgColor="primary" textColor="secondary" style={{ listStyleType: "none" }}>
                <ListItem style={{ marginBottom: 20 }}>
                  👨‍💻 Freelance Developer
                </ListItem>
                <ListItem style={{ marginBottom: 20 }}>
                  👨‍🏫 Egghead Instructor
                </ListItem>
                <ListItem style={{ marginBottom: 20 }}>
                  📖 Packt Author
                </ListItem>
                <ListItem style={{ marginBottom: 20 }}>
                  🇳🇱 The Netherlands
                </ListItem>
                <ListItem style={{ marginBottom: 20 }}>
                  🛫 Digital Nomad
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={beemanWorldPng} style={{ width: "100%" }}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={nomadDream} style={{ width: "100%" }}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={nomadReality} style={{ width: "100%" }}/>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary">
          <Text size={1} fit caps lineHeight={1} textColor="secondary">
            Follow me!
          </Text>
          <Text size={4} lineHeight={1} textColor="secondary">
            <br/>
            <br/>

            <i className="fa fa-fw fa-twitter"/> beeman_nl
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-fw fa-github"/> beeman

            <br/>
            <br/>

            nomadlist.com/@beeman

          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} caps fit textColor="secondary">
            Forms in Angular
          </Heading>

          <Appear>
            <Text size={4} lineHeight={2} fit caps textColor="secondary">
              The Awesome way!
            </Text>
          </Appear>
          <Appear>
            <Image src={awesomeWay} style={{ width: "100%" }}/>
          </Appear>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Text size={1} fit caps lineHeight={1} textColor="tertiary">
            Reactive Forms are Awesome!
          </Text>
          <Appear>
            <Heading size={4} caps lineHeight={2} textColor="secondary">
              But...
            </Heading>
          </Appear>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps fit>Reactive Forms</Heading>
          <List>
            <Appear>
              <ListItem padding={15}>📚 Lots of template code.</ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>🔄 Template / class dependency.</ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>💑 Married to the CSS framework.</ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>♻️ Little re-usability.</ListItem>
            </Appear>
          </List>
        </Slide>

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="html"
          code={require("raw-loader!../assets/code/form-empty.html")}
          ranges={[
            { loc: [0, 100], title: "Form Template" },
            { loc: [0, 2] },
            { loc: [3, 4] },
            { loc: [5, 10] }
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="ts"
          code={require("raw-loader!../assets/code/form-empty.ts")}
          ranges={[
            { loc: [0, 100], title: "Form Class" },
            { loc: [1, 2] },
            { loc: [3, 6] }
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="html"
          code={require("raw-loader!../assets/code/form-reactive-basic.html")}
          ranges={[
            { loc: [0, 100], title: "Reactive Form Template" },
            { loc: [0, 2] },
            { loc: [11, 16] },
            { loc: [3, 10] },
            { loc: [3, 4], note: "Bootstrap specific" },
            { loc: [4, 5], note: "Field label" },
            { loc: [5, 6], note: "Field type" },
            { loc: [6, 7], note: "Bootstrap specific" },
            { loc: [7, 8], note: "Field id" },
            { loc: [8, 9], note: "Field placeholder" }
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="ts"
          code={require("raw-loader!../assets/code/form-reactive-basic.ts")}
          ranges={[
            { loc: [0, 100], title: "Reactive Form Class" },
            { loc: [1, 2] },
            { loc: [13, 16] },
            { loc: [4, 5] },
            { loc: [8, 11] }
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="html"
          code={require("raw-loader!../assets/code/form-reactive-advanced.html")}
          ranges={[
            { loc: [0, 100], title: "With Validation" },
            { loc: [3, 17] },
            { loc: [9, 10] },
            { loc: [14, 15] },
            { loc: [11, 17] }
          ]}
        />


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={boredElaineGif} style={{ width: "60%" }}/>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps fit>Reactive Forms</Heading>
          <Heading size={6} textColor="tertiary" fit>More Fields === More Markup</Heading>
        </Slide>


        <Slide transition={["fade"]} bgColor="black" textColor="tertiary">
          <Image src={completeTemplate} style={{ height: "600px" }}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={babyTiredGif} style={{ width: "100%" }}/>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} caps fit textColor="secondary">
            There must be a fix!
          </Heading>
          <Text size={6} caps fit textColor="tertiary">
            Don't define <b>how</b>
          </Text>
          <Text size={6} caps fit textColor="tertiary">
            Define <b>what</b>!
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} caps fit textColor="secondary">
            ngx-formly
          </Heading>
        </Slide>

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="ts"
          code={require("raw-loader!../assets/code/formly-field.ts")}
          ranges={[
            { loc: [0, 100], title: "Formly Class" },
            { loc: [3, 12] },
            { loc: [4, 5] },
            { loc: [5, 6] },
            { loc: [6, 11] },
            { loc: [7, 8] },
            { loc: [8, 9] },
            { loc: [9, 10] }
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="html"
          code={require("raw-loader!../assets/code/formly-template.html")}
          ranges={[
            { loc: [0, 100], title: "Formly Template" },
            { loc: [3, 14] },
            { loc: [3, 6] }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} caps fit textColor="secondary">
            ngx-formly
          </Heading>

          <Text size={4} caps fit textColor="tertiary">
            DEMO TIME
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} caps fit textColor="secondary">
            ngx-formly
          </Heading>

          <Text size={4} caps fit textColor="tertiary">
            AWESOME
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={babyTiredGif} style={{ width: "100%" }}/>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={boyDancingGif} style={{ height: "100%" }}/>
        </Slide>


        {/* JSCAMP IMAGE */}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={jscamp} style={{ width: "100%" }}/>
        </Slide>


        {/* Juri Quote Image */}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={juriQuote} style={{ width: "100%" }}/>
        </Slide>

        {/* SHOW QUOTE */}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} caps fit textColor="secondary">
            why ngx-formly?
          </Heading>
          <List>
            <Appear>
              <ListItem padding={15}>
                Opinionated, declaritive, composable.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>
                Highly extensible.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>
                Low barrier to entry.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>
                Built on top of Reactive Forms.
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} caps fit textColor="secondary">
            <i className="fa fa-fw fa-github"/>
            formly-js/ngx-formly
          </Heading>

          <Layout style={{ background: 'white', padding: 40, marginTop: 40 }} >
            <Fill>
              <Image src={ghProject} style={{ marginRight: 40 }} />
            </Fill>
            <Fill>
              <Image src={abdellatif} style={{ marginLeft: 40 }} />
            </Fill>
          </Layout>
        </Slide>

        {/* About Formly (oss + maintainer) */}

        {/* How to get Formly (ng add) */}

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} caps fit textColor="secondary">
            Getting started
          </Heading>
          <Text size={4} fit lineHeight={2} textColor="tertiary">
            $ ng add @ngx-formly/schematics
          </Text>
          <Text size={4} fit lineHeight={2} textColor="tertiary">
            --ui-theme=bootstrap|material|ionic|nativescript|...
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} caps fit textColor="secondary">
            Using ngx-formly
          </Heading>
          <List>
            <Appear>
              <ListItem padding={15}>
                Write a custom abstraction!
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>
                Add custom elements and validators.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>
                Create default fields and fields groups.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding={15}>
                Share with teams, projects or online!
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              Code is not for the computer.<br/>
              It's for other human beings.
            </Quote>
            <Cite textColor="primary">Kyle Simpson - @getify</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={1} caps fit textColor="secondary">
            THANK YOU!
          </Heading>
          <Text size={4} lineHeight={1} textColor="secondary">
            <br/>
            <br/>

            <i className="fa fa-fw fa-twitter"/> beeman_nl
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-fw fa-github"/> beeman
          </Text>
        </Slide>

      </Deck>
    );
  }
}


{/*<Slide transition={["fade"]} bgColor="tertiary">*/
}
{/*<Heading size={6} textColor="secondary" caps>Typography</Heading>*/
}
{/*<Heading size={1} textColor="secondary">Heading 1</Heading>*/
}
{/*<Heading size={2} textColor="secondary">Heading 2</Heading>*/
}
{/*<Heading size={3} textColor="secondary">Heading 3</Heading>*/
}
{/*<Heading size={4} textColor="secondary">Heading 4</Heading>*/
}
{/*<Heading size={5} textColor="secondary">Heading 5</Heading>*/
}
{/*<Text size={6} textColor="secondary">Standard text</Text>*/
}
{/*</Slide>*/
}


{/*<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">*/
}
{/*<Heading size={6} textColor="secondary" caps>Standard List</Heading>*/
}
{/*<List>*/
}
{/*<ListItem>Item 1</ListItem>*/
}
{/*<ListItem>Item 2</ListItem>*/
}
{/*<ListItem>Item 3</ListItem>*/
}
{/*<ListItem>Item 4</ListItem>*/
}
{/*</List>*/
}
{/*</Slide>*/
}

{/*<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">*/
}
{/*<Heading size={6} textColor="secondary" caps>Standard List</Heading>*/
}
{/*<List>*/
}
{/*<Appear>*/
}
{/*<ListItem>Item 1</ListItem>*/
}
{/*</Appear>*/
}
{/*<Appear>*/
}
{/*<ListItem>Item 2</ListItem>*/
}
{/*</Appear>*/
}
{/*<Appear>*/
}
{/*<ListItem>Item 3</ListItem>*/
}
{/*</Appear>*/
}
{/*<Appear>*/
}
{/*<ListItem>Item 4</ListItem>*/
}
{/*</Appear>*/
}
{/*</List>*/
}
{/*</Slide>*/
}
