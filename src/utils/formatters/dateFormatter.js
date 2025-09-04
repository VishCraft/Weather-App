export const formatDate = (date, format = 'long') => {
  const options = {
    short: { month: 'short', day: 'numeric' },
    long: { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    },
    time: { 
      hour: '2-digit', 
      minute: '2-digit' 
    }
  };

  return new Intl.DateTimeFormat('en-US', options[format]).format(date);
};
