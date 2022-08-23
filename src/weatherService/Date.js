function TimeOfYear() {
  const data = new Date(  );
  if (data.getMonth() < 2 || data.getMonth() === 11) {return 'Зима'} 
  else if ( data.getMonth() >= 2 && data.getMonth() < 5 ) {return 'Весна'}
  else if ( data.getMonth() >= 5 && data.getMonth() < 8 ) {return 'Лето'}
  else {return 'Осень'}
}

export default TimeOfYear