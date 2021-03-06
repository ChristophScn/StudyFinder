//saves the currently displayed group. Null if no Popup visible.
var currentGroup = null;


function filter_list(){
    var list = document.getElementById("search_list");
    var groups = this.global_groups.sort(compareGroups);
    var persons = this.global_persons.sort(comparePersons);
    var name = document.getElementById("input_field").value;
    name = name.toLowerCase();

    //reset list
    list.innerHTML = "";


    //split into tokens
    var tokens = name.split();
    console.log(tokens);

    //check for every group
    for (var i = 0; i < groups.length; i++){
        //check if all tokens fit
        var fitting = true;
        for(var t = 0; t < tokens.length; t++){
            if (!groups[i].name.toLowerCase().includes(tokens[t])
                && !groups[i].description.toLowerCase().includes(tokens[t])){
                fitting = false;
            }
        }

        //add to list
        if(fitting){
            var item = document.createElement('li');
            item.innerHTML = formatGroupHTML(groups[i]);
            item.id = groups[i].name;
            item.onclick = function() {onGroupClicked(this.id);};
            list.appendChild(item);
        }

    }

    //check for every person
    for (var i = 0; i < persons.length; i++){
        //check if all tokens fit
        var fitting = true;
        for(var t = 0; t < tokens.length; t++){
            if (!persons[i].first_name.toLowerCase().includes(tokens[t])
                &&!persons[i].last_name.toLowerCase().includes(tokens[t])
                &&!persons[i].studiengang.toLowerCase().includes(tokens[t])
                &&!persons[i].interessen.toLowerCase().includes(tokens[t])){
                fitting = false;
            }
        }

        //add to list
        if(fitting){
            var item = document.createElement('li');
            item.innerHTML = persons[i].first_name + " " + persons[i].last_name;
            item.id = persons[i].first_name + " " + persons[i].last_name;
            item.onclick = function() {onPersonClicked(this.id);};
            list.appendChild(item);
        }

    }

    //display default text if no results found
    if( list.innerHTML == ''){
        list.appendChild(document.createTextNode('Keine Suchergebnisse gefunden'));
    }
}

function formatGroupHTML(g){
    var m = "<div>"+ g.members.length+" / " + g.max + "</div>";
    var n = "<div style='flex-grow: 5;text-align: center'>" + g.name + "</div>";
    return "<div class='flex-container'>" + m + n + "</div>";

}




function onGroupClicked(name){

    var group = findGroupByName(name)
    // console.log(group);
    currentGroup = group;
    if(group == null) return;


    //display clicked group in modal
    var title = document.getElementById("modal_group_title");
    title.innerHTML = "Gruppe: " + group.name;

    var desc = document.getElementById("modal_group_desc");
    desc.innerHTML = group.description;

    var member = document.getElementById("modal_group_member");
    member.innerHTML = "Mitglieder (" + group.members.length + "/" + group.max + ")";

    var list = document.getElementById("modal_group_list");
    list.innerHTML = "";
    for(var i = 0; i < group.members.length; i++){
        var item = document.createElement('li');
        item.innerHTML = group.members[i];
        item.style = "text-align: start;"
        list.appendChild(item);
    }

    //show modal
    var modal = document.getElementById("modal_group");
    modal.style.display = "block";
}



function onPersonClicked(name){

    var person = findPersonByName(name)
    // console.log(group);
    if(person == null) return;


    //display clicked group in modal
    var title = document.getElementById("modal_person_title");
    title.innerHTML = "Student: " + person.first_name + " " + person.last_name;

    var title = document.getElementById("modal_person_studiengang");
    title.innerHTML = "Studiengang: " + person.studiengang;

    var title = document.getElementById("modal_person_semester");
    title.innerHTML = "Semester: " + person.semester;

    var title = document.getElementById("modal_person_interessen");
    title.innerHTML = "Interessen: " + person.interessen;

    //show modal
    var modal = document.getElementById("modal_person");
    modal.style.display = "block";
}



function showAlert(text) {
    alert(text);
}



function sendJoinRequest(id){

    //show alert
    var text = "Beitrittsanfrage erfolgreich versendet: \n" + currentGroup.name;
    showAlert(text);

    //close popup
    closeModal(id);


}


function closeModal(id){
    var modal = document.getElementById(id);
    modal.style.display = "none";
    currentGroup = null;
}


window.onload = function(){

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById("modal_group");
        if (event.target == modal) {
            closeModal(modal.id);
        }
        var modal = document.getElementById("modal_person");
        if (event.target == modal) {
            closeModal(modal.id);
        }
        var modal = document.getElementById("modal_not_implemented");
        if (event.target == modal) {
            closeModal(modal.id);
        }
    }
}




