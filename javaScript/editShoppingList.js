function addToSL() {
    alert('function call');
    let user_id = getCookie('userid');
    let recipe_id = document.getElementById('recipe_id').textContent;
    alert(user_id);
    alert(recipe_id);
    $('#add_to_list').append('<input type="hidden" name="user_id" value="' + user_id + '" /> ');
    $('#add_to_list').append('<input type="hidden" name="recipe_id" value="' + recipe_id + '" /> ');
    var url = "../PHP/addRecipeToList.php";
    var data = $('#add_to_list').serialize();
    console.log(data);
    alert(data);
    $.ajax({
        async: false,
        url: url,
        type: 'POST',
        data: data,
        success: function(data) {
            alert(data);
        }
    });
    return false;
}

function removeFromSL() {
    alert('function call');
    let user_id = getCookie('userid');
    let recipe_name = document.getElementById('recipe_name').textContent;
    console.log('recipe_name is: ' + recipe_name);
    alert(user_id);
    alert(recipe_id);
    // $('#remove_from_list').append('<input type="hidden" name="user_id" value="' + user_id + '" /> ');
    // $('#remove_from_list').append('<input type="hidden" name="recipe_id" value="' + recipe_name + '" /> ');
    var url = "../PHP/removeRecipeFromList.php",
        data = "user_id=" + user_id + "&recipe_id=" + recipe_name;
    // $('#remove_from_list').serialize();
    console.log(data);
    alert(data);
    $.ajax({
        async: false,
        url: url,
        type: 'POST',
        data: data,
        success: function(data) {
            alert(data);
        }
    });
    return false;

}