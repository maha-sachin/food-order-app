import React ,{useEffect,useState} from "react";
import Card from "../UI/Card"
import classes from "./AvailableMeals.modules.css"
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];




const AvailableMeals = () => {
  const[meals,setMeals]=useState([])
  const[isLoading,setIsLoading]=useState(true)
  const[httpError,setHttpError]=useState()

  useEffect(()=>{
    const fetchMeals = async()=>{
      const response= await fetch('https://foodorder-7968b-default-rtdb.firebaseio.com/meals.json')
      console.log(response)

      if(!response.ok){
       throw new Error('something went wrong..!')
      }
      const responseData = await response.json()
      

      const loadedMeals = []

      for( const key in responseData){
        loadedMeals.push({
          id:key,
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }
//handling an error inside of promise
    fetchMeals().catch((error)=>{
      setIsLoading(false)
      setHttpError(error.message)
    })
  }, [])

  if (isLoading){
    return (<section className={classes.MealsLoading}>
      <p> Meals Loading...</p>
    </section>)
  }

  if (httpError){
    return (<section className={classes.MealsError}>
      <p> {httpError}</p>
    </section>)
  }

  const mealLists = meals.map((meal) =>
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price} />
        )
  


  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealLists}
        </ul>
      </Card>
    </section>)

}

export default AvailableMeals