import americano from '../assets/img/coffes/Americano.svg';
import arabe from '../assets/img/coffes/Arabe.svg';
import cafeComLeite from '../assets/img/coffes/Cafe com Leite.svg';
import cafeGelado from '../assets/img/coffes/Cafe Gelado.svg';
import capuccino from '../assets/img/coffes/Capuccino.svg';
import chocolateQuente from '../assets/img/coffes/Chocolate Quente.svg';
import cubano from '../assets/img/coffes/Cubano.svg';
import expresso from '../assets/img/coffes/Expresso.svg';
import expressoCremoso from '../assets/img/coffes/Expresso Cremoso.svg';
import havaiano from '../assets/img/coffes/Havaiano.svg';
import irlandes from '../assets/img/coffes/Irlandes.svg';
import latte from '../assets/img/coffes/Latte.svg';
import macchiato from '../assets/img/coffes/Macchiato.svg';
import mochaccino from '../assets/img/coffes/Mochaccino.svg';

enum categorias{
    tradicional='Tradicional',
    especial='Especial',
    comLeite = 'Com Leite',
    gelado = 'Gelado',
    alcoolico = 'Alcoólico'
}


export const coffes = [
    {
        img:expresso,
        nome:'Expresso Tradicional',
        descricao:'O tradicional café feito com água quente e grãos moídos',
        categoria:[categorias.tradicional],
        preco:8.0
    },
    {
        img:americano,
        nome:'Expresso Americano',
        descricao:'Expresso diluído, menos intenso que o tradicional',
        categoria:[categorias.tradicional],
        preco:9.0
    },
    {
        img:expressoCremoso,
        nome:'Expresso Cremoso',
        descricao:'Café expresso tradicional com espuma cremosa',
        categoria:[categorias.tradicional],
        preco:11.0
    },
    {
        img:cafeGelado,
        nome:'Expresso Gelado',
        descricao:'Bebida preparada com café expresso e cubos de gelo',
        categoria:[categorias.tradicional,categorias.gelado],
        preco:7.0
    },
    {
        img:cafeComLeite,
        nome:'Café com Leite',
        descricao:'Meio a meio de expresso tradicional com leite vaporizado',
        categoria:[categorias.tradicional,categorias.comLeite],
        preco:7.5
    },
    {
        img:latte,
        nome:'Latte',
        descricao:'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        categoria:[categorias.tradicional,categorias.comLeite],
        preco:7.8
    },
    {
        img:capuccino,
        nome:'Capuccino',
        descricao:'Bebida com canela feita de doses iguais de café, leite e espuma',
        categoria:[categorias.tradicional,categorias.comLeite],
        preco:10.0
    },
    {
        img:macchiato,
        nome:'Macchiato',
        descricao:'Café expresso misturado com um pouco de leite quente e espuma',
        categoria:[categorias.tradicional,categorias.comLeite],
        preco:12.0
    },
    {
        img:mochaccino,
        nome:'Mocaccino',
        descricao:'Café expresso com calda de chocolate, pouco leite e espuma',
        categoria:[categorias.tradicional,categorias.comLeite],
        preco:11.5
    },
    {
        img:chocolateQuente,
        nome:'Chocolate Quente',
        descricao:'Bebida feita com chocolate dissolvido no leite quente e café',
        categoria:[categorias.especial,categorias.comLeite],
        preco:7.0
    },
    {
        img:cubano,
        nome:'Cubano',
        descricao:'Drink gelado de café expresso com rum, creme de leite e hortelã',
        categoria:[categorias.especial,categorias.alcoolico, categorias.gelado],
        preco:15.0
    },
    {
        img:havaiano,
        nome:'Havaiano',
        descricao:'Bebida adocicada preparada com café e leite de coco',
        categoria:[categorias.especial],
        preco:17.5
    },
    {
        img:arabe,
        nome:'Árabe',
        descricao:'Bebida preparada com grãos de café árabe e especiarias',
        categoria:[categorias.especial],
        preco:14.5
    },
    {
        img:irlandes,
        nome:'Irlandês',
        descricao:'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        categoria:[categorias.especial,categorias.alcoolico],
        preco:20.0
    }
]