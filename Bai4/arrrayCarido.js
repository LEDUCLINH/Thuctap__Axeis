const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
//   1. Filter the list of inventors for those who were born in the 1500's
 const filter = inventors.filter(inventor => {
     return inventor.year >= 1500 && inventor.year<1600
 })
 console.log(filter)

//  2. Give us an array of the inventor first and last names
 const fullname = inventors.map(inventor =>{
     return `${inventor.first} ${inventor.last}`
 })
 console.log(fullname)

// 3. Sort the inventors by birthdate, oldest to youngest
 const sortYear = inventors.sort((inventor1,inventor2) => {
     return inventor2.year-inventor1.year
 })
 console.log(sortYear)

// 4. How many years did all the inventors live?
  const totalLived = inventors.reduce((sum, inventor) =>{
    return sum + inventor.passed-inventor.year
  },0)
  console.log(totalLived)

 // 5. Sort the inventors by years lived
 const sortLived = inventors.sort((x,y) => {
     let inventor1 = x.passed - x.year;
     let inventor2 = y.passed - y.year;
     return inventor2-inventor1
 })
 console.log(sortLived)

 // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//  const category = document.querySelector('.mw-category');
//  const linknames = Array.from(category.querySelectorAll('a'))
//  const listde = linknames.map(linkname => linkname.textContent).filter(name => name.includes('de'));
//  console.log(listde)

// 7. sort Exercise
// Sort the people alphabetically by last name
 const sortName = people.sort((people1,people2)=>{
     const lastName1 = people1.split(', ')[0];
     const lastName2 = people2.split(', ')[0];
     return lastName1-lastName2
 })
 console.table(sortName)

 // 8. Reduce Exercise
 // Sum up the instances of each of these
 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
  const sumUp = data.reduce((obj, vehicle) =>{
      if (vehicle in obj)
       obj[vehicle]++;
      else 
       obj[vehicle]=1;
       return obj
  },{})
  console.log(sumUp)