function addItineraryField() {
    const itineraryFields = document.getElementById('itineraryFields');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'itinerary[]';
    newInput.required = true;
    itineraryFields.appendChild(newInput);
  }