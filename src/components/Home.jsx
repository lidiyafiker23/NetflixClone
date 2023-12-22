import Nav from "./nav/Nav";
import Banner from "./banner/Banner.jsx";
import Row from "./row/Row.jsx";
import requests from "../requests";
const Home = () => {
  const datas = [
    {
      title: "Netflix Originals",
      fetchUrl: requests.fetchTrending,
      isLarge: true,
    },
    {
      title: "Tranding Now",
      fetchUrl: requests.fetchTrending,
    },
    {
      title: "Top Rated",
      fetchUrl: requests.fetchTopRated,
    },
    {
      title: "Action Movies",
      fetchUrl: requests.fetchActionMovies,
    },
    {
      title: "Comedy Movies",
      fetchUrl: requests.fetchComedyMovies,
    },
    {
      title: "Horror Movies",
      fetchUrl: requests.fetchHorrorMovies,
    },
    {
      title: "Romance Movies",
      fetchUrl: requests.fetchRomanceMovies,
    },
    {
      title: "Documentaries",
      fetchUrl: requests.fetchDocumentaries,
    },
  ];

  return (
    <>
      <Nav />
      <Banner />
      {datas.map((data) => (
        <Row
          title={data.title}
          fetchUrl={data.fetchUrl}
          isLarge={data.isLarge}
        />
      ))}
    </>
  );
};

export default Home;
