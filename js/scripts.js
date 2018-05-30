$(document).ready(function() {
  
	const grid = document.getElementById('#grid');
	const profile = document.getElementsByClassName('profile-container');

			//API call using AJAX and Loop for iteration
$.ajax({
	  url: 'https://randomuser.me/api/?results=12&&nat=us',
	  dataType: 'json',
	  success: function(data) {
		  console.log(data.results);
	for (let i = 0; i < data.results.length; i++) {
						//Template Literal For User Profile 	
const $profileHTML = $(`
	<div class="profile grid-container">
		<div class="profile-container" data-toggle="modal" data-target="#modal${i}"> 
			<div clas="text-container">
				<img class="profile-pic" src="${data.results[i].picture.large}" alt="profile picture">
				<h4 class="card-text-name">${data.results[i].name.first} ${data.results[i].name.last}</h4>
				<p class="card-text-email">${data.results[i].email}</p>
				<p class="card-text-location">${data.results[i].location.city}, ${data.results[i].location.state}</p>
			</div>
		</div>
	</div>
`)
									//Template Literal For modal
const $modalHTML = $(`
<div class="modal" id="modal${i}" tabindex="-1" role="dialog" aria-labelledby="ModalWindow" aria-hidden="true"> 
		<div class="modal-dialog modal-lg modal-dialog-centered" >
			<div class="modal-content">
  				<div class="modal-header">
					<h4 id="name" class="card-text-name">${data.results[i].name.first} ${data.results[i].name.last}</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					 <span aria-hidden="true">&times;</span>
        		</button>
      		</div>
			<div class="modal-body modal-top ">
					<img class="profile-pic-modal mb-4" src="${data.results[i].picture.large}" alt="profile picture">
					<p class="card-text-email">${data.results[i].email}</p>
					<p id="username" class="">${data.results[i].login.username}</p>
				<div></div>
			</div>
			<div class="modal-body ">
					<p class="card-text-location">${data.results[i].cell}</p>
					<p class="card-text-location">${data.results[i].location.street} ${data.results[i].location.city} ${data.results[i].location.state} ${data.results[i].location.postcode}</p>
					<p class="card-text-location">${data.results[i].dob}</p>
			</div> 
				<div class="modal-footer">
				<button type="button" id="prev" class="btn btn-secondary mr-auto" data-dismiss="modal" data-toggle="modal" data-target="#modal${i - 1}">Prev</button>
				<button type="button" id="next" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#modal${i + 1}">Next</button>
     		<div>
		</div>
	</div>
</div>
`)
	 $("#grid").append($profileHTML);
	 $("#modal-section").append($modalHTML);
	}
  }
}); //End Ajax Get Data
	
	//Ran out of time to finish this section
//		const $searchSection = $(`<form class="ml-auto" id="search-emp"><input id = "search-criteria" type="text" placeholder="Search for employee..."></input></form>`)
//			Append search section
//	$('#search-div').append($searchSection);
	//Search Function
//	$('#search-emp').keyup(function(){
//	
//		let $searchTerm = $('#search-emp').val().toLocaleLowerCase();
//		
//		let match = false;
//		
//		$('.nomatch').remove();
//		
//		for (let i = 0; i < $("#grid").children().length; i++) {
//			let $name = $("#name").eq(i).text();
//            let $username = $("#username").eq(i).text();
//			
//			if ($name.toLowerCase().includes($searchTerm) || $username.includes($searchTerm)){
//                match = true;
//                $("#name").eq(i).closest(".profile").addClass("true");
//            } else {
//			 	$("#name").eq(i).closest(".profile").removeClass("true");
//			}
//	  if (match === true) {
//            // hides elements that do not match search term
//            $("#grid .profile").not(".true").show();
//        }
//			if (match === false) {
//            // hides elements that do not match search term
//            $("#grid .profile").not(".true").hide();
//        }
//	} 
//		
//	
//	});
	
});//End Ready


