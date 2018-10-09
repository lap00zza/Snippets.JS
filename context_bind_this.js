window.person = 'Me';
function say_something(msg) { return `${ this.person } says ${ msg }` };
console.log( say_something('hi') );
console.log( say_something.bind({ person: 'Anna' })('hi') );
// fat arrow prevents context
// const say_something = msg => `${ this.person } says ${ msg }`;
