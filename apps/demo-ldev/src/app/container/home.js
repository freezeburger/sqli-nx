import React from "react";

import "../app.css";

import { Button, Logo, MenuSofiane, Footer, Autocomplete, AudioPlayer, Text, BreadcrumbSqli } from '@sqli/gui'



export const Home = ({ store }) => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  const [loaded, setLoaded] = React.useState(false);
  const [tracks, setTracks] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {

    const requestUser = new store.Action(store.ActionTypes.USER_GET_LIST, null);
    const requestTrack = new store.Action(store.ActionTypes.TRACK_GET_LIST, null);

    store.dispatch(requestUser).then(users => console.table(users));
    store.dispatch(requestTrack).then(tracks => console.table(tracks));

    return () => console.log('bye bye');

  }, [])

  const navigate = data => {
    console.log(data);
  };

  const routes = [
    { label: 'Home', action: navigate },
    { label: 'Search', action: navigate },
    { label: 'Login', action: navigate }
  ];
  const trackCardHandler = data => {
    console.log(data);
  };

  function sayHello() {
    alert('ça fonctionne !');

  }
  return (
    <div className="app">
      <Logo size="small" />

      <MenuSofiane background="true">{[]}</MenuSofiane>
      <MenuSofiane>{routes}</MenuSofiane>
      <MenuSofiane background="true">{[]}</MenuSofiane>

      <Button>
        <a href="https://www.google.fr/" id="generic-btn-premium" role="button" data-tracking="{&quot;category&quot;: &quot;home (offer)&quot;, &quot;action&quot;: &quot;premium&quot;}" className="btn btn-green btn-simplified js-goto-signup js-button-hero-get-free">
          Mon Button
                   </a>
      </Button>
      <button onClick={sayHello} >Mybutton</button>

      <Autocomplete />
      <Text>
        {{
          title: "Fishipedia",
          subtitle: "L'encylopédie du monde aquatique",
          href: trackCardHandler,
          ctaTitle: 'Listen',
          content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”',
          imageSrc: 'https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg',
          reversed: false
        }}
      </Text>
      <AudioPlayer />
      <BreadcrumbSqli
        trail={[
          { label: 'Yuhei', action: '' },
          { label: 'Sullivan', action: '' },
          { label: 'Sofiane', action: '' },
          { label: 'AbdelJallil', action: '' },
          { label: 'Mohamed', action: '' },
          { label: 'Max', action: '' },
          { label: 'Khalid', action: '' },
          { label: 'Khalil', action: '' },
          { label: 'Renaud', action: '' }
        ]}
      ></BreadcrumbSqli>
      <Footer />

    </div>
  );
};

export default Home;
