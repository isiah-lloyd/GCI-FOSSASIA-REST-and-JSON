function formSubmit() {
    var userId = document.getElementsByName('user_id')[0].value;
    var url = "http://jsonplaceholder.typicode.com/posts/" + userId
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data);
        document.getElementsByName('raw_data')[0].innerHTML = JSON.stringify(data);
        document.getElementById('title').innerHTML = data.title;
        document.getElementById('author').innerHTML = "Posted by UserId:" + data.userId;
        document.getElementById('body').innerHTML = data.body;
        document.getElementById('post_id').innerHTML = "This is postId:" +data.id;
    };
request.send();
}
