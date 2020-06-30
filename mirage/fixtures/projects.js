export default [
  {
    id: 'wusata',
    managerId: 'avibe',
    name: 'WUSATA',
    url: 'https://www.wusata.org/',
    img: 'wusata',
    summary: 'A large custom web app with complex business logic.',
    description: `<p>The WUSATA web app evolved quite a bit over the years, and I was involved in updates ranging from data migrations to CRUD
    implementations to data visualizations, and much more. And though I was involved in many updates to the system, one of the most challenging
    and rewarding updates was the implementation of a map visualization builder. I was the primary developer for the front-end portion of that project,
    which utilized leaflet.js. The project involved displaying data points with custom data tooltips, generating visualizations based on the data points,
    and writing a custom leaflet plugin to allow for enhanced filtering capabilities.</p><p> Another challenging project that I was involved in was a
    data migration from a series of legacy databases into the WUSATA web app. The migration involved pulling from hundreds of thousands of records
    across more than 800 tables.</p>
  `,
    highlights: [
      'Third party API integrations',
      'Data visualizations utilizing ZingChart',
      'Gulp script for minifying static assets',
    ],
    links: [
      {
        title: 'More Project Info',
        url: 'https://www.avibeweb.com/work/wusata/',
      },
      { title: 'Live Site', url: 'https://www.wusata.org/' },
    ],
  },
  {
    id: 'company-site',
    managerId: 'avibe',
    name: 'A•Vibe',
    url: 'https://www.avibeweb.com/',
    img: 'avibe',
    summary: 'The most recent incarnation of the A•Vibe company site.',
    description: `<p>One area of the site that I was involved in was the Work List page, which you can see <a href="https://www.avibeweb.com/work/" target="_blank">here</a>.
    Another area I was involved in was the top navigation, which you can see all over the site. I was the primary developer for both of these efforts, both of which
    used a fair amount of animation. And finally, this is another project where I was responsible for the Gulp script.</p>
  `,
    links: [{ title: 'Live Site', url: 'https://www.avibeweb.com/' }],
  },
  {
    id: 'green-hammer',
    managerId: 'avibe',
    name: 'Green Hammer',
    url: 'http://www.greenhammer.com/',
    img: 'gh',
    summary: 'A responsive web app built from an older, non-responsive site.',
    description:
      '<p>I was the primary developer for much of the current site. That includes the layout, the landing page, the Portfolio pages, and the Insight pages.</p>',
    links: [
      {
        title: 'More Project Info',
        url: 'https://www.avibeweb.com/work/greenhammer/',
      },
      { title: 'Live Site', url: 'http://www.greenhammer.com/' },
    ],
  },
  {
    id: 'ssoc',
    managerId: 'personal',
    name: 'SSOC',
    url: 'https://www.sophieorta.com/',
    img: 'ssoc',
    summary: 'My personal website',
    description: `<p>I started to build this site in 2016, partially as a way to explore techniques and technologies.
    As a means of getting the site up and running quickly, I decided to forego the use of a DB for the initial implementation.
    The site is hosted on Digital Ocean, and uses Express.js, SCSS, Gulp, Pug, and Autoprefixer.</p>
  `,
    links: [
      { title: 'Github Repository', url: 'https://github.com/sorta/ssoc' },
    ],
  },
  {
    id: 'headcanon-generator',
    managerId: 'personal',
    name: 'Headcanon Generator',
    url: 'https://headcanongenerator.com/',
    img: 'hcg',
    summary: 'Generates headcanons',
    description:
      '<p>An app that I used to explore working with React. It also utilizes Jest, Enzyme, PostCSS, and Firebase.</p>',
  },
];
