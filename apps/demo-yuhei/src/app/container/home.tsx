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

    const [loaded, setLoaded] = React.useState(false);
    const [tracks, setTracks] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    const [currentTrack, setCurrentTrack] = React.useState(null);

    const userToMenuItem = user => ({label:user.name});

    const textButtonAction = data => {
        setCurrentTrack(data.children.$ref);
    };
    const trackToTextItem = track => 
       ({
           title: track.name,
           subtitle: track.album.name,
           imageSrc: track.album.image,
           href: textButtonAction,
           ctaTitle: <Button>Play</Button>,
           content: track.name,
           $ref: track,
           reversed: currentTrack == track
        });
    const navigate = data => {console.log(data)};

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

  

  return (
    <div className="app">
      <Logo size="small"/>
      <MenuSofiane>{users.map(userToMenuItem)}
      </MenuSofiane>
      <BreadcrumbSqli>{[]}</BreadcrumbSqli>
      <AudioPlayer track={[currentTrack]}></AudioPlayer>
      <Autocomplete data={tracks.map(track => track.name)} placeholder="e.g. Light up"/>
      <Button action={()=>'ok'}><h1>Lancer la recherche</h1></Button>
        <div className="cards-list">
        {tracks.map( (track, num) => (
          <Text key={num}>{trackToTextItem(track)}</Text>
        ))}
        </div>
        <Footer background="gray"></Footer>
    </div>
  );
};

export default Home;
