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

   const [loaded, setLoaded] = React.useState(false);
   const [tracks, setTracks] = React.useState([]);
   const [users, setUsers] = React.useState([]);

   const userToMenuItem = user => ({label:user.name});
   const trackToTextItem = track => (
       {
           title: track.name,
           subtitle: track.album.name,
           imageSrc: track.album.image,
           href: track.href,
           ctaTitle: <button>Play</button>,
           content: track.name
        }
    );

   // access fonctionnel au cycle de vie
   React.useEffect(()=>{
        const requestUser = new store.Action(store.ActionTypes.USER_GET_LIST, null);
        const requestTrack = new store.Action(store.ActionTypes.TRACK_GET_LIST, null);
        store.dispatch(requestUser).then(setUsers);
        store.dispatch(requestTrack).then(setTracks);

        setLoaded(true);

        // clean up function à faire sur le unmount
       return ()=> console.log('Bye Bye');
   }, [loaded]);

  const data = ['France','Morocco', 'usa', 'Canada'];

  const navigate = data => {
    console.log(data);
    };

  const menu = [
    { label: 'Lien 1', action: navigate },
    { label: 'Lien 2', action: navigate },
    { label: 'Lien 3', action: navigate },
    { label: 'Lien 4', action: navigate }
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
    const trackCardHandler = data => {
        console.log(data);
    };

    

  return (
    <div className="app">
      <Logo size="small"/>
      <MenuSofiane>{users.map(userToMenuItem)}
      </MenuSofiane>
      <BreadcrumbSqli>{trail}</BreadcrumbSqli>
      <AudioPlayer coverImage="https://www.fishipedia.fr/wp-content/themes/fishipedia/css/img/home/thematics/fishes.jpg"/>
      <Autocomplete data={data} placeholder="e.g. Denmark"/>
      <Button action={()=>'ok'}>Lancer la recherche</Button>

    <div className="cards-list">
      {tracks.map( track => (
          <Text>{trackToTextItem(track)}</Text>
      ))}
    </div>

      <Footer background="gray"></Footer>
      </div>
  );
};


export default Home;
