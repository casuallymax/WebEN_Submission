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
class Action extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}

class Crime extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Fantasy extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Horror extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}
class Romance extends Content {
    constructor(img_link, img_caption, isbn, storefront, author, alt, descr) {
        super(img_link, img_caption, isbn, storefront, author, alt, descr);
    }
}

const action_List = [];
const crime_List = [];
const fantasy_List = [];
const horror_List = [];
const romance_List = [];

fetch("js/json_lib/movies_library.json")
    .then (response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Request failed with status code ' + response.status);
        }
    })
    .then (data => {

        data.act.forEach(item => {
            let append_item = new Action(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            action_List.push(append_item);
        });

        data.crime.forEach(item => {
            let append_item = new Crime(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            crime_List.push(append_item);
        });

        data.fantasy.forEach(item => {
            let append_item = new Fantasy(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            fantasy_List.push(append_item);
        });

        data.horror.forEach(item => {
            let append_item = new Horror(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            horror_List.push(append_item);
        });

        data.romance.forEach(item => {
            let append_item = new Romance(item.img_link, item.img_caption, item.isbn, item.storefront, item.author, item.alt_img, item.descr)
            romance_List.push(append_item);
        });
        console.log('Thiller List:', action_List);
        console.log('Crime List:', crime_List);
        console.log('Fantasy List:', fantasy_List);
        console.log('horror List:', horror_List);
        console.log('Horror List:', romance_List);
    })


let get_genre = document.querySelector('#genres');
let bt_gen = document.querySelector('#generate');



bt_gen.addEventListener('click', function () {

    console.log("test");
    switch (get_genre.value) {
        case 'action':
            console.log('You choose Drum and Bass');
            get_random_object_from_ArrayList(action_List);
            break;
        case 'crime':
            console.log('You choose crime');
            get_random_object_from_ArrayList(crime_List);
            break;
        case 'fantasy':
            console.log('You choose Deep House');
            get_random_object_from_ArrayList(fantasy_List);
            break;
        case 'horror':
            console.log('You choose horror');
            get_random_object_from_ArrayList(horror_List);
            break;
        case 'romance':
            console.log('You choose romance');
            get_random_object_from_ArrayList(romance_List);
            break;
        default:
            console.log('default');
            break;
    }
});

