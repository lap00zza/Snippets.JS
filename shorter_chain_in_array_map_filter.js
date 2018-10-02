const posts = [
    {
        "userId" : 1,
        "id" : 1,
        "title" : "sunt aut abc repellat provident occaecati excepturi optio reprehenderit",
        "body" : "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mol",
    },
    {
        "userId" : 1,
        "id" : 2,
        "title" : "qui est esse",
        "body" : "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\",
    },
    {
        "userId" : 1,
        "id" : 3,
        "title" : "ea molestias abc quasi exercitationem repellat qui ipsa sit aut",
        "body" : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus t",
    },
    {
        "userId" : 1,
        "id" : 4,
        "title" : "eum et est occaecati",
        "body" : "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumendavelit",
    },
    {
        "userId" : 1,
        "id" : 5,
        "title" : "nesciunt abc quas odio",
        "body" : "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoer neque",
    },
    {
        "userId" : 1,
        "id" : 6,
        "title" : "dolorem eum magni eos aperiam quia",
        "body" : "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis tiae",
    },
];

// Let say we want to get all posts with CAPITALIZE title and filter a word with `abc`
// Option 1, but these
var capitalizeTitle = posts.map(function(post) {
    return post.title.toUpperCase()
})

var getOnlyABC = capitalizeTitle.filter(function(capsTitle) {
    var abcRegex = /abc/ig;          // we are interested in abc, /ig mean i = not case sensitive, g = global
    return abcRegex.test(capsTitle) // this will check is there any abc in each title
})

// getOnlyAbc = [
//      "SUNT AUT ABC REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT",
//      "EA MOLESTIAS ABC QUASI EXERCITATIONEM REPELLAT QUI IPSA SIT AUT",
//      "NESCIUNT ABC QUAS ODIO"
// ]

// we can make this shorter with chaining
var getOnlyABC = posts.map(function(post) {
    return post.title.toUpperCase()
}).filter(function(capsTitle) {
    var abcRegex = /abc/ig;
    return abcRegex.test(capsTitle)
})

// and we can make use of ES6 fat arrow.
const getOnlyABCES6 = posts
    .map(post => post.title.toUpperCase())
    .filter(capsTitle => {
        const abcRegex = /abc/ig;
        return abcRegex.test(capsTitle)
    })

// But these method are using 2 method chaining with `.map` and `.filter`
// we can use `.reduce` to simplify this even further.

const getOnlyABCWithReduce = posts.reduce((accumulator, current) => {
    const abcRegex = /abc/ig;
    const capitalizeTitle = current.title.toUpperCase();

    if(abcRegex.test(capitalizeTitle)) {
        accumulator.push(capitalizeTitle)
    }

    return accumulator;
}, [])

// getOnlyABCWithReduce = [
//      "SUNT AUT ABC REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT",
//      "EA MOLESTIAS ABC QUASI EXERCITATIONEM REPELLAT QUI IPSA SIT AUT",
//      "NESCIUNT ABC QUAS ODIO"
// ]