const day = 'monday';

switch(day){
case 'monday': // day === 'monday'
console.log('plan coursestructure');
console.log('Go to coding meetup');
break; // break means stops printing or displaying output.
case 'tuesday': // day === 'tuesday'
console.log('prepare theory');
break;
case 'wednesday':
case 'thursday':
console.log('write code examples');
break;
case 'friday':
console.log('record videos');
break;
case 'saturday':
case 'sunday':
console.log('enjoy the weekend');
break;
default:
console.log('not a valid day!');
}

if ( day === 'saturday'){
    console.log('plan coursestructure');
    console.log('Go to coding meetup');
}else if (day === 'tuesday'){
    console.log('prepare theory');
}else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
}else if ( day === ' friday'){
    console.log('record videos');
}else if( day === 'saturday' || day === 'sunday'){
    console.log('enjoy the weekend');
} else {
    console.log('Not a valid day!');
}