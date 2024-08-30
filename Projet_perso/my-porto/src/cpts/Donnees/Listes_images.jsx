import React from 'react'

//

import Code from '../Donnees/Image_services/Code.png';
import Designer from '../Donnees/Image_services/Designer.png';
import Analyse from '../Donnees/Image_services/Analyse.png';
import Logo from '../Donnees/Image_services/logo_bleu_violet_avec_nom.png';
import Ps from '../Donnees/Image_services/Ps.png';
import Re from '../Donnees/Image_services/React.png';
import Alain from '../Donnees/Image_services/Alain.jpg';

//
import ph1 from '../Donnees/Image_scrol/ps1.jpg';
import ph2 from '../Donnees/Image_scrol/ps2.jpg';
import ph3 from '../Donnees/Image_scrol/ps3.jpg';
import ph4 from '../Donnees/Image_scrol/ps4.jpg';
import ph5 from '../Donnees/Image_scrol/ps5.jpg';
import ph6 from '../Donnees/Image_scrol/ps6.jpg';
import ph7 from '../Donnees/Image_scrol/ps7.jpg';
import ph8 from '../Donnees/Image_scrol/ps8.jpg';
import ph9 from '../Donnees/Image_scrol/ps9.jpg';
import ph11 from '../Donnees/Image_scrol/ps11.jpg';
import ph15 from '../Donnees/Image_scrol/ps15.png';
import ph16 from '../Donnees/Image_scrol/ps16.png';
import ph17 from '../Donnees/Image_scrol/ps17.png';


// scrol horizontal infinie 

export const Image_scrol=[
ph1,
ph2,
ph11,
ph4,
ph5,
ph1,
ph2,
ph1,
ph9,
ph11

]
// icones du react
import {FiFacebook} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';
import { PiTiktokLogo } from "react-icons/pi";


/*  pour les icones du react*/
export const Icones=[
    {
        id:1,
        nom:'facebook',
        cpt:<FiFacebook />
    },
    {
        id:2,
        nom:'instagramm',
        cpt:<FaInstagram />  
    },
    {
        id:3,
        nom:'tiktok',
        cpt:<PiTiktokLogo />
    }
];


/* */

export const Contenues =[
  Logo ,
  Ps,
  Re ,
  Alain
]

/* */
export const  Images_services_home=[
    {
        im1:Analyse,
        im2:Code,
        im3:Designer
    }
]

export const  Images_services_home_service=[
    {
        im1:Analyse
    },
    {
        im1:Code
    },
    {
        im1:Designer
    }
]

export const Liste_services=[
    {
        indice:1,
        service:"Tout"
    },
    {
        indice:2,
        service:"Graphisme"
    },
    {
        indice:3,
        service:"Data-Analys"
    },
    {
        indice:4,
        service:"Website"
    },
    {
        indice:5,
        service:"App-mobile"
    }
];

export const Liste_portofolio=[
    // graphisme
    {
        id:1,
        name:"logo 1",
        image:ph1,
        categorie:"Graphisme"
    },
    {
        id:2,
        name:"logo 2",
        image:ph2,
        categorie:"Graphisme"
    },
    {
        id:3,
        name:"logo 3",
        image:ph11,
        categorie:"Graphisme"
    },
    //data
    {
        id:4,
        name:"Data 1",
        image:ph16,
        categorie:"Data-Analys"
    },
    {
        id:5,
        name:"Data 2",
        image:ph15,
        categorie:"Data-Analys"
    },
    {
        id:6,
        name:"Data 3",
        image:ph17,
        categorie:"Data-Analys"
    },
    // website
    {
        id:7,
        name:"Site 1",
        image:Designer,
        categorie:"Website"
    },
    {
        id:8,
        name:"Site 2",
        image:Designer,
        categorie:"Website"
    },
    {
        id:9,
        name:"Site 3",
        image:Designer,
        categorie:"Website"
    },
    // app
    {
        id:10,
        name:"App 1",
        image:Designer,
        categorie:"App-mobile"
    },
    {
        id:11,
        name:"App 2",
        image:Designer,
        categorie:"App-mobile"
    },
    {
        id:12,
        name:"App 3",
        image:Designer,
        categorie:"App-mobile"
    },
    //Tout
    {
        id:13,
        name:"tout 1",
        image:ph1,
        categorie:"Tout"
    },
    {
        id:14,
        name:"tout 2",
        image:ph2,
        categorie:"Tout"
    },
    {
        id:15,
        name:"tout 3",
        image:ph11,
        categorie:"Tout"
    },
    {
        id:16,
        name:"tout 4",
        image:ph15,
        categorie:"Tout"
    },
    {
        id:17,
        name:"tout 5",
        image:ph16,
        categorie:"Tout"
    },
    {
        id:18,
        name:"tout 6",
        image:Designer,
        categorie:"Tout"
    }
 
] ;