const countTheCrew = require('./1_countTheCrew');
const fasterSpaceship = require('./2_fasterSpaceship');
const qualifications = require('./3_qualifications');
const bestFood = require('./4_bestFood');
const encouragement = require('./5_encouragement');

test('countTheCrew 1' ,() => {
    const obj = {numCrew: 5}
    expect(countTheCrew(obj)).toBe(5);
});

test('countTheCrew 2' ,() => {
    const obj = {numCrew: 13}
    expect(countTheCrew(obj)).toBe(13);
});

test('fasterSpaceship 1', () => {
    const inputObj = {color: 'gold',
        'Fuel Type': 'turbo',
        speed: 1000,
        name: 'Fasterr'
    };

    const outputObj = {color: 'gold',
        'Fuel Type': 'turbo',
        speed: 1100,
        name: 'Fasterr'
    };

    expect(fasterSpaceship(inputObj)).toEqual(outputObj);
});

test('fasterSpaceship 1', () => {
    const inputObj = {color: 'red',
        'Fuel Type': 'turbo',
        speed: 220,
        name: 'Speedyy'
    };

    const outputObj = {color: 'red',
        'Fuel Type': 'turbo',
        speed: 320,
        name: 'Speedyy'
    };

    expect(fasterSpaceship(inputObj)).toEqual(outputObj);
});

test('qualifications 1', () => {
    const inputObj = {
        crew: {
          captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { return 'We got this!'; },
           'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
        }
    }
    expect(qualifications(inputObj)).toBe('Computer Engineering');
});

test('qualifications 2', () => {
    const inputObj = {
        crew: {
          captain: { 
            name: 'Sandra', 
            degree: 'Metaphysics', 
            encourageTeam() { return 'We got this!'; },
           'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
        }
    }
    expect(qualifications(inputObj)).toBe('Metaphysics');
});

test('bestFood 1', () => {
    const inputObj = {
        crew: {
          captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { return 'We got this!'; },
           'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
        }
    }
    expect(bestFood(inputObj)).toBe('cookies');
});

test('bestFood 2', () => {
    const inputObj = {
        crew: {
          captain: { 
            name: 'Sandra', 
            degree: 'Metaphysics', 
            encourageTeam() { return 'You are amazing!'; },
           'favorite foods': ['pizza', 'cakes', 'candy', 'spinach'] }
        }
    }
    expect(bestFood(inputObj)).toBe('pizza');
});

test('encouragement 1', () => {
    const inputObj = {
        crew: {
          captain: { 
            name: 'Sandra', 
            degree: 'Metaphysics', 
            encourageTeam() { return 'You are amazing!'; },
           'favorite foods': ['pizza', 'cakes', 'candy', 'spinach'] }
        }
    }
    expect(encouragement(inputObj)).toBe('You are amazing!');
});

test('encouragement 2', () => {
    const inputObj = {
        crew: {
          captain: { 
            name: 'Sandra', 
            degree: 'Metaphysics', 
            encourageTeam() { return 'We got this!'; },
           'favorite foods': ['pizza', 'cakes', 'candy', 'spinach'] }
        }
    }
    expect(encouragement(inputObj)).toBe('We got this!');
});
