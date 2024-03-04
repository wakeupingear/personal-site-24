module.exports = {
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/wakeupingear",
        permanent: true,
      }, {
        source: "/instagram",
        destination: "https://www.instagram.com/wakeupingear/",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/abby-farhat/",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "https://raw.githubusercontent.com/wakeupingear/resume/main/AbbyFarhatSWEResume.pdf",
        permanent: true,
      }
    ]
  },
}