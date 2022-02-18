const redirect_routes = [
  {
    source: '/quizstart/:slug*',
    destination: '/agilecheck/:slug*',
    permanent: true,
  },
  {
    source: '/crashkurse/main',
    destination: '/crashkurse',
    permanent: true,
  },
  {
    source: '/crashkurse/beschreibung/1',
    destination: '/crashkurse/agilecoach/beschreibung/',
    permanent: true,
  },
  {
    source: '/crashkurse/beschreibung/2',
    destination: '/crashkurse/agile-facilitator/beschreibung/',
    permanent: true,
  },
  {
    source: '/crashkurse/beschreibung/3',
    destination: '/crashkurse/scrum-master/beschreibung/',
    permanent: true,
  },
  {
    source: '/crashkurse/beschreibung/4',
    destination: '/crashkurse/crashkurse/beschreibung/',
    permanent: true,
  },
  {
    source: '/crashkurse/beschreibung/5',
    destination: '/crashkurse/online-crashkurs/beschreibung/',
    permanent: true,
  },
  {
    source: '/leistungen/main',
    destination: '/leistungen',
    permanent: true,
  },
  {
    source: '/leistungen/1',
    destination: '/organisationsentwicklung',
    permanent: true,
  },
  {
    source: '/leistungen/2',
    destination: '/inhouse-training',
    permanent: true,
  },
  {
    source: '/leistungen/3',
    destination: '/coaching',
    permanent: true,
  },
  {
    source: '/team/main',
    destination: '/team',
    permanent: true,
  },
  {
    source: '/blog/1',
    destination: '/blog/buchempfehlungen',
    permanent: true,
  },
  {
    source: '/blog/2',
    destination: '/blog/workhacks',
    permanent: true,
  },
  {
    source: '/blog/3',
    destination: '/blog/buchveroffentlichung',
    permanent: true,
  },
]

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return redirect_routes
  },
}