fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data =>{
        const drinks = data.drinks;
        if (drinks && drinks.length > 0) {
            const drink = drinks[0]; // Get the first drink in the array
            const thumbnail = drink.strDrinkThumb; // Access the thumbnail URL
            const name = drink.strDrink
            console.log(name)
            const nameOfDrink = document.getElementById("nameOfDrink")
            nameOfDrink.innerText = name
            console.log(thumbnail);
            const Thumb = document.getElementById("drinkThumb")
            const img = document.createElement('img')
            img.src = thumbnail
            Thumb.appendChild(img)

        }
    }
    )
    .catch(error => console.error('Error:', error));
    
