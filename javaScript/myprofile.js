function submitProfile() {
    alert('function called');
    var url = "#", data = $('profile_form').serialize();
    console.log(data);
    $.ajax({
        // prevent page reload, dunno the reason
        async:false,
        url: url,
        type: 'POST',
        data: data,
        success: function (data) {
            //alert(data);  show response from the php script.
            if(data == "0" | data =="1"){
                alert('username or password incorrect, \nplease check again');
            }
            else if(data == "2"){
                alert('welcome back to Foogle');
            }
            else{
                alert('server response invalid value: ' + data);
            }
        }
    });
    // prevent page reload, dunno the reason
    return false;
}