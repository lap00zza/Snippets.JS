window.person = 'Me';
function say_something(msg) { return `${ this.person } says ${ msg }` };
console.log( say_something('hi') );
console.log( say_something.bind({ person: 'Anna' })('hi') );
