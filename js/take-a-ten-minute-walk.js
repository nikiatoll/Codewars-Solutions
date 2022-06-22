function takeAHike(walk){
    let routeLength = 0
    routeLength = walk.length
    
    const trip = new Map([
        ['n',0],
        ['s', 0],
        ['e', 0],
        ['w', 0],
    ])
    walk.forEach(direction => {
        trip.set(direction, trip.get(direction)+1)
    });
    
    return (routeLength===10 && (trip.get('n')-trip.get('s')) === 0 && (trip.get('w')-trip.get('e'))===0)
}

console.log(takeAHike(['n', 's', 'w', 's', 'n', 'w', 'n', 's', 'n', 's']))