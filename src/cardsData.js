import { v4 as uuidv4 } from 'uuid';
import naruto from './assets/images/naruto.jpg';
import edward from './assets/images/edward.jpg';
import eren from './assets/images/eren.jpg';
import gojo from './assets/images/gojo.jpg';
import gon from './assets/images/gon.jpg';
import light from './assets/images/light.jpg';
import luffy from './assets/images/luffy.jpg';
import mob from './assets/images/mob.jpg';
import deku from './assets/images/deku.jpg';
import tanjiro from './assets/images/tanjiro.jpg';

const cardsData = [
    {
        id: uuidv4(),
        img: naruto,
        name: 'Naruto Uzumaki',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: edward,
        name: 'Edward Elric',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: eren,
        name: 'Eren Yaeger',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: gojo,
        name: 'Satoru Gojo',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: gon,
        name: 'Gon Freecs',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: light,
        name: 'Light Yagami',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: luffy,
        name: 'Monkey D. Luffy',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: mob,
        name: 'Mob',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: deku,
        name: 'Deku',
        clicked: false,
    },
    {
        id: uuidv4(),
        img: tanjiro,
        name: 'Tanjiro',
        clicked: false,
    },
];

export default cardsData;