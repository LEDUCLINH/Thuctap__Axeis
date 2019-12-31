const persons = [{ name: 'Linh', age: 2 }, { name: 'Le', age: 8 }];

    // Regular
    console.log('hello');
    // Interpolated
    console.log(`My name is ${persons[0].name}`);
    // Styled
    // console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')
    // warning!
    console.warn('OH NOOO');
    // Error :|
    console.error('Shit!');
    // Info
    console.info('Crocodiles eat 3-4 people per year');
    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    console.clear();
    // Grouping together
    persons.forEach(person => {
      console.groupCollapsed(`${person.name}`);
      console.log(`This is ${person.name}`);
      console.log(`${person.name} is ${person.age} years old`);
      console.groupEnd(`${person.name}`);
    });
    // counting
    console.count('1');
    console.count('2');
    console.count('1');
    console.count('2');
    console.count('1');
    console.count('2');
    console.count('1');
    console.count('2');
    console.count('3');
    console.count('2');
   
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });
    console.table(persons);
