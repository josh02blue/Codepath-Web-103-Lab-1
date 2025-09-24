const renderEvent = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/events");
  const data = await response.json();

  const eventContent = document.getElementById("event-content");

  let event;

  event = data.find((event) => event.id === requestedID);

  if (event) {
    document.getElementById("image").src = event.image;
    document.getElementById("name").textContent = event.name;
    document.getElementById("submittedBy").textContent =
      "Submitted by: " + event.submittedBy;
    document.getElementById("pricePoint").textContent =
      "Price: " + event.pricePoint;
    document.getElementById("audience").textContent =
      "Great For: " + event.audience;
    document.getElementById("description").textContent = event.description;
    document.title = `Events4U - ${event.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Events Available 😞";
    eventContent.appendChild(message);
  }
};

renderEvent();
