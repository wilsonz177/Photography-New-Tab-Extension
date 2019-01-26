var url = "https://www.nationalgeographic.com/photography/photo-of-the-day/2019/01/vietnam-salt-abstract/";
var url2 = "https://www.nationalgeographic.com/photography/photo-of-the-day/2019/01/vietnam-salt-abstract.html";
var url3 = "https://www.nationalgeographic.com/photography/photo-of-the-day";

$.ajax({ 
	url: url3, 
	success: function(data) {
		handleNatGeoPOTD(data)
	}, 
	failure: failed()
});


function failed(){
	console.log("failed");
	// console.log(erro);
}


function handleNatGeoPOTD(data){
	// console.log(data);

	var virtualDOM = document.implementation.createHTMLDocument('virtual');
	var string = data.replace("<!DOCTYPE HTML>", "");
	var parser = new DOMParser();
	var htmlDoc = parser.parseFromString(string, 'text/xml');
	console.log(htmlDoc.getElementsByTagName('meta'));
	console.log($(htmlDoc).find("meta[property='og:image']"));
	console.log($(htmlDoc).find("meta[property='og:image']")[0]["attributes"][1]["value"]);
	var imageURL = $(htmlDoc).find("meta[property='og:image']")[0]["attributes"][1]["value"];
	console.log(imageURL);
	// var div = $('<div class = animated fadeIn></div>');
	var img = $('<img class="center-fit">');
	img.attr('src', imageURL);
	img.appendTo(".imgbox");
	// img.appendTo(div);
	var title = $(htmlDoc).find("meta[property='og:title']")[0]["attributes"][1]["value"];
	console.log(title);
	var originalURL = $(htmlDoc).find("meta[property='og:url']")[0]["attributes"][1]["value"];
	console.log(originalURL);
	var titleElement = $(`<div class="textbox"> <h2>${title} </h2></div>`);
	titleElement.appendTo(".imgbox");
	// titleElement.appendTo(div);
	// div.appendTo(".imgbox");
	var imgSrcElement = $(`<div class="textbox"> <a href="${originalURL}"> Image Source </a>`);
	imgSrcElement.appendTo(".imgbox");

	console.log(`this is my title: ${title}`);
}
/*
should fetch the following information:
 - Image
 	<meta property="og:image" content="https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNcaYIQrkxN20Mc_HDiO1OdqezS--w6zIqQe2GbBsjMmIr23sK0uR284bcfMl6MJJuo7JN7oGzIT-k8iCAuiOivBpW_FdHt0Mq-s7aKwQyXN-V1Ye7IfJZjTlOSkxiSekREiZl3j1DSy5bXA-KblSllBRzaEhS5b_PRvEsUoaXCJpj0Kw/"/>
 	OR
 	 <meta name="twitter:image:src" content="https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNcaYIQrkxN20Mc_HDiO1OdqezS--w6zIqQe2GbBsjMmIr23sK0uR284bcfMl6MJJuo7JN7oGzIT-k8iCAuiOivBpW_FdHt0Mq-s7aKwQyXN-V1Ye7IfJZjTlOSkxiSekREiZl3j1DSy5bXA-KblSllBRzaEhS5b_PRvEsUoaXCJpj0Kw/">
 - Title
 	<meta property="og:title" content="Sun and Salt"/>
 - Original Nat geo URL
 	<meta property="og:url" content="https://www.nationalgeographic.com/photography/photo-of-the-day/2019/01/vietnam-salt-abstract/"/>


 - Photographer (not possible)

*/