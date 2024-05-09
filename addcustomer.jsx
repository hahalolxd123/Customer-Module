.professional-component {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  padding: 20px;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-bar {
  width: 300px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #1976d2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-button {
  padding: 10px 20px;
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-container {
  display: flex;
  align-items: center;
  margin-left: 20px;
  transition: margin-top 0.5s; /* Add transition for smooth animation */
}

.button {
  padding: 10px 15px;
  background-color: #fff;
  color: #1976d2;
  border: 1px solid #1976d2;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
}

.button:hover {
  background-color: #1976d2;
  color: #fff;
}

.delete-button {
  background-color: #1976d2;
  color: #fff;
}

/* Media query for smaller screens */
@media only screen and (max-width: 600px) {
  .professional-component {
    flex-direction: column; /* Change flex direction to column */
    align-items: center; /* Align items to the center */
  }

  .button-container {
    margin-top: 20px; /* Move button container below the search bar */
  }
}
