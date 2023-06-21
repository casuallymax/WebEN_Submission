class Content {
    #img_link;
    #img_caption;
    #storefront;
    #isbn;
    #author;
    #alt;
    #descr;

    constructor(img_link, img_caption, isbn, storefront, auth, alt, descr) {
        this.#img_link = img_link;
        this.#img_caption = img_caption;
        this.#isbn = isbn;
        this.#storefront = storefront;
        this.#author = auth;
        this.#alt = alt;
        this.#descr = descr;
    }
    getLink() {
        return this.#img_link;
    }
    getCaption() {
        return this.#img_caption
    }
    getStorefront() {
        return this.#storefront;
    }
    getIsbn() {
        return this.#isbn;
    }
    getAuthor() {
        return this.#author;
    }
    getAlt() {
        return this.#alt;
    }

    getDescr() {
        return this.#descr;
    }
}
class DrumandBass extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}

class Rock extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class DeepHouse extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Indie extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Metal extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}

const drumandbass_List = [];
const rock_List = [];
const deephouse_List = [];
const indie_List = [];
const metal_List = [];

fetch("js/json_lib/music_library.json")
    .then (response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Request failed with status code ' + response.status);
        }
    })
    .then (data => {

        data.drumandbass.forEach(item => {
            let append_item = new DrumandBass(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            drumandbass_List.push(append_item);
        });

        data.rock.forEach(item => {
            let append_item = new Rock(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            rock_List.push(append_item);
        });

        data.deephouse.forEach(item => {
            let append_item = new DeepHouse(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            deephouse_List.push(append_item);
        });

        data.indie.forEach(item => {
            let append_item = new Indie(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            indie_List.push(append_item);
        });

        data.metal.forEach(item => {
            let append_item = new Metal(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            metal_List.push(append_item);
        });
        console.log('Thiller List:', drumandbass_List);
        console.log('Crime List:', rock_List);
        console.log('Fantasy List:', deephouse_List);
        console.log('Indie List:', indie_List);
        console.log('Horror List:', metal_List);
    })


let get_genre = document.querySelector('#genres');
let bt_gen = document.querySelector('#generate');



bt_gen.addEventListener('click', function () {

    console.log("test");
    switch (get_genre.value) {
        case 'drumandbass':
            console.log('You choose Drum and Bass');
            get_random_object_from_ArrayList(drumandbass_List);
            break;
        case 'rock':
            console.log('You choose Rock');
            get_random_object_from_ArrayList(rock_List);
            break;
        case 'deephouse':
            console.log('You choose Deep House');
            get_random_object_from_ArrayList(deephouse_List);
            break;
        case 'indie':
            console.log('You choose Indie');
            get_random_object_from_ArrayList(indie_List);
            break;
        case 'metal':
            console.log('You choose Metal');
            get_random_object_from_ArrayList(metal_List);
            break;
        default:
            console.log('default');
            break;
    }
});

