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
        this.#storefront = storefront;
        this.#isbn = isbn;
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
class RPG extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}

class Strategy extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Sim extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Adventure extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Shooter extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Racing extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}

const rpg_List = [];
const strategy_List = [];
const sim_List = [];
const adventure_List = [];
const shooter_List = [];
const racing_List = [];

fetch("js/json_lib/games_library.json")
    .then (response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Request failed with status code ' + response.status);
        }
    })
    .then (data => {

        data.rpg.forEach(item => {
            let append_item = new RPG(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            rpg_List.push(append_item);
        });

        data.strategy.forEach(item => {
            let append_item = new Strategy(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            strategy_List.push(append_item);
        });

        data.sim.forEach(item => {
            let append_item = new Sim(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            sim_List.push(append_item);
        });

        data.adventure.forEach(item => {
            let append_item = new Adventure(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            adventure_List.push(append_item);
        });

        data.shooter.forEach(item => {
            let append_item = new Shooter(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            shooter_List.push(append_item);
        });

        data.racing.forEach(item => {
            let append_item = new Racing(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            racing_List.push(append_item);
        });
    })


let get_genre = document.querySelector('#genres');
let bt_gen = document.querySelector('#generate');



bt_gen.addEventListener('click', function () {

    console.log("test");
    switch (get_genre.value) {
        case 'rpg':
            console.log('You choose RPG');
            get_random_object_from_ArrayList(rpg_List);
            break;
        case 'strategy':
            console.log('You choose strategy');
            get_random_object_from_ArrayList(strategy_List);
            break;
        case 'sim':
            console.log('You choose Sim');
            get_random_object_from_ArrayList(sim_List);
            break;
        case 'adventure':
            console.log('You choose Adventure');
            get_random_object_from_ArrayList(adventure_List);
            break;
        case 'shooter':
            console.log('You choose Shooter');
            get_random_object_from_ArrayList(shooter_List);
            break;
        case 'racing':
            console.log('You choose Racing');
            get_random_object_from_ArrayList(racing_List);
            break;
        default:
            console.log('default');
            break;
    }
});

