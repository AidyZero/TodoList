
const task_field = document.querySelector('#task_field')

const btn_add = document.querySelector('#btn_add') 

const tasks_area = document.querySelector('#tasks_area')

//const task_row = document.querySelectorAll('.task_row')

//const task_content = document.querySelectorAll('.task_content')

//const btn_update = document.querySelectorAll('.btn_update')

//const btn_delete = document.querySelectorAll('.btn_delete')


//tasks_area.style.display="none"

const tasks = ['Travailler','Jouer']

    for(let i = 0;i < tasks.length;i++){

        if(typeof tasks[i] === 'string' && tasks[i]){
            
            const task_row = document.createElement('div')
            const task_content = document.createElement('input')
            const btn_update = document.createElement('button')
            const btn_delete = document.createElement('button')
            const icone_pencil = document.createElement('i')
            const icone_trash = document.createElement('i')

            task_row.className = 'd-flex  row p-4'
            //task_content.classeName = 'Myform  bg-light col-lg-6 m-2'
            task_content.setAttribute('class','Myform  bg-light col-lg-6 m-2')
            //btn_update.classeName = 'btn btn-success   col-lg-1 button_style m-2'
            btn_update.setAttribute('class','btn btn-success   col-lg-1 button_style m-2')
            btn_delete.className = 'btn btn-danger  col-lg-1 button_style m-2'
            icone_pencil.className = 'bi bi-pencil-square  h2'
            icone_trash.className = 'bi bi-trash col-lg-2 h2'
            task_content.setAttribute('type','text')
            task_content.setAttribute('readonly','readonly')
            task_content.value = tasks[i]
            
            tasks_area.appendChild(task_row)
            task_row.insertBefore(task_content,task_row.firstChild)
            task_row.appendChild(btn_update)
            task_row.appendChild(btn_delete)
           btn_update.appendChild(icone_pencil)
           btn_delete.appendChild(icone_trash)
            

            alert(task_content)
            console.log(task_row)
            console.log(task_content)
            console.log(btn_update)
            console.log(btn_delete)
            console.log(icone_pencil)
            console.log(icone_trash)
            
            /*Cette semaine j'ai appris a creer les lements du DOM et les afficher.
            Au  prochain weekend je vais creer mettre des evenements dans les differents boutons*/
 



            




            

        }
    
    }


















