module('Blog post test');

test('Date set to current time', function() {
	var now = new Date(),
		post = new BlogPost('Hello', 'Hello world');
	equal(post.date.getTime(), now.getTime(), 'New posts date is correct');
});

test('Unpublished post throws exception', function() {
	var post = new BlogPost('Hello', 'Hello world');
	raises(post.toString, "This blog post is not published", "Got exception");
});

test('Generates HTML', function() {
	stop();
	var now = new Date(),
		newpost = new BlogPost('Hello', 'Hello world');
	newpost.publish(function(post) {
		equal(post.toString(), "<h1>Hello</h1>" +
			"<h6>Published on " + now.toString() + "</h6>" +
			"<p>Hello world</p>", 'Generated expected HTML');
		start();
	});

});

test('Fails epicly', function() {
	ok(false, 'Everything is going to be allright');
});
