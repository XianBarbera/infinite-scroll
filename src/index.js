// http://placekitten.com/200/200

/*
<div class="card">
            <h1>card</h1>
            <h2>sub</h2>
            <img src="http://placekitten.com/200/200" alt="">
            <div class="detail-container">
                <h4>blabla</h4>
                <h4>blable</h4>
    </div>
</div>
*/

const loadData = async () => {
  const data = await fetch('https://rickandmortyapi.com/api/location?page=1')
  const planetas = await data.json()
  const primerPlaneta = planetas.results[0]

  const container = document.getElementById('card-container')
  console.log(container.innerHTML)
  container.innerHTML = `<div class="card">
    <h1>${primerPlaneta.name}</h1>
    <h2>${primerPlaneta.dimension}</h2>
    <img src="http://placekitten.com/200/200" alt="">
    <div class="detail-container">
        <h4>Type: ${primerPlaneta.type}</h4>
        <h4>Population: ${primerPlaneta.residents.length}</h4>
</div>
</div>`
}

loadData()
