import React from "react";

import {Text} from '@sqli/gui'
import {AudioPlayer} from '@sqli/gui'
import {BreadcrumbSqli} from '@sqli/gui'
import {MenuSofiane} from '@sqli/gui'
import {Logo} from '@sqli/gui'
import {Button} from '@sqli/gui'
import {Footer} from '@sqli/gui'
import {Autocomplete} from '@sqli/gui'

export const Home = ({store}) => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   * 
   */

   // access fonctionnel au cycle de vie
   React.useEffect(()=>{
        const requestUser = new store.Action(store.ActionTypes.USER_GET_LIST, null);
        const requestTrack = new store.Action(store.ActionTypes.TRACK_GET_LIST, null);
        store.dispatch(requestUser);
        store.dispatch(requestTrack);
        // clean up function à faire sur le unmount
       return ()=> console.log('Bye Bye');
   }, []);

  const data = ['France','Morocco', 'usa', 'Canada'];
  const menu = [
    { label: 'Lien 1', action: 'http://google.fr' },
    { label: 'Lien 2', action: 'http://google.fr' },
    { label: 'Lien 3', action: 'http://google.fr' },
    { label: 'Lien 4', action: 'http://google.fr' }
  ];
  const trail = [
    {
        action:'http://www.rorymcilroy.com/',
        label:'Rory Mcilroy'
    },
    {
        action:'https://twitter.com/kikxmachine',
        label:'Superkikx'
    },
    {
        action:'https://tigerwoods.com/',
        label:'Tiger Woods'
    }
];

  return (
    <div className="app">
      <Logo size="small"/>
      <MenuSofiane>{menu}</MenuSofiane>
      <BreadcrumbSqli>{trail}</BreadcrumbSqli>
      <AudioPlayer coverImage="https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg"/>
      <Autocomplete data={data} placeholder="e.g. Denmark"/>
      <Button action={()=>'ok'}>Lancer la recherche</Button>
      <Text>
        {{
          title: "Fishipedia",
          subtitle: "L'encylopédie du monde aquatique",
          href: "https://www.fishipedia.fr/",
          ctaTitle: "visiter le site",
          content: '“Fishipedia.fr - 1er site encyclopédique dédié aux poissons et aux passions associées : Plongée, Snorkeling, Aquariophilie, Pêche.”',
          imageSrc: 'https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg',
          reversed: false
        }}
      </Text>
      <Footer background="gray"></Footer>
      </div>
  );
};


export default Home;
