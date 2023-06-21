function get_random_object_from_ArrayList(arrayList) {

    const randomIndex = Math.floor(Math.random() * arrayList.length);
    const active_title = arrayList[randomIndex];

    document.getElementById('img').src = active_title.getLink();
    document.getElementById('figcaption').firstChild.nodeValue = active_title.getCaption();
    document.getElementById('isbn').firstChild.nodeValue = active_title.getIsbn();
    document.getElementById('storefront').href = active_title.getStorefront();
    document.getElementById('author').firstChild.nodeValue = active_title.getAuthor();
    document.getElementById('img').alt = active_title.getAlt();
    document.getElementById('descr').firstChild.nodeValue = active_title.getDescr();

    let elements = document.getElementsByClassName('waves-effect red darken-1 waves-light btn row disabled');
    for (let i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].className = 'waves-effect red darken-1 waves-light btn row';
        }
    }

}