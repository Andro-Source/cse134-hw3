# CSE134B-FA26-HW2

- **Name:** Jacky Yu
- **PID:** <!-- TODO: PID -->
- **Netlify site:** <!-- TODO: https://<site-name>.netlify.app -->

An HTML-only build of my portfolio, following the Part 1 design (site map, wireframes, and the recruiter persona). The only CSS is `border`, plus the rule for the `<project-card>` custom element. The only JavaScript is the `<hello-world>` custom element and the canvas demo.

## Pages

| Page | File | Notes |
| --- | --- | --- |
| Home | `index.html` | Intro, featured projects, latest post, "work in progress" dialog |
| About | `about.html` | Bio, skills (progress bars), education, interests |
| Projects | `projects.html` | Project write-ups and YouTube demo |
| Blog | `blog.html` | Short posts |
| Contact | `contact.html` | Contact form and other links |
| Resume | `resume.pdf` | Linked from the nav on every page |
| Experiments | `experiments.html` | Linked from the footer only |

## Where each required tag is used

| Tag | Where | Use |
| --- | --- | --- |
| `html`, `head`, `title`, `meta`, `body`, `main`, `header`, `footer`, `nav` | every page | Page skeleton: one `main`, a site `header` with `nav`, and a site `footer` |
| `link` | every page | Favicon and the custom element stylesheet |
| `style` | every page | Border-only page structure |
| `script` | experiments | `hello-world` custom element and canvas demo |
| `noscript` | experiments | Explains why the canvas is blank without JS |
| `h1`, `h2`, `h3` | every page | One `h1` per page, then headings in order |
| `p`, `a`, `ul`, `li` | every page | Text, links, nav and other lists |
| `section` | most pages | Themed groups, each with a heading |
| `article` | home, projects, blog | Blog posts and project write-ups |
| `div` | contact | Groups each label with its form field |
| `span` | home, contact | `aria-hidden` arrows in "read more" links; `translate="no"` on my GitHub username |
| `br` | contact | Lines of the address block |
| `b` | projects | Tool names (keywords) in the LectureFetch write-up |
| `i` | blog | Technical terms ("progressive overload", "compound interest") |
| `strong` | home, experiments | What I'm looking for; browser names in the MathML notes |
| `em` | blog | Stress emphasis ("actually", "not touching them") |
| `img`, `picture` | home, about, projects | Headshot and screenshots, with WebP `source` and JPG fallback |
| `iframe` | projects | YouTube demo video |
| `svg` | every page | "JY" monogram in the header |
| `ol` | blog | Steps in the beginner gym guide |
| `form`, `label`, `fieldset`, `legend`, `input`, `textarea`, `button` | contact | Contact form with grouped fields and a radio group |
| `button`, `form` | home | Close button in the dialog (`method="dialog"`, no JS) |
| `progress` | about | Skill levels and degree completion (3 of 4 years) |
| `dialog` | home | Non-modal "work in progress" notice |
| `template`, `audio`, `video`, `canvas`, `source` | experiments | See that page |

## Custom elements

1. **`<project-card>`** (semantic CSS): a wrapper for each project in place of a `div`, styled only in `css/elements.css`. It's used on the home and projects pages and inside the template on the experiments page.
2. **`<hello-world>`** (`js/hello-world.js`): logs "Hello World!" to the console in `connectedCallback` and doesn't change the DOM. It's placed on `experiments.html`.

## Validation

All pages pass the [W3C Nu HTML Checker](https://validator.w3.org/nu/) with no errors or warnings.

## Extra credit

`experiments.html` writes E = mc² in MathML and explains, using data from [caniuse.com/mathml](https://caniuse.com/mathml), why browser support came so late.

## Media credits

- `media/flower.webm`, `media/flower.mp4`, `media/t-rex-roar.mp3`: MDN Web Docs sample media (CC0).
- Images in `images/` and `resume.pdf` are placeholders. <!-- TODO: replace with real headshot, screenshots, and resume -->
