//Tableau js des tâches
let table = []

//Tableau html
let tableauHTML = document.getElementById("ListeTasks")

//Fonction de mis à jour du tableau html
function MisAjourHTML() {
     //On ajoute dans notre tableau html
     tableauHTML.innerHTML = "" //On vide d'abord ce tableau pour éviter les doublons
            
     //On parcours le tableau js pour stocker les données dans le tableau html
     for (let index = 0; index < table.length; index++) {
         tableauHTML.innerHTML += `
              <tr>
                 <th scope="row">${index+1}</th>
                 <td>${table[index].tache}</td>
                 <td>${table[index].date.toLocaleDateString("fr")}</td>
                 <td>${table[index].deadline.toLocaleDateString("fr")}</td>
                 <td>${table[index].respo}</td>
                 <td><i class="fa-clock fa text-primary"></i></td>
                 <td>
                     <div class="d-flex">
                         <button class="btn btn-warning me-2" onclick="ModifierTache(${index})"><i class="fa fa-edit"></i></button>
                         <button  class="btn btn-danger"  onclick="SupprimerTache(${index})"><i class="fa fa-trash-alt"></i></button>
                     </div>
                 </td>
             </tr>
         `
     }
}


//Ajout des taches
function addTasks() {
    let addTodo = document.getElementById("addTodo")
    if(addTodo) {
        addTodo.addEventListener("submit", function(e) {

            e.preventDefault() //Cette methode permet d'empêcher que la page soit rafraichie pendant la soumission du formulaire

            //On recupère les valeurs saisie par l'utilisateur
            let Tasks = document.getElementById("Tasks").value
            let DateTasks = document.getElementById("DateTasks").value
            let DeadlineTasks = document.getElementById("DeadlineTasks").value
            let ResponsableTasks = document.getElementById("ResponsableTasks").value

            //Pour afficher les message d'erreurs
            let message = document.getElementById("message")
            message.innerHTML = ""

            //On test si les champs ne sont pas vide (si l'utilisateur a bien rempli les champs)
            if(Tasks !== "" && DateTasks !== "" && DeadlineTasks !== "" && ResponsableTasks !== "") {

                //On ajoute les données au tableau js
                table.push({
                    tache: Tasks, 
                    date: new Date(DateTasks),
                    deadline: new Date(DeadlineTasks),
                    respo: ResponsableTasks
                })

                //On ajoute dans notre tableau html en appelant la fonction de mis à jour plus haut
                MisAjourHTML()
                

            } else {
                message.innerHTML = `<span class="bg-danger text-white p-3 "><i class="fa fa-exclamation"></i> Remplir tous les champs </span>`
            }
        })
    }
}


//Fonction pour modifier une tâche
function ModifierTache(index) {
    table[index].tache = "Nouvelle tache"
   //On remet à jour notre tableau html avec les nouvelles modifs en appelant la fonction de mis à jour plus haut
   MisAjourHTML()
}

addTasks()