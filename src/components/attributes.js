const footerLinks = [
  {
    title: "Footer with centered links",
    category: "footers",
    author: "rtivital",
    responsive: true,
    dependencies: [
      "/core/group/",
      "/core/anchor/",
      "/core/button/#unstyled-button",
      "tabler-icons-react",
    ],
    props: {
      links: [
        { link: "https://github.com/smyja/loremfe", label: "Github" },
        { link: "https://hashnode.com/", label: "Hashnode" },
        { link: "https://planetscale.com/", label: "Built with Planetscale" },
      ],
    },
    canvas: {
      center: false,
    },
  },
];

console.log(footerLinks[0].props.links);
export default footerLinks;
